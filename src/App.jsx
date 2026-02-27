import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CalculatorPage from './pages/CalculatorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator/:slug" element={<CalculatorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App