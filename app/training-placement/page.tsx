import { Metadata } from 'next';
import TrainingPlacementClient from './TrainingPlacementClient';

export const metadata: Metadata = {
    title: "Aviation Training & Placement | Airport Internships, Job Support | KRI",
    description: "KRI College offers world-class aviation training with real aircraft exposure, airport internships, and 100% placement assistance in airlines and MROs.",
    keywords: ["Aviation Placement", "Airport Training", "Airline Internships", "Aviation Jobs", "Pilot Training Support", "AME Placement", "Ground Staff Jobs", "Aviation Career"],
    openGraph: {
        title: "Training & Placement Cell | KRI College of Aeronautics",
        description: "Building future-ready aviation professionals with industrial visits, airport training, and global career support.",
        images: ['/images/Infrastructure.jpeg'],
    }
};

export default function TrainingPlacementPage() {
    return <TrainingPlacementClient />;
}
