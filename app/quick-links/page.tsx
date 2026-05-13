import Image from "next/image";
import { Metadata } from 'next';
import {
  Plane,
  GraduationCap,
  Users,
  Target,
  BookOpen,
  Heart,
  Link as LinkIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quick Links | Student Resources & Aviation Portals | KRI College",
  description: "Access important aviation regulatory links (DGCA, BCAS), scholarship portals, and student payment details for KRI College.",
  keywords: ["KRI Quick Links", "Aviation Regulatory Links", "Student Payments", "Scholarship Portals", "DGCA Links", "Aviation Jobs"],
  openGraph: {
    title: "KRI College Quick Resources",
    description: "Essential links for aviation students, regulatory bodies, and scholarship information.",
    images: [
      '/images/social.jpg',
      '/images/Instagram QR.png',
      '/images/kri-front.jpeg'
    ],
  }
};

export default function QuickLinksPage() {
  return (
    <section className="scroll-mt-24 bg-gray-50 border-t border-gray-200 py-12">
      <div className="container-custom">
        {/* Header */}
        <h1 className="text-xl font-serif font-bold text-[#003366] text-center mb-3">
          Quick Links
        </h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-8"></div>

        <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Scan the QR codes below to connect with King Rashid International College
          through our official platforms and student services.
        </p>

        {/* QR Codes - Social Media & Payment */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {[
            {
              src: "/images/insta.png",
              label: "Instagram",
              url: "https://www.instagram.com/kricollege/",
              icon: "📸"
            },
            {
              src: "/images/Picture1.png",
              label: "YouTube",
              url: "https://www.youtube.com/@kricollege",
              icon: "▶️"
            },
            {
              src: "/images/Gpay2.png",
              label: "Google Pay",
              url: "upi://pay?pa=kingrashidcollege-1@okaxis&pn=KRI%20College",
              icon: "💳"
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-gray-200 hover:border-[#D4AF37] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center gap-3 hover:-translate-y-1"
            >
              <div className="bg-gray-50 group-hover:bg-blue-50 p-3 rounded-lg w-full flex justify-center items-center aspect-square transition-colors">
                <Image
                  src={item.src}
                  alt={`${item.label} QR Code`}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-serif font-bold text-[#003366] uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">
                {item.label}
              </h3>
              <span className="text-[10px] text-gray-400">
                Tap to open
              </span>
            </a>
          ))}
        </div>

        {/* Account Details */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-4 md:p-8 mb-12 max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#003366] text-center mb-6 md:mb-8 uppercase border-b-2 border-[#D4AF37] pb-2 inline-block mx-auto">
            Account Details
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
            {/* Bank Details */}
            <div className="w-full md:w-3/5 space-y-3">
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-gray-100">
                  <span className="font-bold text-[#003366] min-w-[100px] md:min-w-[120px]">A/C Name</span>
                  <span className="font-semibold text-gray-800 break-words">THE KING RASHID INTERNATIONAL INST</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-gray-100">
                  <span className="font-bold text-[#003366] min-w-[100px] md:min-w-[120px]">Bank Name</span>
                  <span className="font-semibold text-gray-800">HDFC BANK</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-gray-100">
                  <span className="font-bold text-[#003366] min-w-[100px] md:min-w-[120px]">A/C Number</span>
                  <span className="font-semibold text-gray-800 tracking-wider">50200099664362</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-gray-100">
                  <span className="font-bold text-[#003366] min-w-[100px] md:min-w-[120px]">IFSC Code</span>
                  <span className="font-semibold text-gray-800">HDFC0008271</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-gray-100">
                  <span className="font-bold text-[#003366] min-w-[100px] md:min-w-[120px]">Google Pay</span>
                  <span className="font-semibold text-gray-800">9894959200</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-gray-100">
                  <span className="font-bold text-[#003366] min-w-[100px] md:min-w-[120px]">UPI ID</span>
                  <span className="font-semibold text-gray-800 break-all text-[11px] md:text-sm">kingrashidcollege-1@okaxis</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-2 py-2">
                  <span className="font-bold text-[#003366] min-w-[100px] md:min-w-[120px]">DD Name</span>
                  <span className="font-semibold text-gray-800 break-words text-[11px] md:text-sm">The King Rashid International Inst., Madurai.</span>
                </div>
              </div>
            </div>

            {/* Payment QR */}
            <div className="w-full md:w-2/5 flex flex-col items-center">
              <div className="bg-white p-2 border-2 border-gray-200 rounded-lg">
                <Image
                  src="/images/Gpay2.png"
                  alt="Payment QR Code"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-xs text-gray-500 font-medium">Scan to pay with any UPI app</span>
            </div>
          </div>
        </div>

        {/* Aviation Links */}
        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6 text-center">
          Quick Links – Aviation & Scholarships
        </h2>
        <div className="space-y-8">

          <div className="bg-white border-t-4 border-[#003366] p-6 shadow-sm">
            <h3 className="font-bold text-[#003366] text-sm uppercase mb-4 flex items-center gap-2">
              <Plane size={20} className="text-[#D4AF37]" /> Aviation Regulatory & Training Links
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "DGCA (Directorate General of Civil Aviation)", url: "https://www.dgca.gov.in", desc: "Regulations, Licensing, Exam Notifications" },
                { name: "BCAS (Bureau of Civil Aviation Security)", url: "https://www.bcasindia.nic.in", desc: "Security Training, Safety Guidelines" },
                { name: "Airports Authority of India (AAI)", url: "https://www.aai.aero", desc: "Recruitment, Airport Operations" },
                { name: "NCS – Aviation Jobs", url: "https://www.ncs.gov.in", desc: "Job Listings & Internships" },
                { name: "ICAO (International Civil Aviation Organization)", url: "https://www.icao.int", desc: "Global Standards & Safety" },
                { name: "IATA (International Air Transport Association)", url: "https://www.iata.org", desc: "Airline Management & Courses" },
                { name: "IMD – Aviation Meteorological Services", url: "https://mausam.imd.gov.in", desc: "Weather Briefings & Reports" }
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="group block p-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-[#003366] text-xs group-hover:underline">{link.name}</span>
                    <LinkIcon size={14} className="text-gray-400 group-hover:text-[#003366]" />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{link.desc}</p>
                </a>
              ))}
            </div>
          </div>


          <div className="bg-white border-t-4 border-[#D4AF37] p-6 shadow-sm">
            <h3 className="font-bold text-[#003366] text-sm uppercase mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-[#D4AF37]" /> Government Scholarship Portals
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in", desc: "Central Govt Unified System" },
                { name: "AICTE Scholarships", url: "https://www.aicte-india.org", desc: "Technical Education Support" },
                { name: "Merit-cum-Means (Minority)", url: "https://www.minorityaffairs.gov.in", desc: "Financial Aid for Minorities" },
                { name: "Vidya Lakshmi Portal", url: "https://www.vidyalakshmi.co.in", desc: "Education Loan Gateway" },
                { name: "State Scholarship Portals", url: "#", desc: "Karnataka SSP, Digital Gujarat, etc." }
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="group block p-3 bg-gray-50 hover:bg-amber-50 border border-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-[#5c4b37] text-xs group-hover:underline">{link.name}</span>
                    <LinkIcon size={14} className="text-gray-400 group-hover:text-[#5c4b37]" />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{link.desc}</p>
                </a>
              ))}
            </div>
          </div>


          <div className="bg-[#f8fbff] border border-blue-100 p-6 rounded-sm">
            <h3 className="font-bold text-[#003366] text-sm uppercase mb-4 flex items-center gap-2">
              <Users size={20} className="text-[#D4AF37]" /> Additional Financial Aid & Skill Development
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="https://www.mhrdnats.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white border border-gray-200 hover:border-[#003366] transition-colors">
                <div className="p-2 bg-blue-50 text-[#003366] rounded-full"><Target size={16} /></div>
                <div>
                  <span className="block font-bold text-[#003366] text-xs">National Apprenticeship (NATS)</span>
                  <span className="text-[10px] text-gray-500">Stipend-based training</span>
                </div>
              </a>
              <a href="https://www.skillindia.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white border border-gray-200 hover:border-[#003366] transition-colors">
                <div className="p-2 bg-blue-50 text-[#003366] rounded-full"><BookOpen size={16} /></div>
                <div>
                  <span className="block font-bold text-[#003366] text-xs">NSDC – Skill India</span>
                  <span className="text-[10px] text-gray-500">Courses & Certifications</span>
                </div>
              </a>
              <a href="https://www.sheriffindian.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white border border-gray-200 hover:border-[#003366] transition-colors col-span-full md:col-span-1">
                <div className="p-2 bg-blue-50 text-[#003366] rounded-full"><Heart size={16} /></div>
                <div>
                  <span className="block font-bold text-[#003366] text-xs">Sheriff Indian Foundation</span>
                  <span className="text-[10px] text-gray-500">NGO Support for Youth</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
