import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { calculators } from '../data/calculators'

function SearchPage() {
  const { query } = useParams()
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState(decodeURIComponent(query))

  const q = decodeURIComponent(query).toLowerCase()
  const results = Object.values(calculators).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.slug.toLowerCase().includes(q)
  )

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/search/${encodeURIComponent(searchInput.trim())}`)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {/* Search Header */}
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] px-5 py-8 text-center">
        <p className="text-[#a78bfa] text-sm mb-3">Search Results for "{decodeURIComponent(query)}"</p>
        <div className="flex items-center max-w-xl mx-auto bg-white rounded-xl border-2 border-[#6c47ff] shadow-lg">
          <span className="px-3 text-[#6c47ff]">🔍</span>
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            className="flex-1 py-3 text-sm outline-none text-gray-700 min-w-0"
          />
          <button
            onClick={handleSearch}
            className="bg-[#6c47ff] text-white text-sm font-bold px-5 py-3 rounded-r-xl hover:bg-[#5b38e8] transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-extrabold text-[#0f172a]">
            {results.length > 0 ? `${results.length} results found` : 'No results found'}
          </h2>
          <button
            onClick={() => navigate('/')}
            className="text-xs text-[#6c47ff] bg-[#f5f3ff] border border-[#ddd6fe] rounded-md px-3 py-1.5 font-semibold hover:bg-[#ede9fe] transition-colors"
          >
            ← Back to Home
          </button>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {results.map(calc => (
              <Link
                key={calc.slug}
                to={`/calculator/${calc.slug}`}
                className="bg-white border border-[#e2e8f0] rounded-xl p-4 hover:shadow-md hover:border-[#6c47ff44] hover:scale-105 transition-all"
              >
                <div className="text-2xl mb-2">{calc.emoji}</div>
                <div className="text-sm font-bold text-[#0f172a]">{calc.name}</div>
                <div className="text-xs text-[#94a3b8] mt-1 leading-tight">{calc.description}</div>
                <span className="text-[9px] bg-[#f5f3ff] text-[#6c47ff] border border-[#ddd6fe] rounded px-1.5 py-0.5 mt-2 inline-block font-semibold">
                  {calc.category}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#94a3b8]">
            <div className="text-5xl mb-4">😕</div>
            <p className="text-lg font-semibold text-[#0f172a]">No calculators found for "{decodeURIComponent(query)}"</p>
            <p className="text-sm mt-2">Try searching for EMI, BMI, GST, SIP, CGPA...</p>
            <button onClick={() => navigate('/')} className="mt-4 text-[#6c47ff] underline text-sm">Browse all calculators</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default SearchPage