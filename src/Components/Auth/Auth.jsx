import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Smartphone } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const formVariants = {
    hidden: { opacity: 0, x: isLogin ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, x: isLogin ? 50 : -50, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-6 text-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[450px] bg-[#141414] border border-gray-800/60 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 backdrop-blur-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Foodie<span className="text-orange-500">Fleet</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            {isLogin ? "Welcome back! Ready for deliciousness?" : "Join the fleet and satisfy your cravings!"}
          </p>
        </div>

        <div className="min-h-[340px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.form
                key="login"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#1c1c1c] border border-gray-800 focus:border-orange-500 px-12 py-3.5 rounded-xl outline-none transition duration-300 text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-[#1c1c1c] border border-gray-800 focus:border-orange-500 px-12 py-3.5 rounded-xl outline-none transition duration-300 text-sm"
                    required
                  />
                </div>

                <div className="text-right">
                  <a href="#forgot" className="text-xs text-orange-400 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 font-semibold py-3.5 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.2)] flex items-center justify-center gap-2 mt-4 text-sm"
                >
                  Log In <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key="signup"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-[#1c1c1c] border border-gray-800 focus:border-orange-500 px-12 py-3.5 rounded-xl outline-none transition duration-300 text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#1c1c1c] border border-gray-800 focus:border-orange-500 px-12 py-3.5 rounded-xl outline-none transition duration-300 text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-[#1c1c1c] border border-gray-800 focus:border-orange-500 px-12 py-3.5 rounded-xl outline-none transition duration-300 text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Create Password"
                    className="w-full bg-[#1c1c1c] border border-gray-800 focus:border-orange-500 px-12 py-3.5 rounded-xl outline-none transition duration-300 text-sm"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 font-semibold py-3.5 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.2)] flex items-center justify-center gap-2 mt-4 text-sm"
                >
                  Create Account <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-800/50">
          <p className="text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-500 font-semibold hover:underline ml-1"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;