import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${scrolled ? 'text-amber-600' : 'text-white'}`}>GrandHotel</h1>
        <ul className="hidden md:flex gap-8 font-medium">
          {['Rooms', 'Amenities', 'Gallery', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}
                className={`hover:text-amber-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact"
          className="hidden md:block bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
          Book Now
        </a>
        <button onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl ${scrolled ? 'text-gray-600' : 'text-white'}`}>
          ☰
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 text-gray-600">
          {['Rooms', 'Amenities', 'Gallery', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-amber-500">
              {item}
            </a>
          ))}
          <a href="#contact"
            className="bg-amber-600 text-white px-6 py-2 rounded-full text-center">
            Book Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}