import { Link, useParams, Navigate } from 'react-router-dom';
import { findSubject } from '../data/portfolio';
import Breadcrumbs from '../components/Breadcrumbs';

export default function SubjectPage() {
  const { semSlug, subSlug } = useParams();
  const found = semSlug && subSlug ? findSubject(semSlug, subSlug) : undefined;
  if (!found) return <Navigate to="/semesters" replace />;
  const { semester, subject } = found;

  return (
    <div className="container-page py-12">
      <Breadcrumbs
        items={[
          { to: '/', label: 'Home' },
          { to: '/semesters', label: 'Semesters' },
          { to: `/semesters/${semester.slug}`, label: semester.title },
          { label: subject.name },
        ]}
      />

      <header>
        <p className="text-xs text-zinc-500 font-medium">
          {subject.code ?? subject.short} · {semester.title}
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          {subject.name}
        </h1>
        <p className="mt-4 text-zinc-600 max-w-2xl leading-relaxed">
          {subject.summary}
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-zinc-900 mb-4">
          {subject.projects.length > 0 ? 'Projects' : 'No featured projects yet'}
        </h2>

        {subject.projects.length === 0 && (
          <p className="text-sm text-zinc-500">
            This subject contributed to my foundation but does not have a featured
            project artifact.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subject.projects.map((proj) => (
            <Link
              key={proj.slug}
              to={`/semesters/${semester.slug}/${subject.slug}/${proj.slug}`}
              className="card group"
            >
              <div className="flex items-baseline gap-2 mb-2">
                {proj.highlight && <span className="pill-highlight">Highlight</span>}
              </div>
              <h3 className="text-base font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                {proj.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 line-clamp-3">{proj.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {proj.skills.slice(0, 5).map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
