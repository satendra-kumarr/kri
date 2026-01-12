import { Metadata } from 'next';
import PressReleaseClient from './PressReleaseClient';

export const metadata: Metadata = {
    title: "Press Releases & News | KRI College in Media",
    description: "Latest news, awards, and media coverage of KRI College of Aeronautics. Read about our achievements, events, and aviation insights.",
    keywords: ["KRI News", "Aviation College Press Release", "KRI Media Coverage", "College Awards News", "Aviation Education News", "Student Achievements"],
    openGraph: {
        title: "KRI College Press & Media",
        description: "Celebrating our milestones and student success stories as featured in top publications.",
        images: ['/images/kri-front.jpeg'], // Using a default existing image
    }
};

export default function PressReleasePage() {
    return <PressReleaseClient />;
}
