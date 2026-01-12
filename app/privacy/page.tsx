
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | KRI College of Aeronautics",
    description: "Read our Privacy Policy to understand how KRI College collects, uses, and protects your personal information.",
    keywords: ["KRI Privacy Policy", "Data Protection", "Student Data Privacy", "Website Privacy"],
    openGraph: {
        title: "Privacy Policy | KRI College of Aeronautics",
        description: "Our commitment to protecting your personal information.",
        images: ['/images/logo.png', '/images/kri-front.jpeg'],
    }
};

export default function PrivacyPage() {
    return (
        <div className="bg-gray-50 min-h-screen font-sans py-16 md:py-24">
            <div className="container-custom max-w-4xl bg-white p-8 md:p-12 border border-gray-200 shadow-sm">

                <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#003366] mb-2">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">Last Updated: December 20, 2025</p>

                <div className="space-y-8 text-sm text-gray-700 leading-7 text-justify">

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">1. Information We Collect</h2>
                        <p className="mb-2">
                            King Rashid International College of Aeronautics (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) respects your privacy. We may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and academic details when you fill out forms.</li>
                            <li><strong>Usage Data:</strong> Information about your interaction with our website, such as IP address, browser type, and pages visited.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">2. How We Use Your Information</h2>
                        <p className="mb-2">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>To process admission inquiries and applications.</li>
                            <li>To communicate with you regarding courses, events, and updates.</li>
                            <li>To improve our website functionality and user experience.</li>
                            <li>To comply with legal obligations and regulatory requirements.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">3. Data Protection</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">4. Sharing of Information</h2>
                        <p>
                            We do not sell or rent your personal information to third parties. We may share data with:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Educational partners or universities for enrollment processing.</li>
                            <li>Service providers who assist in website operations (under confidentiality agreements).</li>
                            <li>Legal authorities if required by law.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">5. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze web traffic and remember your preferences. You can choose to disable cookies through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">6. Third-Party Links</h2>
                        <p>
                            Our website may contain links to external sites. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to read their privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">7. Your Rights</h2>
                        <p>
                            You have the right to access, update, or request deletion of your personal information held by us. To exercise these rights, please contact our administrative office.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">8. Changes to Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. The latest version will be posted on this page with the effective date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-[#003366] mb-3">9. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@kricollege.edu.in" className="text-[#003366] font-bold hover:underline">info@kricollege.edu.in</a>.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
