import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Conclusion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 md:px-12 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-400 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Thank you!
      </motion.h1>

      {/* Final Thoughts Section */}
      <motion.div
        className="max-w-3xl w-full bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-green-300 mb-3">
          Final Thoughts
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Overall, This presentation highlighted the themes from "A Logic Named
          Joe" about AI doing exactly as it's told, ocassionally going off
          script, and helping humans. It executed commands as I told it too but
          sometimes added unintended elements or made mistakes. Then as prompts
          became more detailed, results improved, showing AI’s reliance on clear
          guidance. While I didn’t code myself, I refined outputs through
          iteration, showing current AI is a tool that enhances creativity but
          still needs human oversight and direction. Even though this was a
          small example, we should be careful with AI as even though it is
          powerful in helping us, it can also be just as destructive.
        </p>
      </motion.div>

      {/* Resources Section */}
      <motion.div
        className="max-w-3xl w-full bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-green-300 mb-3">
          Resources Used
        </h2>
        <ul className="list-disc pl-6 text-gray-300 text-lg leading-relaxed">
          <li>
            <a
              href="https://chatgpt.com/"
              className="text-green-400 hover:underline"
            >
              ChatGPT for code and images.
            </a>
          </li>
          <li>
            <a
              href="https://reactjs.org"
              className="text-green-400 hover:underline"
            >
              Vite for production.
            </a>
          </li>
          <li>
            <a
              href="https://reactjs.org"
              className="text-green-400 hover:underline"
            >
              React for developing the website.
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com"
              className="text-green-400 hover:underline"
            >
              Tailwind CSS for styling.
            </a>
          </li>
          <li>
            <a
              href="https://daisyui.com/"
              className="text-green-400 hover:underline"
            >
              DaisyUI for components.
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/"
              className="text-green-400 hover:underline"
            >
              Framer Motion for animations.
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              className="text-green-400 hover:underline"
            >
              Github to host the website.
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Back Button */}
      <motion.button
        className="mt-8 px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg shadow-md cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/socsci19">Back to Start</Link>
      </motion.button>
    </div>
  );
}
