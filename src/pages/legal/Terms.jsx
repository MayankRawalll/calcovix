import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Terms() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-[#0f172a] mb-2">Terms of Use</h1>
        <p className="text-[#94a3b8] text-sm mb-8">Last updated: February 2026</p>

        <div className="space-y-6 text-[#334155] text-sm leading-7">
          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using Calcovix (calcovix.in), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">2. Use of Calculators</h2>
            <p>Calcovix provides free online calculators for informational and educational purposes only. The results provided by our calculators are estimates and should not be considered as professional financial, medical, legal, or any other professional advice. Always consult a qualified professional before making important decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">3. Accuracy of Information</h2>
            <p>While we strive to ensure the accuracy of our calculators, Calcovix makes no warranties or representations about the accuracy, reliability, or completeness of any information on this website. Tax slabs, interest rates, and other financial figures may change — always verify with official sources.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">4. Intellectual Property</h2>
            <p>All content on Calcovix including text, graphics, logos, and calculator code is the property of Calcovix and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">5. Limitation of Liability</h2>
            <p>Calcovix shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our calculators or reliance on any information provided on this website. Use our tools at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">6. Advertising</h2>
            <p>Calcovix displays advertisements through Google AdSense. We are not responsible for the content of these advertisements. Clicking on ads is entirely at your own discretion.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">7. Modifications</h2>
            <p>We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of Calcovix after changes are posted constitutes your acceptance of the modified terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">8. Governing Law</h2>
            <p>These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">9. Contact</h2>
            <p>For any questions regarding these Terms, contact us at <a href="mailto:hello@calcovix.in" className="text-[#6c47ff] underline">hello@calcovix.in</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Terms