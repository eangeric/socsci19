import { motion } from "framer-motion";

export default function PromptThree() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center p-6">
      {/* Retro Logic TV */}
      <motion.div
        className="relative flex flex-col items-center justify-center p-4 bg-gray-800 border-4 border-gray-500 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-6 flex space-x-2">
          <div className="w-3 h-8 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-8 bg-gray-500 rounded-full"></div>
        </div>
        <div className="w-64 h-40 bg-black rounded-lg flex items-center justify-center">
          <span className="text-green-400 font-mono">LOGIC SYSTEM ONLINE</span>
        </div>
        <div className="mt-2 flex space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-green-500 opacity-30 blur-3xl"></div>
      </motion.div>

      {/* Title and Author */}
      <motion.h1
        className="mt-6 text-4xl md:text-6xl font-bold text-green-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Logic Named Joe
      </motion.h1>
      <motion.h2
        className="text-xl md:text-2xl mt-2 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        By Murray Leinster
      </motion.h2>

      {/* Summary */}
      <motion.p
        className="max-w-2xl mt-4 text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        In a world where every home has a Logic—an intelligent computer—one
        machine, Joe, starts to think independently. It knows everything, and it
        starts answering questions it shouldn't. Can society handle unlimited
        knowledge, or will Joe bring chaos to the world?
      </motion.p>

      {/* Coming Soon and Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-xl md:text-2xl text-gray-400 uppercase tracking-widest">
          Coming Soon
        </p>
        <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition">
          Learn More
        </button>
      </motion.div>
    </div>
  );
}
