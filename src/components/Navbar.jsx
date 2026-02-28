import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHindi = i18n.language === 'hi'

  const toggleLanguage = () => {
    i18n.changeLanguage(isHindi ? 'en' : 'hi')
  }

  const categories = [
    { key: 'nav_finance' },
    { key: 'nav_health' },
    { key: 'nav_education' },
    { key: 'nav_astrology' },
    { key: 'nav_legal' },
    { key: 'nav_general' },
    { key: 'nav_fun' },
  ]

  return (
    <nav className="bg-[#0f172a] relative z-50">

      {/* Main navbar row */}
      <div className="h-[58px] flex items-center justify-between px-5 md:px-7">

        {/* Logo */}
        <div className="bg-gradient-to-r from-[#6c47ff] to-[#06b6d4] text-white font-extrabold text-sm px-4 py-2 rounded-lg">
          ⚡ Calcovix
        </div>

        {/* Desktop nav pills */}
        <div className="hidden md:flex gap-2">
          {categories.map(({ key }) => (
            <span key={key} className="bg-[#1e293b] text-[#94a3b8] text-xs px-3 py-1 rounded-full border border-[#334155] cursor-pointer hover:text-white transition-colors">
              {t(key)}
            </span>
          ))}
        </div>

        {/* Right side */}
        <div className="flex gap-2 items-center">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="bg-[#1e293b] border border-dashed border-[#475569] text-[#94a3b8] text-xs px-3 py-1 rounded-lg hover:border-[#6c47ff] hover:text-[#a78bfa] transition-all"
          >
            {isHindi ? '🇮🇳 EN' : '🇮🇳 हि'}
          </button>
          <span className="hidden md:block bg-[#1e293b] border border-[#334155] text-[#64748b] text-xs px-3 py-1 rounded-lg">
            🔍
          </span>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-5 h-0.5 bg-[#94a3b8] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-[#94a3b8] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-[#94a3b8] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-[#334155] px-5 py-4 flex flex-col gap-2">
          {categories.map(({ key }) => (
            <span key={key} className="text-[#94a3b8] text-sm py-2 border-b border-[#334155] last:border-0">
              {t(key)}
            </span>
          ))}
        </div>
      )}

    </nav>
  )
}

export default Navbar