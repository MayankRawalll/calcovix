import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function About() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-[#0f172a] mb-2">About Calcovix</h1>
        <p className="text-[#94a3b8] text-sm mb-8">India's #1 Free Calculator Platform</p>

        <div className="space-y-6 text-[#334155] text-sm leading-7">
          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">What is Calcovix?</h2>
            <p>Calcovix is a free online calculator platform built for Indian users. We offer 200+ calculators across Finance, Health, Education, Astrology, Legal, General and Fun categories — all completely free, no login required, no ads cluttering the calculator itself.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">Our Mission</h2>
            <p>Our mission is simple — make complex calculations easy for every Indian. Whether you're calculating your home loan EMI, checking your BMI, planning your SIP investments, or finding your zodiac sign, Calcovix has a tool for you. Fast, accurate, and free forever.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">Why Calcovix?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              {[
                { emoji: '⚡', title: 'Instant Results', desc: 'All calculations happen in your browser. No waiting, no loading.' },
                { emoji: '🔒', title: '100% Private', desc: 'Your data never leaves your device. No accounts, no tracking.' },
                { emoji: '📱', title: 'Mobile Friendly', desc: 'Works perfectly on any device — phone, tablet or desktop.' },
                { emoji: '🇮🇳', title: 'Made for India', desc: 'Indian tax slabs, INR currency, Indian laws and context.' },
                { emoji: '🆓', title: 'Always Free', desc: '200+ calculators, completely free. No premium plans ever.' },
                { emoji: '🎯', title: 'Accurate', desc: 'Built with verified formulas. Results you can trust.' },
              ].map(item => (
                <div key={item.title} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4">
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <div className="font-bold text-[#0f172a] mb-1">{item.title}</div>
                  <div className="text-[#64748b] text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">Our Categories</h2>
            <p>We cover 7 major categories with 200+ tools:</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                { name: 'Finance', emoji: '💰', color: 'bg-yellow-100 text-yellow-800' },
                { name: 'Health', emoji: '❤️', color: 'bg-red-100 text-red-800' },
                { name: 'Education', emoji: '🎓', color: 'bg-blue-100 text-blue-800' },
                { name: 'Astrology', emoji: '🔮', color: 'bg-purple-100 text-purple-800' },
                { name: 'Legal', emoji: '⚖️', color: 'bg-pink-100 text-pink-800' },
                { name: 'General', emoji: '🌐', color: 'bg-green-100 text-green-800' },
                { name: 'Fun', emoji: '🎮', color: 'bg-orange-100 text-orange-800' },
              ].map(cat => (
                <span key={cat.name} className={`${cat.color} px-3 py-1 rounded-full text-xs font-bold`}>
                  {cat.emoji} {cat.name}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">Contact Us</h2>
            <p>Have a suggestion for a new calculator? Found a bug? We'd love to hear from you!</p>
            <p className="mt-2">Email us at <a href="mailto:hello@calcovix.in" className="text-[#6c47ff] underline">hello@calcovix.in</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About