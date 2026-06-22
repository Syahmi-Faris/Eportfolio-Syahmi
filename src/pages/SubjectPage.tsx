import { Link, Navigate, useParams } from 'react-router-dom';
import {
  findSubject,
  defaultViewUrl,
  WORK_TYPE_LABEL,
  WORK_TYPE_COLOR,
  SUBJECT_GRADIENTS,
} from '../data/portfolio';

export default function SubjectPage() {
  const { semSlug, subSlug } = useParams();
  const found = semSlug && subSlug ? findSubject(semSlug, subSlug) : undefined;
  if (!found) return <Navigate to="/" replace />;
  const { semester, subject } = found;

  // Stable gradient based on subject slug
  const subjectIndex = semester.subjects.findIndex((s) => s.slug === subject.slug);
  const subjectGradient =
    SUBJECT_GRADIENTS[subjectIndex % SUBJECT_GRADIENTS.length];

  return (
    <div>
      {/* Subject hero */}
      <section className="hero">
        <div className="container-page py-20 md:py-28">
          <div className="text-sm text-white/60 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <Link to={`/${semester.slug}`} className="hover:text-white">
              {semester.title}
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">{subject.name}</span>
          </div>
          {subject.code && (
            <p className="text-cyan-300/90 font-semibold uppercase tracking-[0.3em] text-xs mb-4">
              {subject.code}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {subject.name}
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
            {subject.summary}
          </p>
        </div>
      </section>

      {/* Works (spotlights) */}
      {subject.works.length === 0 ? (
        <section className="section">
          <div className="container-page text-center">
            <p className="text-zinc-500">No works listed yet for this subject.</p>
          </div>
        </section>
      ) : (
        <section>
          {subject.works.map((work, i) => {
            const url = defaultViewUrl(subject, work);
            const isReverse = i % 2 === 1;
            return (
              <div key={work.slug} className="spotlight">
                <div
                  className={`spotlight-image ${
                    isReverse ? 'md:order-2' : ''
                  }`}
                >
                  <div
                    className={`spotlight-image-bg bg-gradient-to-br ${subjectGradient}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/90 text-center px-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-semibold opacity-80">
                        {WORK_TYPE_LABEL[work.type]}
                      </p>
                      <p className="font-display font-extrabold text-3xl md:text-4xl mt-2 leading-tight">
                        #{String(i + 1).padStart(2, '0')}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`spotlight-content ${
                    isReverse ? 'md:order-1' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`pill border ${WORK_TYPE_COLOR[work.type]}`}
                    >
                      {WORK_TYPE_LABEL[work.type]}
                    </span>
                  </div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      View Work
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* Back link */}
      <section className="section">
        <div className="container-page">
          <Link
            to={`/${semester.slug}`}
            className="text-sm uppercase tracking-widest font-semibold text-zinc-500 hover:text-zinc-900"
          >
            ← Back to {semester.title}
          </Link>
        </div>
      </section>
    </div>
  );
}
