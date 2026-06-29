// import { useNavigate } from "react-router-dom";

// const CartSummary = ({ total }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="mt-6 bg-[#1e1e1e] p-4 rounded-xl shadow-md">
      
//       <h2 className="text-lg font-semibold">
//         Total: ₹{total}
//       </h2>

//       <button
//         onClick={() => navigate("/checkout")}
//         className="mt-3 w-full bg-gradient-to-r from-orange-500 to-red-500 py-2 rounded-lg hover:opacity-90"
//       >
//         Proceed to Checkout
//       </button>

//     </div>
//   );
// };

// export default CartSummary;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CartSummary = ({ total }) => {
  return (

    <motion.div

      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}

      transition={{
        duration: 0.4,
      }}

      className="mt-10 bg-[#1a1a1a] p-6 rounded-3xl border border-gray-800 hover:border-orange-500 transition duration-300"
    >

      {/* 🔥 TOP */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          Cart Summary
        </h2>

        <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          ₹{total}
        </span>

      </div>

      {/* 🔥 DETAILS */}
      <div className="space-y-3 text-gray-400 mb-6">

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹40</span>
        </div>

        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹20</span>
        </div>

        <div className="border-t border-gray-700 pt-4 flex justify-between text-white font-semibold text-lg">

          <span>Total Amount</span>

          <span>
            ₹{total + 60}
          </span>

        </div>
      </div>

      {/* 🔥 BUTTON */}
      <Link to="/checkout">

        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 rounded-xl font-semibold hover:scale-[1.02] transition duration-300">

          Proceed To Checkout

        </button>

      </Link>

    </motion.div>
  );
};

export default CartSummary;