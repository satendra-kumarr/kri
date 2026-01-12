import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Courses Offered',
    description: 'Explore Degree, Diploma, and License courses in Aviation Management, Aircraft Maintenance, and Pilot Training.',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
