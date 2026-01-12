import Image from "next/image";
export default function Recruiters() {
   const logos = [
  { src: "/images/indigo-logo.png", alt: "IndiGo" },
  { src: "/images/air-logo.jpg", alt: "Air India" },
  { src: "/images/SpiceJet-Logo.jpg", alt: "SpiceJet" },
  { src: "/images/Vistara-logo.png", alt: "Vistara" },
  { src: "/images/Qatar-logo.png", alt: "Qatar Airways" },
  { src: "/images/Emirates-logo.png", alt: "Emirates" },
  { src: "/images/singapur-logo.jpg", alt: "Singapore Airlines" },
  { src: "/images/Etihad-Logo.png", alt: "Etihad" },
  { src: "/images/air-ashia-logo.jpg", alt: "AirAsia" },
];

    return (
    <section className="py-10 bg-white border-b border-gray-200">
      <div className="container-custom">
        <h3 className="text-center text-[#003366] font-bold uppercase tracking-widest text-sm md:text-lg mb-8">
          Our Top Placement Partners
        </h3>

        <div className="flex flex-wrap justify-center gap-6 md:gap-16 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="group w-36 h-20 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={130}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}