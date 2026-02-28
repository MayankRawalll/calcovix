import { useSearchParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategoryStrip from '../components/CategoryStrip'
import FeaturedSection from '../components/FeaturedSection'
import CategorySection from '../components/CategorySection'
import FinanceSection from '../components/FinanceSection'
import Footer from '../components/Footer'
import { calculators } from '../data/calculators'

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category')

  const handleSelect = (category) => {
    if (category === 'All' || !category) {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
    setTimeout(() => window.scrollTo({ top: 300, behavior: 'smooth' }), 50)
  }

  const handleScrollTo = (id) => {
    setSearchParams({})
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  const filtered = activeCategory === 'All'
    ? Object.values(calculators)
    : activeCategory
    ? Object.values(calculators).filter(c => c.category === activeCategory)
    : []

  return (
    <div>
      <Helmet>
        <title>Calcovix — 200+ Free Calculators for Finance, Health & More</title>
        <meta name="description" content="Free online calculators for Finance, Health, Education, Astrology, Legal & General. EMI, GST, SIP, BMI, CGPA calculators and 200+ more. Instant results, no signup needed." />
        <meta property="og:title" content="Calcovix — India's #1 Free Calculator Platform" />
        <meta property="og:description" content="200+ free calculators for Finance, Health, Education, Astrology & more. Trusted by millions of Indians." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://calcovix.in" />
      </Helmet>

      <Navbar />
      <Hero />
      <CategoryStrip onSelect={handleSelect} />

      {activeCategory ? (
        <div className="bg-white px-5 py-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-extrabold text-[#0f172a]">
              {activeCategory === 'All' ? 'All Calculators' : activeCategory + ' Calculators'} ({filtered.length})
            </h2>
            <button
              onClick={() => handleSelect(null)}
              className="text-sm text-[#6c47ff] border border-[#6c47ff] px-3 py-1 rounded-lg hover:bg-[#6c47ff] hover:text-white transition-all"
            >
              ← Back to Home
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {filtered.map(calc => (
              <Link
                key={calc.slug}
                to={`/calculator/${calc.slug}`}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 hover:shadow-md hover:scale-105 transition-all"
              >
                <div className="text-2xl mb-2">{calc.emoji}</div>
                <div className="text-sm font-bold text-[#0f172a]">{calc.name}</div>
                <div className="text-xs text-[#94a3b8] mt-1 line-clamp-2">{calc.description}</div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div id="featured"><FeaturedSection /></div>
          <CategorySection onSelect={handleSelect} />
          <div id="finance"><FinanceSection onSelect={handleSelect} /></div>
        </>
      )}

      <Footer onSelectCategory={handleSelect} onScrollTo={handleScrollTo} />
    </div>
  )
}

export default Home