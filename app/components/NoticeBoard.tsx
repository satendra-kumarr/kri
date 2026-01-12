'use client';

import { useState } from 'react';
import { FileText, Bell, Calendar } from 'lucide-react';

export default function NoticeBoard() {
    const [activeTab, setActiveTab] = useState<'news' | 'events' | 'circulars'>('news');

    const notices = {
        news: [
            { text: "Admission Open for Batch 2025-26: B.Sc. Aviation & AME", date: "Dec 14, 2024", new: true },
            { text: "KRI College wins 'Best Aviation Institute' Award", date: "Dec 10, 2024", new: true },
            { text: "Placement Drive: IndiGo selects 15 students from final year", date: "Nov 28, 2024", new: false },
            { text: "Guest Lecture by Ex-Air Force Chief on Dec 20", date: "Nov 25, 2024", new: false },
            { text: "Semester Exams to commence from Jan 10, 2025", date: "Nov 20, 2024", new: false },
            { text: "Scholarship Applications open for meritorious students", date: "Nov 15, 2024", new: false },
        ],
        events: [
            { text: "Annual Sports Day - Dec 22, 2024", date: "Dec 01, 2024", new: true },
            { text: "International Aviation Safety Workshop", date: "Dec 05, 2024", new: false },
            { text: "Alumni Meet 2024", date: "Nov 15, 2024", new: false },
        ],
        circulars: [
            { text: "Circular No. 245: Revised Fee Structure for 2025", date: "Dec 12, 2024", new: true },
            { text: "Circular No. 244: Mandatory Safety Protocols in Hangar", date: "Dec 08, 2024", new: false },
            { text: "Circular No. 243: Winter Vacation Schedule", date: "Dec 01, 2024", new: false },
        ]
    };

    return (
        <div className="bg-white border border-gray-300 shadow-sm h-full">
            {/* Header Tabs */}
            <div className="flex border-b border-gray-300 bg-gray-100">
                <button
                    onClick={() => setActiveTab('news')}
                    className={`flex-1 py-3 px-4 text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 ${activeTab === 'news' ? 'bg-[#003366] text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                >
                    <Bell size={16} /> Latest News
                </button>
                <button
                    onClick={() => setActiveTab('events')}
                    className={`flex-1 py-3 px-4 text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 ${activeTab === 'events' ? 'bg-[#003366] text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                >
                    <Calendar size={16} /> Events
                </button>
                <button
                    onClick={() => setActiveTab('circulars')}
                    className={`flex-1 py-3 px-4 text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 ${activeTab === 'circulars' ? 'bg-[#003366] text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                >
                    <FileText size={16} /> Circulars
                </button>
            </div>

            {/* Content Area */}
            <div className="p-2 h-[350px] overflow-hidden relative bg-white">
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent z-10"></div>

                <div className="animate-marquee-vertical hover:pause-animation space-y-0">
                    {/* Duplicating for infinite scroll effect if needed, or just standard list */}
                    {notices[activeTab].map((item, idx) => (
                        <div key={idx} className="p-3 border-b border-dashed border-gray-300 hover:bg-blue-50 transition-colors cursor-pointer group">
                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                </div>
                                <div>
                                    <p className="text-[#003366] font-medium text-sm leading-snug group-hover:underline">
                                        {item.text}
                                        {item.new && <span className="ml-2 inline-block px-1.5 py-0.5 bg-red-600 text-white text-[10px] uppercase font-bold rounded-sm animate-pulse">New</span>}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Repeat for visual volume if list is short */}
                    {notices[activeTab].map((item, idx) => (
                        <div key={`rep-${idx}`} className="p-3 border-b border-dashed border-gray-300 hover:bg-blue-50 transition-colors cursor-pointer group">
                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                </div>
                                <div>
                                    <p className="text-[#003366] font-medium text-sm leading-snug group-hover:underline">
                                        {item.text}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-300 text-right">
                <a href="#" className="text-xs font-bold text-[#003366] hover:text-[#D4AF37] uppercase tracking-wider">
                    View All Notifications &rarr;
                </a>
            </div>
        </div>
    );
}
