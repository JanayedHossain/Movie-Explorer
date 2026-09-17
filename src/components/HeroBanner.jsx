import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
          Discover Movies
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
          Explore and discover your favorite movies from around the world.
        </p>
        <button
          onClick={() => navigate("/movies")}
          className="mt-8 rounded-lg bg-brand-blue px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-dark"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
}
