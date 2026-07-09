import Link from "next/link";
import TrackDelivery from "./TrackDelivery";

type TrackingPageProps = {
  params: { trackingCode: string };
};

export function generateMetadata({ params }: TrackingPageProps) {
  return {
    title: `Tracking ${params.trackingCode} — Ty Logistics`,
    description: `Track your package ${params.trackingCode} in real time across Nigeria.`,
  };
}

export default function TrackingPage({ params }: TrackingPageProps) {
  const code = decodeURIComponent(params.trackingCode).trim();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-4xl space-y-8">

        {/* Back + search bar */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <Link
                href="/track-package"
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                ← Track another package
              </Link>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">
                Package tracking
              </h1>
            </div>
            {/* Re-search form */}
            <form
              action=""
              method="get"
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
                defaultValue={code}
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
          </div>
        </section>

        {/* Main tracking content */}
        <TrackDelivery trackingCode={code} />

      </div>
    </main>
  );
}
