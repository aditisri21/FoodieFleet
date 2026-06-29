import { motion } from "framer-motion";

import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import cheesyBeef from "../../assets/cheesyBeef.jpg";
import cheeseFry from "../../assets/cheeseFry.jpg";

// 🔥 CATEGORY DATA
const categories = [
  { name: "Burger", img: burger },
  { name: "Pizza", img: pizza },
  { name: "Beef", img: cheesyBeef },
  { name: "Fries", img: cheeseFry },
  { name: "Fast Food", img: burger },
  { name: "Snacks", img: pizza },
  { name: "Wraps", img: cheesyBeef },
  { name: "Sandwich", img: burger },
  { name: "Pasta", img: cheeseFry },
  { name: "BBQ", img: cheesyBeef },
  { name: "Drinks", img: pizza },
  { name: "Desserts", img: cheeseFry },
  { name: "Combo", img: burger },
  { name: "Street Food", img: pizza },
  { name: "Chicken", img: cheesyBeef },
  { name: "Cheese", img: cheeseFry },
];

const Category = () => {
  return (
    <div className="mt-12">

      {/* 🔥 Heading */}
      <h2 className="text-2xl font-semibold mb-6">
        Categories 🍽️
      </h2>

      {/* 🔥 Horizontal Scroll */}
      <div
        className="flex gap-8 overflow-x-auto overflow-y-visible pb-4 pt-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >

        {categories.map((item, i) => (
          <motion.div
            key={i}

            // 🔥 Hover Animation
            whileHover={{
              scale: 1.08,
              y: -8,
            }}

            // 🔥 Click Animation
            whileTap={{
              scale: 0.95,
            }}

            transition={{
              type: "spring",
              stiffness: 200,
            }}

            className="flex flex-col items-center min-w-[110px] cursor-pointer"
          >
            {/* 🔥 Circle Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent hover:border-orange-500 transition duration-300 shadow-md hover:shadow-orange-500/40">

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 🔥 Name */}
            <p className="mt-3 text-sm text-gray-300">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Category;