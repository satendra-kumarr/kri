

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { useEnquiry } from '../context/EnquiryContext';

import {
    Building2,
    Target,
    History,
    Award,
    Users,
    User,
    FileText,
    Heart,
    Trophy,
    BookOpen,
    GraduationCap,
    Link as LinkIcon,
    ScrollText,
    CheckCircle,
    MapPin,
    Plane,
    ChevronRight,
    ChevronDown,
    Printer,
    Share2,
    Download,
    DownloadIcon,
    Calendar,
    Cpu,
    Wrench,
    Globe,
    Briefcase,
    Factory,
    Rocket
} from 'lucide-react';


export default function InstitutionPage() {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const { openModal } = useEnquiry();
    const sections = [
        { id: 'about', label: 'About Us' },
        { id: 'mission', label: 'Mission & Vision' },
        { id: 'history', label: 'History & Legacy' },
        { id: 'approvals', label: 'Approvals & Accreditation' },
        { id: 'leadership', label: 'Leadership Team' },
        { id: 'founder', label: 'Founder\'s  Profile' },
        { id: 'chairperson', label: 'Chairman\'s Message' },
        { id: 'admission', label: 'Admission Procedure' },
        { id: 'social', label: 'Social Contribution' },
        { id: 'sports', label: 'Sports & Athletics' },
        { id: 'faith', label: 'Faith & Values' },
        { id: 'scholarship', label: 'Scholarship Exams' },
        { id: 'alumni', label: 'Our Alumni' },
        { id: 'links', label: 'Quick Links' },
        { id: 'mou', label: 'MoUs' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <div className="container-custom py-10 flex flex-col lg:flex-row gap-8">

                {/* Left Sidebar - Responsive */}
                <aside className="lg:w-1/4 h-fit lg:sticky lg:top-4 z-10 text-sm">
                    <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-6">
                        {/* Mobile Toggle Header */}
                        <div
                            className="bg-[#003366] text-white p-3 font-bold uppercase text-sm tracking-wide flex justify-between items-center cursor-pointer lg:cursor-default"
                            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
                        >
                            <span>Quick Navigation</span>
                            <ChevronDown size={16} className={`lg:hidden transition-transform ${isMobileNavOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Navigation Links - Collapsible on Mobile */}
                        <nav className={`flex-col divide-y divide-gray-200 ${isMobileNavOpen ? 'flex' : 'hidden'} lg:flex`}>
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={() => setMobileNavOpen(false)}
                                    className="p-3 hover:bg-gray-50 text-gray-700 hover:text-[#003366] hover:pl-4 transition-all duration-200 flex items-center justify-between group font-medium"
                                >
                                    {section.label}
                                    <ChevronRight size={14} className="text-gray-300 group-hover:text-[#D4AF37]" />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Widget */}
                    <div className="bg-[#f8f9fa] border border-gray-300 rounded-sm p-4 shadow-sm">
                        <h4 className="font-bold text-[#003366] border-b border-gray-300 pb-2 mb-3">Admission Enquiry</h4>
                        <div className="space-y-2 text-xs text-gray-700">
                            <p><strong>Phone:</strong> +91 98949 25233</p>
                            <p><strong>Email:</strong> admission@kricollege.edu.in</p>
                            <button
                                onClick={() =>
                                    openModal({
                                        type: 'admission',
                                        course: ''
                                    })
                                }
                                className="w-full mt-3 bg-[#D4AF37] text-[#003366] font-bold py-2 uppercase text-xs rounded-sm hover:bg-yellow-500 transition-colors">

                                Apply Now
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="lg:w-3/4 space-y-12 bg-white p-4 md:p-10 border border-gray-200 shadow-sm rounded-sm">

                    {/* About Us */}
                    <section id="about" className="scroll-mt-24">
                        <h2 className="text-2xl font-serif font-bold text-[#003366] border-b-2 border-[#D4AF37] inline-block mb-6 pb-1">
                            About Us
                        </h2>
                        <div className="prose max-w-none text-justify text-gray-800 text-sm leading-7">
                            <p className="mb-4">
                                The <strong className="text-[#003366]">King Rashid International College of Aeronautics</strong> is one of India’s emerging aviation education institutions dedicated to producing globally skilled aviation professionals. With a strong academic foundation, industry-focused training, and national-level recognitions, the college is committed to shaping the future of India’s aviation workforce.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-[#003366] p-4 my-4 italic text-gray-700">
                                Approved by Alagappa University, recognized by Central Bharat Sevak Samaj (BSS), registered under MSME, aligned with the Aerospace & Aviation Sector Skill Council (AASSC), ISO-certified for quality, and partnered with leading national and international airlines.
                            </div>
                            <p>
                                Driven by discipline, innovation, and a student-first approach, the college prepares learners to excel in domestic and international airports, airlines, ground operations, and global aviation service sectors.
                            </p>
                        </div>
                    </section>

                    {/* Mission & Vision */}
                    <section id="mission" className="scroll-mt-24">
                        <div className="grid md:grid-cols-2 gap-0 border border-gray-300">
                            <div className="p-6 md:p-8 bg-white border-b md:border-b-0 md:border-r border-gray-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-[#003366] p-2 rounded-sm text-white"><Target size={20} /></div>
                                    <h3 className="text-xl font-bold text-[#003366] font-serif uppercase">Mission</h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-6 text-justify">
                                    To empower India’s youth and global learners with world-class aviation, medical, and technical education that is industry-driven, future-focused, and globally recognized. We strive to create professionals who are skilled, ethical, confident, and capable of contributing to India’s vision.
                                </p>
                            </div>
                            <div className="p-6 md:p-8 bg-gray-50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-[#D4AF37] p-2 rounded-sm text-[#003366]"><Plane size={20} /></div>
                                    <h3 className="text-xl font-bold text-[#003366] font-serif uppercase">Vision</h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-6 text-justify">
                                    To establish India as a global destination for education, employment, and innovation. We envision India becoming a global skill capital, fostering a multicultural educational environment, and building strong partnerships with global universities.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* History */}
                    <section id="history" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#D4AF37] block"></span> History & Legacy
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1 text-sm text-gray-800 leading-7 text-justify">
                                <p className="mb-3">
                                    King Rashid International College of Aeronautics began its journey with a small group of just <strong>6 students</strong>, driven by a mission to make aviation education accessible. With continuous improvement and strong industry collaborations, the institution has achieved remarkable growth.
                                </p>
                                <p className="font-semibold text-[#003366]">
                                    Today, we proudly celebrate 500+ student placements across International & Domestic Airports and Airlines.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3">
                                <div className="border p-2 bg-white shadow-sm">
                                    <div className="h-48 md:h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-xs text-center p-2 relative">
                                        <Image
                                            src="/images/kri-front.jpeg"
                                            alt="KRI College Front"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Approvals Table */}
                    <section id="approvals" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4">Approvals & Recognitions</h2>

                        {/* Data for Approvals */}
                        {(() => {
                            const approvals = [
                                { body: 'Alagappa University', significance: 'NAAC A++ accredited state university programs.' },
                                { body: 'Bharat Sevak Samaj (BSS)', significance: 'National-level vocational certification.' },
                                { body: 'MSME Govt of India', significance: 'Official government recognition.' },
                                { body: 'DGCA Institutions', significance: 'Collaboration with DGCA guideline functioning bodies.' },
                                { body: 'AAI Internship', significance: 'Practical training agreement with Airport Authority of India.' },
                                { body: 'ISO Certified', significance: 'International standard quality management.' },
                            ];

                            return (
                                <>
                                    {/* Table View (Scrollable on Mobile) */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm border-collapse border border-gray-300 min-w-[600px]">
                                            <thead className="bg-[#003366] text-white">
                                                <tr>
                                                    <th className="p-3 border border-gray-400 text-left w-1/3">Approving Body</th>
                                                    <th className="p-3 border border-gray-400 text-left">Significance</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-700">
                                                {approvals.map((item, index) => (
                                                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                        <td className="p-3 border border-gray-300 font-bold">{item.body}</td>
                                                        <td className="p-3 border border-gray-300">{item.significance}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            );
                        })()}
                    </section>

                    <section id="leadership" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4">Leadership Team</h2>
                        <p className="text-sm text-gray-700 mb-6 italic border-l-4 border-[#D4AF37] pl-4">
                            &quot;The leadership at King Rashid International College of Aeronautics is driven by aviation expertise, academic excellence, and a commitment to national development.&quot;
                        </p>
                        <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group mb-6">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                            <div className="flex gap-4 mb-4">
                                <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                    <Image
                                        src="/images/founder.png"
                                        alt="Er. K. Jaffer Sheriff"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Er. K. Jaffer Sheriff</h4>
                                    <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">Founder </div>
                                    <p className="text-[10px] text-gray-500">Chief Instructor</p>
                                </div>
                            </div>

                            <p className="text-xs  text-gray-600 leading-relaxed mb-4">
                                A visionary leader with deep roots in global aviation and youth development.
                            </p>
                            <p className="text-xs  text-gray-600 leading-relaxed mb-4">
                                Jaffer Sheriff is a qualified <strong>Aircraft Maintenance Engineer</strong> and an experienced
                                <strong> Aircraft Engineer (Ex-Dubai Airports)</strong>, as well as a dedicated social worker.
                                With strong technical expertise in aircraft maintenance and global aviation operations, he founded
                                the <strong>King Rashid International College of Aeronautics</strong> to provide industry-oriented aviation education.
                                As the Founder of Sheriff Indian Foundation and a recipient of an <strong>Honorary Doctorate for Social Service</strong>, he is committed to empowering students with practical skills,
                                discipline, and international career opportunities in aviation.
                            </p>


                            {/* <div className="relative h-30 w-full bg-gray-200 rounded-sm overflow-hidden">
                                    <Image
                                        src="/images/founder-with-minister.png"
                                        alt="Er. K. Jaffer Sheriff - Visionary"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div> */}
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Founder Card */}


                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                        <Image
                                            src="/images/chairman.png"
                                            alt="Mrs. Sameera Sheriff"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Mrs. Sameera Sheriff
                                            <span className='text-[#003366] font-bold text-xs uppercase mb-1 pl-1'>(BA & B.Ed)</span>
                                        </h4>

                                        <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">chairman </div>
                                        <p className="text-[10px] text-gray-500">King Rashid Internatonal College (KRI College)</p>

                                    </div>
                                </div>


                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    <strong>Sanfa Sameera Sheriff</strong>, Chairman of
                                    <strong> King Rashid International College of Aeronautics</strong>, holds a
                                    <strong> BA and B.Ed</strong> and brings valuable teaching experience along with a deep commitment to social service.
                                    Her strong academic background, passion for education, and dedication to community welfare play a vital role in
                                    promoting quality learning, student empowerment, and inclusive growth within the institution.
                                </p>

                            </div>

                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                        <Image
                                            src="/images/Rilvana.jpeg"
                                            alt="Rilavana"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Mrs. Saburan Rilavana</h4>
                                        <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">Admin Head </div>
                                        <p className="text-[10px] text-gray-500">B.com holder</p>

                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    <strong>Mrs. Saburan Rilavana </strong> is an experienced <strong> Administrative Head </strong> at <strong>King Rashid International College of Aeronautics (KRI)</strong>, with over
                                    <strong> 4+ years of expertise </strong> in academic administration, institutional coordination, student management,
                                    and operational leadership. Known for disciplined approach, effective communication, and strong organizational skills,
                                    she plays a key role in ensuring smooth administrative functioning and supporting the college’s academic excellence and growth.
                                </p>

                            </div>

                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                        <Image
                                            src="/images/Althaf Sheri.png"
                                            alt="Adv. Althaf Sherif"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Adv. Althaf Sherif
                                            <span className='text-[#003366] font-bold text-xs uppercase mb-1 pl-1'>(B.E., M.B.A., LL. B)</span></h4>
                                        <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">Senior Advocate</div>
                                        <p className="text-[10px] text-gray-500">Madurai Bench, Madras High Court</p>
                                    </div>
                                </div>
                                <h1 className="font-bold text-black text-lg mb-1 relative z-10 leading-snug">
                                    Managing Director & Head – Legal Department, The <span className="text-sm">
                                        King Rashid International College (KRI College)
                                    </span>
                                </h1>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Advocate Althaf Sheriff is a distinguished legal professional with over <strong>7 years of experience as a
                                        Senior Advocate</strong>  practicing at the <strong>Madurai Bench of the Madras High Court. </strong> With a strong
                                    multidisciplinary academic background in <strong>Engineering, Management, and Law,</strong> he brings
                                    comprehensive legal insight and strategic expertise to both judicial practice and institutional
                                    governance. </p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    At <strong>King Rashid International College,</strong> Advocate Althaf Sheriff serves as the <strong>Correspondent and  Head of the Legal Department,</strong>  where he oversees all legal, compliance, and statutory matters of
                                    the institution. His responsibilities include legal advisory, regulatory compliance, documentation,
                                    institutional correspondence, and representation before legal and regulatory authorities.
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >Known for his professionalism, ethical standards, and analytical approach, he plays a crucial role in
                                    safeguarding the institution’s legal integrity while supporting transparent administration and policy
                                    implementation. His leadership strengthens the college’s legal framework and ensures adherence to
                                    educational and statutory regulations.</p>

                            </div>

                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                        <Image
                                            src="/images/surya.png"
                                            alt="Mr. Surya"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Mr. Surya
                                            <span className='text-[#003366] font-bold text-xs uppercase mb-1 pl-1'>(M.Tech)</span></h4>
                                        <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">Board Director and General Secretary</div>
                                        <p className="text-[10px] text-gray-500">King Rashid Internatonal College (KRI College)</p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Mr. Surya, M.Tech, serves as the <strong>General Secretary of King Rashid International College,</strong>  where he
                                    plays a key role in the institution’s academic administration, strategic coordination, and studentfocused initiatives. With a strong technical background and a deep commitment to educational
                                    excellence, he actively supports the college’s mission to deliver quality education aligned with
                                    industry and global standards. </p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    As General Secretary, Mr. Surya oversees institutional planning, policy implementation, interdepartmental coordination, and academic governance. He works closely with the management,
                                    faculty, and administrative teams to ensure smooth operations, regulatory compliance, and
                                    continuous institutional improvement. </p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >Holding a <strong>Master of Technology (M.Tech) </strong> degree, Mr. Surya brings analytical expertise, leadership
                                    skills, and a solution-oriented approach to his role. He strongly believes in <strong>  discipline, innovation,
                                        and student empowerment,</strong> and consistently encourages initiatives that enhance skill development,
                                    research culture, and professional ethics among students.
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >His vision focuses on strengthening academic quality, promoting transparent administration, and
                                    supporting students in achieving successful careers in aviation, engineering, and allied professional
                                    fields.</p>
                            </div>


                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                        <Image
                                            src="/images/Ms. Ahila.png"
                                            alt="Er. K. Jaffer Sheriff"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Ms. Ahila
                                            <span className='text-[#003366] font-bold text-xs uppercase mb-1 pl-1'>( B.A., M.A., M.A., B.Ed)</span></h4>
                                        <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">Principal </div>
                                        <p className="text-[10px] text-gray-500">King Rashid International College (KRI College)
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Mrs. Ahila is a seasoned academician and dedicated education leader, currently serving as the
                                    <strong>Principal of King Rashid International College.</strong> With over <strong>15 years of rich university-level  experience,  </strong>
                                    she brings deep academic insight, administrative excellence, and a strong commitment
                                    to student-centered education.</p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">Holding multiple postgraduate qualifications along with a <strong>Bachelor of Education (B.Ed),</strong>  Ms. Ahila
                                    has contributed extensively to <strong> teaching, curriculum development, academic governance, and
                                        institutional management.</strong> Her leadership focuses on maintaining high academic standards,
                                    fostering discipline, and promoting holistic development among students</p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >Beyond academics, Ms. Ahila is an active <strong>social worker,</strong>  deeply involved in educational awareness,
                                    community development, and student welfare initiatives. She believes education should empower
                                    individuals intellectually, ethically, and socially.
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >As Principal, she works closely with management, faculty, and stakeholders to strengthen academic
                                    quality, ensure regulatory compliance, and prepare students for professional success and
                                    responsible citizenship.</p>
                            </div>

                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                        <Image
                                            src="/images/Mr. Aboobacker.png"
                                            alt="Mr. Aboobacker"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Mr. Aboobacker Rafeek
                                            <span className='text-[#003366] font-bold text-xs uppercase mb-1 pl-1'>( B.Com.)</span></h4>
                                        <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">Public Relations Officer </div>
                                        <p className="text-[10px] text-gray-500">King Rashid International College (KRI College)
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Mr. Aboobacker Rafeek serves as the <strong>Public Relations Officer of King Rashid International College,</strong>
                                    bringing with him over <strong>12 years of international professional experience</strong> as a <strong>Supervisor in the
                                        Harbour and Exports sector in the United Arab Emirates.</strong> His extensive exposure to global
                                    operations, stakeholder coordination, and public dealings adds strong value to the institution’s
                                    outreach and communication efforts.</p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">Holding qualifications in <strong> Commerce (B.Com)</strong> Mr. Rafeek combines managerial
                                    expertise with effective communication and people-oriented skills. In his role at KRI College, he
                                    actively manages public relations, institutional communication, student and parent interactions,
                                    industry coordination, and community engagement.</p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >A committed <strong>social worker,</strong> Mr. Rafeek believes in serving society through education, awareness,
                                    and community development initiatives. His professional discipline, international experience, and
                                    service mindset contribute significantly to strengthening the college’s public image and stakeholder
                                    relationships.
                                </p>
                            </div>

                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                        <Image
                                            src="/images/Ms. Kishori.png"
                                            alt="Er. K. Jaffer Sheriff"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Ms. Kishori
                                            <span className='text-[#003366] font-bold text-xs uppercase mb-1 pl-1'>(B.A., M.A., B.Ed., M.Ed)</span></h4>
                                        <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">Professor & Student Coordinator </div>
                                        <p className="text-[10px] text-gray-500">King Rashid Internatonal College (KRI College)</p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Ms. Kishori is a dedicated academic professional currently serving as a  <strong> Professor and Student
                                        Coordinator at King Rashid Internatonal College.</strong> With over  <strong>4 years of teaching experience,</strong>  she brings strong academic knowledge, efectve pedagogy, and a student-focused approach to higher educaton.
                                </p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Holding advanced qualifcatons in  <strong> Arts and Educaton,</strong> including  <strong>B.A., M.A., B.Ed., </strong>and M.Ed, Ms. Kishori is actvely involved in classroom teaching, academic mentoring, and curriculum support. As Student Coordinator, she plays a key role in guiding students, addressing academic concerns,
                                    supportng student actvites, and fostering a positve learning environment. </p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >She is commited to promotng <strong>discipline, academic excellence, and holistc student development.</strong>   Her teaching philosophy emphasizes clarity of concepts, inclusive learning, and contnuous
                                    academic improvement.</p>

                            </div>
                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003366] rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-20 h-20 shrink-0 border-2 border-[#D4AF37] rounded-full overflow-hidden">
                                        <Image
                                            src="/images/Mr. Ahamed.png"
                                            alt="Mr. Ahamed"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Mr. Ahamed Fazith
                                            <span className='text-[#003366] font-bold text-xs uppercase mb-1 pl-1'>( B.P.T)</span></h4>
                                        <div className="text-[#D4AF37] font-bold text-xs uppercase mb-1">Physiotherapist & Student Fitness Head  </div>
                                        <p className="text-[10px] text-gray-500">King Rashid International College (KRI College)
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Mr. Ahamed Fazith, B.P.T, is a qualified <strong>Physiotherapist</strong> with over <strong>4 years of professional and clinical
                                        experience.</strong> He has gained valuable hands-on training as an <strong>Intern physiotherapist in Madurai Rajaji Government hospital </strong> where he worked with diverse patient cases and rehabilitation programs.
                                </p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">At <strong>The King Rashid International College,</strong> he serves as the <strong>Physiotherapist and Sports Coordinator,</strong>
                                    playing a vital role in promoting student health, physical fitness, and sports development. He
                                    provides physiotherapy support, injury prevention guidance, rehabilitation assistance, and fitness
                                    awareness programs for students.</p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >With a strong interest in <strong>sports medicine and student wellness,</strong>  Mr. Fazith actively encourages a
                                    healthy lifestyle, discipline, and physical well-being among students. His approach focuses on
                                    preventive care, performance enhancement, and holistic development.

                                </p>
                            </div>


                        </div>
                    </section>
                    {/* Founder Profile */}
                    {/* Founder Profile */}
                    <section id="founder" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6 border-b border-gray-200 pb-2">
                            Founder’s Profile
                        </h2>

                        {/* Professional Background */}
                        <div className="mb-8">
                            <h3 className="flex items-center gap-2 text-md font-bold text-[#003366] mb-3 uppercase tracking-wide">
                                <User size={18} className="text-[#D4AF37]" /> Professional Background
                            </h3>
                            <div className="text-sm text-gray-700 text-justify leading-7 space-y-3">
                                <p>
                                    <strong>Er. K. Jaffer Sheriff’s</strong> professional journey stands on a solid foundation of aviation engineering, global airport operations, and youth development initiatives. His experience spans both Indian and international aviation environments, bringing a blend of technical mastery and global understanding.
                                </p>
                                <p>
                                    Throughout his career, he has worked with multidisciplinary teams, modern aircraft systems, and international industry standards—experiences that now shape the high-quality training offered at his institution.
                                </p>
                            </div>
                        </div>

                        {/* Detailed Cards for Specific Roles */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Aircraft Engineer */}
                            <div className="bg-white border border-gray-200 p-5 shadow-sm">
                                <h4 className="font-bold text-[#003366] border-b border-[#D4AF37] pb-2 mb-3 text-sm uppercase">Aircraft Engineer</h4>
                                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                    With deep technical expertise in aircraft systems, maintenance procedures, and aviation safety, Er. Sheriff has worked hands-on with:
                                </p>
                                <ul className="grid grid-cols-1 gap-1 text-xs text-gray-700 font-medium list-disc list-inside">
                                    <li>Aircraft structure & engine systems</li>
                                    <li>Maintenance inspections & quality standards</li>
                                    <li>Safety protocols & regulatory compliance</li>
                                    <li>Technical troubleshooting</li>
                                </ul>
                            </div>

                            {/* Ex-Dubai Airports */}
                            <div className="bg-white border border-gray-200 p-5 shadow-sm">
                                <h4 className="font-bold text-[#003366] border-b border-[#D4AF37] pb-2 mb-3 text-sm uppercase">Ex–Dubai Airports</h4>
                                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                    Er. Jaffer Sheriff’s tenure at Dubai Airports—one of the world’s leading aviation hubs—provided him exposure to:
                                </p>
                                <ul className="grid grid-cols-1 gap-1 text-xs text-gray-700 font-medium list-disc list-inside">
                                    <li>International airport operations</li>
                                    <li>Multinational aviation teams</li>
                                    <li>Advanced safety & operational systems</li>
                                    <li>High efficiency & precision-driven processes</li>
                                </ul>
                            </div>

                            {/* Social Service */}
                            <div className="bg-white border border-gray-200 p-5 shadow-sm">
                                <h4 className="font-bold text-[#003366] border-b border-[#D4AF37] pb-2 mb-3 text-sm uppercase">Social Service & Youth Development</h4>
                                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                                    Beyond aviation, Er. Sheriff is widely known for his strong involvement in youth empowerment. His initiatives include:
                                </p>
                                <ul className="grid grid-cols-1 gap-1 text-xs text-gray-700 font-medium list-disc list-inside">
                                    <li>Educational support for underprivileged students</li>
                                    <li>Child welfare & community upliftment</li>
                                    <li>Leadership and discipline training</li>
                                </ul>
                            </div>


                            {/* Honorary Doctorate */}
                            <div className="bg-[#003366] text-white p-5 shadow-sm">
                                <h4 className="font-bold text-[#D4AF37] border-b border-white/20 pb-2 mb-3 text-sm uppercase">Honorary Doctorate</h4>
                                <p className="text-xs text-white/90 mb-3 leading-relaxed">
                                    In recognition of his continuous service to society, education, and youth empowerment, Er. Sheriff has been awarded an Honorary Doctorate. This reflects his lifelong dedication to creating meaningful impact in the community.
                                </p>
                                <div className="flex items-center gap-2 text-[#D4AF37]">
                                    <Award size={16} /> <span className="text-xs font-bold uppercase">Awarded for Nation Building</span>
                                </div>
                            </div>

                        </div>

                        <div className="bg-white border border-gray-200 p-6 shadow-md relative mt-10 grid md:grid-cols-12 gap-8 items-start mb-5">
                            <div className="absolute top-0 left-6 -mt-3 bg-[#D4AF37] text-[#003366] text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                Founder Message
                            </div>
                            {/* IMAGE COLUMN */}
                            <div className="md:col-span-3">
                                <div className="mt-7">
                                    <img
                                        src="/images/founder-full.png"
                                        alt="Er. K. Jaffer Sheriff"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="mt-6 text-center md:text-left">
                                    {/* Name */}
                                    <h3 className="text-[15px] font-serif font-semibold text-[#003366] leading-snug tracking-wide">
                                        Er. K. Jaffer Sheriff
                                    </h3>

                                    {/* Designation */}
                                    <p className="mt-1 text-[10px] text-yellow-500 font-medium">
                                        Aircraft Engineer (Ex–Dubai Airports)
                                    </p>

                                    {/* Roles */}
                                    <div className="mt-2 space-y-1">
                                        <p className="text-[10px] text-gray-600 font-medium">
                                            Founder &amp; Chief Instructor, KRI College
                                        </p>

                                        <p className="text-[10px] text-gray-600 font-medium">
                                            National President, SIF – India
                                        </p>
                                    </div>

                                    {/* Award */}
                                    <p className="mt-3 text-[11px] text-gray-500 italic leading-relaxed border-l-2 border-[#003366]/40 pl-3">
                                        Dr. A. P. J. Abdul Kalam Awardee for Social Service
                                    </p>
                                </div>



                            </div>

                            {/* CONTENT COLUMN */}
                            <div className="md:col-span-9 mb-5">

                                <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-left">
                                    <p className=" text-[#003366] border-b border-[#D4AF37] pb-2 mb-3 uppercase font-serif font-bold text-xl">
                                        Message from the Founder
                                    </p>
                                    <p>
                                        At King Rashid International College, our vision was born from a simple yet powerful belief: education should open doors to the future, not merely prepare students for the present. In a world defined by rapid growth, global connectivity, and technological innovation, we established this institution to equip aspiring professionals with the skills, discipline, and confidence they need to excel—both in the skies and in the service of humanity.
                                    </p>
                                    <p>
                                        Our Aviation and Medical programs reflect two pillars of modern society: the pursuit of discovery and the duty of care. Whether you dream of navigating aircraft across international skies or serving on the front lines of healthcare, our mission is to guide you with excellence, integrity, and world-class training.
                                    </p>
                                    <p>
                                        We are committed to providing cutting-edge facilities, internationally recognized curricula, and a learning environment that nurtures leadership, curiosity, and professional mastery. Through strong global partnerships and an unwavering dedication to quality, King Rashid International College continues to shape graduates who are not only skilled, but also ethical, compassionate, and ready to contribute meaningfully to the world.
                                    </p>
                                    <p>
                                        As you embark on this transformative journey with us, I encourage you to dream big, stay committed, and strive.
                                    </p>
                                    <p className="italic font-medium text-[#003366]">
                                        To every student who joins us: you are stepping into a future of limitless possibilities. Your journey begins here, and we are honoured to walk with you as you reach for the highest standards of achievement.
                                    </p>
                                </div>

                                {/* <div className="mt-8 text-right">
                                                    <img
                                                        src="images/sign.png"
                                                        alt="Signature"
                                                        className="h-12 ml-auto opacity-60"
                                                    />
                                                </div> */}
                            </div>
                        </div>

                        {/* Message to Students */}
                        <div className="bg-[#f8fbff] border-l-4 border-[#003366] p-6 md:p-8">
                            <h3 className="font-serif font-bold text-[#003366] text-lg mb-4">Message to Students</h3>
                            <blockquote className="italic text-gray-700 text-sm leading-7 text-justify">
                                &quot;My dear students,
                                <br />
                                You are the future of our nation. Every skill you learn, every discipline you follow, and every dream you chase will help build a stronger India. Aviation is a field of commitment and excellence—and I want each one of you to rise with confidence and purpose.
                                <br />
                                At King Rashid International College of Aeronautics, we provide not just education but direction, values, and opportunities. Use them wisely. Stay focused, stay positive, and always give your best for your family and your country. You are the power that will shape tomorrow’s India.&quot;
                            </blockquote>
                            <div className="mt-4 text-right">
                                <div className="font-bold text-[#003366] text-sm">Er. K. Jaffer Sheriff</div>
                                <div className="text-xs text-[#D4AF37] font-bold uppercase">Founder</div>
                            </div>
                        </div>
                    </section>

                    {/* Chairperson Message */}
                    <section id="chairperson" className="scroll-mt-24">
                        <div className="bg-white border border-gray-200 p-6 shadow-md relative mt-10">
                            <div className="absolute top-0 left-6 -mt-3 bg-[#D4AF37] text-[#003366] text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                Management Message
                            </div>

                            <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-full md:w-1/3 relative">
                                    <div className="aspect-[3/4] relative bg-gray-100 border-b-4 border-[#003366]">
                                        <Image
                                            src="/images/chairman.png"
                                            alt="Mrs. Sameera Sheriff"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="font-bold text-[#003366] text-lg">Mrs. Sameera Sheriff</div>
                                        <div className="text-xs text-gray-500 font-medium">Chairman</div>
                                    </div>
                                </div>

                                <div className="w-full md:w-2/3">
                                    <h3 className="font-serif font-bold text-[#003366] text-xl mb-4">Message from the Chairman</h3>
                                    <div className="text-sm text-gray-700 space-y-4 leading-7 text-justify">
                                        <p>
                                            It is my privilege to welcome you to King Rashid International College, an institution built on excellence, integrity, and a deep commitment to shaping the next generation of global professionals. In a world that evolves every moment, our responsibility is not only to educate, but to empower—guiding our students toward meaningful careers that uplift communities and inspire progress.
                                        </p>
                                        <p>
                                            Our Aviation is the most respected field in today’s world. Aviation represents precision, discipline, and the courage to soar beyond limitations. At KR International College, we bring both these disciplines together to create pathways that prepare students for impactful, fulfilling, and internationally relevant careers.
                                        </p>
                                        <p>
                                            Under my leadership, we strive to maintain the highest standards of academic quality, practical training, and ethical values. Our state-of-the-art facilities, experienced faculty, and globally aligned curriculum ensure that our students receive a balanced education—one that blends knowledge with character, and skill with purpose. To every aspiring student: your dreams matter.
                                        </p>
                                        <p>
                                            Welcome to King Rashid International College—where your ambitions take shape and your future begins with confidence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-right space-y-3">
                                <div>
                                    <div className="font-bold text-[#003366] text-sm">Mrs. Sameera Sheriff</div>
                                    <div className="text-xs text-[#D4AF37] font-bold uppercase">Chairman</div>
                                </div>

                                {/* Download Brochure */}
                                <a
                                    href="/images/THE KING RASHID INTERNATIONAL INSTITUTE.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider
             bg-[#003366] text-white hover:bg-[#D4AF37] hover:text-[#003366]
             transition-all shadow-sm"
                                >
                                    <DownloadIcon size={14} />
                                    Download Brochure
                                </a>

                            </div>

                        </div>
                    </section>

                    {/* Admission Procedure */}
                    <section id="admission" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4">Admission Procedure</h2>

                        {/* Intro */}
                        <p className="text-sm text-gray-700 mb-6 text-justify leading-7">
                            The King Rashid International College of Aeronautics welcomes aspiring students who are passionate about aviation, aerospace, and technical education. We follow a transparent and student-friendly admission process to ensure that every learner receives quality education and the opportunity to excel in national and international careers.
                        </p>

                        <div className="bg-white border border-gray-200 p-4 md:p-6 shadow-sm">
                            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-0 before:ml-2.5 md:before:ml-5 before:w-0.5 before:bg-gray-300">

                                {/* Step 1 */}
                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 top-0 ml-2.5 md:ml-5 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#003366] z-10 transition-colors group-hover:border-[#D4AF37]"></div>
                                    <div className="ml-8 md:ml-12 w-full">
                                        <h3 className="text-sm md:text-base font-bold text-[#003366] mb-2 uppercase">Step 1: Eligibility Criteria</h3>
                                        <div className="text-sm text-gray-700 space-y-2 bg-gray-50 p-3 md:p-4 border-l-4 border-gray-300 rounded-r-sm">
                                            <p className="font-semibold text-xs text-gray-500 uppercase">Educational Qualification:</p>
                                            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-600">
                                                <li><strong>Undergraduate:</strong> 10+2 or equivalent with Physics, Chemistry, and Mathematics.</li>
                                                <li><strong>Diploma/Skill:</strong> Completion of 10th or 12th as per course requirements.</li>
                                                <li><strong>Advanced/Management:</strong> Graduation in relevant streams.</li>
                                            </ul>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                                                <div className="text-xs text-gray-600"><span className="font-bold">Age:</span> 16–25 years</div>
                                                <div className="text-xs text-gray-600"><span className="font-bold">Medical:</span> Fitness certificate required</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 top-0 ml-2.5 md:ml-5 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#003366] z-10 transition-colors group-hover:border-[#D4AF37]"></div>
                                    <div className="ml-8 md:ml-12 w-full">
                                        <h3 className="text-sm md:text-base font-bold text-[#003366] mb-2 uppercase">Step 2: Application Process</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-gray-50 p-3 md:p-4 border-l-4 border-[#003366] rounded-r-sm">
                                                <h4 className="font-bold text-xs uppercase mb-1">Online Application</h4>
                                                <ul className="list-disc list-outside ml-4 text-xs text-gray-600 space-y-1">
                                                    <li>Visit official website & fill form.</li>
                                                    <li>Upload academic & ID documents.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-gray-50 p-3 md:p-4 border-l-4 border-[#D4AF37] rounded-r-sm">
                                                <h4 className="font-bold text-xs uppercase mb-1">Offline Application</h4>
                                                <ul className="list-disc list-outside ml-4 text-xs text-gray-600 space-y-1">
                                                    <li>Collect form from admission office.</li>
                                                    <li>Submit in person with documents.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 top-0 ml-2.5 md:ml-5 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#003366] z-10 transition-colors group-hover:border-[#D4AF37]"></div>
                                    <div className="ml-8 md:ml-12 w-full">
                                        <h3 className="text-sm md:text-base font-bold text-[#003366] mb-2 uppercase">Step 3: Entrance Assessment</h3>
                                        <div className="bg-gray-50 p-3 md:p-4 border-l-4 border-gray-300 rounded-r-sm">
                                            <p className="text-xs text-gray-600 mb-2">Depending on the course:</p>
                                            <ul className="list-disc list-outside ml-4 text-xs text-gray-600 space-y-1">
                                                <li>Written entrance test (Aptitude, Technical, English).</li>
                                                <li>Personal interview / Counselling session.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 top-0 ml-2.5 md:ml-5 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#003366] z-10 transition-colors group-hover:border-[#D4AF37]"></div>
                                    <div className="ml-8 md:ml-12 w-full">
                                        <h3 className="text-sm md:text-base font-bold text-[#003366] mb-2 uppercase">Step 4: Document Verification</h3>
                                        <div className="bg-gray-50 p-3 md:p-4 border-l-4 border-gray-300 rounded-r-sm">
                                            <div className="flex flex-wrap gap-2">
                                                {['Academic Certificates', 'Birth Proof', 'ID Proof (Aadhar/Passport)', 'Photos', 'Medical Certificate'].map((doc, i) => (
                                                    <span key={i} className="px-2 py-1 bg-white text-[#003366] text-[10px] font-bold uppercase rounded-sm border border-gray-200 shadow-sm">{doc}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 top-0 ml-2.5 md:ml-5 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#003366] z-10 transition-colors group-hover:border-[#D4AF37]"></div>
                                    <div className="ml-8 md:ml-12 w-full">
                                        <h3 className="text-sm md:text-base font-bold text-[#003366] mb-2 uppercase">Step 5: Fee Payment</h3>
                                        <div className="bg-gray-50 p-3 md:p-4 border-l-4 border-gray-300 rounded-r-sm">
                                            <p className="text-xs text-gray-600">
                                                Secure your seat by paying the course fee via Online Banking, Demand Draft, or at the College Office. <span className="text-green-600 font-bold">Admission Confirmation Letter</span> will be issued upon success.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 6 */}
                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 top-0 ml-2.5 md:ml-5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#D4AF37] z-10"></div>
                                    <div className="ml-8 md:ml-12 w-full">
                                        <h3 className="text-sm md:text-base font-bold text-[#003366] mb-2 uppercase">Step 6: Orientation & Classes</h3>
                                        <div className="bg-gray-50 p-3 md:p-4 border-l-4 border-[#D4AF37] rounded-r-sm">
                                            <p className="text-xs text-gray-600">
                                                Join the orientation program to meet faculty and peers. Classes commence as per the academic calendar with immediate guidance on practical training.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Special Notes */}
                            <div className="mt-8 bg-[#f8fbff] border border-blue-100 p-4 rounded-sm">
                                <h4 className="text-sm font-bold text-[#003366] mb-2 flex items-center gap-2"><ScrollText size={16} /> Special Notes</h4>
                                <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                                    <li>Placement-oriented programs with internships at domestic/international airports.</li>
                                    <li>Visa and work authorization assistance for international/abroad students.</li>
                                    <li>Merit-based scholarships and financial aid available.</li>
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 pt-4 border-t border-gray-100 flex gap-4">
                                <Link href="/apply" className="px-4 py-2 bg-[#003366] text-white text-xs font-bold uppercase rounded-sm hover:bg-[#002244]">Apply Now</Link>
                                <Link href="/prospectus.pdf" className="px-4 py-2 border border-[#003366] text-[#003366] text-xs font-bold uppercase rounded-sm hover:bg-blue-50 flex items-center gap-2"><Download size={14} /> Download Prospectus</Link>
                            </div>
                        </div>
                    </section>

                    {/* Social Contribution */}
                    <section id="social" className="scroll-mt-24">

                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Social Contribution</h2>
                        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden mb-3">
                            <div>
                                <div className="relative h-46 md:h-46 rounded-sm overflow-hidden shadow-sm mb-5">
                                    <Image
                                        src="/images/social.jpg"
                                        alt="Social contribution activities"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <p className="text-sm text-gray-700 mb-6 text-justify leading-7 p-3">
                                    At King Rashid International College of Aeronautics, we believe that education is not just about academics—it is about building socially responsible citizens. Our students and faculty actively engage in initiatives that promote community welfare, public awareness, and nation-building.
                                </p>
                            </div>


                            <div className="grid md:grid-cols-2 gap-4 mb-8 p-3">
                                {[
                                    { title: "Blood Donation Camps", desc: "Regular blood donation drives organized in collaboration with hospitals and NGOs. Students actively participate to save lives and promote civic responsibility.", icon: Heart },
                                    { title: "Bike Rallies & Awareness", desc: "Rallies conducted to raise awareness about road safety, environmental protection, and national unity. Students engage the community directly through these campaigns.", icon: Target },
                                    { title: "Civic Participation", desc: "Workshops and campaigns to educate students about democratic processes, elections, and civic responsibilities. Students also participate in responsible election campaigns.", icon: Users },
                                    { title: "Women Safety & Empowerment", desc: "Programs to promote women’s rights, self-defense, and safety awareness. Students collaborate with local authorities and NGOs to create safer communities.", icon: CheckCircle },
                                    { title: "Child Welfare", desc: "Awareness campaigns and outreach programs aimed at protecting children’s rights, preventing child labor, and promoting education for underprivileged children.", icon: User },
                                    { title: "Flood Relief & Disaster Response", desc: "Student volunteers participate in rescue operations, relief distribution, and rehabilitation efforts during natural calamities, supporting affected communities effectively.", icon: Heart },
                                    { title: "Student Awareness", desc: "Workshops on health, hygiene, personal development, leadership, and career guidance to prepare students for professional and societal responsibilities.", icon: BookOpen },
                                    { title: "Government Schemes", desc: "Campaigns to educate citizens about government welfare programs, subsidies, and legal rights, helping communities access opportunities and benefits.", icon: FileText },
                                    { title: "Environmental Initiatives", desc: "Tree plantation drives, cleanliness campaigns, and other community welfare activities aimed at sustainable development and civic responsibility.", icon: MapPin },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4 p-4 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                                        <div className="text-[#D4AF37] mt-1"><item.icon size={20} /></div>
                                        <div>
                                            <h4 className="font-bold text-[#003366] text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-gray-600 leading-relaxed text-justify">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Image & Philosophy Grid */}
                        <div className="grid md:grid-cols-2 gap-6 items-stretch">
                            <div className="relative h-64 md:h-auto rounded-sm overflow-hidden shadow-sm">
                                <Image
                                    src="/images/campaing28.png"
                                    alt="Students engaged in social contribution"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-[#003366] text-white p-6 rounded-sm shadow-sm flex flex-col justify-center">
                                <h3 className="text-lg font-serif font-bold text-[#D4AF37] mb-3 uppercase">Our Philosophy</h3>
                                <p className="text-xs md:text-sm text-white/90 leading-7 text-justify">
                                    At King Rashid International College, social responsibility is integral to holistic education. Through these initiatives, students develop empathy, compassion, leadership, teamwork, civic responsibility, and practical problem-solving skills. By combining education with social contribution, we prepare students to become responsible citizens, ethical leaders, and socially conscious professionals.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sports & Athletics */}
                    <section id="sports" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Sports & Athletics</h2>
                        <p className="text-sm text-gray-700 mb-6 text-justify leading-7">
                            At King Rashid International College of Aeronautics, we strongly believe in the holistic development of students, where physical fitness and sportsmanship are as important as academic excellence. Our college encourages students to participate in various sports activities, competitions, and athletic events at inter-college, state, and national levels.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white border-t-4 border-[#003366] p-4 shadow-sm">
                                <Trophy size={24} className="text-[#D4AF37] mb-3" />
                                <h4 className="font-bold text-[#003366] text-sm mb-2 uppercase">Inter-College Competitions</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Students actively participate in inter-college tournaments, developing teamwork, discipline, and competitive spirit.
                                </p>
                            </div>
                            <div className="bg-white border-t-4 border-[#D4AF37] p-4 shadow-sm">
                                <Award size={24} className="text-[#003366] mb-3" />
                                <h4 className="font-bold text-[#003366] text-sm mb-2 uppercase">State & National Meets</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Our students have successfully competed and won accolades in prestigious state and national sports meets.
                                </p>
                            </div>
                            <div className="bg-white border-t-4 border-[#003366] p-4 shadow-sm">
                                <Target size={24} className="text-[#D4AF37] mb-3" />
                                <h4 className="font-bold text-[#003366] text-sm mb-2 uppercase">Sports Quota & Scholarships</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Exceptional athletes are eligible for sports quota admissions and scholarships to support their dual career.
                                </p>
                            </div>
                            <div className="bg-white border-t-4 border-[#D4AF37] p-4 shadow-sm">
                                <Users size={24} className="text-[#003366] mb-3" />
                                <h4 className="font-bold text-[#003366] text-sm mb-2 uppercase">Facilities & Coaching</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Well-maintained grounds, courts, and gym facilities with professional coaches for training and mentorship.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div className="bg-gray-50 border-l-4 border-[#D4AF37] p-6 italic text-sm text-gray-700 leading-7 text-justify h-full flex flex-col justify-center">
                                <strong>Our Philosophy:</strong> Sports are not just extracurricular activities—they are a foundation for character building, leadership, and physical well-being. We aim to nurture champions in sports who bring pride to the college while maintaining a balance with academics.
                            </div>
                            <div className="relative h-64 rounded-sm overflow-hidden shadow-sm">
                                <Image
                                    src="/images/gallery/WhatsApp Image 2026-01-11 at 2.30.41 PM (1).jpeg"
                                    alt="Sports activities at KRI College"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Faith & Spiritual Values */}
                    <section id="faith" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Faith & Spiritual Values</h2>
                        <div className="bg-[#fcfbf9] border border-[#e0dad0] p-6 md:p-8 relative overflow-hidden">
                            {/* Background Texture/Image Low Opacity */}
                            {/* <div className="absolute top-0 right-0 w-full h-64 md:w-1/3 md:h-full opacity-10 pointer-events-none">
                                <Image src="/faith-values.png" alt="Faith Background" fill className="object-cover" />
                            </div> */}

                            <div className="grid md:grid-cols-2 gap-6 items-center">

                                {/* Left Image */}
                                <div className="relative h-56 md:h-64 rounded-sm overflow-hidden shadow-sm">
                                    <Image
                                        src="/images/MASJID.jpg"
                                        alt="Masjid and spiritual values"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right Content */}
                                <div className="text-center md:text-left">
                                    <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-4"></div>

                                    <p className="text-xl text-gray-700 italic leading-7">
                                        &quot;Education is not only about academic excellence but also about nurturing moral, ethical, and spiritual values. A strong foundation in faith and respect for diverse beliefs helps students grow into responsible, compassionate, and balanced individuals.&quot;
                                    </p>
                                </div>

                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-8 relative z-10">
                                <div>
                                    <h3 className="font-bold text-[#5c4b37] text-sm uppercase mb-3 border-b border-[#e0dad0] pb-2">Our Approach to Faith</h3>
                                    <ul className="space-y-3">
                                        {[
                                            { title: "Inclusive Spiritual Environment", text: "We respect all religions and encourage students to embrace tolerance and compassion." },
                                            { title: "Regular Prayer & Meditation", text: "Opportunities for daily prayers and reflection fostering inner peace and focus." },
                                            { title: "Faith-Based Awareness", text: "Workshops teaching moral values, ethics, and social responsibility." },
                                            { title: "Cultural Celebrations", text: "Celebrating festivals to provide a platform for respecting diverse traditions." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-xs text-gray-700">
                                                <div className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full mt-1.5 shrink-0"></div>
                                                <div>
                                                    <strong className="text-[#5c4b37] block mb-0.5">{item.title}:</strong>
                                                    {item.text}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#5c4b37] text-sm uppercase mb-3 border-b border-[#e0dad0] pb-2">Why Faith Matters at KRI</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-xs text-gray-700">
                                            <CheckCircle size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
                                            <span>Encourages emotional and ethical development alongside academic growth.</span>
                                        </li>
                                        <li className="flex gap-3 text-xs text-gray-700">
                                            <CheckCircle size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
                                            <span>Promotes discipline, compassion, and integrity in everyday life.</span>
                                        </li>
                                        <li className="flex gap-3 text-xs text-gray-700">
                                            <CheckCircle size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
                                            <span>Fosters a positive campus culture, where students respect diversity and work together harmoniously.</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6 p-4 bg-white border border-[#e0dad0] text-center shadow-sm">
                                        <p className="text-xs font-bold text-[#5c4b37] uppercase leading-relaxed">
                                            Faith and ethics are the guiding principles that shape our students into responsible leaders and compassionate citizens.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Scholarship */}
                    <section id="scholarship" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Scholarship Exams</h2>

                        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                            {/* Header Image */}
                            <div className="relative h-48 md:h-64">
                                <Image
                                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Students taking scholarship exam"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#003366]/80 flex flex-col justify-center items-center text-center p-6">
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#D4AF37] mb-2 uppercase">KRI Scholarship Exam</h3>
                                    <p className="text-white text-sm max-w-2xl">
                                        &quot;Your talent is your biggest asset. At KRI, we make sure nothing stands between you and your aviation dream.&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 space-y-8">

                                {/* Purpose */}
                                <div>
                                    <h4 className="font-bold text-[#003366] text-sm uppercase mb-3 border-l-4 border-[#D4AF37] pl-3">Purpose of the Exam</h4>
                                    <p className="text-sm text-gray-700 text-justify mb-4">
                                        At King Rashid International College of Aeronautics, we believe that talent should never be limited by financial constraints. To support deserving students and encourage academic excellence, the college conducts annual Scholarship Examinations.
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-gray-600 font-medium">
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-600" /> Support meritorious students</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-600" /> Financial assistance for aviation courses</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-600" /> Encourage discipline & leadership</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-600" /> Make quality education affordable</li>
                                    </ul>
                                </div>

                                {/* Types Grid */}
                                <div>
                                    <h4 className="font-bold text-[#003366] text-sm uppercase mb-3 border-l-4 border-[#D4AF37] pl-3">Types of Scholarships</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-[#f8fbff] p-4 border border-blue-100 rounded-sm">
                                            <h5 className="font-bold text-[#003366] text-xs uppercase mb-1">1. Merit-Based Scholarship</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">For students who score top marks in the scholarship examination.</p>
                                        </div>
                                        <div className="bg-[#f8fbff] p-4 border border-blue-100 rounded-sm">
                                            <h5 className="font-bold text-[#003366] text-xs uppercase mb-1">2. Economic Support</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">For students from financially challenged backgrounds who show strong dedication.</p>
                                        </div>
                                        <div className="bg-[#f8fbff] p-4 border border-blue-100 rounded-sm">
                                            <h5 className="font-bold text-[#003366] text-xs uppercase mb-1">3. Sports Quota</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">Special support for students who have represented at inter-college, state, or national levels.</p>
                                        </div>
                                        <div className="bg-[#f8fbff] p-4 border border-blue-100 rounded-sm">
                                            <h5 className="font-bold text-[#003366] text-xs uppercase mb-1">4. Special Category</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">For children of single parents, Armed Forces personnel, and students with outstanding social service.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pattern & Benefits Split */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Pattern */}
                                    <div className="space-y-4">
                                        <div className="bg-[#fffdf5] border border-amber-200 p-4">
                                            <h4 className="font-bold text-[#8a6d3b] text-sm uppercase mb-3 flex items-center gap-2"><FileText size={16} /> Exam Pattern</h4>
                                            <ul className="text-xs text-gray-700 space-y-2">
                                                <li><strong>Mode:</strong> Offline / Online (Announced yearly)</li>
                                                <li><strong>Duration:</strong> 1 to 2 hours</li>
                                                <li><strong>Eligibility:</strong> Class 10 / 12 passed or appearing</li>
                                                <li className="pt-2 border-t border-amber-100">
                                                    <strong>Subjects:</strong> GK, English, Basic Science, Aviation Awareness, Logical Reasoning
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-[#eefcfc] border border-cyan-200 p-4">
                                            <h4 className="font-bold text-[#006064] text-sm uppercase mb-3 flex items-center gap-2"><Calendar size={16} /> Exam Calendar</h4>
                                            <ul className="text-xs text-gray-700 space-y-2">
                                                <li><strong>Registrations:</strong> Jan – Apr (Every Year)</li>
                                                <li><strong>Exam Date:</strong> Announced on official channels</li>
                                                <li><strong>Results:</strong> Declared within 10–15 days</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Benefits & How to Apply */}
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-bold text-[#003366] text-sm uppercase mb-2">Benefits for Selected Students</h4>
                                            <ul className="space-y-2 text-xs text-gray-600">
                                                <li className="flex gap-2"><Trophy size={14} className="text-[#D4AF37] shrink-0" /> Up to 100% Tuition Fee Waiver</li>
                                                <li className="flex gap-2"><Trophy size={14} className="text-[#D4AF37] shrink-0" /> Concession on Hostel & Transport (based on merit)</li>
                                                <li className="flex gap-2"><Trophy size={14} className="text-[#D4AF37] shrink-0" /> Priority for Internships and Training Opportunities</li>
                                                <li className="flex gap-2"><Trophy size={14} className="text-[#D4AF37] shrink-0" /> Recognition as a KRI Scholar & Certificates</li>
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-gray-100">
                                            <h4 className="font-bold text-[#003366] text-sm uppercase mb-2">How to Apply</h4>
                                            <ol className="list-decimal list-inside text-xs text-gray-600 space-y-1 font-medium">
                                                <li>Fill out the online scholarship registration form.</li>
                                                <li>Submit marksheets, ID proof, passport photo.</li>
                                                <li>Appear for the scholarship exam at assigned center.</li>
                                            </ol>
                                            <div className="mt-4">
                                                <Link href="/scholarship-apply" className="px-4 py-2 bg-[#D4AF37] text-white text-xs font-bold uppercase rounded-sm hover:bg-[#b5952f]">Register for Exam</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Alumni */}
                    {/* Alumni */}
                    <section id="alumni" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Our Alumni – The Pride of KRI</h2>

                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div className="bg-[#003366] text-white p-8 shadow-md">
                                <h3 className="text-lg font-serif font-bold mb-4 uppercase text-[#D4AF37] flex items-center gap-3">
                                    <Globe size={20} /> Global Footprint
                                </h3>
                                <p className="text-white/90 text-sm leading-7 text-justify mb-6">
                                    The KRI Alumni Network is a testament to our legacy of excellence. Our graduates are successfully placed in leading airlines, airports, MROs, and aviation sectors across the globe. They serve as mentors to current students, creating a thriving ecosystem of professional growth and opportunities.
                                </p>
                                <div className="flex gap-12 border-t border-white/20 pt-6">
                                    <div>
                                        <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-1">500+</div>
                                        <div className="text-[10px] uppercase tracking-widest text-white/70">Global Placements</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-1">50+</div>
                                        <div className="text-[10px] uppercase tracking-widest text-white/70">Airline Partners</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 border-l-4 border-[#003366]">
                                    <h4 className="font-bold text-[#003366] text-sm mb-1 uppercase">A Legacy of Success</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        From commercial pilots to technical engineers, our alumni hold prestigious positions in the aviation industry, driving innovation and safety standards.
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 border-l-4 border-[#D4AF37]">
                                    <h4 className="font-bold text-[#003366] text-sm mb-1 uppercase">Lifelong Connection</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        We maintain a strong bond with our alumni through annual meets, webinars, and career support initiatives, ensuring they remain part of the KRI family forever.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Links */}
                    <section id="links" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Quick Links – Aviation & Scholarships</h2>

                        <div className="space-y-8">

                            {/* Aviation Links */}
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

                            {/* Government Scholarships */}
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

                            {/* Financial Aid & Skills */}
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
                    </section>

                    {/* MoUs */}
                    <section id="mou" className="scroll-mt-24 mb-16">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6">Memorandums of Understanding (MoUs)</h2>

                        <div className="bg-[#fcfbf9] border-t-4 border-[#003366] p-6 mb-8 shadow-sm">
                            <h3 className="font-bold text-[#D4AF37] text-sm uppercase mb-3">Strengthening Global Partnerships</h3>
                            <p className="text-sm text-gray-700 text-justify leading-7">
                                At King Rashid International College (KRI), collaboration is at the heart of our academic excellence. To provide world-class education and real industry exposure, we have signed strategic MoUs with top aviation organizations, advanced technology companies, international educational institutions, and leading industries. These partnerships ensure that our students receive the best training, internships, industrial visits, overseas opportunities, and placement support.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Plane,
                                    title: "Airlines Partnerships",
                                    desc: "Cabin crew & ground operations training, internships, and placement opportunities with national and international airlines."
                                },
                                {
                                    icon: Cpu,
                                    title: "Drone Technology Companies",
                                    desc: "Training in drone assembling, piloting, AI aerial mapping, and projects in surveillance and agriculture."
                                },
                                {
                                    icon: Rocket,
                                    title: "Helicopter Companies",
                                    desc: "Exposure to rotary-wing engineering, maintenance, charter operations, and safety procedures."
                                },
                                {
                                    icon: Wrench,
                                    title: "MRO Organizations",
                                    desc: "Hands-on aircraft maintenance training (Engine, Airframe, Avionics) and internships for AME skill development."
                                },
                                {
                                    icon: User, // Using User/Briefcase for VIP/Private Jet
                                    title: "Private Jet & Business Aviation",
                                    desc: "VIP handling, corporate flight operations, and premium customer service training."
                                },
                                {
                                    icon: Building2,
                                    title: "Airport Authority of India (AAI)",
                                    desc: "Airport operations training, ATC awareness, and practical knowledge of terminal/ramp areas."
                                },
                                {
                                    icon: FileText,
                                    title: "DGCA-Approved Institutions",
                                    desc: "Skill enhancement workshops, regulatory training, and expert seminars for exam readiness."
                                },
                                {
                                    icon: Globe,
                                    title: "International Universities",
                                    desc: "Student exchange programs, pathway options for higher studies, and global research collaboration."
                                },
                                {
                                    icon: Briefcase,
                                    title: "Education Consultants",
                                    desc: "Overseas admission guidance, scholarship assistance, and international career counseling."
                                },
                                {
                                    icon: Factory,
                                    title: "Industrial Partners",
                                    desc: "Industrial visits, live project exposure, and interaction with industry specialists across sectors."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 border border-gray-200 bg-white hover:border-[#D4AF37] hover:shadow-md transition-all group">
                                    <div className="p-3 bg-gray-50 text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors h-fit rounded-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-sm mb-2">{item.title}</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed text-justify">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-[#003366] text-white p-6 rounded-sm text-center">
                            <h4 className="font-serif font-bold text-[#D4AF37] mb-3 uppercase">Our Commitment</h4>
                            <p className="text-sm text-white/90 max-w-3xl mx-auto leading-7">
                                Our partnerships reflect our vision to create future-ready aviation professionals, empowered with global-standard training, advanced technical knowledge, and real-world experience.
                            </p>
                        </div>
                    </section>

                </main >
            </div >
        </div >
    );
}
