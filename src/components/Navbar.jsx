import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const categories = ['Finance', 'Health', 'Education', 'Astrology', 'Legal', 'General', 'Fun']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [langToast, setLangToast] = useState(false)
  const navigate = useNavigate()

  const handleCat = (cat) => {
    navigate(`/?category=${cat}`)
    setMenuOpen(false)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/?category=All`)
      setSearchQuery('')
      setSearchOpen(false)
    }
  }

  const toggleLang = () => {
    setLangToast(true)
    setTimeout(() => setLangToast(false), 3000)
  }

  return (
    <nav className="bg-[#0f172a] relative z-50">

      {/* Hindi Coming Soon Toast */}
      {langToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#6c47ff] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg">
          🇮🇳 हिंदी version coming soon!
        </div>
      )}

      {/* Main navbar row */}
      <div className="h-[58px] flex items-center justify-between px-5 md:px-7">

        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-[#6c47ff] to-[#06b6d4] text-white font-extrabold text-sm px-4 py-2 rounded-lg cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0"
        >
          ⚡ Calcovix
        </div>

        {/* Desktop nav pills */}
        <div className="hidden md:flex gap-2">
          {categories.map(cat => (
            <span
              key={cat}
              onClick={() => handleCat(cat)}
              className="text-xs px-3 py-1 rounded-full border cursor-pointer transition-all duration-150 bg-[#1e293b] text-[#94a3b8] border-[#334155] hover:bg-[#334155] hover:text-white"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Right side */}
        <div className="flex gap-2 items-center flex-shrink-0">

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="hidden md:flex items-center gap-1.5 bg-[#1e293b] border border-dashed border-[#475569] text-[#94a3b8] text-xs px-3 py-1.5 rounded-lg hover:bg-[#334155] hover:text-white transition-all cursor-pointer"
          >
            🇮🇳 EN / हि
          </button>

          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(o => !o)}
            className="hidden md:flex items-center justify-center bg-[#1e293b] border border-[#334155] text-[#94a3b8] text-sm px-3 py-1.5 rounded-lg hover:bg-[#334155] hover:text-white transition-all cursor-pointer"
          >
            🔍
          </button>

          {/* Hamburger */}
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

      {/* Search Dropdown */}
      {searchOpen && (
        <div className="hidden md:flex bg-[#1e293b] border-t border-[#334155] px-5 py-3 items-center gap-3">
          <span className="text-[#6c47ff]">🔍</span>
          <input
            autoFocus
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            placeholder="Search calculators... e.g. EMI, BMI, GST"
            className="flex-1 bg-[#0f172a] text-white text-sm px-4 py-2 rounded-lg outline-none border border-[#334155] focus:border-[#6c47ff] transition-colors placeholder-[#475569]"
          />
          <button
            onClick={handleSearch}
            className="bg-[#6c47ff] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#5b38e8] transition-colors"
          >
            Search
          </button>
          <button
            onClick={() => setSearchOpen(false)}
            className="text-[#475569] hover:text-white text-xs transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-[#334155] px-5 py-4 flex flex-col gap-2">
          {/* Mobile Search */}
          <div className="flex items-center gap-2 bg-[#0f172a] rounded-lg px-3 py-2 mb-2">
            <span className="text-[#6c47ff]">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { handleSearch(); setMenuOpen(false) } }}
              placeholder="Search calculators..."
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder-[#475569]"
            />
          </div>

          {categories.map(cat => (
            <span
              key={cat}
              onClick={() => handleCat(cat)}
              className="text-[#94a3b8] text-sm py-2 border-b border-[#334155] last:border-0 cursor-pointer hover:text-white transition-colors"
            >
              {cat}
            </span>
          ))}

          <button
            onClick={toggleLang}
            className="text-[#94a3b8] text-sm py-2 text-left hover:text-white transition-colors"
          >
            🇮🇳 Switch to हिंदी (Coming Soon)
          </button>
        </div>
      )}

    </nav>
  )
}

export default Navbar