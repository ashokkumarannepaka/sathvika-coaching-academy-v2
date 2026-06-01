import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

export function QuickRegistration() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Quick Registration</h2>
            <p className="text-blue-100">Get free counseling from our expert team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <input
              type="text"
              placeholder="Student Name"
              className="bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Parent Name"
              className="bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <select className="bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Select Class</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>
            <select className="bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Course Interested</option>
              <option>IIT-JEE</option>
              <option>NEET</option>
              <option>Foundation</option>
              <option>Olympiads</option>
              <option>Board Exams</option>
            </select>
            <input
              type="text"
              placeholder="City"
              className="bg-white/90 backdrop-blur px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Free Counseling
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
