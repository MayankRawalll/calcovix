import { Link } from 'react-router-dom'

function Footer({ onSelectCategory, onScrollTo }) {
  return (
    <footer className="bg-[#0f172a] px-7 pt-7 pb-5">

      <div className="grid gap-6 mb-5" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr' }}>

        {/* Column 1 — Logo + tagline + app buttons */}
        <div>
          <Link to="/">
            <div className="bg-gradient-to-r from-[#6c47ff] to-[#06b6d4] text-white font-extrabold text-sm px-4 py-2 rounded-lg inline-block mb-2">
              ⚡ Calcovix
            </div>
          </Link>
          <p className="text-[#475569] text-xs mb-4">India's #1 free calculator platform. 200+ tools for Finance, Health, Education & more.</p>
          <div className="flex gap-2">
            <div className="bg-[#1e293b] border border-dashed border-[#334155] rounded-lg px-3 py-1.5 text-[#475569] text-xs cursor-not-allowed">
              ▶ Play Store <span className="text-[#6c47ff] font-bold">· Soon</span>
            </div>
            <div className="bg-[#1e293b] border border-dashed border-[#334155] rounded-lg px-3 py-1.5 text-[#475569] text-xs cursor-not-allowed">
               App Store <span className="text-[#6c47ff] font-bold">· Soon</span>
            </div>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <div className="text-[#94a3b8] text-xs font-extrabold uppercase tracking-wider mb-3">Quick Links</div>
          <Link to="/" className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa]">
            Home
          </Link>
          <button
            onClick={() => onSelectCategory && onSelectCategory('All')}
            className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa] text-left w-full"
          >
            All Calculators
          </button>
          <button
            onClick={() => onScrollTo && onScrollTo('featured')}
            className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa] text-left w-full"
          >
            Most Popular
          </button>
          <button
            onClick={() => onScrollTo && onScrollTo('finance')}
            className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa] text-left w-full"
          >
            New Tools
          </button>
        </div>

        {/* Column 3 — Categories */}
        <div>
          <div className="text-[#94a3b8] text-xs font-extrabold uppercase tracking-wider mb-3">Categories</div>
          {[
            { name: '💰 Finance', cat: 'Finance' },
            { name: '❤️ Health', cat: 'Health' },
            { name: '🎓 Education', cat: 'Education' },
            { name: '🔯 Astrology', cat: 'Astrology' },
            { name: '⚖️ Legal', cat: 'Legal' },
            { name: '🔧 General', cat: 'General' },
          ].map(item => (
            <button
              key={item.cat}
              onClick={() => onSelectCategory && onSelectCategory(item.cat)}
              className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa] text-left w-full"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Column 4 — Legal */}
        <div>
          <div className="text-[#94a3b8] text-xs font-extrabold uppercase tracking-wider mb-3">Legal</div>
          <Link to="/privacy-policy" className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa]">Privacy Policy</Link>
          <Link to="/terms" className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa]">Terms of Use</Link>
          <Link to="/disclaimer" className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa]">Disclaimer</Link>
          <Link to="/about" className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa]">About Calcovix</Link>
          <Link to="/contact" className="block text-[#475569] text-xs mb-2 hover:text-[#a78bfa]">Contact Us</Link>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1e293b] pt-4 flex justify-between items-center">
        <div className="text-[#334155] text-xs">© 2026 Calcovix. All rights reserved.</div>
        <div className="flex gap-2">
          {['𝕏', 'in', 'f'].map(icon => (
            <div key={icon} className="w-8 h-8 bg-[#1e293b] border border-[#334155] rounded-lg flex items-center justify-center text-[#475569] text-xs font-bold hover:border-[#6c47ff] cursor-pointer">
              {icon}
            </div>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer