import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-800 pt-14 pb-5 px-6 md:px-12 bg-[#0f0f0f]">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & About */}
        <div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            FoodieFleet
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Delicious food delivered fast at your doorstep with premium quality and amazing taste.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/menu"
                className="hover:text-orange-500 transition duration-300"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="hover:text-orange-500 transition duration-300"
              >
                Cart
              </Link>
            </li>

            <li>
              <Link
                to="/checkout"
                className="hover:text-orange-500 transition duration-300"
              >
                Checkout
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-orange-500 transition">
              📍 New York, USA
            </li>

            <li className="hover:text-orange-500 transition">
              📞 +1 234 567 890
            </li>

            <li className="hover:text-orange-500 transition">
              ✉ artistaditi533@gmail.com
            </li>

          </ul>
        </div>

        {/* Newsletter */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Newsletter
          </h3>

          <p className="text-gray-400 mb-5">
            Subscribe for latest offers and updates.
          </p>

          <div className="flex items-center bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-3 w-full outline-none text-sm"
            />

            <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 hover:opacity-90 transition duration-300">
              Join
            </button>

          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm">

        © 2026 FoodieFleet. All Rights Reserved by Aditi Srivastava.

      </div>

    </footer>
  );
};

export default Footer;