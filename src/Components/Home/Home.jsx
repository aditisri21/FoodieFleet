import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Category from "./Category";
import foodData from "../Menu/data";
import FoodCard from "../Menu/FoodCard";
import Footer from "../Footer";

const Home = () => {
const navigate = useNavigate();

  return (
    <div className="px-6 md:px-12 py-10 bg-[#0f0f0f] text-white overflow-hidden">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 CATEGORY SECTION */}
      <Category />

      {/* 🔥 POPULAR ITEMS */}
      <div className="mt-20">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">
            Popular Dishes 🔥
          </h2>

          <button className="text-orange-500 hover:text-orange-400 transition">
            View All
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {foodData.slice(0, 4).map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}

        </div>
      </div>

      {/* 🔥 SPECIAL OFFER SECTION */}
      <div className="mt-28 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">

        <div>

          <h2 className="text-4xl font-bold">
            Get 30% OFF 🎉
          </h2>

          <p className="mt-4 text-white/80 max-w-md">
            Enjoy delicious meals with exclusive discounts on your first order from FoodieFleet.
          </p>

        </div>

       <button
  onClick={() => navigate("/menu")}
  className="mt-6 md:mt-0 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
>
  Order Now
</button>
      </div>

      {/* 🔥 WHY CHOOSE US */}
      <div className="mt-28">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Why Choose Us 🚀
          </h2>

          <p className="text-gray-400 mt-3">
            We provide the best experience for food lovers
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#1a1a1a] p-8 rounded-3xl hover:-translate-y-2 transition duration-300 border border-gray-800 hover:border-orange-500">

            <div className="text-5xl mb-5">
              ⚡
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Fast Delivery
            </h3>

            <p className="text-gray-400">
              Hot and fresh meals delivered quickly to your doorstep anytime.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] p-8 rounded-3xl hover:-translate-y-2 transition duration-300 border border-gray-800 hover:border-orange-500">

            <div className="text-5xl mb-5">
              🍔
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Best Quality
            </h3>

            <p className="text-gray-400">
              Premium ingredients and tasty recipes crafted by experts.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] p-8 rounded-3xl hover:-translate-y-2 transition duration-300 border border-gray-800 hover:border-orange-500">

            <div className="text-5xl mb-5">
              💳
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Secure Payment
            </h3>

            <p className="text-gray-400">
              Safe and easy payment methods for hassle-free ordering.
            </p>

          </div>

        </div>
      </div>

      {/* 🔥 CUSTOMER REVIEWS */}
<div className="mt-32 mb-16">

  {/* Heading */}
  <div className="text-center mb-16">

    <h2 className="text-5xl font-bold">
      Customer Reviews{" "}
      <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        💬
      </span>
    </h2>

    <p className="text-gray-400 mt-4 text-lg">
      What our happy customers say about us
    </p>

  </div>

  {/* Reviews Grid */}
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Review Card 1 */}
   <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}

  transition={{
    duration: 0.5,
    ease: "easeOut"
  }}

  whileHover={{
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }}

  className="bg-gradient-to-b from-[#1f1f1f] to-[#141414]
  p-8 rounded-3xl border border-gray-800
  hover:border-orange-500 shadow-xl"
>

      {/* Stars */}
      <div className="flex gap-1 text-orange-400 text-xl mb-5">
        ⭐ ⭐ ⭐ ⭐ ⭐
      </div>

      {/* Review */}
      <p className="text-gray-400 leading-8 text-[15px]">
        “Amazing food quality and super fast delivery.
        Absolutely loved the experience and the UI feels premium.”
      </p>

      {/* User */}
      <div className="flex items-center gap-4 mt-8">

        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-xl font-bold">
          A
        </div>

        <div>
          <h4 className="text-lg font-semibold">
            Alex Johnson
          </h4>

          <p className="text-gray-500 text-sm">
            Food Blogger
          </p>
        </div>

      </div>

    </motion.div>

    {/* Review Card 2 */}
    <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}

  transition={{
    duration: 0.5,
    ease: "easeOut"
  }}

  whileHover={{
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }}

  className="bg-gradient-to-b from-[#1f1f1f] to-[#141414]
  p-8 rounded-3xl border border-gray-800
  hover:border-orange-500 shadow-xl"
>

      <div className="flex gap-1 text-orange-400 text-xl mb-5">
        ⭐ ⭐ ⭐ ⭐ ⭐
      </div>

      <p className="text-gray-400 leading-8 text-[15px]">
        “The burgers were delicious and fresh.
        One of the best food delivery experiences I’ve had.”
      </p>

      <div className="flex items-center gap-4 mt-8">

        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-xl font-bold">
          S
        </div>

        <div>
          <h4 className="text-lg font-semibold">
            Sarah Lee
          </h4>

          <p className="text-gray-500 text-sm">
            Regular Customer
          </p>
        </div>

      </div>

    </motion.div>

    {/* Review Card 3 */}
    <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}

  transition={{
    duration: 0.5,
    ease: "easeOut"
  }}

  whileHover={{
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }}

  className="bg-gradient-to-b from-[#1f1f1f] to-[#141414]
  p-8 rounded-3xl border border-gray-800
  hover:border-orange-500 shadow-xl"
>

      <div className="flex gap-1 text-orange-400 text-xl mb-5">
        ⭐ ⭐ ⭐ ⭐ ⭐
      </div>

      <p className="text-gray-400 leading-8 text-[15px]">
        “Smooth ordering experience with beautiful UI,
        fast checkout, and quick delivery service.”
      </p>

      <div className="flex items-center gap-4 mt-8">

        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-xl font-bold">
          J
        </div>

        <div>
          <h4 className="text-lg font-semibold">
            John Smith
          </h4>

          <p className="text-gray-500 text-sm">
            Verified User
          </p>
        </div>

      </div>

    </motion.div>

  </div>
</div>

      {/* 🔥 FOOTER */}
      <Footer />

    </div>
  );
};

export default Home;