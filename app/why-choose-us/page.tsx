import { Metadata } from 'next';
import WhyChooseUsClient from './WhyChooseUsClient';

export const metadata: Metadata = {
    title: "Why Choose KRI College | Top Reasons for Aviation Education in Madurai",
    description: "Discover the KRI advantage: Global approvals, strong industry connections, experienced leadership, and 100% placement support for aviation careers.",
    keywords: ["Why Choose KRI", "Aviation College Benefits", "Aviation Career Madurai", "Pilot Training Advantages", "Aviation Placement Support", "Best Aviation College Tamil Nadu"],
    openGraph: {
        title: "Why Choose KRI College of Aeronautics?",
        description: "Join the best aviation college in South India. Recognized degrees, world-class placement, and hands-on training.",
        images: [
            '/images/Globally.png',
            '/images/Infrastructure.jpeg',
            '/images/Placement.jpg'
        ],
    }
};

export default function WhyChooseUsPage() {
    return <WhyChooseUsClient />;
}
