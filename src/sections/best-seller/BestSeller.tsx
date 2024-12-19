import { motion } from "framer-motion";
import { ShoppingBag, Flame, Star, Heart, Clock } from "lucide-react";
import { BestDeliveryData } from "../../helper/data/data";

// Function to return a tag icon based on the tag string
const getTagIcon = (tag: string): JSX.Element => {
  switch (tag.toLowerCase()) {
    case "popular":
      return <Flame className="w-3 h-3" />;
    case "new":
      return <Star className="w-3 h-3" />;
    case "favorite":
      return <Heart className="w-3 h-3" />;
    case "limited":
      return <Clock className="w-3 h-3" />;
    default:
      return <Star className="w-3 h-3" />;
  }
};

// Function to return a tag color based on the tag string
const getTagColor = (tag: string): string => {
  switch (tag.toLowerCase()) {
    case "popular":
      return "bg-gradient-to-r from-red-500 to-orange-500";
    case "new":
      return "bg-gradient-to-r from-blue-500 to-purple-500";
    case "favorite":
      return "bg-gradient-to-r from-pink-500 to-rose-500";
    case "limited":
      return "bg-gradient-to-r from-amber-500 to-yellow-500";
    default:
      return "bg-gradient-to-r from-red-500 to-orange-500";
  }
};
export const BestSeller = () => {
  return (
    <section className="w-full min-h-[calc(100vh-58px)] bg-gradient-to-br from-orange-50 to-rose-50 px-4 py-16">
      <div className="flex flex-col items-center justify-center gap-2 w-full mb-12">
        <h1
          id="hero-heading"
          className="text-5xl font-bold text-[#111] leading-none tracking-tight"
        >
          Best <span className="text-[#EF0016]">Sellers.</span>
        </h1>
        <p className="font-bold text-[#746f6f] leading-snug tracking-tighter capitalize bg-[#d2c9c9] px-2 py-1 w-max rounded-lg shadow-lg border border-[#b3b0b0]">
          Discover our most loved dishes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {BestDeliveryData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative bg-red-100 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <motion.div className="relative h-32 mb-4 -mt-8">
              <motion.img
                initial={{ y: 0, scale: 1 }}
                whileHover={{ y: -30, scale: 1.2, z: 50 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain transform group-hover:z-10"
              />
            </motion.div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-lg font-bold text-gray-800 line-clamp-1">
                {item.title}
              </h2>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xl font-bold text-[#EF0016]">$45</p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#EF0016] text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 hover:bg-red-700 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              className={`absolute -top-3 -right-3 ${getTagColor(
                item.tag
              )} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-white/20`}
            >
              {getTagIcon(item.tag)}
              {item.tag}
              <motion.span
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-white/20"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
