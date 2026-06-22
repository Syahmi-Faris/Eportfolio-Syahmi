import { activities } from '../data/portfolio';
import Breadcrumbs from '../components/Breadcrumbs';

const CATEGORY_LABEL: Record<string, string> = {
  hackathon: 'Hackathons',
  cert: 'Certifications',
  leadership: 'Leadership',
  'side-project': 'Side Projects',
};

export default function Activities() {
  const grouped = activities.reduce<Record<string, typeof activities>>((acc, a) => {
    (acc[a.category] = acc[a.category] || []).push(a);
    return acc;
  }, {});

  return (
    <div className="container-page py-12">
      <Breadcrumbs items={[{ to: '/', label: 'Home' }, { label: 'Activities' }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
        Activities & Certifications
      </h1>
      <p className="mt-3 text-zinc-600 max-w-2xl">
        Beyond coursework — hackathons, certifications, and the student
        organisations that shaped my non-academic experience.
      </p>

      <div className="mt-10 space-y-12">
        {Object.entries(grouped).map(([cat, items]) => (
          <section key={cat}>
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">
              {CATEGORY_LABEL[cat] ?? cat}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((a) => (
                <div key={a.slug} className="card">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base font-semibold text-zinc-900">{a.title}</h3>
                    {a.year && (
                      <span className="text-xs text-zinc-400">{a.year}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-zinc-600">{a.summary}</p>
                  {a.skills && a.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {a.skills.map((s) => (
                        <span key={s} className="pill">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
