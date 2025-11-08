import { useParams } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

// Basic sample facts; in a real app this would come from the backend
const SITE_INFO = {
  pyramids: {
    title: 'Great Pyramids of Giza',
    modelUrl: 'https://prod.spline.design/placeholder/scene.splinecode',
    description: 'Experience one of the Seven Wonders in augmented reality with contextual audio in multiple languages.'
  },
  'machu-picchu': {
    title: 'Machu Picchu',
    modelUrl: 'https://prod.spline.design/placeholder/scene.splinecode',
    description: 'Explore the Incan citadel through interactive 3D and spatial audio narration.'
  },
  'taj-mahal': {
    title: 'Taj Mahal',
    modelUrl: 'https://prod.spline.design/placeholder/scene.splinecode',
    description: 'Marvel at Mughal architecture with cultural notes and respectful storytelling.'
  },
  'angkor-wat': {
    title: 'Angkor Wat',
    modelUrl: 'https://prod.spline.design/placeholder/scene.splinecode',
    description: 'Walk through the Khmer temple complex with annotated 3D reliefs.'
  }
};

function SiteDetails() {
  const { id } = useParams();
  const site = SITE_INFO[id] || { title: 'Heritage Site', modelUrl: '', description: '' };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">{site.title}</h1>
        <p className="mt-2 text-slate-600">{site.description}</p>
      </header>

      <section className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg bg-white">
            {/* 3D / AR Placeholder - Spline canvas */}
            {site.modelUrl ? (
              <Spline scene={site.modelUrl} style={{ width: '100%', height: '100%' }} />
            ) : (
              <div className="w-full h-full grid place-items-center text-slate-500">
                3D Model Placeholder
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/40 via-rose-200/30 to-amber-200/40 pointer-events-none" aria-hidden="true" />
          </div>
          <div className="mt-4 text-sm text-slate-600">
            <p>
              AR Integration Placeholder: Tap to place the model in your space. This area will connect to AR APIs for WebXR-enabled devices.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <section aria-labelledby="artifacts-heading" className="bg-white rounded-xl p-4 shadow-sm ring-1 ring-slate-100">
            <h2 id="artifacts-heading" className="text-lg font-semibold text-slate-800">3D Artifacts</h2>
            <ul className="mt-3 grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>
                  <button className="w-full aspect-square rounded-lg bg-slate-100 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400" aria-label={`Artifact ${i+1}`} />
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="audio-heading" className="bg-white rounded-xl p-4 shadow-sm ring-1 ring-slate-100">
            <h2 id="audio-heading" className="text-lg font-semibold text-slate-800">Audio Guides</h2>
            <div className="mt-3 space-y-3">
              {['English', 'Español', 'Français', 'العربية'].map((lang) => (
                <div key={lang} className="flex items-center justify-between gap-2">
                  <span className="text-sm text-slate-700">{lang}</span>
                  <button className="inline-flex items-center rounded-lg bg-rose-500 text-white px-3 py-2 text-xs font-medium shadow hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-400" aria-label={`Play ${lang} audio`}>
                    Play
                  </button>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

export default SiteDetails;
