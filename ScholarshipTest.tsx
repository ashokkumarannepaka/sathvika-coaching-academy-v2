import { motion } from "motion/react";
import { Trophy, Clock, CheckCircle, Gift } from "lucide-react";
import { useState, useEffect } from "react";

export function ScholarshipTest() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Limited Seats Available</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sathvika Scholarship Admission Test
            <span className="block text-blue-600">(SSAT)</span>
          </h2>
          <p className="text-xl text-gray-600">Win up to 90% scholarship on your admission</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Gift, title: "Up to 90% Scholarship", desc: "Based on your test performance" },
              { icon: Clock, title: "Online Exam", desc: "Take the test from anywhere" },
              { icon: CheckCircle, title: "Instant Results", desc: "Get your results immediately" },
              { icon: Trophy, title: "Free Registration", desc: "No registration fee required" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Registration Closes In</h3>
              <p className="text-blue-200">Hurry up! Limited seats available</p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Mins" },
                { value: timeLeft.seconds, label: "Secs" },
              ].map((time, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">{time.value.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-blue-200">{time.label}</div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Register For Scholarship Test
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
