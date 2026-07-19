import Link from "next/link";
import TrackDelivery from "./TrackDelivery";
import TrackSearchForm from "./TrackSearchForm";

type TrackingPageProps = {
  params: Promise<{ trackingCode: string }>;
};

export async function generateMetadata({ params }: TrackingPageProps) {
  const { trackingCode } = await params;
  return {
    title: `Tracking ${trackingCode} — Ty Logistics`,
    description: `Track your package ${trackingCode} in real time across Nigeria.`,
  };
}

export default async function TrackingPage({ params }: TrackingPageProps) {
  const { trackingCode } = await params;
  const code = decodeURIComponent(trackingCode).trim();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <Link href="/track-package" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                ← Track another package
              </Link>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">Package tracking</h1>
            </div>
            <TrackSearchForm defaultCode={code} />
          </div>
        </section>
        <TrackDelivery trackingCode={code} />
      </div>
    </main>
  );
}
