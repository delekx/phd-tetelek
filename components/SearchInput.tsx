type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="sticky top-0 z-10 bg-slate-50/95 py-4 backdrop-blur">
      <label htmlFor="search" className="mb-2 block text-sm font-medium text-slate-700">
        Keresés a tételek között
      </label>

      <input
        id="search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Pl. incidencia, sportpedagógia, mortalitás..."
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
      />
    </div>
  );
}