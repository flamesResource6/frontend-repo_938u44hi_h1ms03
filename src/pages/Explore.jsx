import SiteCard from '../components/SiteCard';

const mockSites = [
  {
    id: 'pyramids',
    name: 'Great Pyramids of Giza',
    image: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop',
    description: 'Ancient wonders of Egypt with millennia of history and enigmatic architecture.'
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWNodSUyMFBpY2NodXxlbnwwfDB8fHwxNzYyNTk1MDg0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Incan citadel nestled in the Andes, renowned for its dry-stone walls and terraces.'
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    image: 'https://images.unsplash.com/photo-1516496636080-14fb876e029d?q=80&w=1200&auto=format&fit=crop',
    description: 'A marble mausoleum symbolizing eternal love, blending Persian and Mughal styles.'
  },
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    image: 'https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmdrb3IlMjBXYXR8ZW58MHwwfHx8MTc2MjU5NTA4NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'The largest religious monument in the world, famed for its Khmer architecture.'
  }
];

function Explore() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">Explore Heritage Sites</h1>
        <p className="mt-2 text-slate-600">Browse AR-ready sites and dive into details.</p>
      </header>

      <section aria-label="Heritage sites" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </section>
    </main>
  );
}

export default Explore;
