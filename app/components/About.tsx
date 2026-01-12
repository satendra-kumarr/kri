import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003366] border-l-8 border-[#D4AF37] pl-4 mb-6 uppercase tracking-wide">
              Flying High Since 2008
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed md:text-justify">
              <p>
                <strong>Established by Er. K. Jaffer Sheriff</strong>, a visionary in aerospace education and social welfare,{" "}
                <strong>The King Rashid International College</strong> has evolved into India&apos;s premier destination for aviation training.
              </p>

              <p>
                With a legacy spanning over a decade, we bridge the gap between academic theory and high-tech industry demands. Our campus is a hub of innovation, featuring{" "}
                <strong>live aircraft, advanced simulators, and turbine engine labs</strong> that meet global regulatory standards.
              </p>

              <p>
                Our mission goes beyond certification. We forge professionals who possess the discipline, technical mastery, and leadership command required to excel in the skies and on the ground.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/institution"
                className="bg-[#003366] text-white px-6 py-3 font-bold uppercase text-sm hover:bg-[#002244] transition rounded-sm text-center"
              >
                Read More
              </Link>
              <Link
                href="/institution"
                className="border-2 border-[#003366] text-[#003366] px-6 py-3 font-bold uppercase text-sm hover:bg-[#003366] hover:text-white transition rounded-sm text-center"
              >
                Vision & Mission
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Defense Armed Forces.png"
                alt="Defense Armed Forces Visit"
                fill
                priority
                className="object-cover h-[1200px] w-[100%]"
              />
            </div>

            {/* Decorative blocks */}
            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] w-24 h-24 -z-10 rounded-br-3xl hidden md:block"></div>
            <div className="absolute -top-6 -left-6 bg-[#003366] w-24 h-24 -z-10 rounded-tl-3xl opacity-10 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
