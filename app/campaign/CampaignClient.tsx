"use client";
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
                "We organized a n best school award event all over Madurai in 2020",
            collaboration: "KRI College with Peace Foundation",
            image: "/images/Campaing.png",
        },
        {
            name: "Youth Development",
            place: "Gandhi Museum, Madurai",
            date: "13 April 2021",
            description:
                "Our college founder getting Best Social Worker Award ",
            collaboration: "Uthavum Uravugal Trust",
            image: "/images/Campaing1.png",
        },
        {
            name: "Social Awareness",
            place: "KRI College Campus, Park Town",
            date: "11 June 2022",
            description:
                "Our Founder Sir explaining various scholarships with parents who don’t about the scholarship schemes",
            collaboration: "KRI College",
            image: "/images/Campaing3.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Madurai International Airport",
            date: "28 July 2022",
            description:
                "Our college founder sir with M rs.Tamilisai Soundarajan mam ",
            collaboration: "KRI College, BJP Political Party",
            image: "/images/Campaing4.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Madurai International Airport",
            date: "28 July 2022",
            description:
                "Our college founder sir with a BJP party leader ",
            collaboration: "KRI College, BJP Political Party",
            image: "/images/Campaing5.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Public",
            date: "14 August 2022",
            description:
                "Our college founder sir and degree students distributed National Flag on occasion of Independence Day",
            collaboration: "KRI College",
            image: "/images/Campaing6.png",
        },
        {
            name: "Community Development",
            place: "Madurai Govt.School",
            date: "19 September 2022",
            description:
                "Our college Founder with HM in Govt. School, madurai",
            collaboration: "KRI College & Madurai Government School",
            image: "/images/Campaing7.png",
        },
        {
            name: "Social Awareness",
            place: "Government Hospital, Madurai",
            date: "23 September 2022",
            description:
                " Our college degree student donating a blood as initiative of save blood program conducted by KRI College",
            collaboration: "KRI College & Government Hospital, Madurai",
            image: "/images/Campaing8.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "YWCA School, Madurai",
            date: "14 November 2022",
            description:
                "Our college founder sir and degree students with childrens in YWCA School",
            collaboration: "KRI College & YWCA School",
            image: "/images/Campaing9.png",
        },
        {
            name: "Education & Skills Development",
            place: "Sree Maha School, Aaniyur, Madurai",
            date: "28 November 2022",
            description:
                "News Article of Our college Batch-1,2,3 degree students Presenting their projects to the students in Sree Maha School",
            collaboration: "KRI College & Sree Maha School",
            image: "/images/Campaing10.png",
        },
        {
            name: "Youth Development",
            place: "Old Airtel Office, Park Town",
            date: "09 December 2022",
            description:
                " Our college Batch-2,3 degree students Getting an appreciation for social contributions.",
            collaboration: "KRI College & Piravasi Pulam Peyar Amaipu",
            image: "/images/Campaing11.png",
        },
        {
            name: "Social Awareness",
            place: "Don Bosco School, Madurai",
            date: "01 September 2023",
            description:
                "Our college founder sir explained about various scholarship to school students ",
            collaboration: "KRI College & Don Bosco School",
            image: "/images/Campaing12.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Public",
            date: "23 June 2023",
            description:
                "Our college degree students Participated in marathon conducted by Tamilvanam Team",
            collaboration: "KRI College",
            image: "/images/Campaing13.png",
        },
        {
            name: "Community Development",
            place: "Congress Office",
            date: "08 March 2024",
            description:
                " Our college founder sir Madurai congress committee",
            collaboration: "KRI College & Government of Tamil Nadu",
            image: "/images/Campaing14.png",
        },
        {
            name: "Environmental Awareness",
            place: "Public",
            date: "11 September 2024",
            description:
                "Our college students planting trees as go green initiative",
            collaboration: "KRI College",
            image: "/images/Campaing15.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "KRI College Campus, Kallandhiri",
            date: "11 September 2024",
            description:
                "Our college founder sir and degree students with Tamilnadu Police Department",
            collaboration: "KRI College, Tamilnadu Police Department",
            image: "/images/Campaing16.png",
        },
        {
            name: "Health & Wellness, Youth Development",
            place: "Decathlon, Madurai ",
            date: "15 October 2024",
            description:
                "Our college founder sir with decathlon event organizing team during awareness program regarding physical health",
            collaboration: "KRI College, Decathlon madurai",
            image: "/images/Campaing17.png",
        },
        {
            name: "Education & Skillsm, Social Awarness",
            place: "KRI College Campus, Kallandhiri ",
            date: "26 October 2024",
            description:
                " 100+ Kids visited our campus and seen our  fleet.",
            collaboration: "KRI College",
            image: "/images/Campaing18.png",
        },
        {
            name: "Women Empowerment",
            place: "Rally",
            date: "10 January 2026",
            description:
                "Our college degree students Made an rally for international womens day raise voice against Farnanda Gang Rape with ",
            collaboration: "KRI College & Government of Tamilnadu",
            image: "/images/Campaing19.png",
        },
        {
            name: "Women Empowerment ",
            place: "Public Places",
            date: "26 October 2024",
            description:
                "Our college degree students Made an rally for international womens day raise voice against Farnanda Gang Rape with.",
            collaboration: "KRI College & Government of Tamilnadu",
            image: "/images/Campaing20.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "26 October 2024",
            description:
                "Our collegedegree student collected afund for the wayand landslidewith guidance of founder sir ",
            collaboration: " KRI College, TN Govt, Kerala Govt",
            image: "/images/Campaing21.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "26 October 2024",
            description:
                "Our college degree student collected a fund for the wayand landslide with guidance of founder sir",
            collaboration: "KRI College, TN Govt, Kerala Govt",
            image: "/images/Campaing21.png",
        },


        {
            name: "Education & Skills Development",
            place: "Sree Maha School, Aaniyur, Madurai",
            date: "28 November 2022",
            description:
                "Degree students from Batch 1, 2, and 3 presented their academic projects to school students.",
            collaboration: "KRI College & Sree Maha School",
            image: "/images/Campaing22.png",
        },
        {
            name: "Youth Development",
            place: "Old Airtel Office, Park Town",
            date: "09 December 2022",
            description:
                "Degree students received appreciation for their social contributions.",
            collaboration: "KRI College & Piravasi Pulam Peyar Amaipu",
            image: "/images/Campaing23.png",
        },
        {
            name: "Social Awareness",
            place: "Don Bosco School, Madurai",
            date: "01 September 2023",
            description:
                "Founder explained scholarship opportunities and educational pathways to school students.",
            collaboration: "KRI College & Don Bosco School",
            image: "/images/Campaing34.png",
        },
        {
            name: "Environmental Awareness",
            place: "Public",
            date: "23 June 2023",
            description:
                "Students planted saplings as part of the Go Green environmental initiative.",
            collaboration: "KRI College",
            image: "/images/Campaing25.png",
        },
        {
            name: "Women Empowerment",
            place: "Rally",
            date: "08 March 2024",
            description:
                "Students conducted a rally on International Women’s Day to raise awareness against violence toward women.",
            collaboration: "KRI College & Government of Tamil Nadu",
            image: "/images/Campaing26.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "07 August 2024",
            description:
                "Students collected funds for Wayanad landslide relief under the guidance of the founder.",
            collaboration: "KRI College, Tamil Nadu Government & Kerala Government",
            image: "/images/Campaing27.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "Madurai International Airport",
            date: "11 September 2024",
            description:
                "Founder and students interacted with Mr. Selvaperunthagai, leader of the Tamil Nadu Congress Party.",
            collaboration: "KRI College & Congress Political Party",
            image: "/images/Campaing28.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "15 October 2024",
            description:
                "Students conducted an interview-based awareness program about Dr. A. P. J. Abdul Kalam under founder guidance.",
            collaboration: "KRI College & Tamil Nadu Government",
            image: "/images/Campaing29.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "26 October 2024",
            description:
                "Students distributed flood relief kits to Madurai residents.",
            collaboration: "KRI College & Tamil Nadu Government",
            image: "/images/Campaing30.png",
        },
        {
            name: "Social Awareness",
            place: "KRI College Campus, Kallandhiri",
            date: "10 January 2026",
            description:
                "Our college degree student along with founder sir after completion of Bike Rally with ceo of maha groups",
            collaboration: "KRI College, TN Police, ceo of maha groups",
            image: "/images/Campaing31.png",
        },
        {
            name: "Social Awareness",
            place: "Public Places",
            date: "26 October 2024",
            description:
                "Students distributed flood relief kits to Madurai residents.",
            collaboration: "KRI College & Tamil Nadu Government",
            image: "/images/Campaing32.png",
        },
        {
            name: "Social Awareness",
            place: "Public ",
            date: "05.09.2025",
            description:
                "Our college degree student conducted an interview session on the occasion of Teachers Day in Public",
            collaboration: "KRI College, TN Police",
            image: "/images/Campaing33.png",
        },
        {
            name: "Social Awareness",
            place: "Goripalayam",
            date: "20.11.2025",
            description:
                "Our college degree student distributed Road Safety Awarness Notice and enrich about the Wear Helmet Awanress",
            collaboration: "KRI College, TN Police",
            image: "/images/Campaing34.png",
        },
        {
            name: "Social Awareness",
            place: "Roja Vanam, Madurai",
            date: "10 January 2026",
            description:
                "Our college founder sir distributing foods in old age and child care",
            collaboration: "KRI College, RojaVanam",
            image: "/images/Campaing35.png",
        },
        {
            name: "Social Awareness & Youth Development",
            place: "KRI College Campus, Kallandhiri",
            date: "10.01.2026",
            description:
                "Our college founder sir and degree students with Mr.Selvaperunthagai sir, Leader of Tamilnadu congrees political party in college for Aircraft Unveiling Function",
            collaboration: "KRI College, Congress Political Party",
            image: "/images/Campaing36.png",
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
