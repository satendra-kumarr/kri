//app\contact\layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with KRI College for admissions, campus visits, or general inquiries.',
};

export default function Layout({
    children,

}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
