import { motion } from "motion/react";
import { MapPin, Phone, Navigation } from "lucide-react";

const branches = [
  {
    city: "Delhi",
    address: "123 Education Hub, Connaught Place, New Delhi - 110001",
    phone: "+91 98765 43210",
    color: "from-blue-500 to-blue-600"
  },
  {
    city: "Mumbai",
    address: "456 Knowledge Street, Andheri West, Mumbai - 400053",
    phone: "+91 98765 43211",
    color: "from-purple-500 to-purple-600"
  },
  {
    city: "Bangalore",
    address: "789 Tech Park Road, Koramangala, Bangalore - 560034",
    phone: "+91 98765 43212",
    color: "from-green-500 to-green-600"
  },
  {
    city: "Hyderabad",
    address: "321 HITEC City, Madhapur, Hyderabad - 500081",
    phone: "+91 98765 43213",
    color: "from-orange-500 to-orange-600"
  },
  {
    city: "Chennai",
    address: "654 T. Nagar Main Road, Chennai - 600017",
    phone: "+91 98765 43214",
    color: "from-pink-500 to-pink-600"
  },
  {
    city: "Pune",
    address: "987 FC Road, Shivajinagar, Pune - 411004",
    phone: "+91 98765 43215",
    color: "from-indigo-500 to-indigo-600"
  },
];

export function Branches() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Branches</h2>
          <p className="text-xl text-gray-600">Visit us at any of our locations across India</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              {/* City */}
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${branch.color} text-white px-4 py-2 rounded-lg mb-4`}>
                <MapPin className="w-5 h-5" />
                <span className="font-bold text-lg">{branch.city}</span>
              </div>

              {/* Address */}
              <p className="text-gray-700 mb-4 leading-relaxed">{branch.address}</p>

              {/* Contact */}
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{branch.phone}</span>
              </div>

              {/* Google Maps Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                View on Google Maps
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
