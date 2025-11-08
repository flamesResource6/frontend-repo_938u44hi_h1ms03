function Footer() {
  return (
    <footer className="mt-16 border-t border-teal-100 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-2 items-center">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Culture Connect. Celebrating heritage with responsible and inclusive storytelling.
        </p>
        <nav className="flex justify-start md:justify-end gap-6" aria-label="Footer">
          <a href="#accessibility" className="text-sm text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline">Accessibility</a>
          <a href="#privacy" className="text-sm text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline">Privacy</a>
          <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
