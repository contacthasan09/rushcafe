import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menus from './pages/Menus'
import About from './pages/About'
import FindUs from './pages/FindUs'
import Blog from './pages/Blog'
import Reservation from './pages/Reservation'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/about" element={<About />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
