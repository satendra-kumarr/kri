'use client';

import { Phone, FileCheck, FileText, UserCheck, CreditCard, GraduationCap } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export default function AdmissionSteps() {
    const { openModal } = useEnquiry();
    const steps = [
        {
            icon: <Phone size={32} className="text-[#D4AF37]" />,
            title: "Step 1: Enquiry",
            description: "Contact us via phone/email or visit the campus. Receive eligibility and course details from our counsellors."
        },
        {
            icon: <FileCheck size={32} className="text-[#D4AF37]" />,
            title: "Step 2: Eligibility",
            description: "Submit academic details. Check eligibility for Alagappa University (Aviation) or BSS (Medical) norms."
        },
        {
            icon: <FileText size={32} className="text-[#D4AF37]" />,
            title: "Step 3: Application",
            description: "Submit official form with Photos, ID Proof, 10th/12th Marksheets, TC, and other certificates."
        },
        {
            icon: <UserCheck size={32} className="text-[#D4AF37]" />,
            title: "Step 4: Screening",
            description: "Document verification by admission team. Receive Provisional Admission Confirmation."
        },
        {
            icon: <CreditCard size={32} className="text-[#D4AF37]" />,
            title: "Step 5: Fee Payment",
            description: "Pay admission fee to secure seat. Receipts issued immediately. Instalment options available."
        },
        {
            icon: <GraduationCap size={32} className="text-[#D4AF37]" />,
            title: "Step 6: Enrolment",
            description: "Receive Enrolment Number, Timetable, and Orientation Date. Officially join KRI College."
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-gray-50 border-b border-gray-200">
            <div className="container-custom">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#003366] mb-4 uppercase tracking-wide">
                        Admission Procedure
                    </h2>
                    <p className="text-gray-600 font-semibold mb-2">
                       Degree Aviation Courses  – Approved by Alagappa University <span className="hidden md:inline">|</span> <br className="md:hidden" />Diploma  Courses – Approved by Central Bharat Sevak Samaj
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                        Transparent, student-friendly process guiding you from enquiry to enrollment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4">
                            <div className="bg-[#003366] p-3 rounded-full flex-shrink-0">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#003366] mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => openModal({ type: 'admission' })}
                        className="inline-block bg-[#D4AF37] text-[#003366] px-10 py-4 font-bold uppercase text-sm hover:bg-[#b08d26] transition-colors rounded shadow-lg animate-pulse"
                    >
                        Apply Online Now
                    </button>
                </div>
            </div>
        </section>
    );
}
