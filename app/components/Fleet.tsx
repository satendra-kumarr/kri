'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X, ZoomIn } from 'lucide-react';

const fleetImages = {
    main: "/images/sedan.jpg",
    side: "/images/aeronca-1.png",
    top: "/images/aeronca-2.png",
    front: "/images/aeronca-3.png"
};

export default function Fleet() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(fleetImages.main);
    const [activeView, setActiveView] = useState<'main' | 'side' | 'top' | 'front'>('main');

    const openLightbox = (view: 'main' | 'side' | 'top' | 'front' = 'main') => {
        setActiveView(view);
        setActiveImage(fleetImages[view]);
        setIsLightboxOpen(true);
    };

    return (
        <section className="py-12 md:py-20 bg-[#f0f4f8] border-t border-b border-gray-200">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 gap-4 md:gap-0">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#003366] md:border-l-8 border-[#D4AF37] md:pl-4 uppercase tracking-wide text-center md:text-left">
                        Our Training Fleet
                    </h2>
                    <Link href="/fleet" className="text-[#003366] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                        View Full Fleet <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="bg-white p-1 border border-gray-300 shadow-sm">
                    <div className="grid md:grid-cols-2">
                        <div
                            className="relative h-[350px] md:h-auto border-b md:border-b-0 md:border-r border-gray-200 group overflow-hidden cursor-pointer"
                            onClick={() => openLightbox('main')}
                        >
                            <img
                                src="/images/sedan.jpg"
                                alt="Aeronca Sedan 15AC"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-white/90 text-[#003366] px-4 py-2 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ZoomIn size={16} /> View Larger
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 bg-[#003366]/90 text-white px-4 py-2 text-sm font-bold uppercase pointer-events-none">
                                Flagship Trainer
                            </div>
                        </div>

                        <div className="p-6 md:p-8 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-4 border-b border-gray-200 pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#003366]">Aeronca Sedan 15AC</h3>
                                    <p className="text-sm text-gray-500 font-semibold uppercase">Tailwheel Endurance Trainer</p>
                                </div>
                                <div className="bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 border border-gray-300">
                                    Reg: VT-KRI
                                </div>
                            </div>

                            <p className="text-gray-700 text-sm leading-relaxed mb-6 text-left md:text-justify">
                                The Aeronca Sedan 15AC is our flagship tailwheel aircraft, renowned for its stability and handling characteristics. It serves as the primary platform for <strong>stick-and-rudder mastery</strong>, offering students a solid foundation in aerodynamic principles before engaging with modern avionics.
                            </p>

                            <div className="flex justify-between items-center mb-3 bg-gray-100 p-2 border-l-4 border-[#D4AF37]">
                                <h4 className="font-bold text-[#003366] text-sm uppercase">Technical Specifications</h4>
                                <button
                                    onClick={() => openLightbox('side')}
                                    className="text-[10px] font-bold uppercase tracking-wider text-[#003366] underline hover:text-[#D4AF37] transition-colors"
                                >
                                    View Diagrams
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                <div className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                                    <span className="text-gray-600 font-medium">Engine</span>
                                    <span className="text-gray-800 font-bold">Continental C-145</span>
                                </div>
                                <div className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                                    <span className="text-gray-600 font-medium">Cruise Speed</span>
                                    <span className="text-gray-800 font-bold">114 mph</span>
                                </div>
                                <div className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                                    <span className="text-gray-600 font-medium">Range</span>
                                    <span className="text-gray-800 font-bold">456 mi</span>
                                </div>
                                <div className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                                    <span className="text-gray-600 font-medium">Wingspan</span>
                                    <span className="text-gray-800 font-bold">37 ft 6 in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LIGHTBOX MODAL */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
                    <div className="absolute inset-0" onClick={() => setIsLightboxOpen(false)}></div>

                    <div className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="bg-[#003366] text-white p-4 flex justify-between items-center shrink-0">
                            <div>
                                <h3 className="font-bold text-lg uppercase tracking-wider">Aeronca Sedan 15AC</h3>
                                <p className="text-xs text-gray-300 opacity-80 uppercase tracking-widest">
                                    {activeView === 'main' ? 'Live Photograph' : `Technical Diagram - ${activeView} View`}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsLightboxOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Main Image Area */}
                        <div className="flex-1 bg-gray-100 flex items-center justify-center p-4 relative overflow-auto min-h-[300px]">
                            <img
                                src={activeImage}
                                alt="Fleet Detail"
                                className="max-w-full max-h-full object-contain shadow-lg"
                            />
                        </div>

                        {/* Thumbnails / Controls */}
                        <div className="bg-white p-4 border-t border-gray-200 shrink-0 overflow-x-auto">
                            <div className="flex justify-center gap-4 min-w-max px-4">
                                <button
                                    onClick={() => openLightbox('main')}
                                    className={`relative h-20 w-32 border-2 rounded overflow-hidden transition-all ${activeView === 'main' ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 scale-105' : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={fleetImages.main} className="w-full h-full object-cover" alt="Main" />
                                    <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] uppercase font-bold text-center py-1">Photo</span>
                                </button>

                                <button
                                    onClick={() => openLightbox('side')}
                                    className={`relative h-20 w-32 border-2 rounded overflow-hidden transition-all bg-white ${activeView === 'side' ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 scale-105' : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={fleetImages.side} className="w-full h-full object-contain p-1" alt="Side" />
                                    <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] uppercase font-bold text-center py-1">Side Spec</span>
                                </button>

                                <button
                                    onClick={() => openLightbox('top')}
                                    className={`relative h-20 w-32 border-2 rounded overflow-hidden transition-all bg-white ${activeView === 'top' ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 scale-105' : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={fleetImages.top} className="w-full h-full object-contain p-1" alt="Top" />
                                    <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] uppercase font-bold text-center py-1">Top Spec</span>
                                </button>

                                <button
                                    onClick={() => openLightbox('front')}
                                    className={`relative h-20 w-32 border-2 rounded overflow-hidden transition-all bg-white ${activeView === 'front' ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 scale-105' : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={fleetImages.front} className="w-full h-full object-contain p-1" alt="Front" />
                                    <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] uppercase font-bold text-center py-1">Front Spec</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
