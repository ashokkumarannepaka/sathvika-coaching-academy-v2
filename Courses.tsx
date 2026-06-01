import { motion } from "motion/react";
import { BookOpen, Brain, Trophy, Target, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "IIT-JEE",
    icon: Brain,
    color: "from-blue-500 to-blue-700",
    programs: ["Class 11", "Class 12", "Repeaters"],
    description: "Comprehensive coaching for JEE Main & Advanced"
  },
  {
    title: "NEET",
    icon: Target,
    color: "from-green-500 to-green-700",
    programs: ["Class 11", "Class 12", "Long Term"],
    description: "Expert medical entrance preparation"
  },
  {
    title: "Foundation",
    icon: BookOpen,
    color: "from-purple-500 to-purple-700",
    programs: ["Class 6-7", "Class 8-9", "Class 10"],
    description: "Build strong conceptual foundation"
  },
  {
    title: "Olympiads",
    icon: Trophy,
    color: "from-orange-500 to-orange-700",
    programs: ["IMO", "NSO", "NTSE"],
    description: "Excel in national & international olympiads"
  },
  {
    title: "Board Exams",
    icon: BookOpen,
    color: "from-pink-500 to-pink-700",
    programs: ["Class 10", "Class 12", "CBSE/State"],
    description: "Score 95+ in board examinations"
  },
];

export function Courses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600">Choose the perfect program for your goals</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                {/* Gradient Background */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${course.color} rounded-t-2xl`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Programs */}
                <div className="space-y-2 mb-6">
                  {course.programs.map((program, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {program}
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-orange-500 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
