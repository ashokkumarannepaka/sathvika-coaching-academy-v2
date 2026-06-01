import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    alt: "Students in classroom"
  },
  {
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    alt: "Interactive learning session"
  },
  {
    url: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800",
    alt: "Students celebrating success"
  },
  {
    url: "https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?w=800",
    alt: "Modern computer lab"
  },
  {
    url: "https://images.unsplash.com/photo-1758270704524-596810e891b5?w=800",
    alt: "Students in lecture hall"
  },
  {
    url: "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=800",
    alt: "Student studying"
  },
  {
    url: "https://images.unsplash.com/photo-1775623606627-597281856916?w=800",
    alt: "Graduation celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1598981457915-aea220950616?w=800",
    alt: "Student in classroom"
  },
];

export function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Gallery</h2>
          <p className="text-xl text-gray-600">Glimpses of our vibrant learning environment</p>
        </motion.div>

        <Masonry columnsCount={3} gutter="1rem">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
