//app\components\EnquiryModal.tsx
'use client';

import { useEnquiry } from '../context/EnquiryContext';
import { X, CheckCircle, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function EnquiryModal() {
    const { isOpen, closeModal, modalData, openModal } = useEnquiry();
    const [isAnimating, setIsAnimating] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    useEffect(() => {
        // Automatically open the modal 3 minutes after the page loads
        const timer = setTimeout(() => {
            if (!isOpen) {
                openModal();
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, []); // Run once on mount

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setIsAnimating(true), 0);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => setIsAnimating(false), 100);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isAnimating && !isOpen) return null;


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // Auto close after success? Maybe let user close it.
        }, 1500);
    };

    const getTitle = () => {
        switch (modalData.type) {
            case 'admission': return 'Apply for Admission';
            case 'scholarship': return 'Scholarship Enquiry';
            case 'placement': return 'Placement Enquiry';
            default: return 'Quick Enquiry';
        }
    };





    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal}></div>

            {/* Modal */}
            <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-[#003366] p-6 text-white flex justify-between items-start">
                    <div>
                        <p className="text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase">
                            KRI College of Aeronautics
                        </p>
                        <h2 className="text-2xl font-bold font-serif">{getTitle()}</h2>
                        {modalData.course && (
                            <div className="mt-2 inline-block bg-white/10 px-3 py-1 rounded text-xs border border-white/20">
                                Interested in: <span className="text-[#D4AF37] font-bold">{modalData.course}</span>
                            </div>
                        )}
                    </div>
                    <button onClick={closeModal}><X size={22} /></button>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">

                    {/* FORM */}
                    <form
                        action="mailto:admissions@kri.org.in"
                        method="POST"
                        encType="text/plain"
                        className="space-y-4"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="Full Name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full border p-2.5 rounded text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="Phone Number"
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full border p-2.5 rounded text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Email Address</label>
                            <input
                                type="email"
                                name="Email"
                                required
                                placeholder="your@email.com"
                                className="w-full border p-2.5 rounded text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Course of Interest</label>
                            <select
                                name="Course"
                                defaultValue={modalData.course || ""}
                                className="w-full border p-2.5 rounded text-sm bg-white"
                            >
                                <option value="" disabled>Select a Course</option>
                                <option>B.Sc. Aviation</option>
                                <option>B.Sc. Aircraft Maintenance Science</option>
                                <option>BBA Airline & Airport Management</option>
                                <option>Aircraft Maintenance Engineering (AME)</option>
                                <option>Commercial Pilot License (CPL)</option>
                                <option>Diploma Courses</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Message</label>
                            <textarea
                                name="Message"
                                rows={3}
                                placeholder="Any specific questions?"
                                className="w-full border p-2.5 rounded text-sm"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#D4AF37] text-[#003366] py-3 rounded font-bold uppercase tracking-wide hover:bg-yellow-400 transition flex items-center justify-center gap-2"
                        >
                            Send Enquiry <Send size={16} />
                        </button>

                        <p className="text-[10px] text-center text-gray-500">
                            By submitting this form, you agree to being contacted by our admissions team.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
