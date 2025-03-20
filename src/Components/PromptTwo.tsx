import { motion } from "framer-motion";

export default function PromptTwo() {
  return (
    <div className="relative h-screen w-full bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold text-center text-blue-400 drop-shadow-lg"
        >
          A LOGIC NAMED JOE
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-32 w-full text-center"
      >
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          In a world where computers can think for themselves, one machine takes
          it too far.
        </p>
        <button className="mt-6 px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 rounded-xl">
          Read the Story
        </button>
      </motion.div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/logic_named_joe.jpg')" }}
      />
    </div>
  );
}
