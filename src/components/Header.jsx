import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Culture Connect home">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-300 via-rose-300 to-amber-200 shadow-inner" aria-hidden="true" />
            <span className="font-semibold tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors">
              Culture Connect
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1 ${
                  isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1 ${
                  isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1 ${
                  isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1 ${
                  isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="md:hidden">
            <Link
              to="/explore"
              className="inline-flex items-center rounded-lg bg-teal-500 text-white px-3 py-2 text-sm font-medium shadow hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-400"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
