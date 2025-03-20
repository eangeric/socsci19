import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-black text-white">
      <div className="hero-content flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <img
          src="/socsci19/images/logicnamedjoe-cover.jpg"
          alt="A Logic Named Joe Cover"
          className="max-w-xs rounded-lg shadow-lg"
        />

        {/* Text Section */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold text-green-400">
            AI Literacy Presentation
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            A website by
            <span className="text-white"> Eric Eang </span>
            showcasing the use of artificial intelligence to help us, and the
            dangers in doing so.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            Based on the short story{" "}
            <span className="text-green-300">"A Logic Named Joe"</span>.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            Note: This presentation is best viewed on a desktop!
          </p>

          {/* Start Presentation Button */}
          <div className="mt-6">
            <Link to="/summary">
              <button className="btn bg-green-700 hover:bg-green-800 text-white text-lg font-semibold transition-transform duration-300 hover:scale-105">
                Start Presentation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
