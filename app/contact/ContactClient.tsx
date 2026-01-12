'use client';

import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function ContactClient() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('Name');
        const phone = formData.get('Phone');
        const email = formData.get('Email');
        const subject = formData.get('Subject');
        const message = formData.get('Message');

        const mailtoLink =
            `mailto:info@kricollege.edu.in` +
            `?subject=${encodeURIComponent(subject?.toString() || 'Website Enquiry')}` +
            `&body=${encodeURIComponent(
                `Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}`
            )}`;

        try {
            window.location.href = mailtoLink;

            // ✅ SUCCESS TOAST
            toast.success('Message prepared! Please send the email from your mail app.');

            form.reset();
        } catch (error) {
            console.error(error);

            // ❌ ERROR TOAST
            toast.error('Unable to open email application. Please try again.');
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
                                            <a href="mailto:info@kricollege.edu.in" className="hover:text-[#003366] transition-colors block">info@kricollege.edu.in</a>
                                            <a href="mailto:admissions@kricollege.edu.in" className="hover:text-[#003366] transition-colors block">admissions@kricollege.edu.in</a>
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
                                    <input type="text"
                                        name="Name"
                                        required
                                        className="w-full p-3 bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:border-[#003366] transition-colors"
                                        placeholder="John Doe" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="Phone"
                                        required className="w-full p-3 bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:border-[#003366] transition-colors" placeholder="+91 12345 67890" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase">Email Address *</label>
                                <input
                                    type="email"
                                    name="Email"
                                    required className="w-full p-3 bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:border-[#003366] transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase">Subject</label>
                                <select name="Subject" required className="w-full p-3 bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:border-[#003366] transition-colors">
                                    <option>Admission Enquiry</option>
                                    <option>Course Details</option>
                                    <option>Fee Structure</option>
                                    <option>Campus Visit</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase">Message *</label>
                                <textarea name="Message" required rows={5} className="w-full p-3 bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:border-[#003366] transition-colors" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 bg-[#003366] text-white font-bold uppercase text-sm hover:bg-[#D4AF37] hover:text-[#003366] transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
}
