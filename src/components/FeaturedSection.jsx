import { Link } from 'react-router-dom'

function FeaturedSection() {
  return (
    <div className="bg-white px-7 py-5 border-b-2 border-[#f1f5f9]">

      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-sm font-extrabold text-[#0f172a]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
          🔥 Most Popular Tools
        </div>
        <button className="text-xs text-[#6c47ff] bg-[#f5f3ff] border border-[#ddd6fe] rounded-md px-3 py-1 font-semibold">
          See All →
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-3" style={{ gridTemplateColumns: '1.4fr 1fr 1fr' }}>

        {/* Big Card — EMI Calculator */}
        <Link to="/calculator/emi" className="bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-2xl h-36 p-5 flex flex-col justify-between border-2 border-dashed border-[#4338ca55] hover:scale-105 transition-transform duration-150">
          <div>
            <div className="text-2xl">🏦</div>
            <div className="text-white font-extrabold text-sm mt-2">EMI Calculator</div>
            <div className="text-[#a78bfa] text-xs mt-1">⭐ #1 Most Searched</div>
            <div className="bg-[#6c47ff] rounded h-2 w-24 mt-2"></div>
          </div>
          <div className="self-end bg-white/20 rounded-full w-7 h-7 flex items-center justify-center text-white text-sm">→</div>
        </Link>

        {/* Small Card — GST Calculator */}
        <Link to="/calculator/gst" className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-2xl h-36 p-4 flex flex-col justify-between border-2 border-dashed border-[#4ade8055] hover:scale-105 transition-transform duration-150">
          <div>
            <div className="text-xl">📊</div>
            <div className="bg-black/10 rounded h-3 w-3/4 mt-2"></div>
            <div className="bg-black/5 rounded h-2 w-1/2 mt-1.5"></div>
            <div className="text-[#166534] text-xs mt-2 font-semibold">GST Calculator</div>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-lg h-7 flex items-center justify-center text-xs text-[#64748b] font-semibold">
            Open Calculator →
          </div>
        </Link>

        {/* Small Card — CGPA Calculator */}
        <Link to="/calculator/cgpa" className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-2xl h-36 p-4 flex flex-col justify-between border-2 border-dashed border-[#60a5fa55] hover:scale-105 transition-transform duration-150">
          <div>
            <div className="text-xl">🎓</div>
            <div className="bg-black/10 rounded h-3 w-3/4 mt-2"></div>
            <div className="bg-black/5 rounded h-2 w-1/2 mt-1.5"></div>
            <div className="text-[#1d4ed8] text-xs mt-2 font-semibold">CGPA Calculator</div>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-lg h-7 flex items-center justify-center text-xs text-[#64748b] font-semibold">
            Open Calculator →
          </div>
        </Link>

      </div>
    </div>
  )
}

export default FeaturedSection