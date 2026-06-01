import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-200">We're here to help you succeed</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 98765 43210",
                subinfo: "Mon - Sat: 9:00 AM - 7:00 PM",
                color: "from-green-500 to-green-600"
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                info: "+91 98765 43210",
                subinfo: "24/7 Support Available",
                color: "from-green-400 to-green-500"
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@sathvikaacademy.com",
                subinfo: "We'll respond within 24 hours",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Education Street, City Center",
                subinfo: "Multiple branches across India",
                color: "from-purple-500 to-purple-600"
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <contact.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                  <p className="text-blue-100 mb-1">{contact.info}</p>
                  <p className="text-sm text-blue-300">{contact.subinfo}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
