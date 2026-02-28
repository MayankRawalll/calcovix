import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-[#0f172a] mb-2">Contact Us</h1>
        <p className="text-[#94a3b8] text-sm mb-8">We'd love to hear from you!</p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h2 className="text-lg font-bold text-green-800 mb-2">Message Sent!</h2>
            <p className="text-green-700 text-sm">Thanks for reaching out. We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-[#0f172a] mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="w-full border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#6c47ff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0f172a] mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. rahul@gmail.com"
                  className="w-full border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#6c47ff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0f172a] mb-2">Subject</label>
                <select className="w-full border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#6c47ff] transition-colors text-[#334155]">
                  <option>Suggest a new calculator</option>
                  <option>Report a bug</option>
                  <option>General feedback</option>
                  <option>Business inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0f172a] mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#6c47ff] transition-colors resize-none"
                />
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="w-full bg-[#6c47ff] text-white font-bold py-3 rounded-xl hover:bg-[#5a38e0] transition-colors"
              >
                Send Message 🚀
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { emoji: '📧', title: 'Email', value: 'hello@calcovix.in' },
            { emoji: '🌐', title: 'Website', value: 'calcovix.in' },
            { emoji: '📍', title: 'Based in', value: 'India 🇮🇳' },
          ].map(item => (
            <div key={item.title} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="font-bold text-[#0f172a] text-sm">{item.title}</div>
              <div className="text-[#64748b] text-xs mt-1">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact