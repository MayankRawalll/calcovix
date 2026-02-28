import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Disclaimer() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-[#0f172a] mb-2">Disclaimer</h1>
        <p className="text-[#94a3b8] text-sm mb-8">Last updated: February 2026</p>

        <div className="space-y-6 text-[#334155] text-sm leading-7">
          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">1. General Disclaimer</h2>
            <p>The information and calculators provided on Calcovix (calcovix.in) are for general informational and educational purposes only. Nothing on this website constitutes professional financial, legal, medical, or any other professional advice.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">2. Financial Calculators</h2>
            <p>Our financial calculators (EMI, SIP, Income Tax, GST, etc.) provide estimates based on the inputs you provide. Actual results may vary due to changes in interest rates, tax laws, bank policies, and other factors. Always consult a certified financial advisor or chartered accountant before making financial decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">3. Health Calculators</h2>
            <p>Our health calculators (BMI, Calorie, BMR, etc.) provide general health estimates. These are not medical diagnoses. Always consult a qualified doctor or healthcare professional for medical advice, diagnosis, or treatment.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">4. Astrology Calculators</h2>
            <p>Our astrology tools (Numerology, Sun Sign, Compatibility, etc.) are provided purely for entertainment purposes. Calcovix does not claim that astrological predictions are scientifically accurate or that they should influence important life decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">5. Legal Calculators</h2>
            <p>Our legal calculators (TDS, Stamp Duty, Gratuity, etc.) are based on general rules and may not reflect the latest amendments. Tax laws change frequently. Always verify with official government sources or a qualified legal/tax professional.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">6. No Warranty</h2>
            <p>Calcovix provides this website on an "as is" basis without any warranties of any kind, either express or implied. We do not warrant that the website will be error-free, uninterrupted, or free of viruses or other harmful components.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">7. Contact</h2>
            <p>If you have questions about this Disclaimer, contact us at <a href="mailto:hello@calcovix.in" className="text-[#6c47ff] underline">hello@calcovix.in</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Disclaimer