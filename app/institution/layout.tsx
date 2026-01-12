import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Institution',
    description: 'Learn about KRI College\'s history, mission, leadership, and approvals.',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
