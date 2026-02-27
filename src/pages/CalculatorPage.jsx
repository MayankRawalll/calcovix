import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { calculators } from '../data/calculators'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CalculatorPage() {
  const { slug } = useParams()
  const calc = calculators[slug]
  const [inputs, setInputs] = useState({})
  const [results, setResults] = useState(null)
  const [error, setError] = useState(false)

  if (!calc) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-4">😕</div>
            <div className="text-xl font-extrabold text-[#0f172a] mb-2">Calculator not found</div>
            <Link to="/" className="text-[#6c47ff] text-sm font-semibold">← Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const handleCalculate = () => {
    const result = calc.calculate(inputs)
    if (!result) {
      setError(true)
      setResults(null)
    } else {
      setError(false)
      setResults(result)
    }
  }

  const handleReset = () => {
    setInputs({})
    setResults(null)
    setError(false)
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Navbar />

      {/* Breadcrumb */}
      <div className="px-7 py-3 bg-white border-b border-[#f1f5f9] text-xs text-[#94a3b8]">
        <Link to="/" className="hover:text-[#6c47ff]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-[#6c47ff] font-semibold">{calc.name}</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        <div className="bg-white rounded-2xl border-2 border-[#e2e8f0] overflow-hidden shadow-sm">

          {/* Header */}
          <div className="bg-gradient-to-r from-[#6c47ff] to-[#06b6d4] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{calc.emoji}</div>
              <div>
                <div className="text-white font-extrabold text-lg">{calc.name}</div>
                <div className="text-white/70 text-xs mt-0.5">{calc.description}</div>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {calc.inputs.map(({ id, label, placeholder, prefix }) => (
                <div key={id}>
                  <label className="block text-xs font-bold text-[#475569] mb-1.5">{label}</label>
                  <div className="flex items-center bg-[#f8fafc] border-2 border-[#e2e8f0] rounded-xl overflow-hidden focus-within:border-[#6c47ff] transition-colors">
                    <span className="px-3 text-[#6c47ff] font-bold text-sm border-r border-[#e2e8f0] bg-[#f5f3ff]">{prefix}</span>
                    <input
                      type="number"
                      placeholder={placeholder}
                      value={inputs[id] || ''}
                      onChange={e => setInputs(prev => ({ ...prev, [id]: e.target.value }))}
                      className="flex-1 px-4 py-3 text-sm outline-none bg-transparent text-[#0f172a]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Error */}
            {error && (
              <div className="mt-4 bg-[#fef2f2] border border-[#fecaca] rounded-xl px-4 py-3 text-xs text-[#b91c1c] font-semibold">
                ⚠️ Please fill in all fields with valid numbers.
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCalculate}
                className="flex-1 bg-[#6c47ff] hover:bg-[#5b3de8] text-white font-extrabold py-3 rounded-xl text-sm transition-colors"
              >
                ⚡ Calculate →
              </button>
              <button
                onClick={handleReset}
                className="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#64748b] font-bold py-3 px-5 rounded-xl text-sm transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="px-6 pb-6">
              <div className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] border-2 border-[#ddd6fe] rounded-2xl p-5">
                <div className="text-xs font-extrabold text-[#6c47ff] uppercase tracking-wider mb-4">📊 Your Results</div>
                <div className="grid grid-cols-3 gap-3">
                  {results.map(({ label, value }) => (
                    <div key={label} className="bg-white rounded-xl p-3 text-center border border-[#ddd6fe]">
                      <div className="text-base font-extrabold text-[#0f172a]">{value}</div>
                      <div className="text-[10px] text-[#94a3b8] mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CalculatorPage