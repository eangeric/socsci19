import { useState } from "react";

type LogicProps = {
  text: string;
};

export default function Logic({ text }: LogicProps) {
  const [clickedKnob, setClickedKnob] = useState<number | null>(null);

  const handleKnobDown = (index: number) => {
    setClickedKnob(clickedKnob === index ? null : index);
  };

  const handleKnobUp = () => {
    setClickedKnob(null);
  };

  const getKnobStyle = (index: number) => {
    return clickedKnob === index ? "bg-green-600 scale-90" : "bg-gray-700";
  };

  return (
    <div className="relative bg-gray-800 border-4 border-gray-700 rounded-lg p-2 m-1 w-[28rem] h-[18rem] shadow-xl flex">
      {/* Screen */}
      <div className="bg-black border-2 border-gray-600 rounded-md h-full flex-grow text-green-600 font-mono text-lg p-4">
        <p>{text}</p>
      </div>

      {/* Antennas */}
      <div className="absolute -top-30 left-1/2 -translate-x-1/2 flex gap-8">
        <div className="w-1 h-30 bg-gray-600 rounded-full rotate-[-30deg] origin-bottom"></div>
        <div className="w-1 h-30 bg-gray-600 rounded-full rotate-[30deg] origin-bottom"></div>
      </div>

      {/* Knobs */}
      <div className="flex flex-col gap-4 ml-4 justify-between items-center my-6">
        <div className="flex flex-col gap-4">
          <div
            className={`size-10 border border-gray-600 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${getKnobStyle(
              0
            )}`}
            onMouseDown={() => handleKnobDown(0)}
            onMouseUp={handleKnobUp}
            onMouseLeave={handleKnobUp}
          ></div>
          <div
            className={`size-10 border border-gray-600 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${getKnobStyle(
              1
            )}`}
            onMouseDown={() => handleKnobDown(1)}
            onMouseUp={handleKnobUp}
            onMouseLeave={handleKnobUp}
          ></div>
        </div>
        <div className="flex gap-2">
          <div
            className={`size-4 border border-gray-600 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${getKnobStyle(
              2
            )}`}
            onMouseDown={() => handleKnobDown(2)}
            onMouseUp={handleKnobUp}
            onMouseLeave={handleKnobUp}
          ></div>
          <div
            className={`size-4 border border-gray-600 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${getKnobStyle(
              3
            )}`}
            onMouseDown={() => handleKnobDown(3)}
            onMouseUp={handleKnobUp}
            onMouseLeave={handleKnobUp}
          ></div>
          <div
            className={`size-4 border border-gray-600 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${getKnobStyle(
              4
            )}`}
            onMouseDown={() => handleKnobDown(4)}
            onMouseUp={handleKnobUp}
            onMouseLeave={handleKnobUp}
          ></div>
        </div>
      </div>
    </div>
  );
}
