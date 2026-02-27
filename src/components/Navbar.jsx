function Navbar() {
  return (
    <nav className="bg-[#0f172a] h-[58px] flex items-center justify-between px-7">
      
      {/* Logo */}
      <div className="bg-gradient-to-r from-[#6c47ff] to-[#06b6d4] text-white font-extrabold text-sm px-4 py-2 rounded-lg">
        Calcovix
      </div>

      {/* Nav Links */}
      <div className="flex gap-2">
        {['Finance', 'Health', 'Education', 'Astrology', 'Legal', 'General'].map(cat => (
          <span key={cat} className="bg-[#1e293b] text-[#94a3b8] text-xs px-3 py-1 rounded-full border border-[#334155] cursor-pointer hover:text-[#a78bfa]">
            {cat}
          </span>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex gap-2 items-center">
        <span className="bg-[#1e293b] border border-dashed border-[#475569] text-[#94a3b8] text-xs px-3 py-1 rounded-lg">EN / हि</span>
        <span className="bg-[#1e293b] border border-[#334155] text-[#64748b] text-xs px-3 py-1 rounded-lg">🔍</span>
      </div>

    </nav>
  )
}

export default Navbar