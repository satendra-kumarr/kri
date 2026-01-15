"use client";
import React, { useState } from 'react';
import { Award, Users, Shield, Scale, Star, Camera, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const AchievementsClient = () => {
    // --- Configuration ---
    // We use inline styles for the specific LAB color to ensure exact matching
    const brandColor = { backgroundColor: 'lab(26.1542% 15.7545 -51.5504)' };
    const brandTextColor = { color: 'lab(26.1542% 15.7545 -51.5504)' };
    const [openImage, setOpenImage] = useState<string | null>(null);
    // --- Content Data ---
    const achievements = [
        {
            title: "Political Recognition",
            icon: <Award className="w-8 h-8 text-yellow-500" />,
            description: "Acknowledged by national leaders for contribution to youth empowerment.",
            image: "/images/Minister John Barla.png",
            points: [
                "Member of Parliament & Minister John Barla: Praised international employment opportunities.",
                "MLA Selva Perundhagai: Unveiled training aircraft, celebrating hands-on aviation training.",
                "DMK & BJP Leaders: Recognized initiatives in skill development and nation-building."
            ]
        },
        {
            title: "Social & Community Impact",
            icon: <Users className="w-8 h-8 text-yellow-500" />,
            description: "Fostering social responsibility through community engagement.",
            image: "/images/social-1.jpg",
            points: [
                "Esteemed social workers visited campus to appreciate child welfare programs.",
                "Motivational sessions inspiring students toward ethical leadership.",
                "Active student participation in community development drives."
            ]
        },
        {
            title: "Defense & Armed Forces",
            icon: <Shield className="w-8 h-8 text-yellow-500" />,
            description: "Instilling discipline and patriotism through interactions with defense personnel.",
            image: "/images/Defense Armed Forces1.png",
            points: [
                "Senior Army Officers delivered keynotes on discipline and leadership.",
                "Direct interactions providing professional excellence inspiration.",
                "Seminars on national security and the role of aviation."
            ]
        },
        {
            title: "Civil Services Interaction",
            icon: <Scale className="w-8 h-8 text-yellow-500" />,
            description: "Guidance from IPS & IAS officers on governance and civic duty.",
            image: "/images/Interaction.png",
            points: [
                "Officers visited to guide students on leadership and governance.",
                "Motivating students to pursue careers contributing to national development.",
                "Workshops on ethics in public service."
            ]
        }
    ];

    const appreciationData = [
        {
            title: "Token of Respect from Dr. Vaseegaran",
            subtitle: "Dean of Alagappa University",
            image: "/images/Dr. Vaseegaran.PNG"
        },
        {
            title: "Appreciation from State President",
            subtitle: "Indian National Congress Party - Mr. Selvaperunthagai",
            image: "/images/founder-with-minister.png"
        },
        {
            title: "Appreciation from Ms. Mushkhan",
            subtitle: "INDIGO for Best Aviation Training",
            image: "/images/Ms. Mushkhan.PNG"
        },
        {
            title: "Appreciation from Madurai Airport Director",
            subtitle: "N. Janakiraman, JGM (OPS)",
            image: "/images/Madurai Airport Director.PNG"
        },
        {
            title: "Appreciation from Tamil Nadu Police Team",
            subtitle: "Mr. Venkatesh",
            image: "/images/Tamil Nadu Police Team.PNG"
        },
        {
            title: "Awareness and Appreciation from Decathlon Team",
            subtitle: "For Fitness Programs",
            image: "/images/Decathlon Team.PNG"
        },
        {
            title: "Appreciation from Dr. K. Tamilisai Soundararajan",
            subtitle: "Bharatiya Janata Party",
            image: "/images/Dr. K. Tamilisai Soundararajan.PNG"
        },
        {
            title: "Short Meeting with Hazi, Imaam",
            subtitle: "Related to Students Welfare",
            image: "/images/Short Meeting with Hazi Imaam.PNG"
        },
        {
            title: "Appreciation and Collaboration",
            subtitle: "Malaysian Dignitaries",
            image: "/images/Malaysian Dignitaries.PNG"
        },
        {
            title: "Appreciation from Military Officer",
            subtitle: "Mr. Manikandan",
            image: "/images/Defense Armed Forces1.png"
        },
        {
            title: "Appreciation from Meenakshi Matriculation",
            subtitle: "Hr. Sec. School Correspondent",
            image: "/images/Meenakshi Matriculation.PNG"
        },
        {
            title: "Appreciation from Young Team",
            subtitle: "Aviation Awareness Program",
            image: "/images/Appreciation from Young Team.PNG"
        },
        {
            title: "Appreciation from District Head",
            subtitle: "VIDUTHALAI SIRUTHAI KATCHI (VCK)",
            image: "/images/VIDUTHALAI SIRUTHAI KATCHI (VCK).PNG"
        },
        {
            title: "Appreciation from TVK Party Leaders",
            subtitle: "Tamilaga Vetri Kazagam (TVK)",
            image: "/images/Appreciation from TVK Party Leaders.PNG"
        },
        {
            title: "Appreciation from Madurai District President",
            subtitle: "Mr. V. Karthikeyan (Indian National Congress Party)",
            image: "/images/Mr. V. Karthikeyan (Indian National Congress Party).PNG"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

            {/* 1. HERO SECTION */}
            <div style={brandColor} className="text-white pt-20 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    {/* Abstract Pattern overlay */}
                    <svg width="100%" height="100%">
                        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="#D4AF37" />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="inline-block py-1 px-3 border border-yellow-500 rounded-full text-yellow-400 text-sm font-semibold tracking-wider mb-4 uppercase">
                        Excellence in Aviation
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
                        Achievements & <span className="text-yellow-400">Accolades</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                        The King Rashid International College of Aeronautics is proud of its distinguished reputation in aviation education, youth empowerment, and nation-building.
                    </p>
                </div>
            </div>

            {/* 2. QUICK STATS STRIP (New Section) */}
            <div className="max-w-6xl mx-auto -mt-12 relative z-20 px-4">
                <div className="bg-white rounded-lg shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 p-6 border-b-4 border-yellow-500">
                    {[
                        { label: "Dignitaries Hosted", val: "50+" },
                        { label: "Years of Excellence", val: "15+" },
                        { label: "Awards Won", val: "25+" },
                        { label: "Student Success", val: "100%" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-4">
                            <div style={brandTextColor} className="text-3xl font-bold font-serif">{stat.val}</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. MAIN CONTENT (ZIG-ZAG LAYOUT) */}
            <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
                {achievements.map((item, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-100 rounded-full border border-yellow-500">
                                    {item.icon}
                                </div>
                                <h2 style={brandTextColor} className="text-3xl font-serif font-bold">
                                    {item.title}
                                </h2>
                            </div>
                            <p className="text-lg text-slate-600 mb-6 italic border-l-4 border-yellow-500 pl-4">
                                {item.description}
                            </p>
                            <ul className="space-y-4">
                                {item.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                        <span className="text-slate-700 font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Content */}
                        <div className="flex-1 w-full">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-yellow-500 transform translate-x-3 translate-y-3 rounded-lg"></div>
                                <img
                                    src={encodeURI(item.image)}
                                    alt={item.title}
                                    className="relative z-10 w-full  md:h-80 object-cover rounded-lg shadow-lg border border-slate-200 bg-white"
                                    onClick={() => setOpenImage(item.image)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 6. APPRECIATIONS & RECOGNITIONS GRID */}
            <div className="bg-slate-100 py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* APPRECIATION GRID */}
                    <div className="bg-slate-100 py-20 px-6">
                        <div className="text-center mb-16">
                            <h2 style={brandTextColor} className="text-3xl md:text-4xl font-serif font-bold mb-4">Appreciations & Recognitions</h2>
                            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                            <p className="mt-4 text-slate-600">Honored by distinguished leaders and organizations across various sectors</p>
                        </div>
                        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {appreciationData.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
                                    onClick={() => setOpenImage(item.image)}
                                >
                                    <img
                                        src={encodeURI(item.image)}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 style={brandTextColor} className="font-bold">{item.title}</h3>
                                        <p className="text-sm text-slate-600">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* IMAGE MODAL */}
                    {openImage && (
                        <div
                            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                            onClick={() => setOpenImage(null)}
                        >
                            <div className="relative max-w-5xl">
                                <img
                                    src={encodeURI(openImage)}
                                    alt="Preview"
                                    className="rounded-lg max-h-[90vh]"
                                />
                                <button
                                    className="absolute top-3 right-3 bg-black text-white w-10 h-10 rounded-full"
                                    onClick={() => setOpenImage(null)}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* 7. SUMMARY / FOOTER NOTE */}
            <div style={brandColor} className="text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center border border-yellow-500/50 p-10 rounded-xl bg-white/5 backdrop-blur-sm relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-blue-900 p-3 rounded-full">
                        <Star size={32} />
                    </div>
                    <p className="text-lg md:text-xl italic leading-loose opacity-90 mb-6">
                        &ldquo;King Rashid International College stands as a beacon of excellence and national pride. Its achievements and accolades from political leaders, social activists, army officers, and civil service officials showcase the institution’s commitment to producing skilled, disciplined, and socially responsible professionals.&rdquo;
                    </p>
                    <div className="h-px w-20 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="font-serif text-2xl text-yellow-400 font-bold">
                        At KRI, education meets excellence, leadership, and service to the nation.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AchievementsClient;
