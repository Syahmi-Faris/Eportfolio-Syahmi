import { useParams, Navigate, Link } from 'react-router-dom';
import { findProject } from '../data/portfolio';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ProjectPage() {
  const { semSlug, subSlug, projSlug } = useParams();
  const found =
    semSlug && subSlug && projSlug
      ? findProject(semSlug, subSlug, projSlug)
      : undefined;
  if (!found) return <Navigate to="/semesters" replace />;
  const { semester, subject, project } = found;

  return (
    <div className="container-page py-12">
      <Breadcrumbs
        items={[
          { to: '/', label: 'Home' },
          { to: '/semesters', label: 'Semesters' },
          { to: `/semesters/${semester.slug}`, label: semester.title },
          {
            to: `/semesters/${semester.slug}/${subject.slug}`,
            label: subject.name,
          },
          { label: project.title },
        ]}
      />

      <header>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.highlight && <span className="pill-highlight">Highlight</span>}
          <span className="text-xs text-zinc-500 font-medium">
            {subject.code ?? subject.short} · {semester.title}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-2xl leading-relaxed">
          {project.summary}
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-8">
          {project.description && (
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3">Details</h2>
              <p className="text-zinc-700 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          )}

          {!project.description && (
            <div className="border border-dashed border-zinc-300 rounded-xl p-6 text-sm text-zinc-500">
              <p className="font-medium text-zinc-700 mb-1">More detail coming.</p>
              <p>
                Expand this project page with the problem you solved, your
                approach, key results and screenshots. Edit{' '}
                <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-xs">
                  src/data/portfolio.ts
                </code>{' '}
                and add a <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-xs">
                  description
                </code>{' '}
                field to this project.
              </p>
            </div>
          )}

          {(project.github || project.pdfPath || project.videoPath || project.liveUrl) && (
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-3">Links</h2>
              <ul className="space-y-2 text-sm">
                {project.github && (
                  <li>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-700 hover:underline"
                    >
                      View source on GitHub →
                    </a>
                  </li>
                )}
                {project.liveUrl && (
                  <li>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-700 hover:underline"
                    >
                      Live demo →
                    </a>
                  </li>
                )}
                {project.pdfPath && (
                  <li>
                    <a
                      href={project.pdfPath}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-700 hover:underline"
                    >
                      Read the report (PDF) →
                    </a>
                  </li>
                )}
                {project.videoPath && (
                  <li>
                    <a
                      href={project.videoPath}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-700 hover:underline"
                    >
                      Watch demo video →
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </section>

        <aside className="space-y-6">
          <div className="card">
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          {project.role && (
            <div className="card">
              <h3 className="text-sm font-semibold text-zinc-900 mb-2">My role</h3>
              <p className="text-sm text-zinc-600">{project.role}</p>
            </div>
          )}
          <div className="card">
            <h3 className="text-sm font-semibold text-zinc-900 mb-2">Subject</h3>
            <Link
              to={`/semesters/${semester.slug}/${subject.slug}`}
              className="text-sm text-emerald-700 hover:underline"
            >
              {subject.name} →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
