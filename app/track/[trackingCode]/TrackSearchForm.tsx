"use client";

export default function TrackSearchForm({ defaultCode }: { defaultCode: string }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const newCode = (fd.get("code") as string)?.trim();
        if (newCode) window.location.href = `/track/${encodeURIComponent(newCode)}`;
      }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        name="code"
        type="text"
        defaultValue={defaultCode}
        placeholder="Enter another tracking code"
        className="min-w-0 flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
      >
        Track
      </button>
    </form>
  );
}
