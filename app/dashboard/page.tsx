"use client";

import {
  Package,
  Truck,
  CheckCircle,
  AlertTriangle,
  Search,
  Bell,
  User,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Packages",
      value: "12,450",
      icon: Package,
    },
    {
      title: "In Transit",
      value: "2,340",
      icon: Truck,
    },
    {
      title: "Delivered",
      value: "9,860",
      icon: CheckCircle,
    },
    {
      title: "Lost Packages",
      value: "250",
      icon: AlertTriangle,
    },
  ];

  const recentPackages = [
    {
      tracking: "NG-LAG-2026-00001",
      sender: "John Doe",
      receiver: "Michael James",
      status: "In Transit",
    },
    {
      tracking: "NG-ABJ-2026-00002",
      sender: "Grace Paul",
      receiver: "David Mark",
      status: "Delivered",
    },
    {
      tracking: "NG-PHC-2026-00003",
      sender: "Samuel Lee",
      receiver: "Peace John",
      status: "Pending",
    },
    {
      tracking: "NG-ABJ-2026-00007",
      sender: "David Joe",
      receiver: "Faruq Silver",
      status: "Delivered",
    },
    {
      tracking: "NG-JOS-2026-00007",
      sender: "samuel kola",
      receiver: "Tunde Adebimpe",
      status: "Lost",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Admin Logistics Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Manage packages and delivery tracking
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-700" />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="p-6">
        {/* SEARCH */}
        <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 mb-6">
          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search tracking number..."
            className="w-full outline-none"
          />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">
                      {item.title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                      {item.value}
                    </h2>
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon className="text-blue-600 w-7 h-7" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RECENT PACKAGES */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              Recent Packages
            </h2>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Register Package
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-4">Tracking Code</th>
                  <th className="pb-4">Sender</th>
                  <th className="pb-4">Receiver</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentPackages.map((pkg, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-none"
                  >
                    <td className="py-4 font-medium">
                      {pkg.tracking}
                    </td>

                    <td>{pkg.sender}</td>

                    <td>{pkg.receiver}</td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          pkg.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : pkg.status === "In Transit"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {pkg.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}