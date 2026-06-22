import { Link, Navigate, useParams } from 'react-router-dom';
import { findSemester, SUBJECT_GRADIENTS } from '../data/portfolio';

export default function SemesterPage() {
  const { semSlug } = useParams();
  const semester = semSlug ? findSemester(semSlug) : undefined;
  if (!semester) return <Navigate to="/" replace />;

  return (
    <div>
      {/* Semester hero */}
      <section className="hero">
        <div className="container-page py-20 md:py-28">
          <p className="text-cyan-300/90 font-semibold uppercase tracking-[0.3em] text-xs mb-6">
            {semester.year} · {semester.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {semester.title}
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
            {semester.summary}
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-white/50">
            {semester.subjects.length} subjects
          </p>
        </div>
      </section>

      {/* Subjects */}
      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Subjects</h2>
          <p className="section-subtitle">
            Pick a subject to see every assignment, lab, tutorial, and project
            inside it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semester.subjects.map((sub, i) => {
              const gradient =
                SUBJECT_GRADIENTS[i % SUBJECT_GRADIENTS.length];
              return (
                <Link
                  key={sub.slug}
                  to={`/${semester.slug}/${sub.slug}`}
                  className="block"
                >
                  <div className="tile">
                    <div className={`tile-image bg-gradient-to-br ${gradient}`} />
                    <div className="tile-body">
                      {sub.code && (
                        <span className="text-[11px] uppercase tracking-widest text-white/80 font-semibold">
                          {sub.code}
                        </span>
                      )}
                      <h3 className="text-2xl mt-1">{sub.name}</h3>
                      <p className="text-sm text-white/80 mt-2 line-clamp-3 leading-snug">
                        {sub.summary}
                      </p>
                      <span className="mt-4 inline-flex items-center text-xs uppercase tracking-widest text-white font-semibold">
                        {sub.works.length}{' '}
                        {sub.works.length === 1 ? 'work' : 'works'} →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
