import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { calculators } from '../data/calculators'

const categoryMeta = {
  finance:   { label: 'Finance',   emoji: '💰', color: 'text-[#854d0e]',  bg: 'bg-[#fef9c3]',  border: 'border-[#f59e0b44]' },
  health:    { label: 'Health',    emoji: '❤️',  color: 'text-[#b91c1c]',  bg: 'bg-[#fef2f2]',  border: 'border-[#f8717144]' },
  education: { label: 'Education', emoji: '🎓', color: 'text-[#1d4ed8]',  bg: 'bg-[#eff6ff]',  border: 'border-[#60a5fa44]' },
  astrology: { label: 'Astrology', emoji: '🔯', color: 'text-[#6d28d9]',  bg: 'bg-[#fdf4ff]',  border: 'border-[#a78bfa44]' },
  legal:     { label: 'Legal',     emoji: '⚖️',  color: 'text-[#86198f]',  bg: 'bg-[#fdf4ff]',  border: 'border-[#e879f944]' },
  general:   { label: 'General',   emoji: '🔧', color: 'text-[#166534]',  bg: 'bg-[#f0fdf4]',  border: 'border-[#4ade8044]' },
  fun:       { label: 'Fun',       emoji: '🎮', color: 'text-[#c2410c]',  bg: 'bg-[#fff7ed]',  border: 'border-[#fb923c44]' },
}

function CategoryPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const meta = categoryMeta[category] || { label: category, emoji: '📱', color: 'text-[#6c47ff]', bg: 'bg-[#f5f3ff]', border: 'border-[#6c47ff44]' }

  const filtered = Object.values(calculators).filter(
    c => c.category.toLowerCase() === category.toLowerCase()
  )

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {/* Header */}
      <div className={`${meta.bg} border-b-2 ${meta.border} px-5 md:px-10 py-8`}>
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="text-xs text-[#6c47ff] bg-white border border-[#ddd6fe] rounded-md px-3 py-1.5 font-semibold hover:bg-[#f5f3ff] transition-colors mb-4 inline-block"
          >
            ← Back to Home
          </button>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{meta.emoji}</span>
            <div>
              <h1 className={`text-2xl font-extrabold ${meta.color}`}>{meta.label} Calculators</h1>
              <p className="text-[#64748b] text-sm mt-1">{filtered.length} free tools — click any to start calculating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Grid */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {filtered.map(calc => (
            <Link
              key={calc.slug}
              to={`/calculator/${calc.slug}`}
              className="bg-white border border-[#e2e8f0] rounded-xl p-4 hover:shadow-md hover:border-[#6c47ff44] hover:scale-105 transition-all"
            >
              <div className="text-2xl mb-2">{calc.emoji}</div>
              <div className="text-sm font-bold text-[#0f172a]">{calc.name}</div>
              <div className="text-xs text-[#94a3b8] mt-1 leading-tight">{calc.description}</div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#94a3b8]">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-semibold">No calculators found</p>
            <button onClick={() => navigate('/')} className="mt-4 text-[#6c47ff] underline">Go back home</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default CategoryPage