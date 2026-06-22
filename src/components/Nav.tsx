import { Link, NavLink } from 'react-router-dom';
import { portfolio } from '../data/portfolio';

export default function Nav() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="container-page flex items-center justify-between py-5">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display font-extrabold text-white tracking-tight text-lg">
            E-PORTFOLIO
          </span>
          <span className="text-xs text-white/60 tracking-widest uppercase">
            by Syahmi Faris
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `uppercase tracking-wider font-semibold transition-colors ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>
          {portfolio.map((sem) =>
            sem.externalUrl ? (
              <a
                key={sem.slug}
                href={sem.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="uppercase tracking-wider font-semibold text-white/60 hover:text-white transition-colors"
              >
                {sem.title}
              </a>
            ) : (
              <NavLink
                key={sem.slug}
                to={`/${sem.slug}`}
                className={({ isActive }) =>
                  `uppercase tracking-wider font-semibold transition-colors ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`
                }
              >
                {sem.title}
              </NavLink>
            ),
          )}
          <a
            href="#contact"
            className="uppercase tracking-wider font-semibold text-white/60 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
