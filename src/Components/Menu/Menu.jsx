import { useState } from "react";
import foodData from "./data";
import FoodCard from "./FoodCard";

const Menu = () => {

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Burger",
    "Pizza",
    "Pasta",
    "Drinks",
  ];

  const filteredFoods =
    activeCategory === "All"
      ? foodData
      : foodData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-12 py-12">

      {/* 🔥 TOP HEADING */}
      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold">
          Explore Our{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Delicious Menu
          </span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover freshly prepared meals with premium ingredients and amazing taste.
        </p>

      </div>

      {/* 🔥 CATEGORY FILTERS */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">

        {categories.map((cat, index) => (

          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-full transition duration-300 font-medium
              
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-800"
              }
            `}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* 🔥 FOOD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredFoods.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}

      </div>

    </div>
  );
};

export default Menu;