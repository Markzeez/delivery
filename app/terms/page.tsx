'use client';

import { Card } from '@/app/components/ui/card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this delivery service platform, you accept and agree to be
                bound by the terms and provision of this agreement. If you do not agree to abide by
                the above, please do not use this service. We reserve the right to modify these
                terms and conditions at any time without notice. Your continued use of this platform
                following the posting of revised terms means that you accept and agree to the
                changes.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform provides a delivery management system that allows users to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Register and track packages</li>
                <li>View real-time delivery status and location</li>
                <li>Manage payment for delivery services</li>
                <li>Communicate with delivery personnel</li>
                <li>Access delivery history and reports</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a user of our platform, you are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Providing accurate and complete information during registration</li>
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>Ensuring that all packages comply with local and international laws</li>
                <li>Providing accurate package descriptions and contents declaration</li>
                <li>Paying all applicable fees in a timely manner</li>
                <li>Notifying us immediately of any unauthorized access to your account</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use our service to deliver:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Illegal drugs or controlled substances</li>
                <li>Weapons, explosives, or hazardous materials</li>
                <li>Stolen goods or counterfeit items</li>
                <li>Materials that violate intellectual property rights</li>
                <li>Perishable goods unless specifically approved</li>
                <li>Any items prohibited by applicable law</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liability and Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide reliable delivery services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We are not liable for loss, damage, or delay caused by force majeure events</li>
                <li>
                  Users are responsible for properly packaging and declaring package contents
                </li>
                <li>Our liability is limited to the declared value of the package</li>
                <li>We do not guarantee specific delivery times for all shipments</li>
                <li>
                  We are not responsible for losses exceeding the package&apos;s declared value or
                  insurance limit
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment for delivery services is due upon submission of your delivery request. We
                accept various payment methods as indicated on our platform. By providing payment
                information, you authorize us to charge the applicable fees. Refunds are subject to
                our refund policy and may not be available once a shipment has been dispatched.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your use of our platform is also governed by our Privacy Policy. We collect and
                process personal information as necessary to provide our services and comply with
                applicable laws. We commit to protecting your data and will not share it with third
                parties without your consent, except as required by law or to facilitate delivery
                services.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on our platform, including text, graphics, logos, images, and software,
                is the property of our company or our content suppliers and is protected by
                international copyright laws. You may not reproduce, transmit, distribute, or
                display any content without our prior written permission.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from your use of our services shall be governed by the laws of
                Nigeria. Both parties agree to attempt to resolve disputes through informal
                negotiation before pursuing legal action. If negotiation fails, disputes shall be
                subject to the exclusive jurisdiction of the courts in Nigeria.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your account and access to our
                services at any time, for any reason, including but not limited to violation of
                these terms and conditions or engagement in fraudulent activity. Upon termination,
                your right to use the service will immediately cease.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Warranty Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                This platform is provided on an &quot;as is&quot; basis without warranties of any kind, either
                express or implied. We do not warrant that the service will be uninterrupted or
                error-free. Your use of the service is at your own risk.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these terms and conditions, please contact us at:
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
                By using our service, you acknowledge that you have read, understood, and agree to
                be bound by all the terms and conditions outlined in this document. If you do not
                agree with any part of these terms, please refrain from using our platform.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
