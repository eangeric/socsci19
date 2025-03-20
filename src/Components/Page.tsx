import { useEffect, useRef, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

type PageProps = {
  prompt?: string;
  children?: React.ReactNode;
  observations?: string;
  next?: string;
};

export default function Page({
  prompt,
  children,
  observations,
  next = "/socsci19/",
}: PageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.scrollTop = 0;
    }
  }, [location.pathname]); // Runs every time the route changes

  useEffect(() => {
    const progressContainer = progressRef.current;
    if (!progressContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight } = progressContainer;
      const slide = (scrollTop / scrollHeight) * 2;
      setProgress(slide);
      console.log(slide);
    };

    progressContainer.addEventListener("scroll", handleScroll);

    return () => {
      progressContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="h-screen snap-y snap-mandatory overflow-y-scroll"
    >
      <BsChevronDoubleDown
        className={`fixed inset-x-0 bottom-8 z-1 mx-auto size-10 md:size-12 animate-bounce transition-all duration-200 ease-in-out ${
          progress % 1 === 0 && progress !== 1 ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="h-screen snap-start">{children}</div>

      <div className="h-screen flex flex-col justify-center items-center snap-start px-4 sm:px-8 gap-8 bg-black">
        <div className="bg-green-700 text-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Prompt:
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl font-medium">
            {prompt}
          </p>
        </div>
        <div className="bg-gray-700 rounded-xl shadow-lg p-6 md:p-8 max-w-2xl w-full text-left">
          <div className="flex items-center gap-3 mb-4">
            <FaRegLightbulb className="text-yellow-500 text-2xl" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Observations
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            {observations}
          </p>
        </div>

        <button
          className="btn bg-green-700 hover:bg-green-800 transition-colors duration-300 ease-in-out"
          onClick={() => {
            navigate(next);
            window.scrollTo(0, 0);
          }}
        >
          Continue
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex flex-row gap-3">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === progress ? "bg-white scale-125" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
