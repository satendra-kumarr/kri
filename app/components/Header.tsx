'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import {
  Menu, Target, BookOpen, GraduationCap, Link as LinkIcon, Plane, DownloadIcon, Heart, Users, X, ChevronDown, ChevronRight, User, Phone, Facebook, Linkedin, Twitter, Mail, Instagram, Youtube
} from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { size } from 'zod';

import { useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(null);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const quickLinksRef = useRef<HTMLElement>(null);

  const { openModal } = useEnquiry();

  const router = useRouter();

  const handleQuickLinksClick = () => {
    router.push("/scholarship");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileSubmenu(null);
  };

  interface NavItem {
    label: string;
    href?: string;
    hasDropdown: boolean;
    items?: { label: string; href: string }[];
  }

  const navStructure: NavItem[] = [
    {
      label: "The Institution",
      hasDropdown: true,
      items: [
        { label: "About Us", href: "/institution#about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Mission & Vision", href: "/institution#mission" },
        { label: "History & Legacy", href: "/institution#history" },
        { label: "Approvals & Accreditation", href: "/institution#approvals" },
        { label: "Leadership Team", href: "/institution#leadership" },
        { label: "Founder's Profile", href: "/institution#founder" },
        { label: "Chairman's Message", href: "/institution#chairperson" },
        { label: "Admission Procedure", href: "/institution#admission" },
        { label: "Social Contribution", href: "/institution#social" },
        { label: "Sports & Athletics", href: "/institution#sports" },
        { label: "Faith & Values", href: "/institution#faith" },
        { label: "Scholarship Exams", href: "/institution#scholarship" },
        { label: "Our Alumni", href: "/institution#alumni" },
        { label: "Quick Links", href: "/institution#links" },
        { label: "MoUs", href: "/institution#mou" }
      ],
      href: "/institution"
    },
    {
      label: "Our courses",
      hasDropdown: true,
      items: [
        { label: "Degree Courses", href: "/courses#ug-programs" },
        { label: "Diploma Course", href: "/courses#diploma" },
        { label: "License Courses", href: "/courses#ame-cpl" },
        { label: "Government Exam Practices", href: "/courses#competitive" }
      ],
      href: "/courses"
    },
    { label: "Our Fleet", hasDropdown: false, href: "/fleet" },
    { label: "Why KRI?", hasDropdown: false, href: "/why-choose-us" },
    { label: "Press release", hasDropdown: false, href: "/press-release" },
    {
      label: "Training & Placements",
      hasDropdown: true,
      items: [
        { label: "Training & Industrial visit", href: "/training-placement#aircraft" },
        { label: "Placements", href: "/training-placement#placement" }
      ],
      href: "/training-placement"
    },
    { label: "Achievements", hasDropdown: false, href: "/achievements" },
    { label: "Quick Links", hasDropdown: false, href: "/quick-links" }

  ];

  return (
    <header className="w-full flex flex-col bg-white shadow-md z-50">

      {/* ================= MOBILE HEADER (Visible < md) ================= */}
      <div className="md:hidden sticky top-0 z-50 bg-white shadow-md">
        {/* Utility Bar - Clean & Focused on Action */}
        <div className="bg-[#003366] text-white py-1.5 px-4 flex justify-between items-center">
          <a href="tel:+919894925233" className="flex items-center gap-1.5 text-[11px] font-medium opacity-90 hover:opacity-100">
            <Phone size={12} className="text-[#D4AF37]" />
            <span>+91-9894925233</span>
          </a>

          <button
            onClick={() => openModal({ type: 'admission' })}
            className="bg-[#D4AF37] text-[#003366] text-[10px] font-bold uppercase px-3 py-1 rounded shadow-sm hover:bg-yellow-400 
            transition-colors animate-pulse cursor-pointer"
          >
            Apply Now
          </button>

        </div>

        {/* Main Mobile Navbar - Spacious & Balanced */}
        <div className="flex items-center justify-between py-3 px-5 bg-white relative z-50">
          {/* Left: Hamburger */}
          <button onClick={toggleMobileMenu} className="text-[#003366] -ml-2 p-2 hover:bg-gray-50 rounded-full transition-colors">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Center: Brand Identity */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-11 h-11 object-contain"
            />
            <div className="flex flex-col leading-none justify-center">
              <span className="text-[#003366] font-black uppercase text-[15px] tracking-tight">KRI College</span>
              <span className="text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase">AERONAUTICS</span>
            </div>
          </Link>

          {/* Right: Accreditation Badge (Visual Only) */}
          <div className="flex items-center">
            <img
              src="/images/naac-logo.png"
              alt="NAAC A++"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP HEADER (Visible >= md) ================= */}
      <div className="hidden md:block">
        {/* Top Utility Bar */}
        <div className="w-full bg-[#003366] text-white text-xs py-2">
          <div className="container-custom flex justify-between items-center">
            <div className="flex gap-6">
              <a href="mailto:info@kri.org.in" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <Mail size={14} className="text-[#D4AF37]" />
                <span>info@kri.org.in</span>
              </a>
              {/* ===== Button in Desktop Header ===== */}
              <button
                onClick={handleQuickLinksClick}
                className="bg-[#D4AF37] text-[#003366] px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wide hover:bg-yellow-400 transition"
              >
                Scholarship
              </button>


            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-3 mr-2">
                <a
                  href="https://www.facebook.com/kricollege/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  <Facebook size={14} />
                </a>




                <a
                  href="https://www.instagram.com/kricollege/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  <Instagram size={14} />
                </a>

                <a
                  href="https://youtube.com/@kricollege?si=Y8bg-0DkvBwo15ik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  <Youtube size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/company/delhi-public-school-fatehpur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="/images/THE KING RASHID INTERNATIONAL INSTITUTE.pdf"
                  download
                >
                  <DownloadIcon size={14} />

                </a>
              </div>
              <button
                onClick={() => openModal({ type: 'admission' })}
                className="bg-[#D4AF37] text-[#003366] px-4 py-1 rounded-sm font-bold cursor-pointer hover:bg-yellow-400 text-[11px] uppercase tracking-wide animate-pulse shadow-sm"
              >
                Apply Now
              </button>

            </div>
          </div>
        </div>



        {/* Branding Section */}
        {/* Branding Section */}
        <div className="container-custom py-3 flex flex-row items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="group block">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="KRI College Logo"
                  width={100}
                  height={100}
                  className="w-24 h-24 object-contain"
                />
              </div>

            </Link>
            {/* <div className="flex-1 flex justify-end items-center"> */}
            <div className="flex-shrink-0 pl-3">
              <Image
                src="/images/logo13.png"
                alt="excellence"
                width={50}
                height={50}
                className="w-20 h-20 object-contain"
              />

            </div>
            {/* </div> */}
          </div>

          {/* Center: Brand Text */}
          <div className="flex-shrink-0 flex flex-col items-center text-center px-4">
            <Link href="/" className="group block">
              <div className="flex gap-4 text-base font-bold text-gray-700 mb-1 leading-tight group-hover:text-[#003366] transition-colors justify-center">
                <span>தி கிங் ரஷித் சர்வதேச நிறுவனம்</span>
                <span className="text-gray-300">|</span>
                <span>थे किंग राशिद अंतर्राष्ट्रीय संस्थान</span>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-black text-[#003366] uppercase tracking-wide leading-tight mb-1 group-hover:text-[#D4AF37] transition-colors">
                  THE KING RASHID INTERNATIONAL INSTITUTE
                </h1>
                <span className="text-[#003366] font-bold">(COLLEGE OF AERONAUTICS)</span>
              </div>
              <div className="space-y-1 text-sm font-semibold text-gray-800 max-w-4xl mx-auto mt-1">
                <p>
                  A collaborative institution approved by{" "}
                  <span className="text-[#003366] font-bold">Alagappa University</span>
                  {" "} (A state Government University)
                </p>

                <div className="flex justify-center gap-2 text-xs font-medium text-gray-600">
                  <span>State University</span>
                  <span>|</span>
                  <span className="text-[#003366] font-bold">A++ by NAAC</span>
                  <span>|</span>
                  <span>Category - I University by UGC</span>
                </div>

                <p className="mt-2 text-sm font-semibold text-gray-800 text-center">
                  Approved Institution of Central BSS – Chennai
                  <span className="mx-2 text-gray-400">|</span>
                  Authorised Consultant for DGCA Approved Institution – New Delhi
                </p>
              </div>
            </Link>
          </div>

          {/* Right: Images */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/naac.png"
                alt="NAAC A++"
                width={100}
                height={110}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/founder.png"
                alt="Founder"
                width={100}
                height={110}
                className="w-[100px] h-[110px] object-cover rounded-full ring-4 ring-gray-200 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="w-full bg-[#003366] text-white relative">
          <div className="container-custom">
            <ul className="flex flex-nowrap justify-between items-center w-full">
              {navStructure.map((nav, index) => (
                <li key={index} className="group relative flex-shrink-0">
                  <Link
                    href={nav.href || "#"}
                    className="block py-4 px-3 text-[13px] xl:text-sm font-bold uppercase hover:bg-[#002244] hover:text-yellow-400 transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    {nav.label}
                    {nav.hasDropdown && <span className="text-[9px] mt-0.5">▼</span>}
                  </Link>
                  {nav.hasDropdown && nav.items && (
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-lg border-t-4 border-[#D4AF37] min-w-[260px] z-50">
                      <ul className="py-2">
                        {nav.items.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="block px-5 py-2.5 text-sm hover:bg-gray-50 hover:text-[#003366] border-b border-gray-100 last:border-none font-medium"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* ================= MOBILE DRAWER MENU ================= */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMobileMenu}
      ></div>

      <div className={`fixed top-0 left-0 w-[85%] max-w-[320px] h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 md:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        {/* Drawer Header */}
        <div className="p-6 bg-[#003366] text-white relative overflow-hidden flex-shrink-0">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 mb-4 shadow-xl border-4 border-[#D4AF37]">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-black text-2xl leading-none uppercase tracking-tight mb-1">KRI College</h3>
            <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.2em] uppercase">Aeronautics</p>
          </div>
          {/* Decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-1">
            {navStructure.map((nav, index) => (
              <li key={index} className="rounded-lg overflow-hidden transition-all duration-200">
                {nav.hasDropdown ? (
                  <div
                    className={`flex justify-between items-center py-4 px-4 font-bold text-[#003366] text-sm uppercase cursor-pointer transition-colors border-l-4 ${activeMobileSubmenu === index ? 'bg-blue-50 border-[#D4AF37]' : 'border-transparent hover:bg-gray-50'}`}
                    onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index)}
                  >
                    {nav.label}
                    <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${activeMobileSubmenu === index ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                  </div>
                ) : (
                  <Link
                    href={nav.href || "#"}
                    className="flex justify-between items-center py-4 px-4 font-bold text-[#003366] text-sm uppercase transition-colors border-l-4 border-transparent hover:bg-gray-50 hover:border-[#D4AF37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {nav.label}
                  </Link>
                )}

                {/* Collapsible Submenu */}
                {nav.hasDropdown && nav.items && (
                  <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${activeMobileSubmenu === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="py-2 pl-8 pr-4 space-y-2 border-l-2 border-gray-200 ml-6 my-2">
                      {nav.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            className="block py-2 text-sm text-gray-600 font-medium hover:text-[#003366] hover:translate-x-1 transition-transform"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Drawer Footer & Actions */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal({ type: 'admission' });
            }}
            className="block w-full bg-[#D4AF37] text-[#003366] text-center font-bold uppercase py-3 rounded shadow-md hover:bg-yellow-400 transition-colors mb-6"
          >
            Apply For Admission
          </button>
          <div className="flex justify-center gap-8">
            <Link href="https://www.facebook.com/kricollege/" className="text-gray-400 hover:text-[#003366] transition-colors"><Facebook size={22} /></Link>
            <Link href="#" className="text-gray-400 hover:text-[#003366] transition-colors"><Twitter size={22} /></Link>
            <Link href="https://www.linkedin.com/company/delhi-public-school-fatehpur/" className="text-gray-400 hover:text-[#003366] transition-colors"><Linkedin size={22} /></Link>
            <Link href="https://www.instagram.com/kricollege/" className="text-gray-400 hover:text-[#003366] transition-colors"><Instagram size={22} /></Link>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full bg-[#f8f9fa] border-b border-gray-200 relative z-30">
        <div className="container-custom flex items-center py-2">
          <div className="bg-[#cc0000] text-white px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-bold rounded mr-2 md:mr-3 whitespace-nowrap uppercase tracking-wide animate-pulse">
            Update
          </div>
          <div className="marquee-container border-none bg-transparent flex-1 overflow-hidden">
            <div className="marquee-content text-xs md:text-sm font-medium text-black whitespace-nowrap animate-[marquee_20s_linear_infinite]">
              Admissions 2025 Open • Scholarships Available • Visit Campus Today
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
