//app\contact\layout.tsx
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with KRI College for admissions, campus visits, or general inquiries.',
};

export default function Layout({
    children,

}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 4000,
                style: {
                    fontSize: '14px',
                },
            }}
        /></>;
}
