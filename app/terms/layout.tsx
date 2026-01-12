import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: 'Terms and Conditions of KRI College.',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
