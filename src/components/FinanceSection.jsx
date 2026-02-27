import { Link } from 'react-router-dom'

const financeTools = [
  { emoji: '🏦', name: 'EMI Calculator',   slug: 'emi',       bg: 'bg-[#fef9c3]', badge: '🔥 Most Used',  badgeStyle: 'bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]' },
  { emoji: '📊', name: 'GST Calculator',   slug: 'gst',       bg: 'bg-[#f0fdf4]', badge: '📈 Trending',   badgeStyle: 'bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]' },
  { emoji: '📈', name: 'SIP Calculator',   slug: 'sip',       bg: 'bg-[#eff6ff]', badge: '✨ New',        badgeStyle: 'bg-[#f0fdf4] text-[#166534] border-[#bbf7d0]' },
  { emoji: '💵', name: 'Income Tax Calc',  slug: 'incometax', bg: 'bg-[#fdf4ff]', badge: null,            badgeStyle: '' },
]

function FinanceSection() {
  return (
    <div className="bg-white px-7 py-5 border-b-2 border-[#f1f5f9]">

      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-sm font-extrabold text-[#0f172a]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
          💰 Finance Calculators
        </div>
        <button className="text-xs text-[#6c47ff] bg-[#f5f3ff] border border-[#ddd6fe] rounded-md px-3 py-1 font-semibold">
          See All 40 →
        </button>
      </div>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {financeTools.map(({ emoji, name, slug, bg, badge, badgeStyle }) => (
          <Link
            to={`/calculator/${slug}`}
            key={name}
            className="bg-[#fafafa] border border-[#e2e8f0] rounded-xl p-3.5 flex items-start gap-3 hover:border-[#6c47ff55] hover:scale-105 transition-all cursor-pointer"
          >
            {/* Icon */}
            <div className={`${bg} w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0`}>
              {emoji}
            </div>

            {/* Text */}
            <div>
              <div className="bg-[#e2e8f0] rounded h-2.5 w-4/5 mb-1.5"></div>
              <div className="bg-[#f1f5f9] rounded h-2 w-3/5 mb-1.5"></div>
              <div className="text-[10px] text-[#94a3b8]">{name}</div>
              {badge && (
                <span className={`text-[9px] font-bold border rounded px-1.5 py-0.5 mt-1.5 inline-block ${badgeStyle}`}>
                  {badge}
                </span>
              )}
            </div>
          </Link>
        ))}

        {/* More Card */}
        <div className="bg-[#f5f3ff] border-2 border-dashed border-[#6c47ff44] rounded-xl p-3.5 flex items-center justify-center cursor-pointer hover:border-[#6c47ff] transition-colors">
          <div className="text-center">
            <div className="text-lg mb-1">📚</div>
            <div className="text-xs font-extrabold text-[#6c47ff]">+35 More Finance →</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FinanceSection