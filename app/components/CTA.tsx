'use client';

import { useState } from 'react';
import { X, Calendar, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { sendLeadToPrivyr } from '../lib/privyr';
import { validateEmail, validatePhone, validateName, type ValidationErrors } from '../lib/validation';
import toast from 'react-hot-toast';

export default function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <>
            <section className="py-12 md:py-20 bg-[#003366] text-white relative overflow-hidden border-t-8 border-[#D4AF37]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom text-center relative z-10 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-serif tracking-wide leading-tight">Experience Excellence Firsthand</h2>
                    <div className="w-16 md:w-24 h-1 bg-[#D4AF37] mx-auto mb-6 md:mb-8"></div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light">
                        Visit our campus to see our state-of-the-art fleet, simulators, and training facilities. Meet our expert instructors and start your pilot journey today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full sm:w-auto bg-[#D4AF37] text-[#003366] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-[#003366] transition-all duration-300 shadow-xl uppercase tracking-wider flex items-center justify-center gap-3 transform hover:-translate-y-1 text-sm sm:text-base"
                        >
                            <Calendar size={18} className="sm:w-5 sm:h-5" /> Campus Visit
                        </button>
                        <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#003366] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>

            {/* VISIT CAMPUS MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div
                        className="fixed inset-0"
                        onClick={() => setIsModalOpen(false)}
                    ></div>

                    <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up flex flex-col">
                        {/* Header */}
                        <div className="bg-[#003366] text-white p-4 sm:p-6 flex justify-between items-start sticky top-0 z-10">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold">Plan Your Visit</h3>
                                <p className="text-blue-200 text-xs sm:text-sm mt-1">Fill out the form below to schedule a tour.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-white/70 hover:text-white transition-colors bg-white/10 p-1 rounded-full"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 sm:p-6 md:p-8">
                            {showSuccess ? (
                                <div className="text-center py-8">
                                    <CheckCircle size={48} className="mx-auto text-green-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                                    <p className="text-gray-600 mb-6">Your campus visit request has been submitted successfully. We will contact you soon to confirm your visit.</p>
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(false);
                                            setShowSuccess(false);
                                            setErrors({});
                                        }}
                                        className="bg-[#003366] text-white px-6 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-[#003366] transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                            <form
                                className="space-y-3 sm:space-y-4"
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    setErrors({});
                                    setIsSubmitting(true);

                                    const form = e.currentTarget;
                                    const fd = new FormData(form);

                                    const name = (fd.get('Name') || '').toString();
                                    const phone = (fd.get('Phone') || '').toString();
                                    const email = (fd.get('Email') || '').toString();
                                    const preferredDate = (fd.get('Preferred Date') || '').toString();

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
                                        setIsSubmitting(false);
                                        toast.error('Please fix the errors in the form');
                                        return;
                                    }

                                    const fields: Record<string, unknown> = {
                                        Name: name,
                                        Phone: phone,
                                        Email: email,
                                        'Preferred Date': preferredDate,
                                        Subject: 'Campus Visit',
                                        'Form Type': 'Campus Visit',
                                    };

                                    try {
                                        await sendLeadToPrivyr(fields, {
                                            form_name: 'cta_campus_visit',
                                            page_url: typeof window !== 'undefined' ? window.location.href : undefined,
                                            page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
                                            referrer: typeof document !== 'undefined' ? document.referrer : undefined,
                                            user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
                                        });
                                        toast.success('Thank you! Your campus visit request has been submitted successfully.');
                                        form.reset();
                                        setShowSuccess(true);
                                        setErrors({});
                                    } catch (err) {
                                        console.error('Privyr webhook error:', err);
                                        const errorMessage = err instanceof Error ? err.message : 'Failed to submit request. Please try again.';
                                        toast.error(errorMessage);
                                    } finally {
                                        setIsSubmitting(false);
                                    }
                                }}
                            >
                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        name="Name"
                                        required
                                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all outline-none text-sm sm:text-base ${
                                            errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="John Doe"
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="Phone"
                                            required
                                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all outline-none text-sm sm:text-base ${
                                                errors.phone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="+91 98765..."
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
                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
                                        <input
                                            type="text"
                                            name="Preferred Date"
                                            placeholder="DD/MM/YYYY"
                                            onFocus={(e) => {
                                                e.currentTarget.type = "date";
                                                if ('showPicker' in e.currentTarget) {
                                                    try {
                                                        (e.currentTarget as any).showPicker();
                                                    } catch (error) {
                                                        // Fallback or ignore if not supported/allowed
                                                    }
                                                }
                                            }}
                                            onBlur={(e) => (e.currentTarget.type = e.currentTarget.value ? "date" : "text")}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all outline-none text-sm sm:text-base placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        name="Email"
                                        required
                                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all outline-none text-sm sm:text-base ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="john@example.com"
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

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#D4AF37] text-[#003366] font-bold py-3 sm:py-4 rounded-lg hover:bg-[#b08d26] hover:text-white transition-all shadow-md uppercase tracking-wider mt-2 sm:mt-4 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Confirm Schedule'}
                                </button>
                            </form>
                            )}

                            {!showSuccess && (
                                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 text-center">
                                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-3">Or contact us directly</p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-sm font-medium text-gray-600">
                                        <a href="tel:+919894925233" className="flex items-center justify-center gap-2 hover:text-[#003366]">
                                            <Phone size={16} /> +91 98949 25233, +91 98949 59200
                                        </a>
                                        <a href="mailto:info@kri.org.in" className="flex items-center justify-center gap-2 hover:text-[#003366]">
                                            <Mail size={16} /> info@kri.org.in
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
