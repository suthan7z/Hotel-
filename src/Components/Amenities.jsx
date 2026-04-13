import { motion } from 'framer-motion'

const amenities = [
  { icon: "🏊", title: "Swimming Pool", desc: "Outdoor pool open 24/7" },
  { icon: "🍽️", title: "Restaurant", desc: "Fine dining experience" },
  { icon: "💪", title: "Gym", desc: "Fully equipped fitness center" },
  { icon: "🅿️", title: "Free Parking", desc: "Secure parking available" },
  { icon: "📶", title: "Free WiFi", desc: "High speed internet" },
  { icon: "🛎️", title: "Room Service", desc: "24/7 room service" },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16">
          <p className="text-amber-600 font-medium mb-2 tracking-widest uppercase">What We Offer</p>
          <h2 className="text-4xl font-bold text-gray-800">Hotel Amenities</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {amenities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, borderColor: '#F59E0B' }}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all cursor-pointer">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="text-5xl mb-4">
                {a.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{a.title}</h3>
              <p className="text-gray-500">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}