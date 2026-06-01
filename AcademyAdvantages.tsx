import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "Structured Study Plan",
    description: "Comprehensive curriculum designed by IITians and top educators",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Daily Practice Problems",
    description: "Carefully curated problems to strengthen concepts daily",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Doubt Solving Sessions",
    description: "Dedicated doubt clearing sessions with expert faculty",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Mock Tests",
    description: "Regular full-length mock tests simulating actual exams",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Revision Strategy",
    description: "Systematic revision schedules for better retention",
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Exam Readiness Program",
    description: "Final preparation phase with tips and strategies",
    color: "from-indigo-500 to-indigo-600"
  },
];

export function AcademyAdvantages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academy Advantages</h2>
          <p className="text-xl text-gray-600">Our systematic approach to excellence</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4 md:justify-end" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? "text-right" : "text-left"}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                        <p className="text-gray-600">{advantage.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block">
                  <div className={`w-6 h-6 bg-gradient-to-br ${advantage.color} rounded-full border-4 border-white shadow-lg`}></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
