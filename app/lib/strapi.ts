export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://admin.kri.org.in';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Fetches data from Strapi with a fallback to local data.
 * @param endpoint The Strapi API endpoint (e.g., 'courses', 'testimonials')
 * @param fallbackData The local data to use if Strapi fetch fails or returns empty
 * @param transformFn Optional function to transform Strapi data to match your local structure
 */
export async function getStrapiData<T>(
    endpoint: string,
    fallbackData: T,
    transformFn?: (data: any) => T
): Promise<T> {
    try {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        if (STRAPI_TOKEN) {
            headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
        }

        const response = await fetch(`${STRAPI_URL}/api/${endpoint}?populate=*`, {
            headers,
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        if (!response.ok) {
            if (response.status === 404) {
                console.warn(`Strapi endpoint not found: ${endpoint}. Ensure the content type exists and is public.`);
            } else {
                console.warn(`Strapi fetch failed for ${endpoint}: ${response.statusText} (${response.status}). Using fallback data.`);
            }
            return fallbackData;
        }

        const json = await response.json();
        const data = json.data;

        if (data === undefined || data === null || (Array.isArray(data) && data.length === 0)) {
            console.log(`Strapi returned no data for ${endpoint}. Using fallback.`);
            return fallbackData;
        }

        // If a transform function is provided, use it to map Strapi's structure to your component's needs
        if (transformFn) {
            try {
                return transformFn(data);
            } catch (transformError) {
                console.error(`Transformation failed for ${endpoint}:`, transformError);
                return fallbackData;
            }
        }

        return data as T;
    } catch (error) {
        console.error(`Strapi error for ${endpoint}:`, error);
        return fallbackData;
    }
}

/**
 * Returns the full URL for a Strapi image.
 */
export function getStrapiImageUrl(url: string | undefined): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    // Ensure leading slash if needed
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${STRAPI_URL}${path}`;
}

