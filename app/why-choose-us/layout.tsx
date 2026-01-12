import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Choose Us',
    description: 'Discover why KRI College is the premier choice for aviation education.',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
