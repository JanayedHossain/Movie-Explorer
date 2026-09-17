export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mx-auto max-w-xl">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a show..."
        className="w-full rounded-lg border border-gray-200 bg-white py-3 px-4 text-gray-900 placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
      />
    </div>
  );
}
