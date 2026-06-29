// import { useContext } from "react";
// import { CartContext } from "../CartContext";

// const CartItem = ({ item }) => {
//   const { addToCart, decreaseQty, removeItem } =
//     useContext(CartContext);

//   return (
//     <div className="flex items-center justify-between bg-[#1e1e1e] p-4 rounded-xl">
      
//       {/* Left */}
//       <div className="flex items-center gap-4">
//         <img
//           src={item.image}
//           className="w-16 h-16 object-cover rounded-lg"
//         />
//         <div>
//           <h2 className="font-semibold">{item.name}</h2>
//           <p className="text-gray-400">₹{item.price}</p>
//         </div>
//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-3">
        
//         {/* Qty Controls */}
//         <button
//           onClick={() => decreaseQty(item.id)}
//           className="px-2 bg-gray-700 rounded"
//         >
//           -
//         </button>

//         <span>{item.qty}</span>

//         <button
//           onClick={() => addToCart(item)}
//           className="px-2 bg-gray-700 rounded"
//         >
//           +
//         </button>

//         {/* Remove */}
//         <button
//           onClick={() => removeItem(item.id)}
//           className="text-red-500 ml-2"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;




import { useContext } from "react";
import { CartContext } from "../CartContext";

const CartItem = ({ item }) => {

  const {
    addToCart,
    decreaseQty,
    removeItem,
  } = useContext(CartContext);

  return (

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#1a1a1a] p-5 rounded-2xl border border-gray-800 hover:border-orange-500 transition duration-300">

      {/* 🔥 LEFT */}
      <div className="flex items-center gap-4">

        {/* IMAGE */}
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-xl"
        />

        {/* INFO */}
        <div>

          <h2 className="text-xl font-semibold text-white">
            {item.name}
          </h2>

          <p className="text-orange-500 font-bold mt-1">
            ₹{item.price}
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Delicious & freshly prepared food
          </p>

        </div>
      </div>

      {/* 🔥 RIGHT */}
      <div className="flex items-center gap-4">

        {/* QUANTITY BOX */}
        <div className="flex items-center bg-[#0f0f0f] rounded-xl overflow-hidden border border-gray-700">

          {/* ➖ BUTTON */}
          <button
            onClick={() => decreaseQty(item.id)}
            className="px-4 py-2 hover:bg-red-500 transition duration-300"
          >
            -
          </button>

          {/* QTY */}
          <span className="px-5 text-white font-medium">
            {item.qty}
          </span>

          {/* ➕ BUTTON */}
          <button
            onClick={() => addToCart(item)}
            className="px-4 py-2 hover:bg-green-500 transition duration-300"
          >
            +
          </button>

        </div>

        {/* ❌ REMOVE BUTTON */}
        <button
          onClick={() => removeItem(item.id)}
          className="bg-gradient-to-r from-red-500 to-red-600 px-5 py-2 rounded-xl hover:opacity-90 transition duration-300"
        >
          Remove
        </button>

      </div>

    </div>
  );
};

export default CartItem;