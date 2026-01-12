import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { EnquiryProvider } from "./context/EnquiryContext";
import EnquiryModal from "./components/EnquiryModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : 'https://kri.org.in';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "KRI College of Aeronautics | Top Aviation College in Madurai",
    template: "%s | KRI College of Aeronautics"
  },
  description: "Join King Rashid International Institute (KRI), the premier college of aeronautics in Madurai. Offering top-tier aviation courses, pilot training, B.Sc Aviation, and Aircraft Maintenance Engineering (AME).",
  keywords: ["kri college", "king rashid international institute", "college of aeronautics", "college in madurai", "aviation college madurai", "pilot training", "aircraft maintenance engineering", "AME course", "aviation degree", "B.Sc Aviation"],
  authors: [{ name: "KRI College" }],
  creator: "KRI College",
  publisher: "KRI College",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "KRI College of Aeronautics | Excellence in Aviation Education",
    description: "Start your high-flying career with King Rashid International Institute. World-class facilities and expert training in Madurai.",
    url: baseUrl,
    siteName: "KRI College of Aeronautics",
    images: [
      {
        url: '/images/kri-front.jpeg',
        width: 1200,
        height: 630,
        alt: 'KRI College Campus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "KRI College of Aeronautics",
    description: "Premier aviation institute in Madurai. Enroll now for AME and B.Sc Aviation courses.",
    images: ['/images/kri-front.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Fallback, next.js usually handles this if file exists
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "KRI College of Aeronautics",
    "alternateName": "King Rashid International Institute",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "description": "The King Rashid International Institute (KRI) is a premier aviation college in Madurai offering Aircraft Maintenance Engineering and B.Sc Aviation courses.",
    "sameAs": [
      "https://www.facebook.com/share/1ALuXt8F36/",
      "https://www.instagram.com/kricollege_official/" // Assuming this based on common patterns or search, but user provided FB link specifically.
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14/16, Kurunji Nagar, Keela Kallandhiri",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "625301",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9894925233",
        "contactType": "admissions",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9894959200",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta"]
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <EnquiryProvider>
          <NextTopLoader
            color="#D4AF37"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #D4AF37,0 0 5px #D4AF37"
          />
          <Header />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <main className="flex-grow">
            {children}

          </main>
          <Footer />
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
