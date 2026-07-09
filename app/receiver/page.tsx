import Link from "next/link";
import { Package, ChevronRight } from "lucide-react";

const statusStyles: Record<string, string> = {
  PENDING: "bg-gray-100 text-gray-700",
  PICKED_UP: "bg-blue-100 text-blue-700",
  IN_TRANSIT: "bg-yellow-100 text-yellow-700",
  DELIVERED: "bg-emerald-100 text-emerald-700",
  CANCELLED: "bg-red-100 text-red-700",
};

function formatStatus(status: string) {
  return status
    .split("_")
    .map((w) => w[0] + w.slice(1).toLowerCase())
    .join(" ");
}

// Placeholder data — replace with real DB fetch once auth is wired
const mockPackages = [
  {
    id: "1",
    trackingCode: "NG-ABJ-2026-00004",
    senderName: "John Doe",
    senderState: "Lagos",
    status: "IN_TRANSIT",
    createdAt: new Date("2026-01-09"),
    description: "Books and documents",
  },
  {
    id: "2",
    trackingCode: "NG-PHC-2026-00005",
    senderName: "Amaka Chukwu",
    senderState: "Enugu",
    status: "DELIVERED",
    createdAt: new Date("2026-01-07"),
    description: "Clothing items",
  },
];

export default function ReceiverPage() {
  const awaiting = mockPackages.filter((p) => p.status !== "DELIVERED").length;
  const delivered = mockPackages.filter((p) => p.status === "DELIVERED").length;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6 text-gray-900">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Receiver Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">All packages addressed to you</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Awaiting Delivery</p>
            <p className="text-3xl font-bold text-yellow-600 mt-1">{awaiting}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Received</p>
            <p className="text-3xl font-bold text-emerald-600 mt-1">{delivered}</p>
          </div>
        </div>

        {/* Packages Table */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Incoming Packages</h2>
          </div>
          {mockPackages.length === 0 ? (
            <div className="p-10 text-center space-y-4">
              <Package className="h-12 w-12 text-gray-300 mx-auto" />
              <p className="text-gray-500">No packages addressed to you yet.</p>
              <Link
                href="/track-package"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Track a package manually <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3">Tracking Code</th>
                    <th className="px-6 py-3">Sender</th>
                    <th className="px-6 py-3">Origin</th>
                    <th className="px-6 py-3">Contents</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {mockPackages.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{pkg.trackingCode}</td>
                      <td className="px-6 py-4 text-gray-600">{pkg.senderName}</td>
                      <td className="px-6 py-4 text-gray-600">{pkg.senderState}</td>
                      <td className="px-6 py-4 text-gray-600">{pkg.description}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[pkg.status]}`}>
                          {formatStatus(pkg.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {pkg.createdAt.toLocaleDateString("en-NG")}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/track-package?code=${pkg.trackingCode}`}
                          className="text-blue-600 hover:text-blue-800 font-medium text-xs"
                        >
                          Track
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
