import { motion } from 'framer-motion'

const images = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16">
          <p className="text-amber-600 font-medium mb-2 tracking-widest uppercase">Our Gallery</p>
          <h2 className="text-4xl font-bold text-gray-800">Experience The Beauty</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl h-56 cursor-pointer">
              <motion.img
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
                src={img}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}