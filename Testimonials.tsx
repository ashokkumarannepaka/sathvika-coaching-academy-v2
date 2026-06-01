import { motion } from "motion/react";
import Slider from "react-slick";
import { Star, Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent of NEET Aspirant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 5,
    text: "Sathvika Academy transformed my daughter's preparation. The personalized mentoring and regular tests helped her secure AIR 142 in NEET. Highly recommend!"
  },
  {
    name: "Sneha Reddy",
    role: "JEE Advanced 2025",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    rating: 5,
    text: "The faculty here is exceptional. They don't just teach, they inspire. The study material and test series were instrumental in my JEE success."
  },
  {
    name: "Arun Sharma",
    role: "Parent of Class 10 Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 5,
    text: "The parent tracking system keeps me updated about my son's progress. The smart classrooms and interactive teaching methods are outstanding."
  },
  {
    name: "Meera Patel",
    role: "NEET 2025",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    rating: 5,
    text: "Best coaching institute in the city! The doubt clearing sessions and weekly tests helped me identify my weak areas and improve consistently."
  },
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Hear from our students and parents</p>
        </motion.div>

        <div className="px-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-orange-500 opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
