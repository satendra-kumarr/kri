import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
    title: "Photo Gallery | Life at KRI College of Aeronautics",
    description: "Explore our campus, training facilities, events, and student activities through our photo gallery. Witness the vibrant life at KRI College.",
    keywords: ["KRI Gallery", "Aviation College Photos", "Campus Photos", "Student Activities", "Aviation Training Photos", "Madurai College Gallery"],
    openGraph: {
        title: "KRI College Campus Gallery",
        description: "A visual journey through our campus, events, and aviation training facilities.",
        images: [
            '/images/gallery-1.jpg',
            '/images/gallery-2.jpg',
            '/images/training-3.jpg'
        ],
    }
};

export default function GalleryPage() {
    return <GalleryClient />;
}
