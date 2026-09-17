export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-medium text-gray-900">Movie Explorer</p>
          <p className="mt-0.5 text-sm text-gray-500">
            © {year} · Data from TVMaze
          </p>
        </div>

        <div className="flex gap-5 text-sm text-gray-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href="https://www.tvmaze.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gray-900"
          >
            TVMaze
          </a>
        </div>
      </div>
    </footer>
  );
}
