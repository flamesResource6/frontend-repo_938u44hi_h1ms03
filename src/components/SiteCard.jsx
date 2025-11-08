import { Link } from 'react-router-dom';

function SiteCard({ site }) {
  return (
    <article className="group bg-white rounded-xl shadow-sm ring-1 ring-slate-100 overflow-hidden focus-within:ring-teal-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={site.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          role="presentation"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800">{site.name}</h3>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{site.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <Link
            to={`/site/${site.id}`}
            className="inline-flex items-center rounded-lg bg-teal-500 text-white px-3 py-2 text-sm font-medium shadow hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-400"
            aria-label={`View details for ${site.name}`}
          >
            View details
          </Link>
          <span className="text-xs text-slate-400" aria-hidden="true">AR • Audio • 3D</span>
        </div>
      </div>
    </article>
  );
}

export default SiteCard;
