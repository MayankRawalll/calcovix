import { useState } from 'react'

const categories = [
  { label: 'All',        emoji: '⚡', color: 'active' },
  { label: 'Finance',    emoji: '💰', color: 'finance' },
  { label: 'Health',     emoji: '❤️',  color: 'health' },
  { label: 'Education',  emoji: '📚', color: 'education' },
  { label: 'Astrology',  emoji: '🔮', color: 'astrology' },
  { label: 'Legal',      emoji: '⚖️',  color: 'legal' },
  { label: 'General',    emoji: '🧮', color: 'general' },
  { label: 'Fun',        emoji: '🎉', color: 'fun' },
]

const chipStyles = {
  finance:   'bg-[#fefce8] border-[#facc15] text-[#854d0e]',
  health:    'bg-[#fef2f2] border-[#f87171] text-[#b91c1c]',
  education: 'bg-[#eff6ff] border-[#60a5fa] text-[#1d4ed8]',
  astrology: 'bg-[#fdf4ff] border-[#e879f9] text-[#a21caf]',
  legal:     'bg-[#fdf4ff] border-[#e879f9] text-[#a21caf]',
  general:   'bg-[#f0fdf4] border-[#4ade80] text-[#15803d]',
  fun:       'bg-[#fff7ed] border-[#fb923c] text-[#c2410c]',
  default:   'bg-[#f8fafc] border-[#e2e8f0] text-[#64748b]',
}

function CategoryStrip({ onSelect }) {
  const [active, setActive] = useState('All')

  const handleClick = (label) => {
    setActive(label)
    if (onSelect) onSelect(label)
  }

  return (
    <div className="bg-white border-b-2 border-[#f1f5f9] px-7 py-3 flex gap-2 overflow-x-auto">
      {categories.map(({ label, emoji, color }) => {
        const isActive = active === label
        const style = isActive
          ? 'bg-[#6c47ff] border-[#6c47ff] text-white shadow-md'
          : chipStyles[color] || chipStyles.default

        return (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full border-[1.5px] whitespace-nowrap flex-shrink-0 transition-all duration-150 ${style}`}
          >
            <span>{emoji}</span>
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryStrip