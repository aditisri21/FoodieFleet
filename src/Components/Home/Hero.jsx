import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ LOCAL IMAGES
import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import cheesyBeef from "../../assets/cheesyBeef.jpg";
import cheeseFry from "../../assets/cheeseFry.jpg";

const foods = [
  { id: 1, name: "Burger", img: burger },
  { id: 2, name: "Pizza", img: pizza },
  { id: 3, name: "Cheesy Beef", img: cheesyBeef },
  { id: 4, name: "Cheese Fry", img: cheeseFry },
  { id: 5, name: "Special Burger", img: burger },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0); 
  const navigate = useNavigate();

  const totalItems = foods.length;
  const anglePerStep = 40; 

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalItems);
    setRotation((prev) => prev - anglePerStep);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    setRotation((prev) => prev + anglePerStep);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 min-h-[calc(100vh-100px)] px-6 md:px-12 overflow-hidden text-white py-12">
      
      {/* 🔥 LEFT CONTENT */}
      <div className="z-20 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Fastest Delivery
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Delicious Food
          </span>
        </h1>
        <p className="text-gray-400 mt-6 text-lg max-w-md">
          Order your favorite meals anytime and experience lighting fast delivery straight to your doorstep. 🍔
        </p>
        <div className="mt-8">
          <button
            onClick={() => navigate("/menu")}
            className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(255,100,0,0.4)] transition-all duration-300 font-semibold text-lg"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* 🔥 RIGHT SIDE FIXED ARC WHEEL */}
      <div className="relative flex justify-center items-end h-[500px] w-full max-w-[600px] mx-auto select-none overflow-visible">
        
        {/* Soft Background Glow */}
        <div className="absolute top-[20%] w-[80%] h-[80%] bg-gradient-to-b from-orange-500/5 to-transparent blur-3xl rounded-full -z-10"></div>

        {/* Static Visual Arch Line Indicator */}
        <div className="absolute top-[10%] w-[85%] h-[80%] border-t-[2px] border-dashed border-orange-500/20 rounded-t-full -z-10"></div>

        {/* 🔄 ROTATING CONTAINER */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 70, damping: 16 }}
          className="absolute w-[500px] h-[500px] rounded-full flex items-center justify-center top-[10%]"
        >
          {foods.map((item, i) => {
            const itemAngle = -144 + (i * 36); 
            const radius = 220; 

            const x = radius * Math.cos((itemAngle * Math.PI) / 180);
            const y = radius * Math.sin((itemAngle * Math.PI) / 180);

            const isActive = index === i;

            return (
              <div
                key={item.id}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                className="transform -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: -rotation }}
                  transition={{ type: "spring", stiffness: 70, damping: 16 }}
                  whileHover={{ scale: 1.12 }}
                  onClick={() => {
                    const diff = i - index;
                    setRotation((prev) => prev - (diff * anglePerStep));
                    setIndex(i);
                  }}
                  className="cursor-pointer"
                >
                  {/* ✅ SOLID HARD-FIX WRAPPER CONTEXT */}
                  <div 
                    className={`w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden transition-all duration-300 border-4 flex items-center justify-center ${
                      isActive
                        ? "border-orange-500 shadow-[0_0_20px_rgba(255,110,0,0.5)] scale-110"
                        : "border-[#2c2c2c] bg-[#1e1e1e] hover:border-orange-400"
                    }`}
                    style={{ width: '72px', height: '72px' }} // Fallback forcing exact pixels
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* 🍔 FIXED CENTER BIG IMAGE DISPLAY */}
        <div className="absolute bottom-5 w-72 h-72 md:w-80 md:h-80 z-20 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={foods[index].img}
              initial={{ scale: 0.7, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotate: 15 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="w-full h-full object-cover rounded-full border-[10px] border-[#161616] shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              alt="Main Display"
            />
          </AnimatePresence>
        </div>

        {/* 🔘 NAVIGATION CONTROLS */}
        <div className="absolute bottom-5 w-[90%] flex justify-between px-2 z-40">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#1e1e1e]/90 border border-gray-800 flex items-center justify-center text-xl text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all backdrop-blur-sm"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#1e1e1e]/90 border border-gray-800 flex items-center justify-center text-xl text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all backdrop-blur-sm"
          >
            →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;