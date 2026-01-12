'use client';

import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            name: "Capt. Rajesh Kumar",
            role: "Alumni Batch 2015",
            designation: "Senior First Officer, Indigo",
            text: "The rigorous training at KRI College gave me the confidence to handle real-world flight operations. The simulator sessions were particularly helpful for my CPL training."
        },
        {
            name: "Ms. Anita Desai",
            role: "Alumni Batch 2018",
            designation: "AME, Emirates Engineering",
            text: "Working on live aircraft engines during my college days was a game-changer. The practical exposure I received here helped me clear my DGCA modules in the first attempt."
        },
        {
            name: "Mr. S. Karthik",
            role: "Alumni Batch 2020",
            designation: "Terminal Manager, Bangalore Airport",
            text: "KRI's discipline and grooming standards are unmatched. The management course prepared me for the high-pressure environment of airport operations."
        },
        {
            name: "Priya Sharma",
            role: "Alumni Batch 2019",
            designation: "Cabin Crew, Qatar Airways",
            text: "From grooming to communication skills, KRI transformed my personality. I was selected by Qatar Airways in my very first interview thanks to the guidance here."
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section className="py-16 md:py-24 bg-[#003366] text-white relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <div className="container-custom relative z-10 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold mb-3">Student Success Stories</h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                        Hear from our alumni who are soaring high in the aviation industry across the globe.
                    </p>
                </div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main Card */}
                    <div className="bg-white text-gray-800 p-8 md:p-12 rounded-sm shadow-xl relative mt-8 border-t-8 border-[#D4AF37]">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#003366] text-white p-3 rounded-full shadow-lg border-4 border-white">
                            <Quote size={24} className="fill-current" />
                        </div>

                        <div className="text-center mt-4">
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-[#D4AF37] fill-current" />
                                ))}
                            </div>

                            <p className="text-lg md:text-xl font-medium italic text-gray-700 leading-relaxed mb-8 font-serif">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div>
                                <h4 className="text-xl font-bold text-[#003366] mb-1">{testimonials[currentIndex].name}</h4>
                                <p className="text-xs font-bold uppercase text-[#D4AF37] tracking-wider mb-1">{testimonials[currentIndex].designation}</p>
                                <p className="text-xs text-gray-400">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons - Adjusted for Mobile */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 md:-left-16 -translate-y-1/2 bg-black/20 hover:bg-black/40 md:bg-transparent text-white md:text-white/50 md:hover:text-white transition-colors p-2 rounded-full md:rounded-none z-20 backdrop-blur-sm md:backdrop-blur-none"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} className="md:w-10 md:h-10" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 md:-right-16 -translate-y-1/2 bg-black/20 hover:bg-black/40 md:bg-transparent text-white md:text-white/50 md:hover:text-white transition-colors p-2 rounded-full md:rounded-none z-20 backdrop-blur-sm md:backdrop-blur-none"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} className="md:w-10 md:h-10" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-[#D4AF37] w-6' : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
