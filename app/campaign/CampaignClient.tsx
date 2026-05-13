"use client";
import { ArrowRight, Youtube } from 'lucide-react';
import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const CampaignClient = () => {
    // --- Configuration ---
    // We use inline styles for the specific LAB color to ensure exact matching
    const brandColor = { backgroundColor: 'lab(26.1542% 15.7545 -51.5504)' };
    const brandTextColor = { color: 'lab(26.1542% 15.7545 -51.5504)' };
    const [openImage, setOpenImage] = useState<string | null>(null);

    const campaignEvent = [
        {
            name: "Community Development",
            place: "Old Airtel Office, Park Town",
            date: "23 September 2020",
            description:
                "We organized an best school award event all over Madurai in 2020.",
            collaboration: "KRI College with Peace Foundation",
            image: "/images/Campaing.png",
        },
        {
            name: "Youth Development",
            place: "Gandhi Museum, Madurai",
            date: "13 April 2021",
            description:
                "Our college founder getting Best Social Worker Award.",
            collaboration: "Uthavum Uravugal Trust",
            image: "/images/Campaing1.png",
        },
        {
            name: "Social Awareness",
            place: "KRI College Campus, Park Town",
            date: "11 June 2022",
            description:
                "Our Founder Sir explaining various scholarships with parents who don’t about the scholarship schemes.",
            collaboration: "KRI College",
            image: "/images/Campaing3.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Madurai International Airport",
            date: "28 July 2022",
            description:
                "Our college founder sir with Mrs. Tamilisai Soundarajan mam Governor of Telangana.",
            collaboration: "KRI College",
            image: "/images/Campaing4.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Madurai International Airport",
            date: "28 July 2022",
            description:
                "Our college founder, Sir, met with the honorable Minister John Barla.",
            collaboration: "KRI College",
            image: "/images/Campaing5.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Public",
            date: "14 August 2022",
            description:
                "Our college founder sir and degree students distributed National Flag on occasion of Independence Day.",
            collaboration: "KRI College",
            image: "/images/Campaing6.png",
        },
        {
            name: "Community Development",
            place: "Madurai Govt.School",
            date: "19 September 2022",
            description:
                "Our college Founder with HM in Govt. School, Madurai.",
            collaboration: "KRI College & Madurai Government School",
            image: "/images/Campaing7.png",
        },

        // {
        //     name: "Social Awareness",
        //     place: "Government Hospital, Madurai",
        //     date: "15 October 022",
        //     description:
        //         "Our college degree student made an interview and enrich about our missile man of india with guidance of founder sir.",
        //     collaboration: "KRI College & Government Hospital, Madurai",
        //     image: "/images/Campaing8.png",
        // },
        {
            name: "Social Awareness",
            place: "Government Hospital, Madurai",
            date: "23 September 2022",
            description:
                "Our college degree student donating a blood as initiative of save blood program conducted by KRI College.",
            collaboration: "KRI College & Government Hospital, Madurai",
            image: "/images/Campaing8.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "YWCA School, Madurai",
            date: "14 November 2022",
            description:
                "Our college founder sir and degree students with childrens in YWCA School.",
            collaboration: "KRI College & YWCA School",
            image: "/images/Campaing9.png",
        },
        {
            name: "Education & Skills Development",
            place: "Sree Maha School, Aaniyur, Madurai",
            date: "28 November 2022",
            description: "News Article of Our college Batch-1,2,3 degree students Presenting their projects to the students in Sree Maha School.",
            collaboration: "KRI College & Sree Maha School",
            image: "/images/press.png",
        },
        {
            name: "Youth Development",
            place: "Old Airtel Office, Parktown",
            date: "09 December 2022",
            description: "Our college Batch-2,3 degree students  Getting an appreciation for social contributions.",
            collaboration: "KRI College",
            image: "/images/press2.png",
        },
        {
            name: "Social Awarness",
            place: "Don Bosco School, Madurai",
            date: "01 September 2023",
            description: "Our college founder sir explained about various scholarship to school students.",
            collaboration: "KRI College & Don Bosco School",
            image: "/images/Campaing11.png",
        },
        {
            name: "Social Awareness",
            place: "Public",
            date: "27 March 2023",
            description:
                "Our college degree students Participated in marathon conducted by Tamilvanam Team.",
            collaboration: "KRI College & Tamilvanam",
            image: "/images/Campaing12.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Public",
            date: "23 April 2023",
            description: "Our college degree students giving seeds to the general public on the occasion of our college Founder sir Birthday.",
            collaboration: "KRI College",
            image: "/images/Campaing14.png",
        },
        {
            name: "Community Development",
            place: "Congress Office",
            date: "08 April 2023",
            description: "Our college founder, Sir, at the Madurai Committee.",
            collaboration: "KRI College & Government of Tamil Nadu",
            image: "/images/Campaing13.png",
        },
        {
            name: "Environmental Awareness",
            place: "Public",
            date: "23 June 2023",
            description: "Planting Project by Students.",
            collaboration: "KRI College",
            image: "/images/Campaing15.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "KRI College Campus, Kallandhiri",
            date: "6 July 2023",
            description:
                "Our college founder sir and degree students with Tamilnadu Police Department.",
            collaboration: "KRI College, Tamilnadu Police Department",
            image: "/images/Campaing16.png",
        },
        {
            name: "Health & Wellness, Youth Development",
            place: "Decathlon, Madurai ",
            date: "12 August 2023",
            description:
                "Our college founder sir with decathlon event organizing team during awareness program regarding physical health.",
            collaboration: "KRI College, Decathlon Madurai",
            image: "/images/Campaing17.png",
        },
        {
            name: "Education & Skillsm, Social Awarness",
            place: "KRI College Campus, Kallandhiri ",
            date: "04 March 2024",
            description:
                "100+ Kids visited our campus and seen our  fleet.",
            collaboration: "KRI College",
            image: "/images/Campaing18.png",
        },
        {
            name: "Women Empowerment",
            place: "Rally",
            date: "08 March 2024",
            description:
                "Our college degree students Made an rally for international womens day raise voice against Farnanda Gang Rape with Government of Tamilnadu.",
            collaboration: "KRI College & Government of Tamilnadu",
            image: "/images/campaing19.png",
        },
        {
            name: "Women Empowerment ",
            place: "Public Places",
            date: "08 March 2024",
            description:
                "Our college degree students Made an rally for international womens day raise voice against Farnanda Gang Rape with Government of Tamilnadu.",
            collaboration: "KRI College & Government of Tamilnadu",
            image: "/images/campaing20.png",
        },

        {
            name: "Social Awareness",
            place: "Public Places",
            date: "07 August 2024",
            description:
                "Our college degree student collected a fund for the wayand landslide with guidance of founder sir.",
            collaboration: "KRI College, TN Govt, Kerala Govt",
            image: "/images/Campaing21.png",
        },
        {
            name: "Social Awarness",
            place: "Public Places",
            date: "07 August 2024",
            description: "Our college degree student collected a fund for the way and land slide with guidance of founder sir.",
            collaboration: "KRI College, TN Govt, Kerala Govt",
            image: "/images/Campaing22.png",
        },
        {
            name: "Social Awarness",
            place: "Public Places",
            date: "07 August 2024",
            description:
                "News Paper Article of Our college degree student collected a fund for the wayand landslide with guidance of founder sir.",
            collaboration: "KRI College, TN Govt, Kerala Govt",
            image: "/images/Campaing23.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Madurai International Airport",
            date: "11 September 2024",
            description:
                "Our college founder sir and degree students with Mr. Selvaperunthagai sir, Leader of Tamilnadu Government.",
            collaboration: "KRI College & Don Bosco School",
            image: "/images/Camp1.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Public",
            date: "11 September 2024",
            description:
                "Our college founder sir and degree students with Mr. Selvaperunthagai sir, Leader of Tamilnadu Government in college for  Aircraft Unveiling Function.",
            collaboration: "KRI College, TN Govt",
            image: "/images/campaing25.png",
        },
        {
            name: "Women Empowerment",
            place: "Rally",
            date: "11 September 2024",
            description: "Our college founder sir and degree students  with Leader of Tamilnadu Government in college for Aircraft Unveiling Function.",
            collaboration: "KRI College, TN Govt",
            image: "/images/campaing26.png",
        },
        {
            name: "Social Awareness",
            place: "Public",
            date: "15 October2024",
            description:
                "Our college degree student made an interview and enrich about our missile man of india with guidance of founder sir.",
            collaboration: "KRI College, TN Govt",
            image: "/images/camp.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "15 October 2023",
            description:
                "Our college degree student made an interview and enrich about our missile man of india with guidance of founder sir.",
            collaboration: "KRI College, TN Govt",
            image: "/images/campaing29.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "26 October 2024",
            description: "Our college degree student distributed a flood relief kit to Madurai peoples with guidance of founder sir.",

            collaboration: "KRI College, TN Govt",
            image: "/images/campaing28.png",
        },

        {
            name: "Social Awareness",
            place: "KRI College Campus, Kallandhiri",
            date: "10 August 2025",
            description:
                "News paper article of Our college degree student along with founder sir after completion of Bike Rally with ceo of maha groups.",
            collaboration: "KRI College, TN Police, ceo of maha groups",
            image: "/images/press7.png",
        },
        {
            name: "Social Awareness",
            place: "KRI College Campus, Kallandhiri",
            date: "10 August 2025",
            description: "Our college degree student along with founder sir after completion of Bike Rally with ceo of maha groups.",
            collaboration: "KRI College, TN Police, ceo of maha groups",
            image: "/images/campaing31.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "05 september 2023",
            description: "Our college degree student conducted an interview session on the occasion of Teachers Day in Public.",
            collaboration: "KRI College & Tamil Nadu Government",
            image: "/images/campaing32.png",
        },
        {
            name: "Social Awareness",
            place: "Periyar Bus Stand",
            date: "14 November 2025",
            description:
                "Our college degree student distributed sweets on the occasion of Childrens Day.",
            collaboration: "KRI College, TN Police",
            image: "/images/campaing33.png",
        },
        {
            name: "Social Awareness",
            place: "Goripalayam",
            date: "20 November 2025",
            description:
                "Our college degree student distributed Road Safety Awarness Notice and enrich about the Wear Helmet Awanress.",
            collaboration: "KRI College, TN Police",
            image: "/images/campaing34.png",
        },
        {
            name: "Social Awareness",
            place: "Roja Vanam, Madurai",
            date: "10 January 2026",
            description:
                "Our college founder sir distributing foods in old age and child care.",
            collaboration: "KRI College, RojaVanam",
            image: "/images/campaing35.png",
        },

    ];


    return (
        <div className="bg-slate-100 py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Page Heading */}
                <div className="text-center mb-16">
                    <h2
                        style={brandTextColor}
                        className="text-3xl md:text-4xl font-serif font-bold mb-4"
                    >
                        Our Campaigns
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                    <p className="mt-4 text-slate-600">
                        Community outreach and development initiatives organized by KRI College
                    </p>
                </div>

                {/* Campaign Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {campaignEvent.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
                            onClick={() => setOpenImage(event.image)}
                        >
                            {/* Image */}
                            <img
                                src={event.image}
                                alt={event.name}
                                className="w-full h-56 object-cover cursor-pointer"
                            />

                            {/* Content */}
                            <div className="p-6 space-y-3">
                                <h3
                                    style={brandTextColor}
                                    className="text-lg font-serif font-bold"
                                >
                                    {event.name}
                                </h3>

                                <p className="text-sm text-slate-600">
                                    <span className="font-semibold">Event Place:</span>{" "}
                                    {event.place}
                                </p>

                                <p className="text-sm text-slate-600">
                                    <span className="font-semibold">Event Date:</span>{" "}
                                    {event.date}
                                </p>

                                <p className="text-sm text-slate-600">
                                    <span className="font-semibold">Collaboration:</span>{" "}
                                    {event.collaboration}
                                </p>

                                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                                    {event.description}
                                </p>
                            </div>
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
                                    For more Campaign <br />watch on YouTube Channel
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
        </div>
    );
}
export default CampaignClient;
