function releaseYear(premiered) {
  return premiered ? premiered.slice(0, 4) : "TBA";
}

export default function MovieCard({ show, onOpenDetails }) {
  const poster = show.image?.medium;
  const rating = show.rating?.average;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[2/3] w-full bg-gray-100">
        {poster ? (
          <img
            src={poster}
            alt={show.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
            No poster
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold leading-snug text-gray-900">
          {show.name}
        </h3>
        <p className="mt-1.5 text-sm text-gray-500">
          {rating ? `⭐ ${rating}` : "⭐ N/A"} · 📅 {releaseYear(show.premiered)}
        </p>

        <button
          onClick={() => onOpenDetails(show)}
          className="mt-auto pt-3 text-left text-sm font-medium text-brand-blue transition hover:text-brand-dark"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
