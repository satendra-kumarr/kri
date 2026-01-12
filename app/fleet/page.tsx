'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Data for the Aircraft Carousel - Active and Future Fleet
const fleetData = [
    {
        id: 1,
        name: "AERONCA 15AC SEDAN",
        status: "ACTIVE",
        description: [
            "The Aeronca 15AC Sedan is a four-seat, fixed conventional gear light airplane which was produced by Aeronca Aircraft between 1948 and 1951. Designed for personal use, the Sedan also found applications in utility roles including bush flying.",
            "The Sedan was the last design that Aeronca put into production and was the largest aircraft produced by the company."
        ],
        heroImage: "/images/sedan-2.jpg", // Hero     background image - change this to specific image for Aeronca
        mainImage: "/images/aeronca.webp",
        sideView: "/images/aeronca-1.png",
        topView: "/images/aeronca-2.png",
        frontView: "/images/aeronca-3.png",
        specs: [
            { label: "Crew", value: "1" },
            { label: "Capacity", value: "3 Passengers" },
            { label: "Length", value: "25 Ft 3 In" },
            { label: "Wingspan", value: "37 Ft 6 In" },
            { label: "Height", value: "7 Ft 0 In" },
            { label: "Wing Area", value: "200 Sq Ft" },
            { label: "Empty Weight", value: "1,150 Lbs" },
            { label: "Gross Weight", value: "2,050 Lbs" },
            { label: "Fuel Capacity", value: "40 Gal" },
            { label: "Powerplant", value: "Continental C-145, 145 Hp" },
            { label: "Maximum Speed", value: "129 Mph" },
            { label: "Cruise Speed", value: "114 Mph" },
            { label: "Stall Speed", value: "53 Mph" },
            { label: "Range", value: "456 Mi" },
            { label: "Service Ceiling", value: "12,400 Ft" },
            { label: "Rate Of Climb", value: "800 Fpm" },
        ]
    },
    {
        id: 2,
        name: "CESSNA 210 CENTURION",
        status: "FUTURE FLEET",
        description: [
            "This aircraft is a six-seat, high-performance, retractable-gear, single-engine high-wing general aviation aircraft produced from 1957 to 1986.",
            "The aircraft is a remarkably high-performing load-hauler with its ability to carry serious loads at reasonable speeds and for its ability to fly almost five hours with its 90 gallons of fuel."
        ],
        heroImage: "/images/Cessna-210.jpg", // Hero background image - change this to specific image for Cessna 210
        mainImage: "/images/210-Aircraft.webp",
        sideView: "/images/CESSNA-210-BP.jpg",
        topView: null,
        frontView: null,
        specs: [
            { label: "Length", value: "28 Ft 3 In" },
            { label: "Height", value: "9 Ft 8 In" },
            { label: "Wingspan", value: "36 Ft 9 In" },
            { label: "Empty Weight", value: "2,120 Lbs" },
            { label: "Maximum Speed", value: "200 Mph" },
            { label: "Maximum Range", value: "1,250 Mi" },
            { label: "Service Ceiling", value: "15,500 Ft" },
            { label: "Fuel Capacity", value: "90 Gal" },
            { label: "Seat Capacity", value: "5" },
        ]
    }
];

// Facility data - 6 cards total (3 in a row on desktop)
const facilityData = [
    {
        title: "OUR HANGAR",
        image: "/images/training-1.jpg",
        description: "Secure and spacious storage for our entire fleet. Equipped with modern maintenance and inspection facilities, ensuring the highest standards of safety and performance."
    },
    {
        title: "CLASSROOM",
        image: "/images/training-2.jpg",
        description: "Modern classrooms with whiteboards, projectors, and air-conditioning. Capacity for up to 20 students with a curated library of aviation books."
    },
    {
        title: "PILOT LOUNGE",
        image: "/images/training-4.jpg",
        description: "A dedicated space for pilots to unwind, engage with fellow aviators, and prepare for flights. Features aviation merchandise and comfortable seating."
    },
    {
        title: "FLIGHT SIMULATOR",
        image: "/images/training-3.jpg",
        description: "ELITE Simulations PI-135 BATD simulator providing realistic training scenarios. Practice maneuvers and emergency procedures in a safe, controlled environment."
    },
    {
        title: "AVIONICS",
        image: "/images/training-5.jpg",
        description: "Cutting-edge technology for maintenance and repair of aircraft electronic systems. Fully air-conditioned with specialized tools for precision work."
    },
    {
        title: "ATC TRAINING",
        image: "/images/training-atc.jpg",
        description: "Professional training facility for Air Traffic Control. Equipped with modern audio-visual equipment and simulators for comprehensive ATC training."
    }
];

