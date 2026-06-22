import { Link, useParams, Navigate } from 'react-router-dom';
import { findSemester } from '../data/portfolio';
import Breadcrumbs from '../components/Breadcrumbs';

export default function SemesterPage() {
  const { semSlug } = useParams();
  const semester = semSlug ? findSemester(semSlug) : undefined;
  if (!semester) return <Navigate to="/semesters" replace />;

  return (
    <div className="container-page py-12">
      <Breadcrumbs
        items={[
          { to: '/', label: 'Home' },
          { to: '/semesters', label: 'Semesters' },
          { label: semester.title },
        ]}
      />

      <header>
        <p className="text-xs font-medium text-emerald-700 uppercase tracking-wide">
          {semester.year}
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          {semester.title}
        </h1>
        <p className="mt-4 text-zinc-600 max-w-2xl leading-relaxed">
          {semester.summary}
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-zinc-900 mb-4">Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {semester.subjects.map((sub) => (
            <Link
              key={sub.slug}
              to={`/semesters/${semester.slug}/${sub.slug}`}
              className="card group"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <p className="text-xs text-zinc-500 font-medium">
                    {sub.code ?? sub.short}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                    {sub.name}
                  </h3>
                </div>
                <span className="text-xs text-zinc-400 whitespace-nowrap">
                  {sub.projects.length}{' '}
                  {sub.projects.length === 1 ? 'project' : 'projects'}
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-600 line-clamp-3">
                {sub.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
