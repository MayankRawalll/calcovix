import { Link, useNavigate } from 'react-router-dom'
import { calculators } from '../data/calculators'

const featuredSlugs = ['emi', 'gst', 'sip', 'incometax']

const badges = {
  emi:       { label: '🔥 Most Used', style: 'bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]' },
  gst:       { label: '📈 Trending',  style: 'bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]' },
  sip:       { label: '✨ New',       style: 'bg-[#f0fdf4] text-[#166534] border-[#bbf7d0]' },
  incometax: { label: null,           style: '' },
}

const bgColors = {
  emi: 'bg-[#fef9c3]', gst: 'bg-[#f0fdf4]', sip: 'bg-[#eff6ff]', incometax: 'bg-[#fdf4ff]'
}

function FinanceSection() {
  const navigate = useNavigate()
  const financeCalcs = Object.values(calculators).filter(c => c.category === 'Finance')
  const featured = featuredSlugs.map(slug => calculators[slug]).filter(Boolean)
  const remaining = financeCalcs.filter(c => !featuredSlugs.includes(c.slug))

  return (
    <div className="bg-white px-7 py-5 border-b-2 border-[#f1f5f9]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-sm font-extrabold text-[#0f172a]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
          💰 Finance Calculators
        </div>
        <button
          onClick={() => navigate('/category/finance')}
          className="text-xs text-[#6c47ff] bg-[#f5f3ff] border border-[#ddd6fe] rounded-md px-3 py-1 font-semibold hover:bg-[#ede9fe] transition-colors"
        >
          See All {financeCalcs.length} →
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {featured.map(calc => {
          const badge = badges[calc.slug]
          const bg = bgColors[calc.slug] || 'bg-[#f8fafc]'
          return (
            <Link
              to={`/calculator/${calc.slug}`}
              key={calc.slug}
              className="bg-[#fafafa] border border-[#e2e8f0] rounded-xl p-3.5 flex items-start gap-3 hover:border-[#6c47ff55] hover:scale-105 transition-all"
            >
              <div className={`${bg} w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0`}>
                {calc.emoji}
              </div>
              <div>
                <div className="text-xs font-bold text-[#0f172a] mb-0.5">{calc.name}</div>
                <div className="text-[10px] text-[#94a3b8] leading-tight">{calc.description?.slice(0, 45)}...</div>
                {badge?.label && (
                  <span className={`text-[9px] font-bold border rounded px-1.5 py-0.5 mt-1.5 inline-block ${badge.style}`}>
                    {badge.label}
                  </span>
                )}
              </div>
            </Link>
          )
        })}

        <div
          onClick={() => navigate('/category/finance')}
          className="bg-[#f5f3ff] border-2 border-dashed border-[#6c47ff44] rounded-xl p-3.5 flex items-center justify-center cursor-pointer hover:border-[#6c47ff] transition-colors"
        >
          <div className="text-center">
            <div className="text-lg mb-1">📚</div>
            <div className="text-xs font-extrabold text-[#6c47ff]">+{remaining.length} More Finance →</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinanceSection