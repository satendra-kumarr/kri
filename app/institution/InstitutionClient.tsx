'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEnquiry } from '../context/EnquiryContext';
import {
    Target,
    Users,
    User,
    Award,
    Plane,
    ChevronRight,
    ChevronDown,
} from 'lucide-react';

export default function InstitutionClient() {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const { openModal } = useEnquiry();
    const sections = [
        { id: 'about', label: 'About Us' },
        { id: 'mission', label: 'Mission & Vision' },
        { id: 'history', label: 'History & Legacy' },
        { id: 'approvals', label: 'Approvals & Accreditation' },
        { id: 'leadership', label: 'Leadership Team' },
        { id: 'founder', label: 'Founder\'s Profile' },
        { id: 'chairperson', label: 'Chairman\'s Message' },
        { id: 'admission', label: 'Admission Procedure' },
        // { id: 'social', label: 'Social Contribution' },
        // { id: 'sports', label: 'Sports & Athletics' },
        // { id: 'faith', label: 'Faith & Values' },
        // { id: 'scholarship', label: 'Scholarship Exams' },
        // { id: 'alumni', label: 'Our Alumni' },
        // { id: 'links', label: 'Quick Links' },
        // { id: 'mou', label: 'MoUs' },
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
                            <p><strong>Phone:</strong> +91 98949 25233, +91 98949 59200</p>
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

                    {/* Leadership */}
                    <section id="leadership" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-4">Leadership Team</h2>
                        <p className="text-sm text-gray-700 mb-6 italic border-l-4 border-[#D4AF37] pl-4">
                            &quot;The leadership at King Rashid International College of Aeronautics is driven by aviation expertise, academic excellence, and a commitment to national development.&quot;
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Founder Card */}
                            <div className="border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
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
                                        <p className="text-[10px] text-gray-500">Aircraft Engineer | Ex–Dubai Airports</p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    A visionary leader with deep roots in global aviation and youth development.
                                </p>
                                <div className="relative h-30 w-full bg-gray-200 rounded-sm overflow-hidden">
                                    <Image
                                        src="/images/founder-with-minister.png"
                                        alt="Er. K. Jaffer Sheriff - Visionary"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
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
                                            src="/images/Althaf Sheri.png"
                                            alt="Er. K. Jaffer Sheriff"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg mb-1 relative z-10">Advocate Althaf Sherif
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
                                    Mr. Surya, M.Tech, serves as the <strong>General Secretary of King Rashid International College,</strong>  where he
                                    plays a key role in the institution’s academic administration, strategic coordination, and studentfocused initiatives. With a strong technical background and a deep commitment to educational
                                    excellence, he actively supports the college’s mission to deliver quality education aligned with
                                    industry and global standards. </p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    As General Secretary, Mr. Surya oversees institutional planning, policy implementation, interdepartmental coordination, and academic governance. He works closely with the management,
                                    faculty, and administrative teams to ensure smooth operations, regulatory compliance, and
                                    continuous institutional improvement. </p>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4" >Holding a<strong>Master of Technology (M.Tech) </strong> degree, Mr. Surya brings analytical expertise, leadership
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
                                            <span className='text-[#003366] font-bold text-xs uppercase mb-1 pl-1'>( B.Com., B.Ed)</span></h4>
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

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">Holding qualifications in <strong> Commerce (B.Com)</strong> and <strong>Education (B.Ed),</strong> Mr. Rafeek combines managerial
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
                                        experience.</strong> He has gained valuable hands-on training as an <strong>Intern Physiotherapist at a
                                            Government Hospital, Madurai,</strong> where he worked with diverse patient cases and rehabilitation
                                    programs.
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
                    <section id="founder" className="scroll-mt-24">
                        <h2 className="text-xl font-serif font-bold text-[#003366] mb-6 border-b border-gray-200 pb-2">
                            Founder’sProfile
                        </h2>

                        {/* Professional Background */}
                        <div className="mb-8">
                            <h3 className="flex items-center gap-2 text-md font-bold text-[#003366] mb-3 uppercase tracking-wide">
                                <User size={18} className="text-[#D4AF37]" /> Professional Background
                            </h3>
                            <div className="text-sm text-gray-700 text-justify leading-7 space-y-3">
                                <p>
                                    <strong>Er. Sheriff’s</strong> professional journey stands on a solid foundation of aviation engineering, global airport operations, and youth development initiatives. His experience spans both Indian and international aviation environments, bringing a blend of technical mastery and global understanding.
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
                                <div className="mt-10">
                                    <img
                                        src="/images/founder-full.png"
                                        alt="Er. K. Jaffer Sheriff"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="mt-6 text-center md:text-left">

                                    <h3 className="text-base font-serif font-semibold text-[#003366] leading-snug">
                                        Er. K. Jaffer Sheriff
                                    </h3>

                                    <p className="text-[13px] text-gray-500">
                                        Aircraft Engineer <span className="text-gray-500">(Ex–Dubai Airports)</span>
                                    </p>

                                    <div className="mt-2 space-y-0.5">
                                        <p className="text-[13px] text-gray-500">
                                            Founder & Chief Instructor, KRI College
                                        </p>

                                        <p className="text-[13px] text-gray-500">
                                            National President, SIF – India
                                        </p>
                                    </div>

                                    <p className="mt-3 text-xs text-gray-500 italic leading-relaxed">
                                        Dr. A. P. J. Abdul Kalam Awardee for Social Service
                                    </p>

                                </div>


                            </div>

                            {/* CONTENT COLUMN */}
                            <div className="md:col-span-9">

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

                                <div className="mt-8 text-right">
                                    <img
                                        src="images/sign.png"
                                        alt="Signature"
                                        className="h-12 ml-auto opacity-60"
                                    />
                                </div>
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
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
