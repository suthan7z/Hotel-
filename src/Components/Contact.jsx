import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! We will contact you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16">
          <p className="text-amber-600 font-medium mb-2 tracking-widest uppercase">Contact Us</p>
          <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="space-y-8">
            {[
              { title: "Address", value: "123 Beach Road, Maldives" },
              { title: "Phone", value: "+1 234 567 890" },
              { title: "Email", value: "info@grandhotel.com" },
              { title: "Hours", value: "24/7 — Always open for you" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="cursor-default">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            onSubmit={handleSubmit}
            className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
              required />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
              required />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
              required />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-medium text-lg transition-colors">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}