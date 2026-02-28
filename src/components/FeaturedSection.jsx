import { Link, useNavigate } from 'react-router-dom'

function FeaturedSection() {
  const navigate = useNavigate()

  return (
    <div className="bg-white px-5 md:px-7 py-5 border-b-2 border-[#f1f5f9]">

      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-sm font-extrabold text-[#0f172a]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
          🔥 Most Popular Tools
        </div>
        <button
          onClick={() => navigate('/category/finance')}
          className="text-xs text-[#6c47ff] bg-[#f5f3ff] border border-[#ddd6fe] rounded-md px-3 py-1 font-semibold hover:bg-[#ede9fe] transition-colors"
        >
          See All →
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-3" style={{ gridTemplateColumns: '1.4fr 1fr 1fr' }}>

        {/* Big Card — EMI Calculator */}
        <Link to="/calculator/emi" className="bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-2xl p-5 flex flex-col justify-between border-2 border-dashed border-[#4338ca55] hover:scale-105 transition-transform duration-150 min-h-[140px]">
          <div>
            <div className="text-2xl">🏦</div>
            <div className="text-white font-extrabold text-sm mt-2">EMI Calculator</div>
            <div className="text-[#a78bfa] text-xs mt-1">⭐ #1 Most Searched</div>
            <div className="text-[#c4b5fd] text-xs mt-2 leading-relaxed">Calculate monthly EMI for home, car or personal loans instantly</div>
          </div>
          <div className="self-end bg-white/20 rounded-full w-7 h-7 flex items-center justify-center text-white text-sm mt-3">→</div>
        </Link>

        {/* Small Card — GST Calculator */}
        <Link to="/calculator/gst" className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-2xl p-4 flex flex-col justify-between border-2 border-dashed border-[#4ade8055] hover:scale-105 transition-transform duration-150 min-h-[140px]">
          <div>
            <div className="text-xl">📊</div>
            <div className="text-[#166534] font-extrabold text-sm mt-2">GST Calculator</div>
            <div className="text-[#166534] text-xs mt-1 opacity-70">📈 Trending</div>
            <div className="text-[#15803d] text-xs mt-2 leading-relaxed">Calculate GST on any amount — CGST, SGST & total instantly</div>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-lg h-7 flex items-center justify-center text-xs text-[#64748b] font-semibold mt-3">
            Open Calculator →
          </div>
        </Link>

        {/* Small Card — CGPA Calculator */}
        <Link to="/calculator/cgpa" className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-2xl p-4 flex flex-col justify-between border-2 border-dashed border-[#60a5fa55] hover:scale-105 transition-transform duration-150 min-h-[140px]">
          <div>
            <div className="text-xl">🎓</div>
            <div className="text-[#1d4ed8] font-extrabold text-sm mt-2">CGPA Calculator</div>
            <div className="text-[#1d4ed8] text-xs mt-1 opacity-70">🎯 Most Used by Students</div>
            <div className="text-[#1e40af] text-xs mt-2 leading-relaxed">Convert CGPA to percentage and check your grade instantly</div>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-lg h-7 flex items-center justify-center text-xs text-[#64748b] font-semibold mt-3">
            Open Calculator →
          </div>
        </Link>

      </div>
    </div>
  )
}

export default FeaturedSection