export default function FleetPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [openImage, setOpenImage] = useState<string | null>(null);
    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % fleetData.length);
                setIsAnimating(false);
            }, 500);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev - 1 + fleetData.length) % fleetData.length);
                setIsAnimating(false);
            }, 500);
        }
    };

    const goToSlide = (idx: number) => {
        if (idx !== currentIndex && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(idx);
                setIsAnimating(false);
            }, 500);
        }
    };

    const currentItem = fleetData[currentIndex];

    return (
        <div className="bg-white min-h-screen">


            {/* ===== 1. HERO SECTION - Changes with Fleet ===== */}
            <section className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden group cursor-pointer" onClick={() => setOpenImage(currentItem.heroImage || "/images/fleet.jpg")}>
                {/* Background Image - Changes with fleet */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={currentItem.heroImage || "/images/fleet.jpg"}
                        alt="Fleet Banner"
                        fill
                        className={`object-cover transition-all duration-700 ease-in-out ${isAnimating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
                        priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="bg-white/90 text-[#003366] px-4 py-2 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <ZoomIn size={16} /> View Banner
                        </span>
                    </div>
                </div>
            </section>

            {/* ===== 2. AIRCRAFT IMAGE WITH NAVIGATION - Changes on Slide, Overlaps Hero ===== */}
            <section className="bg-transparent py-4 sm:py-6 md:py-8 lg:py-16 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-32 relative z-10">
                <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-3 sm:px-4 relative">

                    {/* Navigation Arrows - Mobile First */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 sm:-left-8 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 text-gray-500 sm:text-gray-400 hover:text-[#D4AF37] transition-colors"
                        aria-label="Previous Aircraft"
                    >
                        <ChevronLeft size={32} strokeWidth={1.5} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 sm:-right-8 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 text-gray-500 sm:text-gray-400 hover:text-[#D4AF37] transition-colors"
                        aria-label="Next Aircraft"
                    >
                        <ChevronRight size={32} strokeWidth={1.5} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    </button>

                    {/* Aircraft Illustration - Centered, changes with slide, transparent background */}
                    <div className={`transition-all duration-700 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

                        <div
                            className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto aspect-[16/10] bg-transparent cursor-pointer group"
                            onClick={() => setOpenImage(currentItem.mainImage)}
                        >

                            <Image
                                src={currentItem.mainImage}
                                alt={currentItem.name}
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                                style={{ backgroundColor: 'transparent' }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <span className="bg-white/90 text-[#003366] px-4 py-2 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ZoomIn size={16} /> View Aircraft
                                </span>
                            </div>

                        </div>

                    </div>
                    {/* Bottom Label BELOW Aircraft Image */}

                </div>
            </section>


            {/* ===== 3. AIRCRAFT DETAILS SECTION ===== */}
            <section className="bg-white pb-8 sm:pb-12 md:pb-16 lg:pb-24 pt-4 sm:pt-6">
                <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

                    <div className={`transition-all duration-700 ease-in-out ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>

                        {/* Two Column Layout: Left (Title, Desc, Specs) | Right (Diagrams) */}
                        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">

                            {/* LEFT COLUMN: Title, Description, Specs Table */}
                            <div className="w-full lg:w-1/2">

                                {/* Aircraft Title with Vertical Bar - Mobile First */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-wide leading-tight">
                                            <span className="text-[#D4AF37] mr-1 sm:mr-2">|</span>
                                            {currentItem.name}
                                        </h2>
                                        {currentItem.status && (
                                            <span className={`px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider self-start sm:self-auto whitespace-nowrap ${currentItem.status === "ACTIVE"
                                                ? "bg-green-600 text-white"
                                                : "bg-[#D4AF37] text-[#003366]"
                                                }`}>
                                                {currentItem.status}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Description Paragraphs */}
                                <div className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed sm:leading-loose space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-justify sm:text-left">
                                    {currentItem.description.map((p, idx) => (
                                        <p key={idx} className="text-balance">{p}</p>
                                    ))}
                                </div>

                                {/* Specifications Table - Black BG, Gold Left Border */}
                                <div className="bg-[#1a1a1a] border-l-[3px] sm:border-l-[4px] border-[#D4AF37] rounded-sm overflow-hidden">
                                    {currentItem.specs.map((spec, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between items-center px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 border-b border-white/10 last:border-b-0"
                                        >
                                            <span className="text-white text-xs sm:text-sm font-medium">{spec.label}</span>
                                            <span className="text-white text-xs sm:text-sm font-medium text-right ml-4">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Aircraft Diagrams - Free to show images without boxes */}
                            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">

                                {/* Side View */}
                                {currentItem.sideView && (
                                    <div
                                        className="relative w-full animate-fade-in group cursor-pointer"
                                        onClick={() => setOpenImage(currentItem.sideView)}
                                    >
                                        <Image
                                            src={currentItem.sideView}
                                            alt={`${currentItem.name} - Side View`}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <span className="bg-white/90 text-[#003366] px-4 py-2 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <ZoomIn size={16} /> View Diagram
                                            </span>
                                        </div>
                                    </div>
                                )}
                                {/* Top View - Only show for Aeronca */}
                                {currentItem.topView && (
                                    <div
                                        className="relative w-full animate-fade-in group cursor-pointer"
                                        style={{ animationDelay: '0.1s' }}
                                        onClick={() => setOpenImage(currentItem.topView)}
                                    >
                                        <Image
                                            src={currentItem.topView}
                                            alt={`${currentItem.name} - Top View`}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <span className="bg-white/90 text-[#003366] px-4 py-2 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <ZoomIn size={16} /> View Diagram
                                            </span>
                                        </div>
                                    </div>
                                )}
                                {/* Front View - Only show for Aeronca */}
                                {currentItem.frontView && (
                                    <div
                                        className="relative w-full animate-fade-in group cursor-pointer"
                                        style={{ animationDelay: '0.2s' }}
                                        onClick={() => setOpenImage(currentItem.frontView)}
                                    >
                                        <Image
                                            src={currentItem.frontView}
                                            alt={`${currentItem.name} - Front View`}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <span className="bg-white/90 text-[#003366] px-4 py-2 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <ZoomIn size={16} /> View Diagram
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-12">
                        {fleetData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`rounded-full transition-all duration-300 ease-in-out ${idx === currentIndex
                                    ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-[#D4AF37]'
                                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to aircraft ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>


            {/* ===== 4. FACILITIES GRID SECTION ===== */}
            <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {facilityData.map((facility, idx) => (
                            <div
                                key={idx}
                                className="group relative h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer rounded-lg shadow-lg"
                                onClick={() => setOpenImage(facility.image)} // open modal on click
                            >
                                <Image
                                    src={facility.image}
                                    alt={facility.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors duration-500"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-widest mb-2 sm:mb-3 relative">
                                        {facility.title}
                                        <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-12 sm:w-16 h-[2px] sm:h-[3px] bg-[#D4AF37]"></span>
                                    </h3>
                                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                                        {facility.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal / Lightbox */}
                {openImage && (
                    <div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 sm:p-8"
                        onClick={() => setOpenImage(null)}
                    >
                        <div className="relative w-auto h-auto max-w-[95vw] max-h-[95vh] flex justify-center items-center">
                            <Image
                                src={openImage}
                                alt="Facility"
                                width={1600}
                                height={1200}
                                className="object-contain rounded-lg max-h-[90vh] w-auto h-auto shadow-2xl"
                            />
                            <button
                                className="absolute -top-4 -right-4 bg-white text-black text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenImage(null);
                                }}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </section>


            {/* ===== 5. FOOTER CTA SECTION ===== */}
            <section className="bg-white py-8 sm:py-12 md:py-16 text-center border-t border-gray-100">
                <div className="container mx-auto px-3 sm:px-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest text-gray-800 mb-6 sm:mb-8">
                        Start Your Aviation Journey
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#D4AF37] text-[#003366] px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-widest hover:bg-[#b08d26] hover:text-white transition-colors duration-300"
                    >
                        Enroll Now
                    </Link>
                </div>
            </section>

        </div>
    );
}
