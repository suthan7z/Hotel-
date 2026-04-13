import Navbar from '../Navbar'
import Hero from '../Hero'
import Rooms from '../Rooms'
import Amenities from '../Amenities'
import Gallery from '../Gallery'
import Testimonials from '../Testimonials'
import Contact from '../Contact'
import Footer from '../Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}