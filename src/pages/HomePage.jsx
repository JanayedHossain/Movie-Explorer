import HeroBanner from "../components/HeroBanner.jsx";

const perks = [
  {
    title: "Quick search",
    body: "Type a title and see matching shows right away.",
  },
  {
    title: "Real ratings",
    body: "Audience scores from TVMaze so you can tell what is worth your time.",
  },
  {
    title: "Clear details",
    body: "Open any show to read the summary, genres, and premiere date.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-4">
        <div className="grid gap-6 sm:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {perk.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {perk.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
