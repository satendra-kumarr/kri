//app\components\EnquiryModal.tsx
'use client';

import { useEnquiry } from '../context/EnquiryContext';
import { X, CheckCircle, Send, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { sendLeadToPrivyr } from '../lib/privyr';
import { validateEmail, validatePhone, validateName, type ValidationErrors } from '../lib/validation';
import toast from 'react-hot-toast';

export default function EnquiryModal() {
    const { isOpen, closeModal, modalData, openModal } = useEnquiry();
    const [isAnimating, setIsAnimating] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [errors, setErrors] = useState<ValidationErrors>({});

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


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        setFormStatus('submitting');

        const form = e.currentTarget;
        const fd = new FormData(form);

        const name = (fd.get('Full Name') || '').toString();
        const phone = (fd.get('Phone Number') || '').toString();
        const email = (fd.get('Email') || '').toString();
        const course = (fd.get('Course') || modalData.course || '').toString();
        const message = (fd.get('Message') || '').toString();

        // Validate form
        const validationErrors: ValidationErrors = {};
        if (!validateName(name)) {
            validationErrors.name = 'Please enter a valid name (at least 2 characters)';
        }
        if (!validatePhone(phone)) {
            validationErrors.phone = 'Please enter a valid Indian phone number (10 digits)';
        }
        if (!validateEmail(email)) {
            validationErrors.email = 'Please enter a valid email address';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setFormStatus('idle');
            toast.error('Please fix the errors in the form');
            return;
        }

        // Determine subject based on enquiry type
        const getSubject = () => {
            switch (modalData.type) {
                case 'admission': return 'Admission Enquiry';
                case 'scholarship': return 'Scholarship Enquiry';
                case 'placement': return 'Placement Enquiry';
                default: return 'Course Enquiry';
            }
        };

        const fields: Record<string, unknown> = {
            'Full Name': name,
            'Phone Number': phone,
            Email: email,
            Course: course,
            Message: message,
            'Enquiry Type': modalData.type,
            Subject: getSubject(),
            'Form Type': getSubject(),
        };

        try {
            await sendLeadToPrivyr(fields, {
                form_name: 'enquiry_modal',
                page_url: typeof window !== 'undefined' ? window.location.href : undefined,
                page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
                referrer: typeof document !== 'undefined' ? document.referrer : undefined,
                user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
            });
            setFormStatus('success');
            toast.success('Thank you! Your enquiry has been submitted successfully. We will contact you soon.');
            form.reset();
            setErrors({});
            // Auto close after 3 seconds
            setTimeout(() => {
                closeModal();
                setFormStatus('idle');
            }, 3000);
        } catch (err) {
            console.error('Privyr webhook error:', err);
            const errorMessage = err instanceof Error ? err.message : 'Failed to submit enquiry. Please try again.';
            toast.error(errorMessage);
            setFormStatus('idle');
        }
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
                    <form className="space-y-4" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    name="Full Name"
                                    required
                                    placeholder="Enter your name"
                                    className={`w-full border p-2.5 rounded text-sm ${
                                        errors.name ? 'border-red-500' : ''
                                    }`}
                                    onBlur={(e) => {
                                        if (!validateName(e.target.value)) {
                                            setErrors({ ...errors, name: 'Please enter a valid name (at least 2 characters)' });
                                        } else {
                                            const newErrors = { ...errors };
                                            delete newErrors.name;
                                            setErrors(newErrors);
                                        }
                                    }}
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                        <AlertCircle size={12} /> {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase mb-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="Phone Number"
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                    className={`w-full border p-2.5 rounded text-sm ${
                                        errors.phone ? 'border-red-500' : ''
                                    }`}
                                    onBlur={(e) => {
                                        if (!validatePhone(e.target.value)) {
                                            setErrors({ ...errors, phone: 'Please enter a valid Indian phone number (10 digits)' });
                                        } else {
                                            const newErrors = { ...errors };
                                            delete newErrors.phone;
                                            setErrors(newErrors);
                                        }
                                    }}
                                />
                                {errors.phone && (
                                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                        <AlertCircle size={12} /> {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Email Address *</label>
                            <input
                                type="email"
                                name="Email"
                                required
                                placeholder="your@email.com"
                                className={`w-full border p-2.5 rounded text-sm ${
                                    errors.email ? 'border-red-500' : ''
                                }`}
                                onBlur={(e) => {
                                    if (!validateEmail(e.target.value)) {
                                        setErrors({ ...errors, email: 'Please enter a valid email address' });
                                    } else {
                                        const newErrors = { ...errors };
                                        delete newErrors.email;
                                        setErrors(newErrors);
                                    }
                                }}
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle size={12} /> {errors.email}
                                </p>
                            )}
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
                            disabled={formStatus === 'submitting'}
                            className="w-full bg-[#D4AF37] text-[#003366] py-3 rounded font-bold uppercase tracking-wide hover:bg-yellow-400 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'} <Send size={16} />
                        </button>

                        {formStatus === 'success' && (
                            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded p-3">
                                <CheckCircle size={18} />
                                Thank you! Your enquiry has been submitted successfully.
                            </div>
                        )}

                        <p className="text-[10px] text-center text-gray-500">
                            By submitting this form, you agree to being contacted by our admissions team.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
