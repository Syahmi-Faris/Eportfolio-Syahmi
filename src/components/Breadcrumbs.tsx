import { Link } from 'react-router-dom';

type Crumb = { to?: string; label: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-zinc-900 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-zinc-900 font-medium' : ''}>{item.label}</span>
              )}
              {!isLast && <span className="text-zinc-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
