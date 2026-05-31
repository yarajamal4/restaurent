import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Reservation from './pages/Reservation'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>  
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/reservation" element={<Reservation />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
     </>
  )
}
