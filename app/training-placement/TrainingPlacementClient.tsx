'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Plane,
    Building2,
    Users,
    Radio,
    Cpu,
    Briefcase,
    BookOpen,
    Trophy,
    ChevronDown,
    ChevronRight,
    MapPin,
    CheckCircle,
    Globe,
    Wrench,
    Factory,
    GraduationCap,
    Download,
    Phone,
    Youtube,
    Award, Shield, Scale, Star, Camera, Calendar, ArrowRight
} from 'lucide-react';

import { useEnquiry } from '@/app/context/EnquiryContext';

export default function TrainingPlacementClient() {
    const router = useRouter();

    // --- Configuration ---
    // We use inline styles for the specific LAB color to ensure exact matching
    const brandColor = { backgroundColor: 'lab(26.1542% 15.7545 -51.5504)' };
    const brandTextColor = { color: 'lab(26.1542% 15.7545 -51.5504)' };
    const { openModal } = useEnquiry();
    // --- Content Data ---
    const achievements = [
        {
            title: "Political Recognition",
            icon: <Award className="w-8 h-8 text-yellow-500" />,
            description: "Acknowledged by national leaders for contribution to youth empowerment.",
            image: "/images/Minister John Barla.png",
            points: [
                "Member of Parliament & Minister John Barla: Praised international employment opportunities.",
                "MLA Selva Perundhagai: Unveiled training aircraft, celebrating hands-on aviation training.",
                "DMK & BJP Leaders: Recognized initiatives in skill development and nation-building."
            ]
        },
        {
            title: "Social & Community Impact",
            icon: <Users className="w-8 h-8 text-yellow-500" />,
            description: "Fostering social responsibility through community engagement.",
            image: "/images/social-1.jpg",
            points: [
                "Esteemed social workers visited campus to appreciate child welfare programs.",
                "Motivational sessions inspiring students toward ethical leadership.",
                "Active student participation in community development drives."
            ]
        },
        {
            title: "Defense & Armed Forces",
            icon: <Shield className="w-8 h-8 text-yellow-500" />,
            description: "Instilling discipline and patriotism through interactions with defense personnel.",
            image: "/images/Defense Armed Forces.png",
            points: [
                "Senior Army Officers delivered keynotes on discipline and leadership.",
                "Direct interactions providing professional excellence inspiration.",
                "Seminars on national security and the role of aviation."
            ]
        },
        {
            title: "Civil Services Interaction",
            icon: <Scale className="w-8 h-8 text-yellow-500" />,
            description: "Guidance from IPS & IAS officers on governance and civic duty.",
            image: "/images/Interaction.png",
            points: [
                "Officers visited to guide students on leadership and governance.",
                "Motivating students to pursue careers contributing to national development.",
                "Workshops on ethics in public service."
            ]
        }
    ];

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const sections = [
        { id: 'about', label: 'Department Overview' },
        { id: 'aircraft', label: 'Aircraft Training' },
        { id: 'airport', label: 'Airport Training' },
        { id: 'atc', label: 'ATC & Comm. Training' },
        { id: 'labs', label: 'Aviation Labs' },
        { id: 'visits', label: 'Industrial Visits' },
        { id: 'placement', label: 'Placement Support' },
        { id: 'govt-exams', label: 'Govt. Exam Support' },
        { id: 'why-choose', label: 'Why Choose Us?' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            {/* Hero Section */}
            <div className="bg-[#003366] text-white py-12 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    {/* <Image
                        src="https://images.unsplash.com/photo-1542296332-2e44a996aa0d?q=80&w=2000&auto=format&fit=crop"
                        alt="Aviation Background"
                        fill
                        className="object-cover"
                    /> */}
                </div>
                <div className="container-custom relative z-10">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-4">Training & Placement</h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
                        Building Future-Ready Aviation Professionals through world-class training, industrial exposure, and global career support.
                    </p>
                </div>
            </div>


            <div className="container-custom py-10 flex flex-col lg:flex-row gap-8">

                {/* Left Sidebar - Responsive */}
                <aside className="lg:w-1/4 h-fit lg:sticky lg:top-4 z-10 text-sm">
                    <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-6">
                        {/* Mobile Toggle Header */}
                        <div
                            className="bg-[#003366] text-white p-3 font-bold uppercase text-sm tracking-wide flex justify-between items-center cursor-pointer lg:cursor-default"
                            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
                        >
                            <span>Quick Navigation</span>
                            <ChevronDown size={16} className={`lg:hidden transition-transform ${isMobileNavOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Navigation Links - Collapsible on Mobile */}
                        <nav className={`flex-col divide-y divide-gray-200 ${isMobileNavOpen ? 'flex' : 'hidden'} lg:flex`}>
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={() => setMobileNavOpen(false)}
                                    className="p-3 hover:bg-gray-50 text-gray-700 hover:text-[#003366] hover:pl-4 transition-all duration-200 flex items-center justify-between group font-medium"
                                >
                                    {section.label}
                                    <ChevronRight size={14} className="text-gray-300 group-hover:text-[#D4AF37]" />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Widget */}
                    <div className="bg-[#f8f9fa] border border-gray-300 rounded-sm p-4 shadow-sm">
                        <h4 className="font-bold text-[#003366] border-b border-gray-300 pb-2 mb-3">Placement Enquiry</h4>
                        <div className="space-y-2 text-xs text-gray-700">
                            <p className="flex items-center gap-2"><Phone size={14} className="text-[#D4AF37]" /> +91 98949 25233, +91 98949 59200</p>
                            <p className="flex items-center gap-2"><Briefcase size={14} className="text-[#D4AF37]" /> placement@kricollege.edu.in</p>
                            <button
                                onClick={() => router.push('/contact')}
                                className="w-full mt-3 bg-[#D4AF37] text-[#003366] font-bold py-2 uppercase text-xs rounded-sm hover:bg-yellow-500 transition-colors"
                            >
                                Contact Placement Cell
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="lg:w-3/4 space-y-12 bg-white p-4 md:p-10 border border-gray-200 shadow-sm rounded-sm">

                    {/* About Dept */}
                    <section id="about" className="scroll-mt-24">
                        <Image
                            src="/images/Infrastructure.jpeg"
                            alt="Training & Placement Infrastructure at KRI College"
                            width={1200}
                            height={500}
                            className="w-full h-[220px] md:h-[320px] object-cover"
                            priority
                        />


                        <h2 className="text-2xl font-serif font-bold text-[#003366] border-b-2 border-[#D4AF37] inline-block pt-4 mb-6 pb-1">
                            Training & Placement Department
                        </h2>
                        <div className="prose max-w-none text-justify text-gray-800 text-sm leading-7">
                            <p className="mb-4">
                                At <strong className="text-[#003366]">King Rashid International College of Aeronautics (KRI College)</strong>, our Training & Placement Cell is dedicated to empowering students with world-class aviation training and global career support.
                            </p>
                            <p>
                                With hands-on aircraft training, advanced aviation labs, industrial visits, and comprehensive exam preparation, we ensure every student is future-ready for the aviation industry. Our curriculum bridges the gap between academic learning and industry requirements.
                            </p>
                        </div>
                    </section>

                    {/* Aircraft Training */}
                    <section id="aircraft" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4 flex items-center gap-2">
                            <Plane size={24} className="text-[#D4AF37]" /> In-Depth Aircraft Training
                        </h2>
                        <p className="text-sm text-gray-700 mb-6 text-justify leading-7">
                            KRI College provides unmatched real aircraft exposure through specialized hands-on sessions. Students gain deep understanding of aircraft structures, systems, engines, avionics, and operational procedures.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Learjet Aircraft Training",
                                "Bonanza Aircraft Training",
                                "Helicopter Training",
                                "Aeronca Sedan Aircraft Training",
                                "Fokker Friendship Aircraft Training"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 border-l-4 border-[#003366] hover:bg-white hover:shadow-sm transition-all">
                                    <CheckCircle size={18} className="text-[#D4AF37]" />
                                    <span className="font-bold text-[#003366] text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="mt-6 flex justify-start">
                        <a
                            href="https://www.youtube.com/@kricollege"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wide
               bg-[#D4AF37] text-[#003366] hover:bg-[#003366] hover:text-white
               transition-colors duration-300"
                        >
                            <Youtube size={18} />
                            Visit Our YouTube Channel
                        </a>
                    </div>

                    {/* Airport Training */}
                    <section id="airport" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4 flex items-center gap-2">
                            <Globe size={24} className="text-[#D4AF37]" /> International Airport Practical Training
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/2">
                                <p className="text-sm text-gray-700 mb-4 text-justify leading-7">
                                    Our students receive high-level training directly inside international airports. This real-world training helps students understand the dynamic environment of global airports.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Airport Terminal Operations",
                                        "Airside & Landside Procedures",
                                        "Airline Check-in & Boarding",
                                        "Ground Handling Techniques",
                                        "Cargo & Baggage Management",
                                        "Ramp Safety & Airport Security",
                                        "Aircraft Turnaround Operations"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-700">
                                            <div className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full mt-2 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2">
                                <div className="relative h-64 w-full bg-gray-200 rounded-sm overflow-hidden shadow-md">
                                    <Image
                                        src="/images/Opportunities.jpg"
                                        alt="Airport Operations"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ATC Training */}
                    <section id="atc" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4 flex items-center gap-2">
                            <Radio size={24} className="text-[#D4AF37]" /> ATC & Aviation Communication
                        </h2>
                        <div className="bg-[#f8fbff] border border-blue-100 p-6 rounded-sm">
                            <p className="text-sm text-gray-700 mb-6 text-justify leading-7">
                                KRI College provides specialized modules in communication protocols followed worldwide between pilots and air traffic controllers.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "Air Traffic Control (ATC) Basics",
                                    "Airport Radio Lab Training",
                                    "Aviation Comm. Systems (R/T)",
                                    "Navigation & Surveillance",
                                    "Antenna Training"
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-4 border border-gray-200 text-center shadow-sm">
                                        <h4 className="font-bold text-[#003366] text-xs uppercase">{item}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Labs */}
                    {/* <section id="labs" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Advanced Aviation Labs</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Aircraft Engine Lab", icon: Wrench, desc: "Hands-on with piston and jet engines." },
                                { title: "Antenna & Radio Lab", icon: Radio, desc: "Communication and navigation systems." },
                                { title: "Avionics & Electrical Lab", icon: Cpu, desc: "Aircraft electrical systems and instruments." },
                                { title: "Drone Mfg. & Assembly", icon: Plane, desc: "UAV design, assembly and testing." },
                                { title: "Tools & Maintenance", icon: Wrench, desc: " specialized aircraft tools training." },
                            ].map((lab, i) => (
                                <div key={i} className="flex gap-4 p-4 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all group">
                                    <div className="text-[#003366] mt-1 group-hover:text-[#D4AF37] transition-colors"><lab.icon size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-sm mb-1">{lab.title}</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">{lab.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section> */}

                    {/* Industrial Visits */}
                    <section id="visits" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4 flex items-center gap-2">
                            <Factory size={24} className="text-[#D4AF37]" /> Industrial Visits & Exposure
                        </h2>
                        <div className="relative h-48 md:h-64 mb-6 rounded-sm overflow-hidden">
                            <Image
                                src="/images/training-atc.jpg"
                                alt="Industrial Visit"
                                width={1000}
                                height={400}
                                className="object-cover w-[100%] h-[400px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 to-transparent flex flex-col justify-end p-6">
                                <p className="text-white text-sm font-medium">Building confidence and practical industry awareness through regular visits.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {[
                                "Major International Airports",
                                "Airline Operational Centers",
                                "MRO Facilities",
                                "Aviation Manufacturing Units",
                                "Hangars & Maintenance Stations"
                            ].map((val, idx) => (
                                <span key={idx} className="px-3 py-1 bg-[#003366] text-white text-xs font-bold uppercase rounded-full shadow-sm">
                                    {val}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Placement Support */}
                    <section id="placement" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Global Placement Support</h2>
                        <p className="text-sm text-gray-700 mb-6 border-l-4 border-[#D4AF37] pl-4 italic">
                            &quot;Your Aviation Career Starts Here. We support students in securing jobs in International Airlines, Airports, and MROs.&quot;
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-5">
                            {/* Airlines */}
                            <div className="border-t-4 border-[#003366] p-5 bg-white shadow-sm">
                                <Plane size={24} className="text-[#D4AF37] mb-3" />
                                <h4 className="font-bold text-[#003366] text-sm mb-3 uppercase">International Airlines</h4>
                                <ul className="space-y-2 text-xs text-gray-600">
                                    <li>Cabin Crew</li>
                                    <li>Ground Staff</li>
                                    <li>Customer Service Agents</li>
                                    <li>Flight Dispatch & Ops</li>
                                    <li>Security & Safety Officers</li>
                                    <li>Cargo Executives</li>
                                </ul>
                            </div>

                            {/* Airports */}
                            <div className="border-t-4 border-[#D4AF37] p-5 bg-white shadow-sm">
                                <Building2 size={24} className="text-[#003366] mb-3" />
                                <h4 className="font-bold text-[#003366] text-sm mb-3 uppercase">International Airports</h4>
                                <ul className="space-y-2 text-xs text-gray-600">
                                    <li>Airport Operations</li>
                                    <li>Ramp & Technical Support</li>
                                    <li>Terminal Management</li>
                                    <li>Check-in & Boarding</li>
                                    <li>Safety & Fire Support</li>
                                </ul>
                            </div>

                            {/* MRO */}
                            <div className="border-t-4 border-[#003366] p-5 bg-white shadow-sm">
                                <Wrench size={24} className="text-[#D4AF37] mb-3" />
                                <h4 className="font-bold text-[#003366] text-sm mb-3 uppercase">MRO & Companies</h4>
                                <ul className="space-y-2 text-xs text-gray-600">
                                    <li>Aircraft Maintenance Firms</li>
                                    <li>Aviation Safety Firms</li>
                                    <li>Drone Tech Companies</li>
                                    <li>Training Institutes</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="placement" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Our Top Placement</h2>

                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[

                                    {
                                        title: "ISHA PRIYADHARSHINI.S",
                                        image: "/images/gallery4.jpg"
                                    },
                                    {
                                        title: "AMJATH HUSSAIN.jpg",
                                        image: "/images/AMJATH HUSSAIN.jpg"
                                    },
                                    {
                                        title: "SANJAY KUMAR.V",
                                        image: "/images/SANJAY KUMAR.V.png"
                                    },
                                    {
                                        title: "JAMMUNA",
                                        image: "/images/JAMMUNA.png"
                                    },
                                    {
                                        title: "PRAKASH",
                                        image: "/images/PRAKASH.png"
                                    },
                                    {
                                        title: "SWETHA.S",
                                        image: "/images/SWETHA.S.png"
                                    },
                                    {
                                        title: "MUSTHAFA KAMAL BATCHA.A",
                                        image: "/images/gallery1.jpg"
                                    },


                                    {
                                        title: "ATCHAYA.S",
                                        image: "/images/ATCHAYA.S.png"
                                    },
                                    {
                                        title: "RITHIKA",
                                        image: "/images/RITHIKA.png"
                                    },
                                    {
                                        title: "SHERIFF.A",
                                        image: "/images/SHERIFF.A.png"
                                    },
                                    {
                                        title: "ESWAR. M.R",
                                        image: "/images/ESWAR. M.R.png"
                                    },
                                    {
                                        title: "ROSHAN.J",
                                        image: "/images/ROSHAN.J.png"
                                    },
                                    {
                                        title: "SWETHA.S",
                                        image: "/images/MOHAMED ARSADH.png"
                                    },
                                    {
                                        title: "AMEER ATHIFF.A",
                                        image: "/images/AMEER ATHIFF.A.png"
                                    },



                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
                                        {item.image && (
                                            <img src={encodeURI(item.image)} alt={item.title} className="w-full h-80 object-cover" />
                                        )}
                                        <div className="p-2 flex justify-center">
                                            <h3 style={brandTextColor} className="text-lg font-bold mb-2 text-center">{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Govt Exam Support */}
                    <section id="govt-exams" className="scroll-mt-24">
                        <div className="bg-[#003366] text-white p-6 md:p-8 rounded-sm shadow-sm relative overflow-hidden">
                            <div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10">
                                <BookOpen size={200} />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-xl font-serif font-bold text-[#D4AF37] mb-4">Aviation Government Exam Support</h2>
                                <p className="text-sm text-gray-200 mb-6 max-w-2xl">
                                    We provide expert training for major aviation government exams to help students secure prestigious government jobs.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold">
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#D4AF37]" /> Airport Authority of India (AAI) Exams</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#D4AF37]" /> Air Traffic Control (ATC) Exams</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#D4AF37]" /> SSC Aviation & Airport Departments</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#D4AF37]" /> DGCA AME Paper Exams</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#D4AF37]" /> CPL Ground Classes & DGCA Prep</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#D4AF37]" /> Aviation Fitness & Psychometric Training</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose */}
                    <section id="why-choose" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Why Choose KRI for Training?</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                "Real aircraft training on multiple models",
                                "International airport practical exposure",
                                "Advanced aviation labs & drone training",
                                "Expert coaching for govt. exams",
                                "Dedicated placement support globally",
                                "Industry-focused curriculum & grooming"
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 p-3 bg-gray-50 border border-gray-200">
                                    <Trophy size={18} className="text-[#D4AF37] shrink-0" />
                                    <span className="text-xs text-gray-700 font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="bg-gray-50 border border-gray-200 p-8 text-center">
                        <h2 className="text-2xl font-serif font-bold text-[#003366] mb-2">Start Your Aviation Career</h2>
                        <p className="text-sm text-gray-600 mb-6">Take the first step toward a global aviation career with KRI College.</p>
                        <div className="flex justify-center gap-4">
                            <div className="flex justify-center gap-4">

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
                                    Apply Now – Admissions Open
                                </button>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
