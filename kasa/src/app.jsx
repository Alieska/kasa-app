import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TextAnnonce from './routes/ficheAnnonce'
import Home from './routes/home'
import Apropos from './routes/apropos'
import ErrorPage from './routes/error-page'
import Footer from './component/footer'
import Header from './component/header'

function App() {
      return (
            <Router>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/apropos" element={<Apropos />} />
                        <Route path="/annonce/:id" element={<TextAnnonce />} />
                        <Route path="*" element={<ErrorPage />} />
                  </Routes>
                  <Footer />
            </Router>
      )
}

export default App
