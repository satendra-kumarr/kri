"use client";

import { ArrowRight, Instagram, Youtube } from "lucide-react";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { getStrapiData, getStrapiImageUrl } from "../lib/strapi";

const defaultImages = [
    "/images/training-2.jpg",
    "/images/training-3.jpg",
    "/images/training-4.jpg",
    "/images/training-5.jpg",
    "/images/training-1.jpg",
    "/images/Globally.png",
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/Attention.jpg",
    "/images/industry-training.jpg",
    "/images/industry-collaborations.png",
    "/images/Infrastructure.jpeg",
    "/images/kri-front.jpeg",
    "/images/Leadership.png",
    "/images/training-6.jpg",
    "/images/VCK.png",
    "/images/training-atc.jpg",
    "/images/training-1.jpg",
    "/images/training-2.jpg",
    "/images/training-3.jpg",
    "/images/training-4.jpg",
    "/images/training-5.jpg",
    "/images/sports.jpg",
    "/images/social.jpg",
    "/images/Tamil Nadu Police Team.PNG",
    "/images/Interaction.png",
    "/images/gallery/gallery.jpeg",
    "/images/gallery/gallery (2).jpeg",
    "/images/gallery/gallery (3).jpeg",
    "/images/gallery/gallery (4).jpeg",
    "/images/gallery/gallery (5).jpeg",
    "/images/gallery/gallery (6).jpeg",
    "/images/gallery/gallery (7).jpeg",
    "/images/gallery/gallery (8).jpeg",
    "/images/gallery/gallery (9).jpeg",
    "/images/gallery/gallery (10).jpeg",
    "/images/gallery/gallery (11).jpeg",
    "/images/gallery/gallery (12).jpeg",
    "/images/gallery/gallery (13).jpeg",
    "/images/gallery/gallery (14).jpeg",
    "/images/gallery/gallery (15).jpeg",
    "/images/gallery/gallery (16).jpeg",
    "/images/gallery/gallery (17).jpeg",
    "/images/gallery/gallery (18).jpeg",
    "/images/gallery/gallery (19).jpeg",
    "/images/gallery/gallery (20).jpeg",
    "/images/gallery/gallery (21).jpeg",
    "/images/gallery/gallery (22).jpeg",
    "/images/gallery/gallery (23).jpeg",
    "/images/gallery/gallery (24).jpeg",
    "/images/gallery/gallery (25).jpeg",
    "/images/gallery/gallery (26).jpeg",
    "/images/gallery/gallery (27).jpeg",
    "/images/gallery/gallery (28).jpeg",
    "/images/gallery/gallery (29).jpeg",
    "/images/gallery/gallery (30).jpeg",
    "/images/gallery/gallery (31).jpeg",
    "/images/gallery/gallery (32).jpeg",
    "/images/gallery/gallery (33).jpeg",
    "/images/gallery/gallery (34).jpeg",
    "/images/gallery/gallery (35).jpeg",
    "/images/gallery/gallery (36).jpeg",
    "/images/gallery/gallery (37).jpeg",
    "/images/gallery/gallery (38).jpeg",
    "/images/gallery/gallery (39).jpeg",
    "/images/gallery/gallery (40).jpeg",
    "/images/gallery/gallery (41).jpeg",
    "/images/gallery/gallery (42).jpeg",
    "/images/gallery/gallery (43).jpeg",
    "/images/gallery/gallery (44).jpeg",
    "/images/gallery/gallery (45).jpeg",
    "/images/gallery/gallery (46).jpeg",
    "/images/gallery/gallery (47).jpeg",
    "/images/gallery/gallery (48).jpeg",
    "/images/gallery/gallery (49).jpeg",
    "/images/gallery/gallery (50).jpeg",
    "/images/gallery/gallery (51).jpeg",
    "/images/gallery/gallery (52).jpeg",
    "/images/gallery/gallery (53).jpeg",
    "/images/gallery/gallery (54).jpeg",
    "/images/gallery/gallery (55).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.08.29 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 7.57.13 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.08.36 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.11.00 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.11.00 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.11.07 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.11.08 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.11.08 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.11.13 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.11.13 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.11.14 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.14.57 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.14.57 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.14.57 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.14.58 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.14.58 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.14.58 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.17.56 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.17.57 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.17.57 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.18.03 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.18.05 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.18.07 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.18.08 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.18.08 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.18.09 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.18.09 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-10 at 8.18.09 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-11 at 3.24.45 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-12 at 9.53.35 AM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-12 at 9.53.38 AM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-12 at 9.53.37 AM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-01-12 at 9.53.37 AM.jpeg",
    "/images/gallery/WhatsApp Image 2026-01-12 at 9.53.40 AM.jpeg",
];

