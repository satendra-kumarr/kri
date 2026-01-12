import { Metadata } from 'next';
import CoursesClient from './CoursesClient';

export const metadata: Metadata = {
    title: "Aviation Courses in Madurai | B.Sc Aviation, AME, Pilot Training | KRI",
    description: "Explore our top aviation programs: B.Sc Aviation, Aircraft Maintenance Engineering (AME), BBA Airline Management, and Pilot Training (CPL) guidance. Approved by Alagappa University.",
    keywords: ["B.Sc Aviation", "Aircraft Maintenance Engineering", "AME", "Pilot Training", "CPL", "BBA Aviation", "Aviation Courses Madurai", "Diploma in Airport Management", "Cabin Crew Training"],
    openGraph: {
        title: "Aviation Courses Offered | KRI College of Aeronautics",
        description: "Join the best aviation college in Madurai. Offering B.Sc Aviation, AME, BBA Airline Management, and more. Secure your career in the sky.",
        images: [
            '/images/Opportunities.jpg',
            '/images/training-4.jpg',
            '/images/training-1.jpg',
            '/images/industry-training.jpg'
        ],
    }
};

export default function CoursesPage() {
    return <CoursesClient />;
}
