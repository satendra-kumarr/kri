import { Metadata } from 'next';
import CampaignClient from './CampaignClient';

export const metadata: Metadata = {
    title: "Social Campaigns & Events | KRI College Community Impact",
    description: "Explore our social awareness campaigns, student initiatives, and community development programs in Madurai. KRI College: Building socially responsible citizens.",
    keywords: ["KRI Campaigns", "Social Awareness Madurai", "Student Rally", "Community Service College", "Youth Development Events", "College Outreach"],
    openGraph: {
        title: "KRI College Social Initiatives",
        description: "Empowering youth through community service. See our latest campaigns and social impact.",
        images: ['/images/Campaing1.png'],
    }
};

export default function CampaignPage() {
    return <CampaignClient />;
}