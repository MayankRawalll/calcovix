import { useNavigate } from 'react-router-dom'

const categories = [
  { emoji: '💰', name: 'Finance',   count: 45, color: 'text-[#854d0e]', bar: 'bg-[#f59e0b]', progress: '85%', bg: 'from-[#fef9c3] to-[#fef08a]', border: 'border-[#facc1555]' },
  { emoji: '⚖️', name: 'Legal',     count: 30, color: 'text-[#86198f]', bar: 'bg-[#e879f9]', progress: '60%', bg: 'from-[#fdf4ff] to-[#f5d0fe]', border: 'border-[#e879f955]' },
  { emoji: '❤️', name: 'Health',    count: 35, color: 'text-[#b91c1c]', bar: 'bg-[#f87171]', progress: '75%', bg: 'from-[#fef2f2] to-[#fecaca]', border: 'border-[#f8717155]' },
  { emoji: '🎓', name: 'Education', count: 25, color: 'text-[#1d4ed8]', bar: 'bg-[#60a5fa]', progress: '65%', bg: 'from-[#eff6ff] to-[#bfdbfe]', border: 'border-[#60a5fa55]' },
  { emoji: '🔯', name: 'Astrology', count: 20, color: 'text-[#6d28d9]', bar: 'bg-[#a78bfa]', progress: '42%', bg: 'from-[#fdf4ff] to-[#ddd6fe]', border: 'border-[#a78bfa55]' },
  { emoji: '🔧', name: 'General',   count: 30, color: 'text-[#166534]', bar: 'bg-[#4ade80]', progress: '58%', bg: 'from-[#f0fdf4] to-[#bbf7d0]', border: 'border-[#4ade8055]' },
  { emoji: '🎮', name: 'Fun',       count: 15, color: 'text-[#c2410c]', bar: 'bg-[#fb923c]', progress: '35%', bg: 'from-[#fff7ed] to-[#fed7aa]', border: 'border-[#fb923c55]' },
]

function CategorySection() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f8fafc] px-7 py-5 border-b-2 border-[#f1f5f9]">
      <div className="flex items-center gap-2 text-sm font-extrabold text-[#0f172a] mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-[#06b6d4]"></div>
        Browse by Category
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map(({ emoji, name, count, color, bar, progress, bg, border }) => (
          <div
            key={name}
            onClick={() => navigate(`/category/${name.toLowerCase()}`)}
            className={`bg-gradient-to-br ${bg} rounded-2xl p-4 border-2 ${border} cursor-pointer hover:scale-105 transition-transform duration-150`}
          >
            <div className="text-2xl mb-2">{emoji}</div>
            <div className={`text-sm font-extrabold ${color} mb-0.5`}>{name}</div>
            <div className={`text-xs font-semibold ${color} opacity-70 mb-3`}>{count} tools</div>
            <div className="bg-black/10 rounded-full h-1 overflow-hidden">
              <div className={`h-full rounded-full ${bar}`} style={{ width: progress }}></div>
            </div>
          </div>
        ))}

        <div
          onClick={() => navigate('/')}
          className="bg-[#f8fafc] rounded-2xl p-4 border-2 border-dashed border-[#6c47ff55] flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform duration-150"
        >
          <div className="text-2xl mb-2">➕</div>
          <div className="text-xs font-extrabold text-[#6c47ff]">All 200+ Tools</div>
          <div className="text-xs text-[#94a3b8] mt-1">View Full Library</div>
        </div>
      </div>
    </div>
  )
}

export default CategorySection