import { Metadata } from 'next';
import InstitutionClient from './InstitutionClient';

export const metadata: Metadata = {
    title: "Institution | KRI College of Aeronautics",
    description: "Learn about King Rashid International College - Our Mission, History, Leadership, and Approvals from Alagappa University and DGCA.",
    keywords: ["kri institution", "about kri college", "aviation college history", "kri leadership", "jaffer sheriff", "madurai aviation college"],
    openGraph: {
        title: "About KRI College of Aeronautics",
        description: "Discover our legacy of excellence in aviation education. Approved by Alagappa University and BSS.",
        images: ['/images/kri-front.jpeg'],
    }
};

export default function InstitutionPage() {
    return <InstitutionClient />;
}
