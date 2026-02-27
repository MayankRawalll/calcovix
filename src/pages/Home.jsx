import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategoryStrip from '../components/CategoryStrip'
import FeaturedSection from '../components/FeaturedSection'
import CategorySection from '../components/CategorySection'
import FinanceSection from '../components/FinanceSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryStrip />
      <FeaturedSection />
      <CategorySection />
      <FinanceSection />
      <Footer />
    </div>
  )
}

export default Home