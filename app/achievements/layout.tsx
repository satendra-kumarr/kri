import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Achievements & Accolades',
    description: 'Celebrating the recognition of KRI College by political leaders, social workers, and defense personnel.',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
