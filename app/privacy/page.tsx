'use client';

import { Card } from '@/app/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to protecting your privacy and ensuring you have a positive
                experience on our platform. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our delivery management
                website and use our services. Please read this policy carefully. If you do not
                agree with our policies and practices, please do not use our service.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We collect information in several ways:</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    2.1 Information You Provide
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Account registration details (name, email, phone number, address)</li>
                    <li>Delivery and package information (sender/receiver details, addresses)</li>
                    <li>Payment information (credit card, bank account details)</li>
                    <li>Communication data (messages, support inquiries)</li>
                    <li>Identity verification documents when required</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Information Collected Automatically</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Device information (device type, operating system, browser)</li>
                    <li>IP address and geolocation data</li>
                    <li>Cookies and tracking technologies</li>
                    <li>Usage patterns and analytics</li>
                    <li>Real-time location data for deliveries (with your consent)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2.3 Information from Third Parties</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Payment processors and financial institutions</li>
                    <li>Delivery partners and logistics providers</li>
                    <li>Verification and authentication services</li>
                    <li>Social media platforms (if you link your account)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Providing and improving our delivery services</li>
                <li>Processing transactions and payments</li>
                <li>Sending you service-related updates and notifications</li>
                <li>Verifying your identity and preventing fraud</li>
                <li>Analyzing platform performance and user behavior</li>
                <li>Personalizing your experience on our platform</li>
                <li>Responding to your inquiries and customer support requests</li>
                <li>Complying with legal obligations and regulations</li>
                <li>Marketing and promotional communications (with consent)</li>
                <li>Improving security and preventing unauthorized access</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Delivery Partners:</strong> Necessary information to fulfill delivery services
                </li>
                <li>
                  <strong>Payment Processors:</strong> To process payments securely
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors assisting with our operations
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or court order
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger, acquisition, or bankruptcy
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal information to third parties without your explicit consent.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure password storage with hashing algorithms</li>
                <li>Firewalls and intrusion detection systems</li>
                <li>Regular security audits and updates</li>
                <li>Access controls limiting data access to authorized personnel</li>
                <li>Two-factor authentication options</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                While we strive to protect your data, no method of transmission over the internet is
                100% secure. We cannot guarantee absolute security of your information.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remember your preferences and login information</li>
                <li>Analyze how you use our platform</li>
                <li>Personalize your experience</li>
                <li>Deliver targeted advertisements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookie preferences through your browser settings. However, disabling
                cookies may affect some functionality of our platform.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
                <li>Lodge complaints with data protection authorities</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in the
                Contact Information section.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Location Data and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For delivery tracking purposes, we collect and process real-time location data. This
                includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>GPS coordinates of delivery vehicles</li>
                <li>Precise location of package pickups and deliveries</li>
                <li>Route information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can manage location permissions through your device settings. Location data is
                retained only for the duration of the delivery service and is deleted thereafter.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our service is not intended for individuals under 18 years of age. We do not knowingly
                collect information from children. If we become aware that a child has provided us
                with personal information, we will take steps to delete such information and terminate
                the child&apos;s account. If you believe we have collected information from a child, please
                contact us immediately.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide our services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Protect our rights and security</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                After the retention period, we securely delete or anonymize your data.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to, stored in, and processed in countries other
                than Nigeria. By using our service, you consent to the transfer of your information
                to countries outside Nigeria. We ensure that such transfers comply with applicable
                data protection laws and that adequate safeguards are in place.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform may contain links to third-party websites and services. We are not
                responsible for the privacy practices of these external sites. We encourage you to
                read the privacy policies of any third-party services before providing them with your
                information.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Policy Changes</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices,
                technology, legal requirements, and other factors. We will notify you of any material
                changes by posting the updated policy on our platform and updating the &quot;Last updated&quot;
                date. Your continued use of our service following the posting of revised terms means
                you accept and agree to the changes.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Data Protection Officer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have appointed a Data Protection Officer to oversee our privacy practices and
                ensure compliance with data protection regulations. For privacy-related inquiries, you
                can contact:
              </p>
              <div className="bg-gray-100 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@delivery.com
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +234 (0) XXX XXX XXXX
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please
                contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@delivery.com
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +234 (0) XXX XXX XXXX
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Lagos, Nigeria
                </p>
              </div>
            </section>

            {/* Final Note */}
            <section className="border-t pt-8">
              <p className="text-gray-600 text-sm">
                By using our service, you acknowledge that you have read and understood this Privacy
                Policy and agree to our collection and use of your information as described herein.
                If you do not agree with our privacy practices, please do not use our platform.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
