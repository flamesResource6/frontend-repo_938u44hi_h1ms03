import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-teal-50" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            Culture Connect: <span className="text-teal-600">AR Heritage Explorer</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Step into history with immersive AR tours, 3D artifacts, and multilingual audio guides. Explore the world's heritage from anywhere.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/explore"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-400"
            >
              Start Exploring
            </Link>
            <a
              href="#features"
              className="text-teal-700 hover:text-teal-800 font-medium underline-offset-4 hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/60 via-rose-200/40 to-amber-200/60 pointer-events-none" aria-hidden="true" />
          <div className="w-full h-full flex items-center justify-center bg-white/70">
            <span className="text-slate-500">AR Preview Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
