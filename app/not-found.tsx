import Link from 'next/link';
import { Home, Plane } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 font-sans relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                <Plane size={400} className="text-[#003366] transform -rotate-12" />
            </div>

            <div className="text-center max-w-lg relative z-10">
                <h1 className="text-9xl font-black text-[#003366] opacity-10 select-none">404</h1>
                <div className="-mt-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003366] mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                        We couldn't fly you to that destination. It seems the page you are looking for has been moved or does not exist.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-[#003366] text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#003366] transition-all duration-300 shadow-lg group"
                    >
                        <Home size={18} className="group-hover:-translate-x-1 transition-transform" /> Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
