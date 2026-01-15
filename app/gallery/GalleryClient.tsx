"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const images = [
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
    "/images/gallery-1.jpg",
    "/images/industry-training.jpg",
    "/images/industry-collaborations.png",
    "/images/Infrastructure.jpeg",
    "/images/kri-front.jpeg",
    "/images/Leadership.png",
    "/images/training-6.jpg",
    "/images/VIDUTHALAI SIRUTHAI KATCHI (VCK).png",
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
    const [openImage, setOpenImage] = useState<string | null>(null);

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
