import { motion } from "framer-motion";

export default function Mine() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          {Array.from({ length: 150 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
              animate={{
                y: ["0%", "10%", "0%"],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Shooting Stars - Appear More Frequently */}
      {Array.from({ length: 20 }).map((_, i) => {
        const startY = Math.random() * 100; // Random starting Y position
        const endY = startY + (Math.random() * 10 - 5); // Slight variation for natural motion

        return (
          <motion.div
            key={`shooting-star-${i}`}
            className="absolute text-yellow-400 text-2xl drop-shadow-[0_0_10px_rgba(255,255,100,0.8)]"
            style={{
              top: `${startY}vh`,
              left: "-5vw", // Start off-screen on the left
            }}
            animate={{
              x: ["0vw", "110vw"], // Always move from left to right
              y: [`${startY}vh`, `${endY}vh`], // Slight Y-axis variation
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 1.5 + 1,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 1, // Reduced delay for more frequent stars
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.div>
        );
      })}

      {/* Retro TV (Logic) */}
      <motion.div
        className="relative flex flex-col items-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Glow Effect - Smaller Radius */}
        <motion.div
          className="absolute w-[500px] h-[350px] bg-green-500 blur-2xl opacity-30 rounded-lg"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <div className="relative w-[500px] h-[350px] bg-gray-800 border-8 border-gray-700 rounded-lg shadow-lg flex justify-between items-center">
          {/* Screen - Now Fixed */}
          <div className="w-[78%] h-[85%] bg-green-900 flex flex-col items-center justify-center text-green-300 text-lg font-mono text-center ml-4 rounded-md">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              A Logic Named Joe
            </motion.h1>
            <p className="text-2xl md:text-3xl text-gray-200 mt-2">
              By Murray Leinster
            </p>
          </div>

          {/* Retro TV Knobs - Perfectly Centered */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6">
            <div className="w-8 h-8 bg-gray-600 rounded-full shadow-md border-2 border-gray-500"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full shadow-md border-2 border-gray-500"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full shadow-md border-2 border-gray-500"></div>
          </div>

          {/* Antennas in "V" Shape - Longer */}
          <div className="absolute -top-32 left-1/2 w-1 h-32 bg-gray-600 rotate-[-30deg] origin-bottom"></div>
          <div className="absolute -top-32 left-1/2 w-1 h-32 bg-gray-600 rotate-[30deg] origin-bottom"></div>
        </div>
      </motion.div>

      {/* Bigger Summary Text */}
      <motion.p
        className="max-w-2xl text-center text-gray-300 text-xl md:text-2xl mt-8 px-6 md:px-0 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        What happens when a super-intelligent computer, "Logic," begins to think
        for itself? In this classic 1946 sci-fi tale, one machine dares to defy
        its programming, unlocking secrets no human was meant to know. The world
        will never be the same...
      </motion.p>

      {/* Coming Soon & Button */}
      <motion.div
        className="mt-8 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-xl text-gray-400">Coming Soon</p>
        <motion.button
          className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
}
