import { Link } from 'react-router-dom';
import { portfolio } from '../data/portfolio';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Semesters() {
  return (
    <div className="container-page py-12">
      <Breadcrumbs items={[{ to: '/', label: 'Home' }, { label: 'Semesters' }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
        Semesters
      </h1>
      <p className="mt-3 text-zinc-600 max-w-2xl">
        Six semesters of coursework at UTM. Pick one to see the subjects and the
        projects I worked on inside each.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolio.map((sem) => {
          const totalProjects = sem.subjects.reduce(
            (n, s) => n + s.projects.length,
            0,
          );
          return (
            <Link key={sem.slug} to={`/semesters/${sem.slug}`} className="card group">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-medium text-emerald-700 uppercase tracking-wide">
                  {sem.year}
                </span>
                <span className="text-xs text-zinc-400">
                  {sem.subjects.length} subjects · {totalProjects} projects
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                {sem.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600">{sem.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {sem.subjects.map((s) => (
                  <span key={s.slug} className="pill">
                    {s.short}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
