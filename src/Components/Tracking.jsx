import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tracking = () => {

  return (

    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-12 py-12">

      {/* 🔥 TOP */}
      <div className="text-center">

        <motion.div

          initial={{ scale: 0 }}
          animate={{ scale: 1 }}

          transition={{
            type: "spring",
            stiffness: 200,
          }}

          className="text-7xl"
        >
          🎉
        </motion.div>

        <h1 className="text-5xl font-bold mt-6">
          Order Confirmed
        </h1>

        <p className="text-gray-400 mt-4">
          Your delicious food is on the way 🚴
        </p>

      </div>

      {/* 🔥 MAP SECTION */}
      <div className="mt-16 bg-[#1a1a1a] rounded-3xl p-6 border border-gray-800">

        <div className="relative h-[350px] rounded-2xl overflow-hidden bg-linear-to-br from-[#1f1f1f] to-[#111]">

          {/* 🔥 Fake Roads */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-gray-700"></div>
          <div className="absolute top-40 left-0 w-full h-[2px] bg-gray-700"></div>
          <div className="absolute top-72 left-0 w-full h-[2px] bg-gray-700"></div>

          <div className="absolute left-20 top-0 w-0.5] h-full bg-gray-700"></div>
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-700"></div>
          <div className="absolute right-20 top-0 w-0.5 h-full bg-gray-700"></div>

          {/* 🔥 DELIVERY PATH */}
          <div className="absolute top-1/2 left-20 right-20 h-1 bg-linear-to-r from-orange-500 to-red-500 rounded-full"></div>

          {/* 🔥 DELIVERY BOY */}
          <motion.div

            animate={{
              x: [0, 700, 0],
            }}

            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}

            className="absolute top-[47%] left-16 text-4xl"
          >
            🛵
          </motion.div>

          {/* 🔥 HOME */}
          <div className="absolute right-10 top-[42%] text-5xl">
            🏠
          </div>

        </div>

      </div>

      {/* 🔥 STATUS */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-orange-500 text-center">
          <h3 className="font-semibold">
            ✔ Order Confirmed
          </h3>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-orange-500 text-center">
          <h3 className="font-semibold">
            ✔ Preparing Food
          </h3>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-orange-500 text-center">
          <h3 className="font-semibold">
            🛵 On The Way
          </h3>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-700 text-center text-gray-500">
          <h3 className="font-semibold">
            Delivered
          </h3>
        </div>

      </div>

      {/* 🔥 ETA */}
      <div className="mt-14 text-center">

        <h2 className="text-3xl font-bold">
          Estimated Delivery:
        </h2>

        <p className="text-orange-500 text-4xl font-bold mt-4">
          25 - 30 mins
        </p>

      </div>

      {/* 🔥 BUTTON */}
      <div className="mt-14 flex justify-center">

        <Link to="/">

          <button className="bg-linear-to-r from-orange-500 to-red-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300">

            Back To Home

          </button>

        </Link>

      </div>

    </div>
  );
};

export default Tracking;