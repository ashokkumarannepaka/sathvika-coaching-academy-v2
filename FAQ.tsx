import { motion } from "motion/react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How to enroll in Sathvika Coaching Academy?",
    answer: "You can enroll by filling out the quick registration form on our website, visiting any of our branches, or calling our admission helpline. Our counseling team will guide you through the admission process."
  },
  {
    question: "What is the scholarship eligibility criteria?",
    answer: "Students appearing for the Sathvika Scholarship Admission Test (SSAT) are eligible. Scholarships up to 90% are awarded based on test performance. There is no registration fee for the scholarship test."
  },
  {
    question: "What is the course duration?",
    answer: "Course duration varies by program. Foundation courses are typically 1 year, JEE/NEET programs range from 1-2 years, and crash courses are 3-6 months. We offer flexible batch timings to suit different needs."
  },
  {
    question: "Are online classes available?",
    answer: "Yes, we offer both online and offline classes. Our online platform features live interactive sessions, recorded lectures, digital study materials, and 24/7 doubt clearing support."
  },
  {
    question: "What is the fee structure?",
    answer: "Fee structure varies by course and duration. We offer flexible payment plans, EMI options, and sibling discounts. Contact our admission team for detailed fee information and available scholarships."
  },
  {
    question: "Do you provide study material?",
    answer: "Yes, we provide comprehensive study materials including detailed notes, practice questions, previous year papers, and online test series. All materials are prepared by our expert faculty team."
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers</p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden border border-gray-200"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-all group">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
