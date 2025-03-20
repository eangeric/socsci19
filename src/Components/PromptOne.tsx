export default function PromptOne() {
  return (
    <div className="relative h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?technology,futuristic')] bg-cover bg-center opacity-40"></div>
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-4">A Logic Named Joe</h1>
        <p className="text-lg mb-6">
          A visionary 1946 short story by Murray Leinster that foresaw the rise
          of the internet and AI. What happens when a machine starts thinking
          for itself?
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all">
          Read More
        </button>
      </div>
    </div>
  );
}
