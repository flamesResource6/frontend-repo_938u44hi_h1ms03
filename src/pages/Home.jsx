import Hero from '../components/Hero';

function Home() {
  return (
    <main id="content" className="min-h-[60vh]">
      <Hero />
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Immersive AR', desc: 'Place heritage sites in your space with web-based AR.' },
            { title: '3D Artifacts', desc: 'Interact with detailed, rotatable 3D models.' },
            { title: 'Multilingual Audio', desc: 'Listen to culturally sensitive guides in multiple languages.' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
