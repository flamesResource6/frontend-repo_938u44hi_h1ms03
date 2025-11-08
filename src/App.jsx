import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SiteDetails from './pages/SiteDetails';
import StaticPage from './pages/Static';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-rose-50 via-amber-50 to-teal-50 text-slate-800">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-slate-900 px-3 py-2 rounded shadow">
        Skip to content
      </a>
      <Header />

      <div className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/site/:id" element={<SiteDetails />} />
          <Route path="/about" element={<StaticPage title="About" />} />
          <Route path="/contact" element={<StaticPage title="Contact" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
