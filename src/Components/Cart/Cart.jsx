import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Cart is empty</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* 👇 YAHAN USE HOGA */}
          <CartSummary total={total} />
        </>
      )}
    </div>
  );
};

export default Cart;