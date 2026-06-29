import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import {
    Search,
    House,
    UtensilsCrossed,
    ShoppingCart,
} from "lucide-react";

const Navbar = () => {

    const [search, setSearch] = useState("");

    return (

        <motion.nav

            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}

            className="sticky top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-800"
        >

            {/* 🔥 MAIN CONTAINER */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 grid grid-cols-3 items-center">

                {/* 🔥 LOGO */}
                <Link to="/" className="-ml-28">

                    <h1 className="text-3xl font-bold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">

                        FoodieFleet

                    </h1>

                </Link>

                {/* 🔥 CENTER NAV */}
                <div className="hidden md:flex items-center justify-center gap-10">

                    {[
                        {
                            name: "Home",
                            path: "/",
                            icon: <House size={18} />,
                        },

                        {
                            name: "Menu",
                            path: "/menu",
                            icon: <UtensilsCrossed size={18} />,
                        },

                        {
                            name: "Cart",
                            path: "/cart",
                            icon: <ShoppingCart size={18} />,
                        },

                    ].map((item) => (

                        <NavLink
                            key={item.name}
                            to={item.path}

                            className={({ isActive }) =>
                                `relative pb-1 transition duration-300 flex items-center gap-2

                ${isActive
                                    ? "text-orange-500 font-semibold text-[17px]"
                                    : "text-gray-400 hover:text-white"
                                }`
                            }
                        >

                            {({ isActive }) => (
                                <>

                                    {/* 🔥 ICON */}
                                    <span>
                                        {item.icon}
                                    </span>

                                    {/* 🔥 TEXT */}
                                    <span>
                                        {item.name}
                                    </span>

                                    {/* 🔥 UNDERLINE */}
                                    <span
                                        className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-orange-400 to-red-500 transition-all duration-300

                    ${isActive
                                                ? "w-full"
                                                : "w-0"
                                            }`}
                                    ></span>

                                </>
                            )}

                        </NavLink>

                    ))}

                </div>

                {/* 🔥 RIGHT SIDE */}
                <div className="hidden md:flex items-center justify-self-end gap-6 translate-x-29">

                    {/* 🔍 SEARCH */}
                    <div className="flex items-center bg-[#1e1e1e] px-4 py-2 rounded-2xl border border-gray-800 focus-within:border-orange-500 transition duration-300">

                        <Search size={18} className="text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search food..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent outline-none px-3 text-sm text-white placeholder:text-gray-500 w-45"
                        />

                    </div>

                    {/* 🔥 LOGIN LINK SET */}
                    <Link 
                        to="/login" 
                        className="bg-linear-to-r from-orange-500 to-red-500 px-6 py-2.5 rounded-2xl font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(255,100,0,0.35)] transition duration-300 block text-center"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </motion.nav>
    );
};

export default Navbar;