import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout";
import { CartProvider } from "./Components/CartContext";

import Tracking from "./Components/Tracking";
import ScrollToTop from "./Components/ScrollToTop";
import Auth from "./Components/Auth/Auth"; // 👈 Naya Auth component import kiya hai

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        
        <ScrollToTop />
        
        <Navbar />

        {/* Routes */}
        <div className="min-h-screen bg-[#0f0f0f] text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/login" element={<Auth />} /> {/* 👈 Login/Signup ka naya route set kar diya */}
          </Routes>
        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;