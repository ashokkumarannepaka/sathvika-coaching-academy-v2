import { motion } from "motion/react";
import { Users, Monitor, FileText, UserCheck, BarChart3, Eye } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from IITians and experienced educators with proven track records",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "State-of-the-art digital classrooms with interactive learning tools",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FileText,
    title: "Weekly Tests",
    description: "Regular assessments to track progress and identify improvement areas",
    color: "from-green-500 to-green-600"
  },
  {
    icon: UserCheck,
    title: "Personalized Mentoring",
    description: "One-on-one guidance tailored to each student's needs",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Detailed performance reports with AI-powered insights",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Eye,
    title: "Parent Tracking",
    description: "Real-time updates on student attendance and performance",
    color: "from-indigo-500 to-indigo-600"
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sathvika?</h2>
          <p className="text-xl text-gray-600">Experience excellence in education with our unique features</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
