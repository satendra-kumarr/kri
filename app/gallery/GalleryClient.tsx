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
];

const GalleryClient = () => {
    const [openImage, setOpenImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <h1 className="text-3xl font-serif font-bold text-center mb-8 text-[#003366]">
                Our Gallery
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
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
