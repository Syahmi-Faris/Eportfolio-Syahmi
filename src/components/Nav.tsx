import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-zinc-200">
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="font-semibold tracking-tight text-zinc-900">
          Syahmi <span className="text-zinc-400 font-normal">— Eportfolio</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-zinc-900 font-medium' : 'text-zinc-500 hover:text-zinc-900'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/semesters"
            className={({ isActive }) =>
              isActive ? 'text-zinc-900 font-medium' : 'text-zinc-500 hover:text-zinc-900'
            }
          >
            Semesters
          </NavLink>
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              isActive ? 'text-zinc-900 font-medium' : 'text-zinc-500 hover:text-zinc-900'
            }
          >
            Activities
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-zinc-900 font-medium' : 'text-zinc-500 hover:text-zinc-900'
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
