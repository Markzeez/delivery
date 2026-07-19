import { redirect } from "next/navigation";

type TrackPageProps = {
  searchParams: Promise<{ code?: string }>;
};

export default async function TrackPage({ searchParams }: TrackPageProps) {
  const resolved = await searchParams;
  const code = resolved.code?.trim();

  if (code) {
    redirect(`/track/${encodeURIComponent(code)}`);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Track a delivery</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">Enter your tracking code</h1>
            </div>
            <p className="max-w-2xl text-slate-600">
              Use the package tracking code issued when the delivery was created.
            </p>
            <form method="get" className="mt-6 flex flex-col gap-4 sm:flex-row" action="/track-package">
              <label className="sr-only" htmlFor="code">Tracking code</label>
              <input id="code" name="code" type="text" placeholder="e.g. NG-LAG-2026-00001"
                className="min-w-0 flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              <button type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Track
              </button>
            </form>
          </div>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">
            Enter a tracking code above and press <strong>Track</strong> to view status, live map, and delivery updates.
          </p>
        </section>
      </div>
    </main>
  );
}
