import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Press Releases',
    description: 'Documenting our journey of excellence through the lens of national and regional media.',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
