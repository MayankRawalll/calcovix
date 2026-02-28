import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-[#0f172a] mb-2">Privacy Policy</h1>
        <p className="text-[#94a3b8] text-sm mb-8">Last updated: February 2026</p>

        <div className="space-y-6 text-[#334155] text-sm leading-7">
          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">1. Information We Collect</h2>
            <p>Calcovix does not require you to create an account or provide personal information to use our calculators. We may collect anonymous usage data such as pages visited, calculator tools used, and general location (country/city level) through analytics tools to improve our service.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">2. How We Use Information</h2>
            <p>Any data collected is used solely to improve the Calcovix platform — to understand which calculators are most useful, fix bugs, and improve performance. We do not sell, rent, or share your data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">3. Google AdSense & Cookies</h2>
            <p>Calcovix uses Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-[#6c47ff] underline">Google Ads Settings</a>. We use cookies to remember your preferences and improve your experience.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">4. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">5. Data Security</h2>
            <p>All calculations on Calcovix are performed entirely in your browser. No calculation data is sent to or stored on our servers. Your financial, health, or personal inputs are never transmitted over the internet.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">6. Children's Privacy</h2>
            <p>Calcovix is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of Calcovix after changes constitutes acceptance of the new policy.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@calcovix.in" className="text-[#6c47ff] underline">hello@calcovix.in</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy