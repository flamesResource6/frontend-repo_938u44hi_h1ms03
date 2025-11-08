function StaticPage({ title }) {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800">{title}</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        This is a placeholder for the {title} page. Add cultural storytelling, project background, and contact details here.
      </p>
    </main>
  );
}

export default StaticPage;
