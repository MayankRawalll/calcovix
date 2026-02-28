import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CalculatorPage from './pages/CalculatorPage'
import CategoryPage from './pages/CategoryPage'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import Terms from './pages/legal/Terms'
import Disclaimer from './pages/legal/Disclaimer'
import About from './pages/legal/About'
import Contact from './pages/legal/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator/:slug" element={<CalculatorPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App