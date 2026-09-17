import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const onMoviesPage = location.pathname === "/movies";

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Movie Explorer"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hidden text-sm text-gray-600 transition hover:text-gray-900 sm:inline"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              onMoviesPage
                ? "bg-brand-blue text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Movies
          </Link>
        </div>
      </nav>
    </header>
  );
}
