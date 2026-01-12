'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    Calendar,
    Newspaper,
    Maximize2,
    X,
    ChevronRight,
    Search,
    Filter
} from 'lucide-react';

interface PressCutting {
    id: number;
    title: string;
    publication: string;
    date: string;
    image: string;
    category: string;
    description: string;
}

export default function PressReleasePage() {
    const [selectedImage, setSelectedImage] = useState<PressCutting | null>(null);
    const [filter, setFilter] = useState('All');

    const pressCuttings: PressCutting[] = [
        {
            id: 1,
            title: "KRI College Pioneers New Aviation Curriculum",
            publication: "The Hindu",
            date: "October 15, 2024",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
            category: "Academics",
            description: "Madurai-based KRI College has introduced a specialized curriculum for Aircraft Maintenance Engineering, focusing on real-world Hangar training."
        },
        {
            id: 2,
            title: "100% Placement Achievement for Graduation Batch 2024",
            publication: "Times of India",
            date: "September 2, 2024",
            image: "https://images.unsplash.com/photo-1585829365234-781f8c42a42e?q=80&w=1000&auto=format&fit=crop",
            category: "Placement",
            description: "A major milestone reached by King Rashid International College with all its aviation management students securing roles in top airlines."
        },
        {
            id: 3,
            title: "KRI Founder Receives Prestigious Excellence Award",
            publication: "Dina Thanthi",
            date: "August 20, 2024",
            image: "https://images.unsplash.com/photo-1546422122-01865dc2a921?q=80&w=1000&auto=format&fit=crop",
            category: "Achievement",
            description: "Er. K. Jaffer Sheriff was honored at the State Level Education Summit for his contributions to aviation education in South India."
        },
        {
            id: 4,
            title: "New Fleet Addition: Aeronca Sedan 15AC Joins KRI",
            publication: "The New Indian Express",
            date: "July 12, 2024",
            image: "https://images.unsplash.com/photo-1588611911307-28ece2c7555e?q=80&w=1000&auto=format&fit=crop",
            category: "Campus",
            description: "The college has expanded its training fleet with the acquisition of a historic Aeronca Sedan 15AC aircraft for student observation."
        },
        {
            id: 5,
            title: "Seminar on Future Careers in Global Aviation",
            publication: "The Economic Times",
            date: "June 05, 2024",
            image: "https://images.unsplash.com/photo-1572949645841-39450c05f133?q=80&w=1000&auto=format&fit=crop",
            category: "Events",
            description: "Leading experts from Dubai Airports shared insights on international career prospects for aspiring aircraft engineers."
        },
        {
            id: 6,
            title: "KRI Students Win National Aerospace Hackathon",
            publication: "The Deccan Herald",
            date: "May 22, 2024",
            image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1000&auto=format&fit=crop",
            category: "Achievement",
            description: "A team of five students from KRI College won the top prize for their innovative design in airport ground handling efficiency."
        }
    ];

    const categories = ['All', 'Academics', 'Placement', 'Achievement', 'Campus', 'Events'];

    const filteredCuttings = filter === 'All'
        ? pressCuttings
        : pressCuttings.filter(item => item.category === filter);

    return (
        <div className="bg-[#fcfbf7] min-h-screen font-sans">

            {/* Hero Section */}
            <section className="relative min-h-[40vh] py-12 flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop"
                        alt="KRI College Press Releases"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#003366]/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fcfbf7]/20"></div>
                </div>
                <div className="relative z-10 container-custom px-4">
                    <span className="bg-[#D4AF37] text-[#003366] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block shadow-sm">
                        News & Media
                    </span>
                    <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-4 tracking-tight drop-shadow-md">Press Releases</h1>
                    <p className="text-sm lg:text-xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed italic border-x border-[#D4AF37]/30 px-6">
                      &quot;Documenting our journey of excellence through the lens of national and regional media.&quot;
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 lg:py-20">
                <div className="container-custom px-4">

                    {/* Filter Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 border border-gray-100 shadow-sm">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${filter === cat
                                        ? 'bg-[#003366] text-white shadow-md'
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#003366]'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder="Search archives..."
                                className="w-full bg-gray-50 border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        </div>
                    </div>

                    {/* Newspaper Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredCuttings.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-white border-t-4 border-[#003366] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Paper Meta */}
                                <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                                    <div className="flex items-center gap-2">
                                        <Newspaper size={14} className="text-[#D4AF37]" />
                                        <span className="text-[10px] uppercase font-black tracking-widest text-[#003366]">
                                            {item.publication}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-gray-400" />
                                        <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-500">
                                            {item.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Clipping Image */}
                                <div className="relative h-64 overflow-hidden bg-gray-100 cursor-zoom-in group-hover:bg-black/5" onClick={() => setSelectedImage(item)}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover mix-blend-multiply opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="bg-white/90 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-[#003366]">
                                            <Maximize2 size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-[#003366] px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest border border-gray-200">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-serif font-bold text-[#333] mb-4 leading-snug group-hover:text-[#003366] transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 font-light italic">
                                       &quot;{item.description}&quot;
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                        <button
                                            onClick={() => setSelectedImage(item)}
                                            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#003366] transition-colors flex items-center gap-1"
                                        >
                                            View Full Clipping <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredCuttings.length === 0 && (
                        <div className="text-center py-20">
                            <Newspaper className="mx-auto text-gray-200 mb-4" size={64} />
                            <h3 className="text-xl font-serif font-bold text-gray-400 italic">No press releases found in this category.</h3>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox / Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 transition-all duration-500 animate-in fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="relative max-w-5xl w-full h-full md:h-auto overflow-hidden bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col lg:flex-row h-full">
                            {/* Image Part */}
                            <div className="relative w-full lg:w-3/4 h-[50vh] lg:h-[80vh] bg-gray-50">
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Info Part */}
                            <div className="w-full lg:w-1/4 p-8 bg-white flex flex-col justify-center border-l border-gray-100">
                                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">
                                    {selectedImage.publication} • {selectedImage.date}
                                </span>
                                <h2 className="text-2xl font-serif font-bold text-[#003366] mb-6 leading-tight">
                                    {selectedImage.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
                                    {selectedImage.description}
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-gray-50 p-4 border-l-4 border-[#D4AF37]">
                                        <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Category</p>
                                        <p className="text-xs font-bold text-[#003366]">{selectedImage.category}</p>
                                    </div>
                                    <button
                                        className="w-full bg-[#003366] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors shadow-lg"
                                        onClick={() => window.print()}
                                    >
                                        Print Clipping
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Pagination / Load More (Placeholder) */}
            <section className="pb-20">
                <div className="container-custom px-4 text-center">
                    <button className="inline-flex items-center gap-2 bg-[#003366] text-white px-8 py-3 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-all hover:gap-4 shadow-xl">
                        Load Archive <ChevronRight size={16} />
                    </button>
                </div>
            </section>

        </div>
    );
}
