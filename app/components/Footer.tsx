'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail, ChevronRight, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-400 font-sans border-t-4 border-[#D4AF37] relative overflow-hidden">
            {/* Ambient Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#003366] rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom py-16 relative z-10">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

                    {/* Column 1: Brand & Mission */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/5 p-2 rounded-lg backdrop-blur-sm border border-white/10">
                                <Image
                                    src="/images/logo.png"
                                    alt="KRI College Logo"
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-serif font-bold text-lg leading-tight tracking-wide">
                                    THE KING RASHID <br />
                                    <span className="text-[#D4AF37]">INTERNATIONAL INSTITUTE</span>
                                </h3>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 text-left md:text-justify border-l-2 border-[#D4AF37]/50 pl-4">
                            Empowering the next generation of aviation professionals with world-class training, state-of-the-art facilities, and unwavering values. We are committed to excellence in every flight.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            {[
                                { icon: <Facebook size={18} />, href: "https://www.facebook.com/kricollege/", color: "hover:bg-[#3b5998]" },
                                { icon: <Twitter size={18} />, href: "#", color: "hover:bg-[#00acee]" },
                                { icon: <Linkedin size={18} />, href: "#", color: "hover:bg-[#0077b5]" },
                                {
                                    icon: <Instagram size={18} />,
                                    href: "https://www.instagram.com/kricollege/",
                                    color: "hover:bg-[#e4405f]"
                                },
                                {
                                    icon: <Youtube size={18} />,
                                    href: "https://youtube.com/@kricollege?si=Y8bg-0DkvBwo15ik",
                                    color: "hover:bg-[#cd201f]"
                                }

                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className={`w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 rounded-sm hover:text-white hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#D4AF37]"></span> Quick Links
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3">
                            {[
                                { label: "Admissions Process", href: "/contact" },
                                { label: "Courses Offered", href: "/courses" },
                                { label: "Campus Facilities", href: "/institution" },
                                { label: "Placement Cell", href: "/training-placement" },
                                { label: "Achievements", href: "/achievements" },
                                { label: "Contact Support", href: "/contact" },
                                { label: "Our Gallery", href: "/gallery" },
                                { label: "Our Campaigns", href: "/campaign" }

                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-sm hover:text-[#D4AF37] transition-colors duration-300"
                                    >
                                        <ChevronRight size={14} className="text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#D4AF37]"></span> Contact Us
                        </h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center rounded-sm text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0f172a] transition-colors duration-300 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div className="text-sm">
                                    <strong className="text-white block mb-1">Campus Address</strong>
                                    <address className="not-italic text-gray-400 leading-relaxed">
                                        14/16, kurunji nagar, keela kallandhiri,<br />
                                        madurai, tamilnadu - 625301
                                    </address>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <Link href="tel:+919894925233" className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center rounded-sm text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0f172a] transition-colors duration-300 shrink-0">
                                    <Phone size={20} />
                                </Link>
                                <div className="text-sm">
                                    <strong className="text-white block mb-1">Phone Support</strong>
                                    <a href="tel:+919894925233" className="hover:text-[#D4AF37] transition-colors">+91 98949 25233,</a>
                                    <br />

                                    <a href="tel:+919894925233" className="hover:text-[#D4AF37] transition-colors">+91 98949 59200</a>      <br />
                                    <span className="text-xs text-gray-500">Mon - Sat, 9am - 5pm</span>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <Link href="mailto:info@kri.org.in" className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center rounded-sm text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0f172a] transition-colors duration-300 shrink-0">
                                    <Mail size={20} />
                                </Link>
                                <div className="text-sm">
                                    <strong className="text-white block mb-1">Email Us</strong>
                                    <a href="mailto:info@kri.org.in" className="hover:text-[#D4AF37] transition-colors">info@kri.org.in</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-[#0f172a] py-6 relative z-10">
                <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
                    <p>&copy; {new Date().getFullYear()} <span className="text-gray-300">The King Rashid International Institute</span>. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
                        <span className="text-gray-700">|</span>
                        <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link>
                        <span className="text-gray-700">|</span>
                        <Link href="/sitemap" className="hover:text-[#D4AF37] transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
