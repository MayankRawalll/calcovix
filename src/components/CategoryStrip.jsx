import { useNavigate, useParams } from 'react-router-dom'

const chips = [
  { label: 'All',       emoji: '⚡', color: 'bg-[#6c47ff] text-white border-[#6c47ff]',        active: 'bg-[#6c47ff] text-white', inactive: 'bg-white text-[#6c47ff] border-[#ddd6fe]' },
  { label: 'Finance',   emoji: '💰', active: 'bg-[#f59e0b] text-white border-[#f59e0b]',        inactive: 'bg-white text-[#854d0e] border-[#fde68a]' },
  { label: 'Health',    emoji: '❤️',  active: 'bg-[#f87171] text-white border-[#f87171]',        inactive: 'bg-white text-[#b91c1c] border-[#fecaca]' },
  { label: 'Education', emoji: '🎓', active: 'bg-[#60a5fa] text-white border-[#60a5fa]',        inactive: 'bg-white text-[#1d4ed8] border-[#bfdbfe]' },
  { label: 'Astrology', emoji: '🔯', active: 'bg-[#a78bfa] text-white border-[#a78bfa]',        inactive: 'bg-white text-[#6d28d9] border-[#ddd6fe]' },
  { label: 'Legal',     emoji: '⚖️',  active: 'bg-[#e879f9] text-white border-[#e879f9]',        inactive: 'bg-white text-[#86198f] border-[#f5d0fe]' },
  { label: 'General',   emoji: '🔧', active: 'bg-[#4ade80] text-white border-[#4ade80]',        inactive: 'bg-white text-[#166534] border-[#bbf7d0]' },
  { label: 'Fun',       emoji: '🎮', active: 'bg-[#fb923c] text-white border-[#fb923c]',        inactive: 'bg-white text-[#c2410c] border-[#fed7aa]' },
]

function CategoryStrip() {
  const navigate = useNavigate()
  const { category } = useParams()

  const activeLabel = category
    ? chips.find(c => c.label.toLowerCase() === category.toLowerCase())?.label
    : 'All'

  const handleClick = (label) => {
    if (label === 'All') navigate('/')
    else navigate(`/category/${label.toLowerCase()}`)
  }

  return (
    <div className="bg-white border-b-2 border-[#f1f5f9] px-5 py-3 overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        {chips.map(({ label, emoji, active, inactive }) => {
          const isActive = label === activeLabel
          return (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className={`flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full border transition-all duration-150 whitespace-nowrap
                ${isActive ? (active || 'bg-[#6c47ff] text-white border-[#6c47ff]') : (inactive || 'bg-white text-[#64748b] border-[#e2e8f0]')}
                hover:scale-105`}
            >
              {emoji} {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryStrip