"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Image as ImageIcon, X } from "lucide-react";
import { getStrapiData, getStrapiImageUrl } from "../lib/strapi";

interface GalleryImage {
    src: string;
    caption: string;
}

const defaultImages: GalleryImage[] = [
    { src: "/images/training-1.jpg", caption: "Pre-flight Briefing" },
    { src: "/images/training-2.jpg", caption: "Cockpit Familiarization" },
    { src: "/images/training-3.jpg", caption: "Student Pilot Training" },
    { src: "/images/training-4.jpg", caption: "Maintenance & Safety" },
];

export default function Gallery() {
    const [images, setImages] = useState<GalleryImage[]>(defaultImages);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            const data = await getStrapiData<GalleryImage[]>('galleries', defaultImages, (strapiData) => {
                return strapiData.map((item: any) => {
                    const attrs = item.attributes || item;
                    const media = Array.isArray(attrs.image) ? attrs.image[0] : attrs.image?.data?.attributes || attrs.image;
                    
                    return {
                        src: getStrapiImageUrl(media?.url || defaultImages[0].src),
                        caption: attrs.title || attrs.caption || media?.name || "Campus Gallery"
                    };
                });
            });

            if (data && data.length > 0 && JSON.stringify(data) !== JSON.stringify(defaultImages)) {
                setImages(data);
            }
        };

        fetchGallery();
    }, []);

    return (
        <section className="py-12 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 border-b-2 border-gray-200 pb-4 gap-4 md:gap-0">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#003366] md:border-l-8 border-[#D4AF37] md:pl-4 uppercase tracking-wide text-center md:text-left">
                        Campus Gallery
                    </h2>
                    <a href="#" className="text-sm font-bold text-[#003366] hover:text-[#D4AF37] flex items-center gap-1">
                        <ImageIcon size={16} /> View All Photos
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="group relative border border-gray-200 bg-white p-1 shadow-sm cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                        >
                            <div className="overflow-hidden h-48 w-full relative">
                                {img.src.startsWith('http') || img.src.startsWith('/') ? (
                                    <Image
                                        src={img.src}
                                        alt={img.caption}
                                        fill
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <ImageIcon className="text-gray-400" />
                                    </div>
                                )}
                            </div>
                            <div className="bg-[#003366] text-white text-center py-2 text-xs font-bold uppercase tracking-wider truncate px-2">
                                {img.caption}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-10 right-0 text-white hover:text-red-400"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={28} />
                        </button>

                        <div className="relative w-full aspect-video">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.caption}
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>

                        <p className="text-center text-white mt-4 text-sm font-semibold">
                            {selectedImage.caption}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

