import { Metadata } from 'next';
import AchievementsClient from './AchievementsClient';

export const metadata: Metadata = {
  title: "Achievements & Accolades | KRI College of Aeronautics",
  description: "Discover the awards, political recognition, and community impact of KRI College. Honored by leaders and organizations for excellence in aviation education.",
  keywords: ["KRI Achievements", "Aviation Awards", "College Accolades", "Educational Recognition", "Aviation Excellence"],
  openGraph: {
    title: "KRI College Achievements - Recognized Excellence",
    description: "From national awards to community impact, explore KRI College of Aeronautics' journey of excellence.",
    images: [
      '/images/Minister John Barla.png',
      '/images/Dr. K. Tamilisai Soundararajan.PNG',
      '/images/Malaysian Dignitaries.PNG'
    ],
  }
};

export default function AchievementsPage() {
  return <AchievementsClient />;
}
