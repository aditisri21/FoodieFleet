import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const { cart } = useContext(CartContext);

  const [payment, setPayment] = useState("COD");
  const navigate = useNavigate();

  // 🔥 Total Price
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const deliveryFee = 40;
  const taxes = 20;

  const total = subtotal + deliveryFee + taxes;

  return (

    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-12 py-12">

      {/* 🔥 TOP */}
      <div className="mb-12">

        <h1 className="text-5xl font-bold">
          Checkout{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Details
          </span>
        </h1>

        <p className="text-gray-400 mt-3">
          Complete your order by filling the details below
        </p>

      </div>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* 🔥 LEFT FORM */}
        <div className="lg:col-span-2 bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-2xl font-semibold mb-8">
            Delivery Information
          </h2>

          {/* 🔥 FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

            {/* City */}
            <input
              type="text"
              placeholder="City"
              className="bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

            {/* Pincode */}
            <input
              type="text"
              placeholder="Pincode"
              className="bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

          </div>

          {/* Address */}
          <textarea
            placeholder="Full Address"
            rows="5"
            className="mt-6 w-full bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
          ></textarea>

          {/* 🔥 PAYMENT */}
          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-6">
              Payment Method
            </h2>

            <div className="flex flex-col gap-4">

              {/* 🔥 COD */}
              <div
                onClick={() => setPayment("COD")}
                className={`p-5 rounded-2xl border cursor-pointer transition duration-300

                ${
                  payment === "COD"
                    ? "border-orange-500 bg-[#222]"
                    : "border-gray-700 bg-[#0f0f0f]"
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="font-medium">
                    Cash On Delivery
                  </span>

                  {payment === "COD" && (
                    <span className="text-orange-500 text-xl">
                      ✓
                    </span>
                  )}

                </div>

              </div>

              {/* 🔥 UPI */}
              <div
                onClick={() => setPayment("UPI")}
                className={`p-5 rounded-2xl border cursor-pointer transition duration-300

                ${
                  payment === "UPI"
                    ? "border-orange-500 bg-[#222]"
                    : "border-gray-700 bg-[#0f0f0f]"
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="font-medium">
                    UPI Payment
                  </span>

                  {payment === "UPI" && (
                    <span className="text-orange-500 text-xl">
                      ✓
                    </span>
                  )}

                </div>

                {/* 🔥 UPI OPTIONS */}
                {payment === "UPI" && (

                  <div className="mt-5 flex flex-col gap-3">

                    <button className="bg-[#1a1a1a] p-3 rounded-xl text-left border border-gray-700 hover:border-orange-500 transition">
                      Google Pay
                    </button>

                    <button className="bg-[#1a1a1a] p-3 rounded-xl text-left border border-gray-700 hover:border-orange-500 transition">
                      PhonePe
                    </button>

                    <button className="bg-[#1a1a1a] p-3 rounded-xl text-left border border-gray-700 hover:border-orange-500 transition">
                      Paytm
                    </button>
                    {/* 🔥 CUSTOM UPI */}
<input
  type="text"
  placeholder="Enter Your UPI ID"

  className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
/>

                  </div>
                )}

              </div>

              {/* 🔥 CARD */}
              <div
                onClick={() => setPayment("CARD")}
                className={`p-5 rounded-2xl border cursor-pointer transition duration-300

                ${
                  payment === "CARD"
                    ? "border-orange-500 bg-[#222]"
                    : "border-gray-700 bg-[#0f0f0f]"
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="font-medium">
                    Credit / Debit Card
                  </span>

                  {payment === "CARD" && (
                    <span className="text-orange-500 text-xl">
                      ✓
                    </span>
                  )}

                </div>

                {/* 🔥 CARD OPTIONS */}
                {payment === "CARD" && (

                  <div className="mt-5 flex flex-col gap-3">

                    <button className="bg-[#1a1a1a] p-3 rounded-xl text-left border border-gray-700 hover:border-orange-500 transition">
                      HDFC Bank
                    </button>

                    <button className="bg-[#1a1a1a] p-3 rounded-xl text-left border border-gray-700 hover:border-orange-500 transition">
                      SBI Bank
                    </button>

                    <button className="bg-[#1a1a1a] p-3 rounded-xl text-left border border-gray-700 hover:border-orange-500 transition">
                      ICICI Bank
                    </button>

                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

        {/* 🔥 RIGHT SUMMARY */}
        <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 h-fit sticky top-28">

          <h2 className="text-2xl font-semibold mb-8">
            Order Summary
          </h2>

          {/* 🔥 ITEMS */}
          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex justify-between text-gray-300"
              >

                <span>
                  {item.name} × {item.qty}
                </span>

                <span>
                  ₹{item.price * item.qty}
                </span>

              </div>

            ))}

          </div>

          {/* 🔥 TOTAL */}
          <div className="border-t border-gray-700 mt-8 pt-6 space-y-4">

            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Taxes</span>
              <span>₹{taxes}</span>
            </div>

            <div className="flex justify-between text-2xl font-bold text-orange-500 pt-4 border-t border-gray-700">

              <span>Total</span>

              <span>
                ₹{total}
              </span>

            </div>

          </div>

          {/* 🔥 PLACE ORDER */}
          <button
  onClick={() => navigate("/tracking")}
  className="mt-8 w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 rounded-xl font-semibold hover:scale-[1.02] transition duration-300"
>
  Place Order
</button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;