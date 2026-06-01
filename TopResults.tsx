import { motion } from "motion/react";
import Slider from "react-slick";
import { Trophy, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const toppers = [
  {
    name: "Arjun Sharma",
    rank: "AIR 25",
    exam: "NEET 2026",
    score: "720/720",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400"
  },
  {
    name: "Priya Patel",
    rank: "AIR 48",
    exam: "JEE Advanced 2026",
    score: "342/360",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    name: "Rahul Kumar",
    rank: "AIR 15",
    exam: "NEET 2026",
    score: "715/720",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    name: "Ananya Singh",
    rank: "AIR 92",
    exam: "JEE Main 2026",
    score: "99.8%ile",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
  },
  {
    name: "Vikram Reddy",
    rank: "AIR 67",
    exam: "JEE Advanced 2026",
    score: "335/360",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
  },
];

export function TopResults() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Our Pride</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Top Results 2026</h2>
          <p className="text-xl text-blue-200">Celebrating excellence and achievement</p>
        </motion.div>

        <div className="px-4">
          <Slider {...settings}>
            {toppers.map((topper, index) => (
              <div key={index} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {/* Student Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-orange-500">
                      <img
                        src={topper.image}
                        alt={topper.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-3">
                      <Star className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{topper.name}</h3>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg mb-3 font-bold text-2xl">
                      {topper.rank}
                    </div>
                    <p className="text-blue-200 mb-1">{topper.exam}</p>
                    <p className="text-orange-300 font-semibold">{topper.score}</p>
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
