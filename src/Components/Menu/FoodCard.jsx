import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const FoodCard = ({ item }) => {

  const { addToCart } = useContext(CartContext);

  // 🔥 Button feedback state
  const [added, setAdded] = useState(false);

  const handleAdd = () => {

    addToCart(item);

    // 🔥 visual feedback
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#1e1e1e] p-4 rounded-xl border border-gray-800 hover:border-orange-500 transition duration-300"
    >

      <div className="overflow-hidden rounded-2xl">

  <img
    src={item.image}
    alt={item.name}

    className="h-48 w-full object-cover rounded-2xl transition duration-500 hover:scale-110"
  />

</div>

      <h2 className="mt-3 font-semibold text-lg">
        {item.name}
      </h2>

      <p className="text-gray-400 mt-1">
        ₹{item.price}
      </p>

      {/* 🔥 BUTTON */}
      <motion.button

  whileTap={{ scale: 0.92 }}

  onClick={handleAdd}

  className="mt-4 w-full py-3 rounded-xl font-medium transition duration-300 bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-[0_0_15px_rgba(255,100,0,0.4)]"
>

  {added ? "Added ✅" : "Add To Cart"}

</motion.button>

    </motion.div>
  );
};

export default FoodCard;