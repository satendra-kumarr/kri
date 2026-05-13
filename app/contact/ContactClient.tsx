'use client';

import { Mail, MapPin, Phone, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { sendLeadToPrivyr } from '../lib/privyr';
import { validateContactForm, validateEmail, validatePhone, validateName, type ValidationErrors } from '../lib/validation';
import { useState } from 'react';

export default function ContactClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<ValidationErrors>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('Name')?.toString() || '';
        const phone = formData.get('Phone')?.toString() || '';
        const email = formData.get('Email')?.toString() || '';
        const subject = formData.get('Subject')?.toString() || 'Contact Form';
        const message = formData.get('Message')?.toString() || '';

        // Validate form
        const validationErrors = validateContactForm({ name, phone, email, message });
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
            Subject: subject,
            Message: message,
            'Form Type': 'Contact Form',
        };

        try {
            await sendLeadToPrivyr(fields, {
                form_name: 'contact_page',
                page_url: typeof window !== 'undefined' ? window.location.href : undefined,
                page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
                referrer: typeof document !== 'undefined' ? document.referrer : undefined,
                user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
            });

            // Success!
            toast.success('Thank you! Your message has been sent successfully. We will get back to you soon.');
            form.reset();
            setErrors({});
        } catch (err) {
            console.error('Privyr webhook error:', err);
            const errorMessage = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <div className="bg-[#003366] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    {/* <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                        alt="Contact Background"
                        fill
                        className="object-cover"
                    /> */}
                </div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        We are here to help you. Reach out to us for admissions, general enquiries, or campus visits.
                    </p>
                </div>
            </div>

            <div className="container-custom py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 border-l-4 border-[#003366] shadow-sm">
                            <h2 className="text-2xl font-serif font-bold text-[#003366] mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#003366] text-white rounded-full flex items-center justify-center shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#333] mb-1">Campus Address</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            14/16, kurunji nagar, keela kallandhiri,<br />
                                            madurai, tamilnadu - 625301
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#003366] text-white rounded-full flex items-center justify-center shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#333] mb-1">Phone Numbers</h3>
                                        <p className="text-sm text-gray-600">
                                            <a href="tel:+919894925233" className="hover:text-[#003366] transition-colors block">+91 98949 25233, </a>
                                            <a href="tel:+919894925233" className="hover:text-[#003366] transition-colors block">+91 98949 59200</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#003366] text-white rounded-full flex items-center justify-center shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#333] mb-1">Email Addresses</h3>
                                        <p className="text-sm text-gray-600">
                                            <a href="mailto:info@kri.org.in" className="hover:text-[#003366] transition-colors block">info@kri.org.in</a>
                                            <a href="mailto:admissions@kri.org.in" className="hover:text-[#003366] transition-colors block">admissions@kri.org.in</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#003366] text-white rounded-full flex items-center justify-center shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#333] mb-1">Working Hours</h3>
                                        <p className="text-sm text-gray-600">
                                            Monday - Saturday: 9:00 AM - 5:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-64 md:h-80 bg-gray-200 rounded-sm overflow-hidden border border-gray-300 shadow-sm relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.218671694692!2d78.112444!3d9.917837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 border border-gray-200 shadow-lg h-fit">
                        <h3 className="text-2xl font-serif font-bold text-[#003366] mb-2">Send us a Message</h3>
                        <p className="text-sm text-gray-600 mb-6">Fill out the form below and we will get back to you shortly.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase">Your Name *</label>
                                    <input 
                                        type="text"
                                        name="Name"
                                        required
                                        className={`w-full p-3 bg-gray-50 border text-sm focus:outline-none focus:border-[#003366] transition-colors ${
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
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="Phone"
                                        required
                                        className={`w-full p-3 bg-gray-50 border text-sm focus:outline-none focus:border-[#003366] transition-colors ${
                                            errors.phone ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="+91 12345 67890"
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

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase">Email Address *</label>
                                <input
                                    type="email"
                                    name="Email"
                                    required
                                    className={`w-full p-3 bg-gray-50 border text-sm focus:outline-none focus:border-[#003366] transition-colors ${
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

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase">Subject *</label>
                                <select name="Subject" required className="w-full p-3 bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:border-[#003366] transition-colors">
                                    <option value="Contact Form">Contact Form</option>
                                    <option value="Admission Enquiry">Admission Enquiry</option>
                                    <option value="Course Details">Course Details</option>
                                    <option value="Fee Structure">Fee Structure</option>
                                    <option value="Campus Visit">Campus Visit</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase">Message *</label>
                                <textarea 
                                    name="Message" 
                                    required 
                                    rows={5} 
                                    className={`w-full p-3 bg-gray-50 border text-sm focus:outline-none focus:border-[#003366] transition-colors ${
                                        errors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="How can we help you?"
                                    onBlur={(e) => {
                                        if (!e.target.value.trim()) {
                                            setErrors({ ...errors, message: 'Please enter a message' });
                                        } else {
                                            const newErrors = { ...errors };
                                            delete newErrors.message;
                                            setErrors(newErrors);
                                        }
                                    }}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                        <AlertCircle size={12} /> {errors.message}
                                    </p>
                                )}
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-3 bg-[#003366] text-white font-bold uppercase text-sm hover:bg-[#D4AF37] hover:text-[#003366] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                            </button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
}
