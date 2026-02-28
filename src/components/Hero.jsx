import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] py-10 px-5 md:px-10 text-center relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-[#6c47ff22] rounded-full -top-20 -left-10 blur-3xl" />
      <div className="absolute w-60 h-60 bg-[#06b6d433] rounded-full -bottom-16 -right-10 blur-3xl" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full text-[#a78bfa] text-xs px-4 py-1.5 mb-4 relative z-10">
        ⚡ 200+ Free Calculators
      </div>

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 relative z-10">
        Calculate Anything,{" "}
        <span className="bg-gradient-to-r from-[#6c47ff] to-[#06b6d4] bg-clip-text text-transparent">
          Instantly
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#94a3b8] text-sm mb-6 relative z-10">
        Free calculators for Finance, Health, Education, Astrology & more
      </p>

      {/* Search bar */}
      <div className="flex items-center max-w-xl mx-auto bg-white rounded-xl border-2 border-[#6c47ff] shadow-lg shadow-[#6c47ff22] relative z-10">
        <span className="px-3 text-[#6c47ff]">🔍</span>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search calculators... e.g. EMI, BMI, GST"
          className="flex-1 py-3 text-sm outline-none text-gray-700 min-w-0"
        />
        <button
          onClick={handleSearch}
          className="bg-[#6c47ff] text-white text-sm font-bold px-5 py-3 rounded-r-xl hover:bg-[#5b38e8] transition-colors"
        >
          Search
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-3 mt-6 relative z-10 flex-wrap">
        {[
          { val: '200+', lbl: 'Calculators' },
          { val: '7', lbl: 'Categories' },
          { val: '100%', lbl: 'Free Forever' }
        ].map(s => (
          <div key={s.lbl} className="bg-white/10 border border-white/20 rounded-xl px-5 py-2 text-center">
            <span className="block text-white font-extrabold text-base">{s.val}</span>
            <span className="text-[#94a3b8] text-xs">{s.lbl}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero