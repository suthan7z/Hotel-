import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}>
            <h2 className="text-2xl font-bold text-amber-500 mb-4">GrandHotel</h2>
            <p className="text-gray-400">Experience luxury and comfort at its finest. Your perfect getaway awaits.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['Rooms', 'Amenities', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5, color: '#F59E0B' }}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-500 transition-colors">
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-gray-400">
              {['Facebook', 'Instagram', 'Twitter'].map((s) => (
                <motion.a
                  key={s}
                  whileHover={{ y: -3, color: '#F59E0B' }}
                  href="#"
                  className="hover:text-amber-500 transition-colors">
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2026 GrandHotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}