import Breadcrumbs from '../components/Breadcrumbs';

export default function About() {
  return (
    <div className="container-page py-12">
      <Breadcrumbs items={[{ to: '/', label: 'Home' }, { label: 'About' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
        About me
      </h1>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <p className="text-zinc-700 leading-relaxed">
            I am Muhammad Syahmi Faris, a Computer Science undergraduate at
            Universiti Teknologi Malaysia. Over six semesters I have worked
            across the full software stack — from low-level assembly and
            operating systems to data engineering, business intelligence
            dashboards, machine learning, and web applications.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            This eportfolio is the curated record of that work: the projects I
            am proud of, the group work I contributed to, and the technical
            skills I have built along the way. <em>Replace this paragraph with
            your own bio when ready.</em>
          </p>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900 mb-3 mt-8">
              Core skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Python',
                'Java',
                'C++',
                'SQL',
                'PHP',
                'Power BI',
                'Pandas',
                'Playwright',
                'Machine Learning',
                'Data Engineering',
                'AWS',
                'Azure (DP-900)',
                'Cisco Packet Tracer',
                'MongoDB',
                'Git',
              ].map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="card">
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">Contact</h3>
            <ul className="text-sm text-zinc-700 space-y-2">
              <li>
                Email — <span className="text-zinc-500">add your email</span>
              </li>
              <li>
                GitHub —{' '}
                <a
                  href="https://github.com/Syahmi-Faris"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 hover:underline"
                >
                  Syahmi-Faris
                </a>
              </li>
              <li>
                LinkedIn —{' '}
                <span className="text-zinc-500">add your LinkedIn URL</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-zinc-900 mb-2">CV</h3>
            <p className="text-sm text-zinc-600 mb-3">
              Drop your CV PDF into{' '}
              <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-xs">
                public/cv.pdf
              </code>{' '}
              and this link will work.
            </p>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-emerald-700 hover:underline"
            >
              Download CV (PDF) →
            </a>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-zinc-900 mb-2">Education</h3>
            <p className="text-sm text-zinc-700">
              <strong>Universiti Teknologi Malaysia</strong>
            </p>
            <p className="text-sm text-zinc-600 mt-1">
              Bachelor's in Computer Science
              <br />
              <span className="text-zinc-400">2023 – Present</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
