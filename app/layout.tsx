import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { EnquiryProvider } from "./context/EnquiryContext";
import EnquiryModal from "./components/EnquiryModal";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "KRI College of Aeronautics",
  description: "The King Rashid International Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <EnquiryProvider>
          <NextTopLoader
            color="#D4AF37"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #D4AF37,0 0 5px #D4AF37"
          />
          <Header />
          <main className="flex-grow">
            {children}
            
          </main>
          <Footer />
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
