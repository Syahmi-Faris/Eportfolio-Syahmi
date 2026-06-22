import { Link } from 'react-router-dom';
import { portfolio, SEMESTER_GRADIENTS } from '../data/portfolio';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container-page py-24 md:py-32 relative">
          <p className="text-cyan-300/90 font-semibold uppercase tracking-[0.3em] text-xs mb-6">
            E-Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-4xl">
            Hi, I'm Muhammad Syahmi Farisss.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            This website is my e-portfolio. You can access all my work and
            assignments, organised by semester and subject, in detail. Click a
            tile to see what I built.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#semesters" className="btn btn-primary">
              Explore my work
            </a>
            <a href="#contact" className="btn btn-dark-outline">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Semester tiles */}
      <section id="semesters" className="section">
        <div className="container-page">
          <h2 className="section-title">My Semesters</h2>
          <p className="section-subtitle">
            Three semesters of coursework so far. Each tile takes you into the
            subjects taken that semester, and from there into every assignment,
            lab, tutorial, and project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((sem) => {
              const gradient =
                SEMESTER_GRADIENTS[sem.slug] ?? 'from-slate-700 to-slate-900';
              const tileBody = (
                <div className="tile">
                  <div className={`tile-image bg-gradient-to-br ${gradient}`} />
                  <div className="tile-body">
                    <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                      {sem.tagline}
                    </span>
                    <h3 className="text-3xl mt-2">{sem.title}</h3>
                    <p className="text-sm text-white/80 mt-3 line-clamp-3 leading-snug">
                      {sem.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center text-xs uppercase tracking-widest text-white font-semibold">
                      View →
                    </span>
                  </div>
                </div>
              );
              return sem.externalUrl ? (
                <a
                  key={sem.slug}
                  href={sem.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {tileBody}
                </a>
              ) : (
                <Link key={sem.slug} to={`/${sem.slug}`} className="block">
                  {tileBody}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
