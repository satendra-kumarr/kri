'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircleQuestion } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        {
            category: "General Institution",
            items: [
                { q: "Is KRI an approved institution?", a: "Yes. Our Degrees are approved by Alagappa University (Govt), Diplomas by BSS, and we are authorized DGCA consultants." },
                { q: "Does KRI provide placement assistance?", a: "Yes, 100% placement assistance through our network with Airlines, Airports, and MRO companies." },
                { q: "Are hostels available?", a: "Yes, separate accommodation facilities for boys and girls are available." }
            ]
        },
        {
            category: "Degree Programs",
            items: [
                { q: "Does B.Sc Aviation include flying training?", a: "No, it is a non-flying academic degree. However, CPL training can be arranged through partners." },
                { q: "Is B.Sc AMS the same as AME?", a: "No. B.Sc AMS is a degree, while AME is a license. AMS provides a strong foundation for AME." }
            ]
        },
        {
            category: "Admission & Fees",
            items: [
                { q: "Is there an entrance test?", a: "No entrance exam. Admission is based on eligibility and interview." },
                { q: "Are scholarships available?", a: "Yes, for meritorious, needy, single-parent, and women students." }
            ]
        }
    ];

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Left Header */}
                    <div className="md:w-1/3">
                        <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-xs mb-3 block"> Support </span>
                        <h2 className="text-[#003366] text-2xl md:text-4xl font-extrabold mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Have questions? We have answers. If you don't see your question here, reach out to our admission cell.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-3 mb-3 text-[#003366]">
                                <MessageCircleQuestion className="w-6 h-6" />
                                <span className="font-bold">Still have questions?</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Our expert counselors are ready to help you.</p>
                            <button className="text-[#003366] font-bold text-sm border-b border-[#003366] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors pb-0.5">
                                Contact Admissions &rarr;
                            </button>
                        </div>
                    </div>

                    {/* Right Accordion */}
                    <div className="md:w-2/3 space-y-8">
                        {faqs.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="font-bold text-lg text-[#003366] mb-4 pb-2 border-b-2 border-gray-100 inline-block">
                                    {section.category}
                                </h3>
                                <div className="space-y-4">
                                    {section.items.map((item, i) => (
                                        <FAQItem key={i} question={item.q} answer={item.a} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#003366] bg-white shadow-md' : 'border-gray-200 bg-gray-50 hover:bg-white'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-[#003366]"
            >
                <span className="text-base">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-[#D4AF37]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    )
}
