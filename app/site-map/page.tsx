import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, GraduationCap, Briefcase, Trophy, Star, Plane, Newspaper, Image as ImageIcon, Megaphone, Link2, Shield, FileText, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sitemap | KRI College of Aeronautics',
    description: 'Complete sitemap of KRI College of Aeronautics website. Find all pages and sections easily.',
    robots: {
        index: true,
        follow: true,
    },
};

interface SitemapSection {
    title: string;
    icon: React.ReactNode;
    links: {
        label: string;
        href: string;
        description?: string;
    }[];
}

export default function SitemapPage() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kri.org.in';

    const sitemapSections: SitemapSection[] = [
        {
            title: 'Main Pages',
            icon: <Home size={20} />,
            links: [
                {
                    label: 'Home',
                    href: '/',
                    description: 'KRI College of Aeronautics - Premier aviation institute in Madurai',
                },
                {
                    label: 'Contact Us',
                    href: '/contact',
                    description: 'Get in touch with us for admissions and enquiries',
                },
            ],
        },
        {
            title: 'The Institution',
            icon: <Building2 size={20} />,
            links: [
                {
                    label: 'About Us',
                    href: '/institution#about',
                    description: 'Learn about KRI College',
                },
                {
                    label: 'Mission & Vision',
                    href: '/institution#mission',
                    description: 'Our mission and vision for aviation education',
                },
                {
                    label: 'History & Legacy',
                    href: '/institution#history',
                    description: 'Our rich history and legacy',
                },
                {
                    label: 'Approvals & Accreditation',
                    href: '/institution#approvals',
                    description: 'Recognitions and accreditations',
                },
                {
                    label: 'Leadership Team',
                    href: '/institution#leadership',
                    description: 'Meet our leadership team',
                },
                {
                    label: "Founder's Profile",
                    href: '/institution#founder',
                    description: 'About our founder',
                },
                {
                    label: "Chairman's Message",
                    href: '/institution#chairperson',
                    description: 'Message from the chairman',
                },
                {
                    label: 'Admission Procedure',
                    href: '/institution#admission',
                    description: 'How to apply for admission',
                },
                {
                    label: 'Social Contribution',
                    href: '/institution#social',
                    description: 'Our social initiatives',
                },
                {
                    label: 'Sports & Athletics',
                    href: '/institution#sports',
                    description: 'Sports facilities and activities',
                },
                {
                    label: 'Faith & Values',
                    href: '/institution#faith',
                    description: 'Our values and beliefs',
                },
                {
                    label: 'Scholarship Exams',
                    href: '/institution#scholarship',
                    description: 'Scholarship opportunities',
                },
                {
                    label: 'Our Alumni',
                    href: '/institution#alumni',
                    description: 'Alumni network and success stories',
                },
                {
                    label: 'Quick Links',
                    href: '/institution#links',
                    description: 'Quick access links',
                },
                {
                    label: 'MoUs',
                    href: '/institution#mou',
                    description: 'Memorandums of Understanding',
                },
                {
                    label: 'Gallery',
                    href: '/gallery',
                    description: 'Photo gallery of campus and facilities',
                },
            ],
        },
        {
            title: 'Our Courses',
            icon: <GraduationCap size={20} />,
            links: [
                {
                    label: 'Degree Courses',
                    href: '/courses#ug-programs',
                    description: 'Undergraduate degree programs',
                },
                {
                    label: 'Diploma Course',
                    href: '/courses#diploma',
                    description: 'Diploma programs',
                },
                {
                    label: 'License Courses',
                    href: '/courses#ame-cpl',
                    description: 'AME and CPL license courses',
                },
                {
                    label: 'Government Exam Practices',
                    href: '/courses#competitive',
                    description: 'Competitive exam preparation',
                },
            ],
        },
        {
            title: 'Training & Placements',
            icon: <Briefcase size={20} />,
            links: [
                {
                    label: 'Training & Placements',
                    href: '/training-placement',
                    description: 'Training programs and placement opportunities',
                },
            ],
        },
        {
            title: 'Achievements',
            icon: <Trophy size={20} />,
            links: [
                {
                    label: 'Achievements',
                    href: '/achievements',
                    description: 'Our awards and achievements',
                },
            ],
        },
        {
            title: 'Why Choose Us',
            icon: <Star size={20} />,
            links: [
                {
                    label: 'Why KRI?',
                    href: '/why-choose-us',
                    description: 'Reasons to choose KRI College',
                },
            ],
        },
        {
            title: 'Our Fleet',
            icon: <Plane size={20} />,
            links: [
                {
                    label: 'Aircraft Fleet',
                    href: '/fleet',
                    description: 'Our training aircraft fleet',
                },
            ],
        },
        {
            title: 'News & Updates',
            icon: <Newspaper size={20} />,
            links: [
                {
                    label: 'Press Release',
                    href: '/press-release',
                    description: 'Latest news and press releases',
                },
                {
                    label: 'Campaign',
                    href: '/campaign',
                    description: 'Current campaigns and initiatives',
                },
            ],
        },
        {
            title: 'Resources',
            icon: <Link2 size={20} />,
            links: [
                {
                    label: 'Quick Links',
                    href: '/quick-links',
                    description: 'Quick access to important links',
                },
                {
                    label: 'Scholarship',
                    href: '/scholarship',
                    description: 'Scholarship information and applications',
                },
            ],
        },
        {
            title: 'Legal',
            icon: <Shield size={20} />,
            links: [
                {
                    label: 'Privacy Policy',
                    href: '/privacy',
                    description: 'Privacy policy and data protection',
                },
                {
                    label: 'Terms & Conditions',
                    href: '/terms',
                    description: 'Terms and conditions of use',
                },
            ],
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-[#003366] text-white py-12 md:py-16">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] mb-4">
                        Sitemap
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Navigate through all pages and sections of KRI College of Aeronautics website
                    </p>
                </div>
            </div>

            {/* Sitemap Content */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sitemapSections.map((section, sectionIndex) => (
                        <div
                            key={sectionIndex}
                            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-300">
                                <div className="text-[#003366]">{section.icon}</div>
                                <h2 className="text-xl font-bold text-[#003366]">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="block group hover:text-[#003366] transition-colors"
                                        >
                                            <span className="font-semibold text-gray-800 group-hover:text-[#003366]">
                                                {link.label}
                                            </span>
                                            {link.description && (
                                                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                                    {link.description}
                                                </p>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* XML Sitemap Link */}
                <div className="mt-12 text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
                    <FileText size={32} className="mx-auto text-[#003366] mb-4" />
                    <h3 className="text-xl font-bold text-[#003366] mb-2">XML Sitemap</h3>
                    <p className="text-gray-600 mb-4">
                        For search engines and web crawlers, access our XML sitemap:
                    </p>
                    <Link
                        href="/sitemap.xml"
                        className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#003366] transition-colors font-semibold"
                    >
                        View XML Sitemap
                    </Link>
                </div>

                {/* Contact CTA */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 text-gray-600">
                        <Phone size={16} />
                        <span className="text-sm">
                            Need help? <Link href="/contact" className="text-[#003366] hover:underline font-semibold">Contact Us</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
