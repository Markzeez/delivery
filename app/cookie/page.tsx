'use client';

import { Card } from '@/app/components/ui/card';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They help
                websites remember your preferences, improve your experience, and support essential
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remembering your login status and session information</li>
                <li>Saving your display preferences and language settings</li>
                <li>Analyzing site traffic and usage patterns</li>
                <li>Improving site performance and user experience</li>
                <li>Delivering targeted content and product recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Essential cookies are necessary for the website to function properly. They enable
                    core features such as secure login, session management, and navigation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Performance cookies collect anonymous data about how visitors use the site. This
                    helps us improve page performance and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Functionality Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Functionality cookies remember your preferences and settings, such as language
                    choice and display preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Advertising Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Advertising cookies may be used to deliver relevant ads and measure the effectiveness
                    of marketing campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We may allow third-party service providers to place cookies on your device. These
                cookies are managed by the third party and are subject to their own privacy policies.
                Third-party cookies can support analytics, advertising, and social media features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Cookie Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can manage cookie preferences through your browser settings. Most browsers allow
                you to refuse or delete cookies. If you disable cookies, some parts of the website may
                not function correctly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To change your cookie settings, follow the instructions provided by your browser or
                device manufacturer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Analytics and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use analytics tools to understand how visitors engage with our site. This information
                helps us improve the platform and provide a better experience. Analytics cookies are
                anonymous and do not identify individual users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies may store personal information when you are logged in or using our services.
                We treat this information with the same security and privacy practices described in our
                Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies remain on your device for varying lengths of time depending on their purpose.
                Session cookies are deleted when you close your browser, while persistent cookies may
                remain for a longer period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time. When changes are made, we will
                update the &quot;Last updated&quot; date and post the revised policy on the website. Continued
                use of the site constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="border-t pt-8">
              <p className="text-gray-600 text-sm">
                If you have questions about our cookie practices, please refer to our Privacy Policy
                or contact us at support@delivery.com.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
