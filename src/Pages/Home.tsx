export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://www.baen.com/media/catalog/product/0/7/0743499107-lg.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Eric Eang's Final Presentation</h1>
          <p className="pt-6">
            A website showcasing the use of artificial intelligence to help us
            and the dangers in doing so.
          </p>
          <p className="pb-6">
            Based on the short story "A Logic Named Joe" by Murray Liester.
          </p>
          <button className="btn btn-info">Start presentation</button>
        </div>
      </div>
    </div>
  );
}
