import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact KRI College | Admissions & Enquiry | Madurai Aviation College",
    description: "Get in touch with KRI College of Aeronautics, Madurai. Contact us for admissions, course details, or campus visits. Phone: +91 98949 25233.",
    keywords: ["Contact KRI College", "Aviation College Admission", "KRI College Phone Number", "KRI College Address", "Madurai Aviation Enquiry", "Aviation College Contact"],
    openGraph: {
        title: "Contact King Rashid International College",
        description: "Admissions open. Get directions, email us, or call for expert counseling.",
        images: [
            '/images/kri-front.jpeg',
            '/images/location.jpg'
        ],
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
