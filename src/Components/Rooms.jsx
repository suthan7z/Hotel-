import { motion } from 'framer-motion'

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    price: "$50",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    features: ["1 King Bed", "Free WiFi", "TV", "Air Conditioning"]
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: "$100",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    features: ["1 King Bed", "Ocean View", "Mini Bar", "Bathtub"]
  },
  {
    id: 3,
    name: "Suite Room",
    price: "$200",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    features: ["2 Bedrooms", "Living Room", "Kitchen", "Butler Service"]
  }
]

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16">
          <p className="text-amber-600 font-medium mb-2 tracking-widest uppercase">Our Rooms</p>
          <h2 className="text-4xl font-bold text-gray-800">Choose Your Perfect Room</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="overflow-hidden h-56">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                  <span className="text-amber-600 font-bold text-lg">
                    {room.price}<span className="text-gray-400 text-sm">/night</span>
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {room.features.map((f, i) => (
                    <li key={i} className="text-gray-500 flex items-center gap-2">
                      <span className="text-amber-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-medium transition-colors">
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}