"use client";
import React, { useState } from "react";
import { ChevronRight, Award, Calendar, Phone, Mail, Clock, MapPin, Download, CheckCircle, FileEdit, UploadCloud, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ----------------------------------------------------------------------------
// Types & Data
// ----------------------------------------------------------------------------
type Winner = {
    name: string;
    course: string;
    image: string;
};

type ScholarshipYear = {
    year: string;
    winners: Winner[];
};

const scholarshipData: ScholarshipYear[] = [
    {
        year: "2020",
        winners: [
            { name: "Ameera Illiyas", course: "BBA (Airline & Airport Management)", image: "/images/2020/ameerah.jpg" },
        ],
    },
    {
        year: "2021",
        winners: [
            { name: "Musthafa Kamal Batcha", course: "B.Sc (Aircraft Maintenance Science)", image: "/images/2021/Musthafa.png" },
            { name: "Sanjay Kumar", course: "B.Sc (Aircraft Maintenance Science)", image: "/images/2021/Sanjay.png" },
            { name: "Regala Praveen", course: "B.Sc (Aircraft Maintenance Science)", image: "/images/2021/Regala.png" },
            { name: "Isha Priyadharshini", course: "B.Sc (Aviation)", image: "/images/2021/isha.png" },
            { name: "Loganath", course: "B.Sc (Aviation)", image: "/images/2021/loganth.png" },
            { name: "Kathir", course: "B.Sc (Aviation)", image: "/images/2021/kathir.png" },
        ],
    },
    {
        year: "2022",
        winners: Array.from({ length: 10 }).map((_, i) => ({
            name: "",
            course: "",
            image: `/images/2022/${220 + i}.png`,
        })),
    },
    {
        year: "2023",
        winners: Array.from({ length: 10 }).map((_, i) => ({
            name: "",
            course: "",
            image: `/images/2023/${23 + i}.png`,
        })),
    },
    {
        year: "2024",
        winners: Array.from({ length: 21 }).map((_, i) => ({
            name: "",
            course: "",
            image: `/images/2024/${24 + i}.png`,
        })),
    },
    {
        year: "2025",
        winners: Array.from({ length: 50 }).map((_, i) => ({
            name: "",
            course: "",
            image: `/images/2025/${25 + i}.png`,
        })),
    },
    {
        year: "2026",
        winners: Array.from({ length: 5 }).map((_, i) => ({
            name: "KRI Scholarship Graduate",
            course: "B.Sc (Aviation)",
            image: `/images/2026/${26 + i}.png`,
        })),
    }
];

const schemes = [
    {
        id: 1,
        name: "Academic Excellence Scholarship",
        who: "Students with outstanding academic performance.",
        benefits: "Up to 50% tuition waiver for the duration of the program.",
        eligibility: ["High school graduates with top marks", "College graduates with strong academic record"],
    },
    {
        id: 2,
        name: "Aviation Leadership Scholarship",
        who: "Students who have demonstrated leadership in aviation-related activities.",
        benefits: "Partial tuition support + mentorship opportunities",
        eligibility: ["Participation in aviation clubs/competitions", "Leadership roles in community or student organizations"],
    },
    {
        id: 3,
        name: "International Student Scholarship",
        who: "Students from overseas with strong academic credentials.",
        benefits: "Up to 30% tuition support, orientation support, and student services.",
        eligibility: ["Admission offer from KRI", "International eligibility documents"],
    },
];

const faqs = [
    { q: "Can I apply for more than one scholarship?", a: "Yes! You may apply for multiple scholarships you qualify for." },
    { q: "Is the scholarship renewable?", a: "Many scholarships are renewable each year, subject to meeting academic and conduct criteria." },
    { q: "When will I be notified?", a: "Scholarship decisions are typically announced 4–6 weeks after the application deadline." },
];

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export default function ScholarshipPage() {
    const [activeTab, setActiveTab] = useState("schemes");
    const [selectedYear, setSelectedYear] = useState("2021");

    const currentYearData = scholarshipData.find((d) => d.year === selectedYear);

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#333] overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[40vh] md:min-h-[70vh] flex items-center justify-center py-8 md:py-0">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/scho.jpeg')` }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#001a33]/70"></div>

                {/* Foreground Content */}
                <div className="relative text-center max-w-4xl mx-auto px-4 md:px-6 space-y-3 md:space-y-5 text-white">

                    <div className="flex justify-center">
                        <span className="bg-yellow-500 text-black font-semibold text-xs px-3 py-1 rounded tracking-wider">
                            SCHOLARSHIPS & AID
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold tracking-tight">
                        Scholarships & Financial Aid
                    </h1>

                    <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-yellow-300">
                        The King Rashid International College of Aeronautics
                    </h2>

                    <p className="text-sm md:text-lg leading-relaxed opacity-90 hidden sm:block">
                        At King Rashid International College of Aeronautics (KRI), we believe
                        financial limitations should never restrict access to world-class aviation
                        education. Our scholarship programs support excellence, leadership, and
                        diversity in aviation.
                    </p>
                    <p className="text-sm leading-relaxed opacity-90 sm:hidden">
                        KRI believes financial limitations should never restrict access to world-class aviation education.
                    </p>
                </div>

            </section>

            <div className="container mx-auto px-4 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

                {/* LEFT COLUMN (Main Content) */}
                <div className="lg:col-span-8 space-y-8">
                    <h2 className="text-2xl md:text-4xl text-[#003366] font-serif font-bold">
                        Why Scholarships at KRI?                        </h2>
                    {/* Why Scholarships Block */}
                    <div className="bg-white p-6 border-l-4 border-[#003366] shadow-sm">

                        <div className="text-gray-700 text-sm space-y-3">
                            <p>We offer merit-based and need-based scholarships to:</p>
                            <ul className="list-disc pl-5 space-y-1 marker:text-[#D4AF37]">
                                <li>Recognize academic excellence</li>
                                <li>Support students with financial need</li>
                                <li>Encourage leadership, innovation, and community engagement</li>
                                <li>Promote diversity in the aviation industry</li>
                            </ul>
                            <p>
                                Our commitment is to ensure that qualified students have access to the training and expertise needed for successful careers in aeronautics.
                            </p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap border-b-2 border-[#003366]">
                        <button
                            onClick={() => setActiveTab("schemes")}
                            className={`flex-1 md:flex-none px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${activeTab === "schemes"
                                ? "bg-[#003366] text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            Scholarship Schemes
                        </button>
                        <button
                            onClick={() => setActiveTab("winners")}
                            className={`flex-1 md:flex-none px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${activeTab === "winners"
                                ? "bg-[#003366] text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            Roll of Honor (Beneficiaries)
                        </button>
                    </div>

                    {/* SCHEMES CONTENT */}
                    {activeTab === "schemes" && (
                        <div className="space-y-8">

                            {/* Table Layout - Desktop */}
                            <div className="bg-white p-4 md:p-6 border border-gray-200 border-t-0 shadow-sm">
                                <h3 className="text-base md:text-lg font-bold text-[#003366] mb-4 border-b pb-2">Available Scholarship Programs</h3>

                                {/* Mobile Card View */}
                                <div className="block md:hidden space-y-4">
                                    {schemes.map((scheme) => (
                                        <div key={scheme.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                                            <h4 className="font-bold text-[#003366] text-sm border-b border-gray-200 pb-2">{scheme.name}</h4>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-500 uppercase">Who is it for?</p>
                                                <p className="text-sm text-gray-700">{scheme.who}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-500 uppercase">Eligibility</p>
                                                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                                                    {scheme.eligibility.map((item, i) => (
                                                        <li key={i}>{item.trim()}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-500 uppercase">Benefits</p>
                                                <p className="text-sm font-semibold text-[#D4AF37]">{scheme.benefits}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop Table View */}
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full text-left border-collapse border border-gray-300 text-sm">
                                        <thead>
                                            <tr className="bg-[#003366] text-white">
                                                <th className="p-3 border border-gray-300 font-bold uppercase">Scholarship Name</th>
                                                <th className="p-3 border border-gray-300 font-bold uppercase">Who is it for?</th>
                                                <th className="p-3 border border-gray-300 font-bold uppercase">Eligibility</th>
                                                <th className="p-3 border border-gray-300 font-bold uppercase">Benefits</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            {schemes.map((scheme, idx) => (
                                                <tr key={scheme.id} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50`}>
                                                    <td className="p-3 border border-gray-300 font-bold text-[#003366] align-top">{scheme.name}</td>
                                                    <td className="p-3 border border-gray-300 align-top">{scheme.who}</td>
                                                    <td className="p-3 border border-gray-300 align-top">
                                                        <ul className="list-disc pl-4 space-y-1 text-xs">
                                                            {scheme.eligibility.map((item, i) => (
                                                                <li key={i}>{item.trim()}</li>
                                                            ))}
                                                        </ul>
                                                    </td>
                                                    <td className="p-3 border border-gray-300 font-semibold text-[#D4AF37] align-top bg-white">{scheme.benefits}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* How To Apply Section (Rich UI) */}
                            <div className="bg-white p-6 border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-bold text-[#003366] mb-6 border-b pb-2">How to Apply</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                    {/* Step 1 */}
                                    <div className="group bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-[#e9ecef] text-[#003366] text-[10px] font-bold px-2 py-1 rounded-bl-lg">STEP 01</div>
                                        <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#003366] transition-colors">
                                            <CheckCircle className="text-[#003366] group-hover:text-[#D4AF37]" size={24} />
                                        </div>
                                        <h4 className="font-serif font-bold text-[#003366] mb-2">Check Eligibility</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">Review the specific criteria for each scholarship scheme listed above.</p>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="group bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-[#e9ecef] text-[#003366] text-[10px] font-bold px-2 py-1 rounded-bl-lg">STEP 02</div>
                                        <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#003366] transition-colors">
                                            <FileEdit className="text-[#003366] group-hover:text-[#D4AF37]" size={24} />
                                        </div>
                                        <h4 className="font-serif font-bold text-[#003366] mb-2">Fill Application</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">Complete the Scholarship Application Form with accurate details.</p>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="group bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-[#e9ecef] text-[#003366] text-[10px] font-bold px-2 py-1 rounded-bl-lg">STEP 03</div>
                                        <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#003366] transition-colors">
                                            <UploadCloud className="text-[#003366] group-hover:text-[#D4AF37]" size={24} />
                                        </div>
                                        <h4 className="font-serif font-bold text-[#003366] mb-2">Upload Docs</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">Attach transcripts, ID, financial proof, and recommendation letters.</p>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="group bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-[#e9ecef] text-[#003366] text-[10px] font-bold px-2 py-1 rounded-bl-lg">STEP 04</div>
                                        <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#003366] transition-colors">
                                            <Send className="text-[#003366] group-hover:text-[#D4AF37]" size={24} />
                                        </div>
                                        <h4 className="font-serif font-bold text-[#003366] mb-2">Submit</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">Submit your application to the Admissions Office before the deadline.</p>
                                    </div>

                                </div>
                            </div>

                            {/* FAQs */}
                            <div className="bg-white p-6 border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-bold text-[#003366] mb-4 border-b pb-2">Frequently Asked Questions (FAQs)</h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-gray-50 p-4 rounded-md">
                                            <p className="font-bold text-[#003366] text-sm mb-1">Q: {faq.q}</p>
                                            <p className="text-gray-700 text-sm">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* WINNERS GALLERY */}
                    {activeTab === "winners" && (
                        <div className="bg-white p-6 border border-gray-200 border-t-0 shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b pb-4">
                                <div>
                                    <h3 className="text-lg font-serif font-bold text-[#003366]">Roll of Honor</h3>
                                    <p className="text-xs text-gray-500">Students awarded scholarships for academic year {selectedYear}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <label htmlFor="year-select" className="text-gray-700 font-bold text-sm">Select Academic Year:</label>
                                    <select
                                        id="year-select"
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="border border-gray-300 rounded-sm px-2 py-1 md:px-3 md:py-1.5 focus:outline-none focus:ring-1 focus:ring-[#003366] text-xs md:text-sm bg-white"
                                    >
                                        {[...scholarshipData].reverse().map((data) => (
                                            <option key={data.year} value={data.year}>{data.year}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {currentYearData ? (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {currentYearData.winners.map((winner, idx) => {
                                        const hasInfo = winner.name || winner.course;
                                        return (
                                            <div key={idx} className={`border border-gray-200 rounded-sm bg-white text-center group hover:border-[#003366] transition-colors ${hasInfo ? 'p-2' : ''}`}>
                                                <div className={`relative w-full aspect-[3/4] overflow-hidden bg-gray-100 border border-gray-100 ${hasInfo ? 'mb-2' : ''}`}>
                                                    <Image
                                                        src={winner.image}
                                                        alt={winner.name || 'Scholarship Winner'}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition duration-500"
                                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                                    />
                                                </div>
                                                {winner.name && (
                                                    <h4 className="text-xs font-bold text-[#003366] flex items-center justify-center uppercase min-h-[2.5em]">{winner.name}</h4>
                                                )}
                                                {winner.course && (
                                                    <p className="text-[10px] text-gray-500 border-t border-gray-100 mt-2 pt-1">{winner.course}</p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-10 text-gray-500 border-2 border-dashed border-gray-200">No records found.</div>
                            )}
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN (Sidebar) */}
                <div className="lg:col-span-4 space-y-6">

                    {/* Application Deadlines */}
                    <div className="bg-white border border-gray-300 shadow-sm">
                        <div className="bg-[#003366] text-white px-4 py-3 font-bold text-sm uppercase tracking-wide flex items-center justify-between">
                            <span>Application Deadlines</span>
                            <Calendar size={16} />
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                                <span className="text-gray-700 text-sm font-semibold">Fall Intake</span>
                                <span className="text-[#D4AF37] font-bold text-sm">June 30</span>
                            </div>
                            <div className="flex justify-between items-center pb-1">
                                <span className="text-gray-700 text-sm font-semibold">Spring Intake</span>
                                <span className="text-[#D4AF37] font-bold text-sm">December 15</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Widget */}
                    <div className="bg-[#003366] text-white p-6 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <Award size={120} />
                        </div>
                        <h4 className="font-serif font-bold text-lg mb-4 border-b border-[#D4AF37] inline-block pb-1">Contact Us</h4>

                        <p className="text-xs text-blue-100 mb-4">
                            For guidance and support with your scholarship application:
                        </p>

                        <div className="space-y-4 text-sm relative z-10">
                            <div className="font-bold text-[#D4AF37] uppercase tracking-wide">
                                Admissions & Financial Aid Office
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                                <span className="opacity-90">info@kri.org.in</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                                <div className="opacity-90">
                                    <p>+91 9894959200</p>
                                    <p>+91 9894925233</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-2 border-t border-[rgba(255,255,255,0.1)]">
                                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                                <span className="opacity-90 text-xs">Office Hours: Mon – Fri, 9:00 AM – 5:00 PM</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
