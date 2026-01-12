'use client';

import { useEnquiry } from '@/app/context/EnquiryContext';
import Image from 'next/image';
import Link from 'next/link';
import {
    Award, Globe, Users, BookOpen, TrendingUp, MapPin,
    Shield, Heart, Briefcase, GraduationCap, Layout,
    Zap, Monitor, Coffee, Home, UserCheck
} from 'lucide-react';

export default function WhyChooseUs() {
    const { openModal } = useEnquiry();

    const keyStrengths = [
        {
            title: "Globally Recognized Approvals",
            icon: <Award className="w-8 h-8 text-[#D4AF37]" />,
            description: "Approved by Alagappa University and certified under MSME & ISO standards. Authorized collaborations with DGCA institutions and Aerospace & Aviation Sector Skill Council (AASSC) ensure your qualifications are respected worldwide.",
            image: "/images/Globally.png"
        },
        {
            title: "Strong Industry Connections",
            icon: <Globe className="w-8 h-8 text-[#D4AF37]" />,
            description: "Benefit from our strategic tie-ups with leading domestic and international airlines. Our students gain invaluable hands-on experience through internships at major airports and aviation organizations.",
            image: "/images/industry-collaborations.png"
        },
        {
            title: "Experienced Leadership",
            icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
            description: "Founded by Er. K. Jaffer Sheriff, an Ex-Dubai Airports professional and Aircraft Engineer. Our leadership team is deeply committed to student discipline, career excellence, and holistic development.",
            image: "/images/Leadership.png"
        },
        {
            title: "Holistic Student Development",
            icon: <Heart className="w-8 h-8 text-[#D4AF37]" />,
            description: "We emphasize leadership, ethical values, and social responsibility. From women safety awareness to government scheme contributions, we mold socially responsible citizens.",
            image: "/images/Development.jpg"
        },
        {
            title: "Proven Placement Record",
            icon: <TrendingUp className="w-8 h-8 text-[#D4AF37]" />,
            description: "Over 500+ students successfully placed in domestic and international aviation roles. Our consistent track record is recognized by political leaders, defense officials, and social icons.",
            image: "/images/Placement.jpg"
        },
        {
            title: "Global Opportunities",
            icon: <MapPin className="w-8 h-8 text-[#D4AF37]" />,
            description: "We prepare you for the international stage with visa assistance and industry readiness programs, fulfilling our vision to empower youth and contribute to national development.",
            image: "/images/Opportunities.jpg"
        }
    ];

    const corePillars = [
        {
            title: "Academic Excellence",
            description: "We offer diverse programs in Airports, Airlines, MROs, and Private Aircrafts with a rigorous curriculum designed for industry relevance.",
            image: "/images/Academic.jpg"
        },
        {
            title: "Modern Infrastructure",
            description: "Experience learning in spacious classrooms, advanced laboratories, and a campus equipped with technological integrations for a smart learning environment.",
            image: "/images/Infrastructure.jpeg"
        },
        {
            title: "Training & Internships",
            description: "Real-world exposure is at our core. Regular industry visits, workshops, and intensive internships bridge the gap between theory and practice.",
            image: "/images/academic-leadership.jpg"
        },
        {
            title: "Vibrant Campus Life",
            description: "Beyond academics, engage in sports, cultural events, and student clubs that foster teamwork, leadership, and personal growth.",
            image: "/images/sports.jpg"
        },
        {
            title: "Career Support",
            description: "Our dedicated placement cell provides resume building, interview training, and career counseling to ensure you launch your career with confidence.",
            image: "/images/career.png"
        },
        {
            title: "Social Responsibility",
            description: "Participate in meaningful community outreach and sustainability initiatives, developing a strong sense of social commitment.",
            image: "/images/social.jpg"
        },
        {
            title: "Location: Madurai",
            description: "Immerse yourself in the rich cultural heritage of Madurai. Enjoy affordable living and excellent connectivity in one of India's oldest and most vibrant cities.",
            image: "/images/Infrastructure.jpeg"
        },
        {
            title: "Personalized Attention",
            description: "Benefit from a student-centric approach with smaller class sizes, ensuring individual mentorship and a supportive environment for your growth.",
            image: "/images/Attention.jpg"
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">

            {/* Hero Section */}
            <section className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
                        alt="KRI College Campus Life"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#003366]/80 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 container-custom px-4">
                    <span className="bg-[#D4AF37] text-[#003366] px-3 py-1 text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                        Excellence in Aviation
                    </span>
                    <h1 className="text-3xl lg:text-6xl font-serif font-bold mb-4 tracking-tight">Why Choose KRI?</h1>
                    <p className="text-sm lg:text-xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">At KRI College, we believe in bridging the gap between academic learning and real-world
                        experience. That&apos;s why we are proud to offer our students exclusive internship opportunities at
                        leading international airports.</p>
                    <p className="text-sm lg:text-xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Through this program, students gain first-hand exposure to airport operations, aviation
                        management, customer service, logistics, and international protocols — all within a fast-paced
                        global environment.
                    </p>
                </div>
            </section>



            {/* Section 1: The KRI Edge (6 Points) - Alternating Layout */}
            <section className="py-16 lg:py-24">
                <div className="container-custom px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl lg:text-4xl font-serif font-bold text-[#003366] mb-3">The KRI Advantage</h2>
                        <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Six pillars that define our commitment to your success and set us apart as a premier aviation institution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyStrengths.map((item, index) => (
                            <div key={index} className="group bg-white border border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                                <div className="h-48 relative overflow-hidden bg-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-[#003366] mb-3 font-serif lg:group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Core Pillars (8 Points) - Masonry/Bento Style */}
            <section className="py-16 lg:py-24 bg-[#003366] text-white">
                <div className="container-custom px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/20 pb-6">
                        <div className="max-w-2xl">
                            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 block">Holistic Education</span>
                            <h2 className="text-2xl lg:text-4xl font-serif font-bold">Campus Application & Life</h2>
                            <p className="mt-3 text-gray-300 font-light">
                                A comprehensive ecosystem designed to nurture professional skills, personal character, and academic brilliance.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <Link href="/courses" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">
                                Explore Programs <Globe size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {corePillars.map((pillar, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors p-6 rounded-none group hover:-translate-y-1 duration-300">
                                <div className="mb-4 overflow-hidden h-32 relative rounded-sm">
                                    <Image
                                        src={pillar.image}
                                        alt={pillar.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-[#D4AF37] mb-2 font-serif">{pillar.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 lg:py-24 bg-[#f8f9fa]">
                <div className="container-custom px-4 text-center">
                    <h2 className="text-2xl lg:text-4xl font-serif font-bold text-[#003366] mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm lg:text-base">
                        Join King Rashid International College and become part of a legacy of aviation excellence. Your future in the skies begins here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() =>
                                openModal({
                                    type: 'admission',
                                    course: ''
                                })
                            }
                            className="bg-[#003366] text-white px-8 py-3 lg:px-10 lg:py-4 text-sm font-bold uppercase tracking-widest
                           hover:bg-[#D4AF37] hover:text-[#003366] transition-colors shadow-lg"
                        >
                            Apply Now
                        </button>
                        <Link href="/contact" className="bg-white text-[#003366] border border-[#003366] px-8 py-3 lg:px-10 lg:py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">
                            Contact Admissions
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
