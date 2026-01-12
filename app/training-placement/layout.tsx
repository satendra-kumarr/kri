import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Training & Placements',
    description: 'Explore our comprehensive aviation training programs, industrial visits, and global placement support.',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
