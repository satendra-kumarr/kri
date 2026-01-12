'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    BookOpen,
    GraduationCap,
    CheckCircle,
    ChevronRight,
    ChevronDown,
    Plane,
    Wrench,
    Briefcase,
    Award,
    Zap,
    HelpCircle,
    Phone,
    Download,
    ScrollText,
    User
} from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';


export default function CoursesClient() {
    // For active scroll highlighting
    const [activeSection, setActiveSection] = useState('ug-programs');
    const { openModal } = useEnquiry();
    const sections = [
        { id: 'ug-programs', label: 'UG Degrees' },
        { id: 'diploma', label: 'Diplomas' },
        { id: 'ame-cpl', label: 'AME/CPL' },
        { id: 'competitive', label: 'Govt Exams' },
        { id: 'why-choose', label: 'Why KRI' },
        { id: 'faq', label: 'FAQ' },
    ];

    // Scroll listener to update active tab
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for header

            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return (
        <div className="bg-gray-50 min-h-screen font-sans w-full overflow-x-hidden lg:overflow-visible">

            {/* ================= MOBILE STICKY NAVIGATION (Visible < lg) ================= */}
            <div className="lg:hidden sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
                <div className="flex overflow-x-auto no-scrollbar scroll-smooth py-3 px-2 gap-2">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                setActiveSection(section.id);
                            }}
                            className={`flex-shrink-0 px-4 py-1.5 text-xs font-bold uppercase rounded-full transition-all whitespace-nowrap border ${activeSection === section.id
                                ? 'bg-[#003366] text-white border-[#003366]'
                                : 'bg-white text-gray-600 border-gray-300 hover:border-[#003366]'
                                }`}
                        >
                            {section.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="container-custom py-6 lg:py-10 flex flex-col lg:flex-row gap-8 w-full">

                {/* ================= DESKTOP SIDEBAR (Visible >= lg) ================= */}
                <aside className="hidden lg:block lg:w-1/4 h-fit lg:sticky lg:top-4 z-10">
                    <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-6">
                        <div className="bg-[#003366] text-white p-4 font-bold uppercase text-sm tracking-wide">
                            Course Navigation
                        </div>
                        <nav className="flex flex-col divide-y divide-gray-200">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`p-3 text-sm font-medium transition-all flex justify-between items-center group ${activeSection === section.id
                                        ? 'bg-blue-50 text-[#003366] border-l-4 border-l-[#003366] pl-2'
                                        : 'text-gray-700 hover:bg-gray-50 hover:pl-4'
                                        }`}
                                >
                                    {section.label === 'UG Degrees' ? 'Undergraduate Programs' :
                                        section.label === 'Diplomas' ? 'Diploma & Certificates' :
                                            section.label === 'AME/CPL' ? 'DGCA Consultation' :
                                                section.label === 'Govt Exams' ? 'Competitive Training' :
                                                    section.label}
                                    <ChevronRight size={14} className="text-gray-300 group-hover:text-[#D4AF37]" />
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="bg-[#f8f9fa] border border-gray-300 rounded-sm p-4 shadow-sm">
                        <h4 className="font-bold text-[#003366] border-b border-gray-300 pb-2 mb-3">Admission Enquiry</h4>
                        <div className="space-y-2 text-xs text-gray-700">
                            <p><strong>Phone:</strong> +91 98949 25233, +91 98949 59200</p>
                            <p><strong>Email:</strong> admission@kricollege.edu.in</p>

                            <button
                                onClick={() =>
                                    openModal({
                                        type: 'admission',
                                        course: ''
                                    })
                                }
                                className="w-full mt-3 bg-[#D4AF37] text-[#003366] font-bold py-2 uppercase text-xs rounded-sm hover:bg-yellow-500 transition-colors">

                                Apply Now
                            </button>
                        </div>
                    </div>
                </aside>

                {/* ================= MAIN CONTENT ================= */}
                <main className="w-full lg:w-3/4 space-y-8 lg:space-y-12">

                    {/* Section: UG Programs */}
                    <section id="ug-programs" className="scroll-mt-36 lg:scroll-mt-24">
                        {/* Desktop Header for Section */}
                        {/* Desktop Header with Left Image */}
                        <div className="hidden lg:flex items-start gap-6 mb-6">
                            {/* Left Image */}
                            <div className="flex-shrink-0 w-1/3">
                                <Image
                                    src="/images/Opportunities.jpg"
                                    alt="Opportunities"
                                    width={300} // adjust width as needed
                                    height={200} // adjust height as needed
                                    className="rounded-lg object-cover"
                                />
                            </div>

                            {/* Right Text */}
                            <div className="flex-1">
                                <h2 className="text-2xl font-serif font-bold text-[#003366] border-b-2 border-[#D4AF37] inline-block mb-3 pb-1">
                                    Undergraduate Degree Programs
                                </h2>
                                <p className="text-sm text-gray-800 leading-7 text-justify">
                                    The following undergraduate programs are offered in collaboration with <strong>Alagappa University</strong> (A State University accredited with NAAC A++). These programs are designed to provide a strong academic foundation combined with practical industry training.
                                </p>
                            </div>
                        </div>


                        {/* Mobile Header (simplified) */}
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 bg-[#D4AF37]"></div>
                            <h2 className="text-xl font-serif font-bold text-[#003366] uppercase">
                                Undergraduate Programs
                                <span className="block text-[10px] font-sans font-medium text-gray-500 mt-1 normal-case">(Approved by Alagappa University)</span>
                            </h2>
                        </div>

                        {/* Content Wrapper */}
                        <div className="space-y-8 lg:space-y-8">

                            {/* Course 1: B.Sc Aviation */}
                            {/* DESKTOP VIEW: ACADEMIC TABLE STYLE WITH HIGHLIGHT CONTAINER */}
                            <div className="hidden lg:block bg-white border border-gray-200 shadow-sm p-6 border-l-4 border-l-[#003366] rounded-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#003366] mb-4 flex items-center gap-2">
                                    <Plane className="text-[#D4AF37]" size={24} /> B.Sc. Aviation
                                </h3>

                                {/* Course Info Table */}
                                <table className="w-full text-sm border-collapse border border-gray-300 mb-6 bg-gray-50">
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 w-1/4">Duration</td>
                                            <td className="p-3">3 Years (6 Semesters)</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l w-1/4">Eligibility</td>
                                            <td className="p-3">10+2 (Higher Secondary) with Physics, Chemistry & Math</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300">Affiliation</td>
                                            <td className="p-3">Alagappa University</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l">Mode</td>
                                            <td className="p-3">Full Time (Regular)</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="grid grid-cols-3 gap-8">
                                    <div className="col-span-2 text-justify text-sm text-gray-800 leading-7">
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-2 border-b border-gray-200 pb-1">Course Overview</h4>
                                        <p className="mb-4">
                                            The Bachelor of Science (B.Sc.) in Aviation is a comprehensive degree program that covers the operational, technical, and management aspects of the aviation industry. It is designed for students who aspire to become pilots, flight dispatchers, airport managers, or safety officers. The curriculum balances theoretical knowledge with practical simulations and airport visits.
                                        </p>
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-2 border-b border-gray-200 pb-1">Career Opportunities</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Airport Ground Operations Manager</li>
                                            <li>Flight Dispatcher (requires DGCA license)</li>
                                            <li>Aviation Safety & Security Officer</li>
                                            <li>Airline Customer Service Executive</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 h-fit shadow-inner">
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-3">Key Subjects</h4>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            {[
                                                "Aviation Science",
                                                "Air Navigation & Met.",
                                                "Aircraft Rules (DGCA)",
                                                "Airport Management",
                                                "Air Traffic Control",
                                                "Crew Resource Mgmt"
                                            ].map((sub, i) => (
                                                <li key={i} className="flex gap-2 items-start">
                                                    <ChevronRight size={14} className="text-[#D4AF37] mt-1 shrink-0" />
                                                    <span>{sub}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE VIEW: DOCUMENT STYLE MATCHING DESKTOP */}
                            <div className="lg:hidden bg-white border border-gray-200 shadow-sm p-4 border-l-4 border-l-[#003366] rounded-sm">

                                <h3 className="text-lg font-bold text-[#003366] mb-3 flex items-center gap-2">
                                    <Plane className="text-[#D4AF37]" size={20} /> B.Sc. Aviation
                                </h3>

                                {/* Mobile Mini-Table */}
                                <div className="text-xs border border-gray-200 rounded-sm mb-4">
                                    <div className="grid grid-cols-2 border-b border-gray-200">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Duration</div>
                                        <div className="p-2 text-gray-700">3 Years</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Eligibility</div>
                                        <div className="p-2 text-gray-700">10+2 (Phy, Che, Mat)</div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-800 mb-3 text-justify leading-relaxed">
                                    Comprehensive degree focusing on flight operations, airport management, and aviation safety. Ideal for ground staff & dispatch roles.
                                </p>

                                <div className="bg-gray-50 p-3 border border-gray-100">
                                    <h4 className="font-bold text-[#003366] text-xs uppercase mb-2">Key Modules</h4>
                                    <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                        <li>Aviation Science & Meteorology</li>
                                        <li>Airport Operations & Safety</li>
                                        <li>GDS Ticketing & Reservations</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Course 2: B.Sc AMS */}
                            {/* DESKTOP VIEW: ACADEMIC TABLE STYLE WITH HIGHLIGHT CONTAINER */}
                            <div className="hidden lg:block bg-white border border-gray-200 shadow-sm p-6 border-l-4 border-l-[#D4AF37] rounded-sm hover:shadow-md transition-shadow">
                                <div className="w-full h-[220px] bg-gray-100 border-b border-gray-200">
                                    <Image
                                        src="/images/training-3.jpg"
                                        alt="Aircraft Maintenance Training at KRI College"
                                        width={1200}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#003366] mb-4 flex items-center gap-2 pt-4">
                                    <Wrench className="text-[#D4AF37]" size={24} /> B.Sc. Aircraft Maintenance Science
                                </h3>

                                {/* Course Info Table */}
                                <table className="w-full text-sm border-collapse border border-gray-300 mb-6 bg-gray-50">
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 w-1/4">Duration</td>
                                            <td className="p-3">3 Years (6 Semesters)</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l w-1/4">Eligibility</td>
                                            <td className="p-3">10+2 with Physics, Chemistry & Math</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300">Affiliation</td>
                                            <td className="p-3">Alagappa University</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l">Stream</td>
                                            <td className="p-3">Engineering / Technical</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="grid grid-cols-3 gap-8">
                                    <div className="col-span-2 text-justify text-sm text-gray-800 leading-7">
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-2 border-b border-gray-200 pb-1">Course Overview</h4>
                                        <p className="mb-4">
                                            This specialized degree focuses on the engineering, maintenance, and airworthiness aspects of aircraft. It serves as a strong academic foundation for students pursuing DGCA Aircraft Maintenance Engineering (AME) licenses. The curriculum covers aerodynamics, propulsion, avionics, and materials science.
                                        </p>
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-2 border-b border-gray-200 pb-1">Career Opportunities</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Junior Technical Officer</li>
                                            <li>Maintenance Planning Engineer</li>
                                            <li>Technical Records Officer</li>
                                            <li>Quality Control Assistant (Aviation)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 h-fit shadow-inner">
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-3">Key Subjects</h4>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            {[
                                                "Aircraft Gen. Engg.",
                                                "Piston/Jet Engines",
                                                "Aircraft Structures",
                                                "Avionics Systems",
                                                "Material Science",
                                                "Industrial Safety"
                                            ].map((sub, i) => (
                                                <li key={i} className="flex gap-2 items-start">
                                                    <ChevronRight size={14} className="text-[#D4AF37] mt-1 shrink-0" />
                                                    <span>{sub}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE VIEW: DOCUMENT STYLE MATCHING DESKTOP */}
                            <div className="lg:hidden bg-white border border-gray-200 shadow-sm p-4 border-l-4 border-l-[#D4AF37] rounded-sm">
                                <h3 className="text-lg font-bold text-[#003366] mb-3 flex items-center gap-2">
                                    <Wrench className="text-[#D4AF37]" size={20} /> B.Sc. Aircraft Maintenance
                                </h3>

                                <div className="text-xs border border-gray-200 rounded-sm mb-4">
                                    <div className="grid grid-cols-2 border-b border-gray-200">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Duration</div>
                                        <div className="p-2 text-gray-700">3 Years</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Eligibility</div>
                                        <div className="p-2 text-gray-700">10+2 (PCM)</div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-800 mb-3 text-justify leading-relaxed">
                                    Technical degree covering aircraft structures, engines, and avionics. Strong foundation for DGCA AME licensing and MRO careers.
                                </p>

                                <div className="bg-gray-50 p-3 border border-gray-100">
                                    <h4 className="font-bold text-[#003366] text-xs uppercase mb-2">Key Modules</h4>
                                    <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                        <li>Piston & Jet Engine Tech</li>
                                        <li>Aircraft Structures & Materials</li>
                                        <li>Avionics & Electrical Systems</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Course 3: BBA */}
                            {/* DESKTOP VIEW: ACADEMIC TABLE STYLE WITH HIGHLIGHT CONTAINER */}
                            <div className="hidden lg:block bg-white border border-gray-200 shadow-sm p-6 border-l-4 border-l-[#003366] rounded-sm hover:shadow-md transition-shadow">
                                <div className="w-full h-[220px] bg-gray-100 border-b border-gray-200">
                                    <Image
                                        src="/images/training-4.jpg"
                                        alt="Aircraft Maintenance Training at KRI College"
                                        width={1200}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#003366] mb-4 flex items-center gap-2 pt-4">
                                    <Briefcase className="text-[#D4AF37]" size={24} /> BBA Airline & Airport Management
                                </h3>

                                <table className="w-full text-sm border-collapse border border-gray-300 mb-6 bg-gray-50">
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 w-1/4">Duration</td>
                                            <td className="p-3">3 Years (6 Semesters)</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l w-1/4">Eligibility</td>
                                            <td className="p-3">10+2 (Arts / Science / Commerce)</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300">Affiliation</td>
                                            <td className="p-3">Alagappa University</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l">Focus</td>
                                            <td className="p-3">Management / Business Admin</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="grid grid-cols-3 gap-8">
                                    <div className="col-span-2 text-justify text-sm text-gray-800 leading-7">
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-2 border-b border-gray-200 pb-1">Course Overview</h4>
                                        <p className="mb-4">
                                            The Bachelor of Business Administration (BBA) in Airline & Airport Management prepares students for the corporate and commercial side of the aviation industry. The course focuses on airport operations, airline marketing, human resources, logistics, and passenger handling services.
                                        </p>
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-2 border-b border-gray-200 pb-1">Career Opportunities</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Airport Terminal Manager</li>
                                            <li>Airline HR / Admin Executive</li>
                                            <li>Air Cargo & Logistics Manager</li>
                                            <li>Travel & Tourism Manager</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 h-fit shadow-inner">
                                        <h4 className="font-bold text-[#003366] text-sm uppercase mb-3">Key Subjects</h4>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            {[
                                                "Principles of Mgmt",
                                                "Airline Operations",
                                                "Airport Planning",
                                                "Aviation Law",
                                                "Cust. Relationship Mgmt",
                                                "Logistics & Cargo"
                                            ].map((sub, i) => (
                                                <li key={i} className="flex gap-2 items-start">
                                                    <ChevronRight size={14} className="text-[#D4AF37] mt-1 shrink-0" />
                                                    <span>{sub}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE VIEW: DOCUMENT STYLE MATCHING DESKTOP */}
                            <div className="lg:hidden bg-white border border-gray-200 shadow-sm p-4 border-l-4 border-l-[#003366] rounded-sm">
                                <h3 className="text-lg font-bold text-[#003366] mb-3 flex items-center gap-2">
                                    <Briefcase className="text-[#D4AF37]" size={20} /> BBA Airline Management
                                </h3>

                                <div className="text-xs border border-gray-200 rounded-sm mb-4">
                                    <div className="grid grid-cols-2 border-b border-gray-200">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Duration</div>
                                        <div className="p-2 text-gray-700">3 Years</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Eligibility</div>
                                        <div className="p-2 text-gray-700">10+2 (Any Stream)</div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-800 mb-3 text-justify leading-relaxed">
                                    Management-focused degree for leadership roles in airlines, airports, and logistics. Covers business, HR, terminal ops, and cargo.
                                </p>

                                <div className="bg-gray-50 p-3 border border-gray-100">
                                    <h4 className="font-bold text-[#003366] text-xs uppercase mb-2">Key Modules</h4>
                                    <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                        <li>Airline & Airport Mgmt</li>
                                        <li>Air Cargo & Logistics</li>
                                        <li>Customer Service Excellence</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Section: Diploma Programs */}
                    <section id="diploma" className="scroll-mt-36 lg:scroll-mt-24">
                        {/* Desktop Header */}
                        <div className="hidden lg:block mb-8">
                            <h2 className="text-2xl font-serif font-bold text-[#003366] border-b-2 border-[#D4AF37] inline-block mb-3 pb-1">
                                Diploma & Certificate Courses
                            </h2>
                            <p className="text-sm text-gray-800 leading-7 text-justify">
                                Short-term skill development programs approved by <strong>Bharat Sevak Samaj (BSS)</strong>. Ideal for quick entry into aviation workforce.
                            </p>
                        </div>

                        {/* Mobile Header (simplified) */}
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 bg-[#D4AF37]"></div>
                            <h2 className="text-xl font-serif font-bold text-[#003366] uppercase">
                                Diploma & Certificate Programs
                                <span className="block text-[10px] font-sans font-medium text-gray-500 mt-1 normal-case">(Approved by BSS)</span>
                            </h2>
                        </div>

                        <div className="space-y-8 lg:space-y-8">

                            {/* Diploma 1 Year */}
                            {/* DESKTOP VIEW: TABLE STYLE WITH HIGHLIGHT CONTAINER */}
                            <div className="hidden lg:block bg-white border border-gray-200 shadow-sm p-6 border-l-4 border-l-[#003366] rounded-sm">
                                <h3 className="text-xl font-bold text-[#003366] mb-4 flex items-center gap-2">
                                    <ScrollText className="text-[#D4AF37]" size={24} /> 1 Year Diploma Courses
                                </h3>

                                <table className="w-full text-sm border-collapse border border-gray-300 mb-6 bg-gray-50">
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 w-1/4">Duration</td>
                                            <td className="p-3">1 Year</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l w-1/4">Eligibility</td>
                                            <td className="p-3">10th Pass or 12th Pass or Diploma/Degree</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300">Certification</td>
                                            <td className="p-3">BSS (Bharat Sevak Samaj) National Certification</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l">Training</td>
                                            <td className="p-3">Classroom + Airport Visit</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="bg-white p-4 border border-gray-200">
                                    <h4 className="font-bold text-[#003366] text-sm uppercase mb-3 text-center border-b border-gray-200 pb-2">List of Available Diplomas</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "Diploma in Airline & Airport Management",
                                            "Diploma in Airport Ground Handling",
                                            "Diploma in Cabin Crew & In-Flight Services",
                                            "Diploma in Air Cargo Operations & Logistics",
                                            "Diploma in Aviation Hospitality",
                                            "Diploma in Aviation Security"
                                        ].map((course, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 border border-gray-100 bg-gray-50 hover:border-gray-300 transition-colors">
                                                <CheckCircle size={16} className="text-[#003366]" />
                                                <span className="text-sm font-bold text-gray-700">{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE VIEW: DOCUMENT STYLE MATCHING DESKTOP */}
                            <div className="lg:hidden bg-white border border-gray-200 shadow-sm p-4 border-l-4 border-l-[#003366] rounded-sm">
                                <h3 className="text-lg font-bold text-[#003366] mb-3 flex items-center gap-2">
                                    <ScrollText className="text-[#D4AF37]" size={20} /> 1 Year Diploma
                                </h3>

                                <div className="text-xs border border-gray-200 rounded-sm mb-4">
                                    <div className="grid grid-cols-2 border-b border-gray-200">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Duration</div>
                                        <div className="p-2 text-gray-700">1 Year</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Eligibility</div>
                                        <div className="p-2 text-gray-700">12th Pass</div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-800 mb-3 text-justify leading-relaxed">
                                    Specialized diploma for quick entry into aviation operations.
                                </p>

                                <div className="space-y-2 mt-4">
                                    {[
                                        "Airline & Airport Management",
                                        "Airport Ground Handling",
                                        "Cabin Crew & Services",
                                        "Air Cargo Operations"
                                    ].map((c, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                                            <CheckCircle size={12} className="text-[#003366]" /> {c}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 6 Months Certificate */}
                            {/* DESKTOP VIEW: TABLE STYLE WITH HIGHLIGHT CONTAINER */}
                            <div className="hidden lg:block bg-white border border-gray-200 shadow-sm p-6 border-l-4 border-l-[#D4AF37] rounded-sm">
                                <h3 className="text-xl font-bold text-[#003366] mb-4 flex items-center gap-2">
                                    <Zap className="text-[#D4AF37]" size={24} /> 6-Month Certificate Courses
                                </h3>

                                <table className="w-full text-sm border-collapse border border-gray-300 mb-6 bg-gray-50">
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 w-1/4">Duration</td>
                                            <td className="p-3">6 Months</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l w-1/4">Eligibility</td>
                                            <td className="p-3">Any Degree / 10+2 / Open</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300">Purpose</td>
                                            <td className="p-3">Skill Development & Upskilling</td>
                                            <td className="bg-gray-100 p-3 font-bold border-r border-gray-300 border-l">Certification</td>
                                            <td className="p-3">Institute / BSS</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="bg-white p-4 border border-gray-200">
                                    <h4 className="font-bold text-[#003366] text-sm uppercase mb-3 text-center border-b border-gray-200 pb-2">List of Available Certificates</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "Certificate in Airline Customer Service",
                                            "Certificate in Air Ticketing & Reservations (CRS)",
                                            "Certificate in Ramp & Apron Safety",
                                            "Certificate in Aviation Security Basics",
                                            "Certificate in Travel & Tourism Mgmt",
                                            "Certificate in Communicative English"
                                        ].map((course, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 border border-gray-100 bg-gray-50 hover:border-gray-300 transition-colors">
                                                <Zap size={16} className="text-[#D4AF37]" />
                                                <span className="text-sm font-bold text-gray-700">{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE VIEW: DOCUMENT STYLE MATCHING DESKTOP */}
                            <div className="lg:hidden bg-white border border-gray-200 shadow-sm p-4 border-l-4 border-l-[#D4AF37] rounded-sm">
                                <h3 className="text-lg font-bold text-[#003366] mb-3 flex items-center gap-2">
                                    <Zap className="text-[#D4AF37]" size={20} /> 6-Month Certificate
                                </h3>

                                <div className="text-xs border border-gray-200 rounded-sm mb-4">
                                    <div className="grid grid-cols-2 border-b border-gray-200">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Duration</div>
                                        <div className="p-2 text-gray-700">6 Months</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="bg-gray-50 p-2 font-bold text-[#003366] border-r border-gray-200">Eligibility</div>
                                        <div className="p-2 text-gray-700">Open / 12th</div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-800 mb-3 text-justify leading-relaxed">
                                    Short-term certification for specific job roles and skill enhancement.
                                </p>

                                <div className="space-y-2 mt-4">
                                    {[
                                        "Airport Management",
                                        "Airline & Travel Tourism",
                                        "Airline Customer Service",
                                        "Air Cargo & Logsitics"
                                    ].map((c, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                                            <CheckCircle size={12} className="text-[#003366]" /> {c}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        {/* Closing Section: Diploma */}
                    </section>

                    {/* Section: AME & CPL Consultation */}
                    <section id="ame-cpl" className="scroll-mt-36 lg:scroll-mt-24">
                        {/* Desktop Header */}
                        <div className="hidden lg:block mb-6">
                            <h2 className="text-2xl font-serif font-bold text-[#003366] border-b-2 border-[#D4AF37] inline-block mb-2 pb-1">
                                DGCA Consultation Services
                            </h2>
                            <p className="text-sm text-gray-700 leading-7">
                                We are authorized consultation partners for premium DGCA-approved institutions for Aircraft Maintenance Engineering (AME) and Commercial Pilot Training (CPL).
                            </p>
                        </div>

                        {/* Mobile Header */}
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 bg-[#D4AF37]"></div>
                            <h2 className="text-xl font-serif font-bold text-[#003366] uppercase">DGCA Consultation</h2>
                        </div>

                        <div className="bg-[#003366] text-white rounded-lg lg:rounded-sm shadow-md overflow-hidden relative">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="p-6 lg:p-10 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="inline-block bg-[#D4AF37] text-[#003366] text-[10px] lg:text-xs font-bold px-3 py-1 rounded-sm mb-4">
                                        OFFICIAL ADMISSION PARTNER
                                    </div>
                                    <h3 className="text-xl lg:text-3xl font-serif font-bold mb-4">AME & CPL Admissions</h3>
                                    <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-6 text-justify">
                                        Secure your admission in top-tier DGCA-approved colleges in India and abroad. We provide end-to-end guidance, from entrance exam preparation to college selection and documentation.
                                    </p>
                                    <div className="flex gap-4">
                                        <Link href="/contact" className="bg-white text-[#003366] px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
                                            Enquire Now
                                        </Link>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white/10 p-4 rounded-sm border border-white/20">
                                        <h4 className="font-bold text-[#D4AF37] text-sm uppercase mb-2">Aircraft Maintenance Engineering (AME)</h4>
                                        <p className="text-xs text-white/80 leading-relaxed">
                                            Admission guidance for B1.1 (Turbine), B1.2 (Piston), and B2 (Avionics) licenses at DGCA-approved institutes.
                                        </p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-sm border border-white/20">
                                        <h4 className="font-bold text-[#D4AF37] text-sm uppercase mb-2">Commercial Pilot License (CPL)</h4>
                                        <p className="text-xs text-white/80 leading-relaxed">
                                            Connect with top flying clubs in India, USA, New Zealand, and South Africa for CPL training and type rating.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Competitive Exams */}
                    <section id="competitive" className="scroll-mt-36 lg:scroll-mt-24">
                        {/* Mobile Header */}
                        <div className="flex items-center gap-3 mb-4 lg:mb-6">
                            <div className="h-8 w-1 bg-[#D4AF37]"></div>
                            <h2 className="text-xl lg:text-2xl font-serif font-bold text-[#003366] uppercase">
                                Competitive Exam Training
                                <span className="block text-[10px] lg:text-xs font-sans font-medium text-gray-500 mt-1 normal-case">Gateway to Government Aviation Jobs</span>
                            </h2>
                        </div>

                        {/* DESKTOP GRID */}
                        <div className="hidden lg:grid grid-cols-3 gap-6">
                            {[
                                { title: "AAI Recruitment", desc: "Coaching for Air Traffic Control (ATC), Airport Operations, and Junior Executive exams.", features: ["Tech + Non-Tech Syllabus", "Previous Paper Analysis"] },
                                { title: "DGCA Modules", desc: "Expert classes for AME Paper 1, Paper 2, and Module 10 (Aviation Legislation).", features: ["Topic-wise Mock Tests", "Regulatory Updates"] },
                                { title: "CPL Ground School", desc: "Thorough grounding in Air Navigation, Meteorology, Regulations, and Technical General.", features: ["DGCA Exam Syllabus", "Navigation Plotting"] },
                                { title: "RTR License", desc: "Preparation for Radio Telephony Restricted (Aero) license exam conducted by WPC.", features: ["Part 1 & 2 Practice", "Transmission Techniques"] },
                                { title: "SSC & General Govt", desc: "Guidance for SSC CGL/CHSL and other central government exams relevant to PSU aviation jobs.", features: ["Aptitude & Reasoning", "GK & English"] },
                                { title: "Interview & Grooming", desc: "Specialized training for airline cabin crew and airport ground staff interviews.", features: ["Mock Interviews", "Personality Development"] },
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all group">
                                    <h4 className="font-bold text-[#003366] text-lg mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed h-16">{item.desc}</p>
                                    <ul className="space-y-1">
                                        {item.features.map((feat, j) => (
                                            <li key={j} className="text-xs text-gray-500 flex items-center gap-2">
                                                <div className="w-1 h-1 bg-[#003366] rounded-full"></div> {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* MOBILE GRID (Simplified) */}
                        <div className="lg:hidden grid grid-cols-2 gap-3">
                            {[
                                { title: "AAI Exams", list: "ATC, Airport Ops" },
                                { title: "DGCA Modules", list: "Paper 1, 2, QA" },
                                { title: "CPL Ground", list: "Nav, Met, Regs" },
                                { title: "RTR License", list: "Radio Telephony" },
                                { title: "SSC / Govt", list: "CGL, CHSL, PSU" },
                                { title: "Interview", list: "Grooming, Spoken" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-3 border border-gray-200 rounded-md shadow-sm">
                                    <h4 className="font-bold text-[#003366] text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-500">{item.list}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section: Why Choose */}
                    <section id="why-choose" className="scroll-mt-36 lg:scroll-mt-24">
                        <div className="bg-[#f8f9fa] border border-gray-200 p-5 rounded-lg">
                            <h2 className="text-lg font-bold text-[#003366] mb-4 uppercase text-center border-b border-gray-300 pb-2">Why Choose KRI?</h2>
                            <div className="space-y-3">
                                {[
                                    "University-Approved Degrees",
                                    "DGCA-Authorized Consultation",
                                    "100% Placement Assistance",
                                    "Industry-Expert Faculty"
                                ].map((reason, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-2 rounded shadow-sm border border-gray-100">
                                        <div className="bg-[#e6f0fa] p-1.5 rounded-full text-[#003366]"><CheckCircle size={16} /></div>
                                        <span className="text-xs font-bold text-gray-700 uppercase">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section: FAQ */}
                    <section id="faq" className="scroll-mt-36 lg:scroll-mt-24 pb-10">
                        <div className="flex items-center gap-3 mb-4 lg:mb-6">
                            <div className="h-8 w-1 bg-[#D4AF37]"></div>
                            <h2 className="text-xl lg:text-2xl font-serif font-bold text-[#003366] uppercase">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-3 lg:space-y-4">
                            {[
                                { q: "Is the college approved by the Government?", a: "Yes, our degree programs are approved by Alagappa University (State Government University, NAAC A++). Skill courses are recognized by Bharat Sevak Samaj (National Development Agency)." },
                                { q: "Do you provide placement assistance?", a: "Absolutely. We have a dedicated placement cell that assists students with internships and job placements in domestic and international airlines, airports, and MROs." },
                                { q: "Is hostel facility available?", a: "Yes, we provide separate hostel facilities for boys and girls with safe, hygienic environments and study areas." },
                                { q: "Can I join AME or CPL courses through your college?", a: "Yes, we act as an authorized consultation partner for top DGCA-Approved AME questions and Flying Clubs. We guide you through the entire admission process." },
                                { q: "What is the eligibility for B.Sc. Aviation?", a: "Students who have passed their 10+2 (Higher Secondary) with Physics, Chemistry, and Mathematics are eligible to apply." }
                            ].map((faq, i) => (
                                <details key={i} className="group bg-white border border-gray-200 rounded-lg lg:rounded-sm overflow-hidden shadow-sm">
                                    <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-[#003366] text-sm lg:text-base hover:bg-gray-50 transition-colors">
                                        {faq.q}
                                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 text-[#D4AF37]" />
                                    </summary>
                                    <div className="p-4 pt-0 text-xs lg:text-sm text-gray-700 leading-relaxed bg-gray-50 border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
