import { Metadata } from 'next';
import FleetClient from './FleetClient';

export const metadata: Metadata = {
    title: "Our Aircraft Fleet | Training Aircrafts at KRI College",
    description: "Explore our diverse training fleet including Aeronca 15Ac Sedan, Cessna 210 Centurion. Use hands-on flying training with the best aviation college in Madurai.",
    keywords: ["Aviation Fleet", "Training Aircraft", "Aeronca Sedan", "Cessna 210", "Pilot Training Plane", "Flight Training Madurai", "KRI Fleet", "Flight Simulator"],
    openGraph: {
        title: "KRI College Training Fleet",
        description: "State-of-the-art aircraft for world-class pilot training. View our fleet and simulator facilities.",
        images: ['/images/sedan-2.jpg'],
    }
};

export default function FleetPage() {
    return <FleetClient />;
}
