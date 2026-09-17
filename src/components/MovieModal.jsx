import { useEffect } from "react";

function stripHtml(html) {
  if (!html) return "No summary available.";
  return html.replace(/<[^>]+>/g, "");
}

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!show) return null;

  const poster = show.image?.original || show.image?.medium;
  const genres = show.genres?.length ? show.genres.join(", ") : "Not listed";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-xl"
      >
        <div className="relative flex flex-col sm:flex-row">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-gray-700 shadow transition hover:bg-white"
          >
            ✕
          </button>

          <div className="w-full shrink-0 bg-gray-100 sm:w-2/5">
            {poster ? (
              <img
                src={poster}
                alt={show.name}
                className="h-56 w-full object-cover sm:h-full sm:min-h-[280px]"
              />
            ) : (
              <div className="flex h-56 w-full items-center justify-center text-gray-400 sm:min-h-[280px]">
                No image available
              </div>
            )}
          </div>

          <div className="flex w-full flex-col p-5 sm:w-3/5">
            <h2 className="pr-8 text-xl font-bold text-gray-900">{show.name}</h2>
            <p className="mt-2 text-sm text-gray-500">
              ⭐ Rating: {show.rating?.average ?? "N/A"} <br /> 📅 Released:{" "}
              {show.premiered ?? "Unknown"} <br />🎭 Genre: {genres}
            </p>

            <div className="mt-5 flex-1">
              <h3 className="text-sm font-semibold text-gray-900">Overview</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {stripHtml(show.summary)}
              </p>
            </div>

            {show.network?.name && (
              <p className="mt-4 text-sm text-gray-500">
                Network: {show.network.name}
              </p>
            )}

            <button
              onClick={onClose}
              className="mt-6 self-start rounded-lg border border-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
