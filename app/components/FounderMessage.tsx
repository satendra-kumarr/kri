export default function FounderMessage() {
    return (
        <section className="py-12 bg-[#f9f9f9] border-t border-b border-gray-200">
            <div className="container-custom">
                <h2 className="text-2xl md:text-4xl font-bold text-[#003366] border-l-8 border-[#D4AF37] pl-4 mb-8 uppercase tracking-wide">
                    Founder&apos;s Message
                </h2>

                <div className="bg-white p-6 md:p-10 shadow-sm border border-gray-200">
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-3 text-center">
                            <div className="inline-block p-1 border border-gray-300 bg-white shadow-sm">
                                <img
                                    src="images/founder-full.png"
                                    alt="Founder"
                                    className="w-full max-w-[200px] h-auto mx-auto"
                                />
                            </div>
                            <div className="mt-6 text-center md:text-left">
                                <h3 className="text-xl font-serif font-semibold text-[#003366] leading-tight">
                                    Er. K. Jaffer Sheriff
                                </h3>

                                <p className="mt-1 text-sm text-gray-700 font-medium">
                                    Aircraft Engineer <span className="text-gray-500">(Ex–Dubai Airports)</span>
                                </p>

                                <div className="mt-3 space-y-1">
                                    <p className="text-sm text-gray-600">
                                        Founder & Chief Instructor, KRI College
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        National President, SIF – India
                                    </p>
                                </div>

                                <p className="mt-3 text-sm text-gray-500 italic">
                                    Dr. A. P. J. Abdul Kalam Awardee for Social Service
                                </p>
                            </div>


                        </div>

                        <div className="md:col-span-9">
                            <div className="mb-6 relative">
                                <span className="text-6xl text-gray-200 absolute -top-4 -left-2 font-serif">&quot;</span>
                                <p className="text-gray-800 text-lg md:text-xl font-serif leading-relaxed italic relative z-10 px-6">
                                    Education should open doors to the future, not merely prepare students for the present. We established this institution to equip aspiring professionals with the skills, discipline, and confidence they need to excel.
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed text-left">
                                <p className="font-bold text-[#003366]">
                                    Dear Students and Aspiring Aviation Professionals,
                                </p>
                                <p>
                                    At King Rashid International College, our vision was born from a simple yet powerful belief: education should open doors to the future, not merely prepare students for the present. In a world defined by rapid growth, global connectivity, and technological innovation, we established this institution to equip aspiring professionals with the skills, discipline, and confidence they need to excel—both in the skies and in the service of humanity.
                                </p>
                                <p>
                                    Our Aviation and Medical programs reflect two pillars of modern society: the pursuit of discovery and the duty of care. Whether you dream of navigating aircraft across international skies or serving on the front lines of healthcare, our mission is to guide you with excellence, integrity, and world-class training.
                                </p>
                                <p>
                                    We are committed to providing cutting-edge facilities, internationally recognized curricula, and a learning environment that nurtures leadership, curiosity, and professional mastery. Through strong global partnerships and an unwavering dedication to quality, King Rashid International College continues to shape graduates who are not only skilled, but also ethical, compassionate, and ready to contribute meaningfully to the world.
                                </p>
                                <p>
                                    As you embark on this transformative journey with us, I encourage you to dream big, stay committed, and strive.
                                </p>
                                <p className="italic font-medium text-[#003366]">
                                    To every student who joins us: you are stepping into a future of limitless possibilities. Your journey begins here, and we are honoured to walk with you as you reach for the highest standards of achievement.
                                </p>
                            </div>

                            {/* <div className="mt-8 text-right">
                                <img
                                    src="images/sign.png"
                                    alt="Signature"
                                    className="h-12 ml-auto opacity-60"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
