import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";
import { useShowCatalog } from "../hooks/useShowCatalog.js";

export default function MovieListingPage() {
  const { shows, query, setQuery, isLoading, errorMsg } = useShowCatalog();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Browse shows</h1>
      <p className="mt-1 text-gray-600">
        Search by title or scroll through the list.
      </p>

      <div className="mt-6">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {errorMsg && (
        <p className="mt-8 text-center text-sm text-red-600">{errorMsg}</p>
      )}

      {isLoading && (
        <p className="mt-12 text-center text-gray-500">Loading shows...</p>
      )}

      {!isLoading && !errorMsg && shows.length === 0 && (
        <p className="mt-12 text-center text-gray-500">
          No shows matched "{query}". Try a different title.
        </p>
      )}

      {!isLoading && shows.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shows.map((show) => (
            <MovieCard
              key={show.id}
              show={show}
              onOpenDetails={setSelectedShow}
            />
          ))}
        </div>
      )}

      {selectedShow && (
        <MovieModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </section>
  );
}
