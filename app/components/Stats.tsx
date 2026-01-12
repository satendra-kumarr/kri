export default function Stats() {
    const stats = [
        { label: "Years of Excellence", value: "16+" },
        { label: "Alumni Soaring", value: "1,500+" },
        { label: "Placement Support", value: "100%" },
        { label: "Airline Partners", value: "50+" },
    ];

    return (
        <section className="bg-[#003366] py-12 md:py-20 text-white">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:gap-8 divide-x-0 md:divide-x divide-white/20">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center px-2 md:px-4">
                            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2 font-serif">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base uppercase tracking-wider font-medium text-blue-100">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
