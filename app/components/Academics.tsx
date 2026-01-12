'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight, Bell, Star } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export default function Academics() {
    const { openModal } = useEnquiry();
    const categories = [
        {
            title: "Undergraduate Programmes",
            courses: [
                { name: "B.Sc. Aviation", duration: "3 Years", affiliation: "Alagappa University" },
                { name: "B.Sc. Aircraft Maintenance Science", duration: "3 Years", affiliation: "Alagappa University" },
                { name: "BBA Airline & Airport Management", duration: "3 Years", affiliation: "Alagappa University" }
            ]
        },
        {
            title: "DGCA / Technical Training",
            courses: [
                { name: "Aircraft Maintenance Engineering (AME)", duration: "License", affiliation: "Authorize The Consultant" },
                { name: "Commercial Pilot License (CPL) Ground Classes", duration: "Training", affiliation: "Authorize The Consultant" }
            ]
        },
        {
            title: "Diploma & Certificate Courses",
            courses: [
                { name: "Diploma in Airline & Airport Management", duration: "1 Year", affiliation: "Central BSS Approved" },
                { name: "Diploma in Aircraft Maintenance", duration: "1 Year", affiliation: "Central BSS Approved" },
                { name: "Certificate in Airport Ground Handling", duration: "6 Months", affiliation: "Central BSS Approved" }
            ]
        }
    ];

    return (
        <section className="py-10 bg-[#f5f5f5] border-t border-b border-gray-400 font-sans">
            <div className="container-custom">

                <div className="flex flex-col md:flex-row gap-8">

                    {/* Main Content Area */}
                    <div className="w-full md:w-3/4">
                        <h2 className="text-2xl font-serif font-bold text-[#003366] border-b-2 border-[#ccc] pb-2 mb-6 uppercase">
                            Academic Departments & Courses
                        </h2>

                        <div className="space-y-8">
                            {categories.map((cat, idx) => (
                                <div key={idx} className="bg-white border border-gray-300 shadow-sm">
                                    <h3 className="bg-[#e0e0e0] text-[#003366] font-bold p-3 text-sm uppercase tracking-wide border-b border-gray-300 flex items-center gap-2">
                                        <ArrowRight size={16} className="text-[#D4AF37]" /> {cat.title}
                                    </h3>
                                    <div className="p-0 overflow-x-auto">
                                        <table className="w-full text-sm text-left min-w-[500px]">
                                            <thead>
                                                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500">
                                                    <th className="px-4 py-2 font-semibold w-1/2">Course Name</th>
                                                    <th className="px-4 py-2 font-semibold w-1/4">Duration</th>
                                                    <th className="px-4 py-2 font-semibold w-1/4">Affiliation</th>
                                                    <th className="px-4 py-2 font-semibold w-12"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {cat.courses.map((course, i) => (
                                                    <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                                                        <td className="px-4 py-3 font-bold text-[#003366] whitespace-nowrap md:whitespace-normal">
                                                            {course.name}
                                                            <span className="hidden ml-2 md:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-medium bg-red-100 text-red-800">
                                                                NEW
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-700 font-medium whitespace-nowrap">{course.duration}</td>
                                                        <td className="px-4 py-3 text-gray-600 italic whitespace-nowrap">{course.affiliation}</td>
                                                        <td className="px-4 py-3 text-right">
                                                            <button
                                                                onClick={() => openModal({ course: course.name, type: 'admission' })}
                                                                className="text-[#D4AF37] hover:text-[#003366] p-1 rounded hover:bg-gray-100 transition-colors"
                                                                title="Enquire about this course"
                                                            >
                                                                <ChevronRight size={16} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / Quick Links (Typical University Style) */}
                    <div className="w-full md:w-1/4 space-y-6 md:sticky md:top-32 md:self-start h-fit">

                        <div className="bg-white border border-gray-300 shadow-sm">
                            <h4 className="bg-[#003366] text-white font-bold p-3 text-sm uppercase text-center">
                                Quick Links
                            </h4>
                            <ul className="text-sm divide-y divide-gray-200">
                                {[
                                    "Download Prospectus 2025",
                                    "Fee Structure",
                                    "Online Application Form",
                                    "Entrance Exam Syllabus",
                                    "Hostel Regulations",
                                    "Anti-Ragging Policy"
                                ].map((link, i) => (
                                    <li key={i}>
                                        {link === "Online Application Form" ? (
                                            <button
                                                onClick={() => openModal({ type: 'admission' })}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#003366] hover:text-[#D4AF37] flex items-center gap-2 transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div> {link}
                                            </button>
                                        ) : (
                                            <Link href={link.includes("Fee") ? "/contact" : "/contact"} className="block px-4 py-2 hover:bg-gray-50 text-[#003366] hover:text-[#D4AF37] flex items-center gap-2 transition-colors">
                                                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div> {link}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="mt-10 text-center border-t border-gray-300 pt-6">
                    <Link href="/courses" className="inline-block border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-bold text-sm px-8 py-2 uppercase tracking-wide transition-colors">
                        View All Courses & Details
                    </Link>
                </div>

            </div>

        </section>
    );
}
