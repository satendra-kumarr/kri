import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-white z-50">
            <div className="relative w-24 h-24 mb-4 animate-pulse">
                <Image
                    src="/images/logo.png"
                    alt="Loading..."
                    fill
                    className="object-contain p-2"
                />
            </div>
            <div className="w-10 h-10 border-4 border-[#003366]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
            <p className="mt-4 text-[#003366] font-bold text-xs tracking-[0.2em] animate-pulse">LOADING</p>
        </div>
    );
}
