import About from "./components/About";
import Academics from "./components/Academics";
import Fleet from "./components/Fleet";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FounderMessage from "./components/FounderMessage";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Stats from "./components/Stats";
import AdmissionSteps from "./components/AdmissionSteps";
import Recruiters from "./components/Recruiters";


import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KRI College of Aeronautics | Top Aviation Institute in Madurai',
    description: 'Join King Rashid International Institute (KRI), the premier aviation college in Madurai offering Pilot Training, AME, and B.Sc Aviation courses with 100% placement support.',
    keywords: ["KRI College", "Aviation College Madurai", "Pilot Training", "Aircraft Maintenance Engineering", "AME Course", "B.Sc Aviation", "Best Aviation Institute Tamil Nadu"],
    openGraph: {
        title: "KRI College of Aeronautics | Excellence in Aviation Education",
        description: "Admissions Open! Start your high-flying career with world-class facilities and expert training at KRI College, Madurai.",
        images: ['/images/kri-front.jpeg'],
    }
};

export default function Home() {
    return (
        <div className="flex flex-col bg-white font-sans">

            {/* Hero Section - Pure Visual (Video) */}
            <div className="w-full relative bg-black overflow-hidden">
                {/* Mobile: Taller aspect ratio for better feeling */}
                <div className="w-full h-[350px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/8hz4v8aEkl8?autoplay=1&mute=1&controls=0&loop=1&playlist=8hz4v8aEkl8&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3"
                        title="KRI College Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="w-full h-full object-cover pointer-events-none scale-[1.5] md:scale-125 opacity-80"
                    ></iframe>

                </div>
            </div>

            {/* Title Strip - Moved out of Hero for clarity */}
            <div className="bg-white py-6 px-4 text-center border-b border-gray-100 shadow-sm relative z-10 rounded-t-3xl md:-mt-6 mx-0">
                <h1 className="text-2xl md:text-5xl font-extrabold text-[#003366] uppercase tracking-tight mb-2 font-serif leading-tight">
                    KRI College of Aeronautics
                </h1>
                <p className="text-gray-600 font-medium text-xs md:text-base uppercase tracking-widest">
                    Madurai - Tamil Nadu/New Delhi
                </p>
                <div className="w-16 h-1 md:w-24 md:h-1 bg-[#D4AF37] mx-auto mt-3 md:mt-4"></div>
            </div>

            {/* Main Flow */}
            <About />
            <Stats />
            <Academics />
            <AdmissionSteps />
            <FounderMessage />
            <Gallery />
            <Fleet />
            <CTA />
            <Recruiters />
            <Testimonials />

            <div className="bg-gray-50 border-t border-b border-gray-200">
                <FAQ />
            </div>
        </div>
    );
}
