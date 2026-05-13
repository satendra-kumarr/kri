import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Fleet',
    description: 'Discover our training aircraft fleet including Aeronca Sedan 15AC and Cessna 172.',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
