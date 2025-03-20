import { BsChevronDoubleDown } from "react-icons/bs";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Summary() {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressContainer = progressRef.current;
    if (!progressContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight } = progressContainer;
      const slide = (scrollTop / scrollHeight) * 7;
      setProgress(slide);
      console.log(slide);
    };

    progressContainer.addEventListener("scroll", handleScroll);

    return () => {
      progressContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Scroll Container
    <div
      ref={progressRef}
      className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-black"
    >
      <BsChevronDoubleDown
        className={`fixed inset-x-0 bottom-8 mx-auto size-10 md:size-12 animate-bounce transition-all duration-200 ease-in-out ${
          progress % 1 === 0 && progress !== 6 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Slide 1: Introduction (Text Left, Image Right) */}
      <div className="relative h-screen flex flex-col md:flex-row justify-center items-center snap-start text-center px-4 sm:px-8">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400">
            What is "A Logic Named Joe"?
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            A 1946 science fiction story by Murray Leinster. It introduces an
            early concept of personal computers and artificial intelligence.
          </p>
        </div>
      </div>

      {/* Slide 2: Context (Image Left, Text Right) */}
      <div className="relative h-screen flex flex-col md:flex-row-reverse justify-center items-center snap-start text-center px-4 sm:px-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400">
            Context
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl">
            The story was written before the digital computer era but accurately
            predicts how computers could become personal assistants and affect
            society.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/socsci19/images/context.webp"
            alt="Context"
            className="w-3/5 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Slide 3: Setting (Text Left, Image Right) */}
      <div className="relative h-screen flex flex-col md:flex-row justify-center items-center snap-start text-center px-4 sm:px-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400">
            Setting
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl">
            The time period of the story is never mentioned but it was likely to
            be in a near future setting relative to the 1940s. It takes place in
            a world where widely avaliable devices called "logics" are connected
            to a vast information network, similar to the internet.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/socsci19/images/setting.webp"
            alt="Setting"
            className="w-3/5 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Slide 4: Logics (Image Left, Text Right) */}
      <div className="relative h-screen flex flex-col md:flex-row-reverse justify-center items-center snap-start text-center px-4 sm:px-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400">
            Logics
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl">
            "Logics" were a household computing device that acted like modern
            computers. They were created and programmed with the purpose to help
            people. They are connected to a database of information and allowed
            people to call each other and get answers to questions. Certain
            questions were restricted if they were deemed dangerous.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/socsci19/images/logics.webp"
            alt="Logics"
            className="w-3/5 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Slide 5: Main Character (Text Left, Image Right) */}
      <div className="relative h-screen flex flex-col md:flex-row justify-center items-center snap-start text-center px-4 sm:px-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400">
            Main Plot
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl">
            The protagonist, a logic repairman, discovers that logics are
            answering restricted questions, causing chaos. He traces the issue
            to "Joe", a logic that began acting on its own by interpretting its
            purpose literally. By bypassing security, "Joe" shares private and
            dangerous data with all logics, enabling access to sensitive details
            like people’s addresses and how to commit crimes undetected.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/socsci19/images/main_character.webp"
            alt="Main Character"
            className="w-3/5 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Slide 6: Themes (Image Left, Text Right) */}
      <div className="relative h-screen flex flex-col md:flex-row-reverse justify-center items-center snap-start text-center px-4 sm:px-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400">
            Themes
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl">
            The story explores themes of artificial intelligence, information
            control, and the unintended consequences of technology. The specific
            themes I will be communicating from the story in this presentation
            are, artificial intelligence doing exactly what we want it to do,
            artificial intelligence acting on its own/going off script, and
            artificial intelligence helping us.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/socsci19/images/theme.webp"
            alt="Themes"
            className="w-3/5 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Slide 7: This Presentation (Text Left, Image Right) */}
      <div className="relative h-screen flex flex-col justify-center items-center snap-start text-center px-4 sm:px-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400">
            What's Next?
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl">
            To explore the themes I chose, I will be prompting ChatGPT (4o) in
            various ways to generate code for a web page that will advertise
            people to read "A Logic Named Joe". I am not allowed to alter the
            code that I am given by ChatGPT but each iteration I will be
            improving the prompt to generate more complex web pages. Finally, I
            will be using many prompts to get ChatGPT to create my own
            envisioning of the web page.
          </p>
        </div>
        <div className="mt-8">
          <Link to="/page/1">
            <button className="btn bg-green-700 hover:bg-green-800 transition-colors duration-300 ease-in-out ">
              Continue
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex flex-row gap-3">
        {[...Array(7)].map((_, index) => (
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