const GalleryClient = () => {
    const [images, setImages] = useState<string[]>(defaultImages);
    const [openImage, setOpenImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            const data = await getStrapiData<string[]>('galleries', defaultImages, (strapiData) => {
                // Map Strapi objects to simple image URLs
                return strapiData.map((item: any) => {
                    const attrs = item.attributes || item;
                    const media = Array.isArray(attrs.image) ? attrs.image[0] : attrs.image?.data?.attributes || attrs.image;
                    return getStrapiImageUrl(media?.url);
                }).filter(Boolean);
            });

            if (data && data.length > 0) {
                // If we got data from Strapi, we can either replace or append.
                // Usually for a gallery page, we might want to show Strapi images first, then fallbacks if none.
                // But if Strapi has data, we likely want to use only Strapi data.
                if (JSON.stringify(data) !== JSON.stringify(defaultImages)) {
                    setImages(data);
                }
            }
        };

        fetchGallery();
    }, []);


    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <h1 className="text-3xl font-serif font-bold text-center mb-8 text-[#003366]">
                Our Gallery
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
                        onClick={() => setOpenImage(img)}
                    >
                        <img
                            src={encodeURI(img)}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-80 object-cover"
                        />
                    </div>
                ))}
                {/* YouTube Channel Link as the last grid item */}
                <div className="bg-gradient-to-br from-[#003366] to-[#002244] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-[#D4AF37] flex items-center justify-center p-4 min-h-[200px] transform hover:-translate-y-1">
                    <a
                        href="https://www.youtube.com/@kricollege"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-4 text-center w-full"
                    >
                        <div className="bg-white/10 p-5 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#003366] transition-all duration-500 shadow-inner group-hover:shadow-lg ring-1 ring-[#D4AF37]/30 group-hover:ring-[#003366]">
                            <Youtube size={36} className="group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-gray-300 mb-1 group-hover:text-white transition-colors">Discover More</span>
                            <span className="text-sm md:text-base font-serif font-bold uppercase tracking-wide text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                For more  <br />watch on YouTube Channel
                            </span>
                        </div>
                        <div className="mt-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <ArrowRight size={20} />
                        </div>
                    </a>

                </div>
                <div className="bg-gradient-to-br from-[#003366] to-[#002244] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-[#D4AF37] flex items-center justify-center p-4 min-h-[200px] transform hover:-translate-y-1">

                    <a
                        href="https://www.instagram.com/kricollege/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-4 text-center w-full"
                    >
                        <div className="bg-white/10 p-5 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#003366] transition-all duration-500 shadow-inner group-hover:shadow-lg ring-1 ring-[#D4AF37]/30 group-hover:ring-[#003366]">
                            <Instagram size={36} className="group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-gray-300 mb-1 group-hover:text-white transition-colors">Discover More</span>
                            <span className="text-sm md:text-base font-serif font-bold uppercase tracking-wide text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                For more  <br />watch on Instagram Channel
                            </span>
                        </div>
                        <div className="mt-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <ArrowRight size={20} />
                        </div>
                    </a>
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
                            className="absolute top-4 right-5 z-50 bg-black text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center hover:bg-red-600 transition"
                            onClick={() => setOpenImage(null)}
                            aria-label="Close"
                        >
                            <IoClose />
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default GalleryClient;


