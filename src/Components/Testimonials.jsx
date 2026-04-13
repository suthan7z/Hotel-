import { motion } from 'framer-motion'

const testimonials = [
  { name: "John Smith", country: "🇬🇧 UK", text: "Absolutely amazing experience. The rooms were stunning and staff were incredibly helpful.", stars: 5 },
  { name: "Sarah Johnson", country: "🇺🇸 USA", text: "Best hotel I've ever stayed in. The food was incredible and the pool was perfect.", stars: 5 },
  { name: "Ahmed Hassan", country: "🇦🇪 UAE", text: "Luxury at its finest. Will definitely be coming back next year with my family.", stars: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16">
          <p className="text-amber-600 font-medium mb-2 tracking-widest uppercase">Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-800">What Our Guests Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: j * 0.1 }}
                    className="text-amber-400 text-xl">★</motion.span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-gray-800">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}