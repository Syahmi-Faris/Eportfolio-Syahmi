import { Link } from 'react-router-dom';
import { portfolio } from '../data/portfolio';

export default function Home() {
  return (
    <div className="container-page py-16 md:py-24">
      <section className="max-w-3xl">
        <p className="text-emerald-700 font-medium text-sm mb-4 tracking-wide uppercase">
          Eportfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
          Muhammad Syahmi Faris
        </h1>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Computer Science undergraduate at Universiti Teknologi Malaysia. This
          eportfolio collects the projects, assignments, and coursework I have
          completed across six semesters — organised semester by semester, subject
          by subject.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/semesters"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            Explore semesters
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-zinc-300 text-zinc-700 text-sm font-medium hover:bg-zinc-50 transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            Six semesters
          </h2>
          <Link to="/semesters" className="text-sm text-zinc-500 hover:text-zinc-900">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((sem) => (
            <Link key={sem.slug} to={`/semesters/${sem.slug}`} className="card group">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-medium text-emerald-700 uppercase tracking-wide">
                  {sem.year}
                </span>
                <span className="text-xs text-zinc-400">
                  {sem.subjects.length} subjects
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                {sem.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 line-clamp-3">{sem.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
