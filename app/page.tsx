import Link from "next/link";
import {
  Package,
  Truck,
  MapPin,
  ShieldCheck,
  Clock,
  ChevronRight,
  Star,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    desc: "Follow your package every step of the way — from pickup to doorstep delivery.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Same-day and next-day delivery options available across major Nigerian cities.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Insured",
    desc: "Every package is handled with care and covered against loss or damage.",
  },
  {
    icon: Truck,
    title: "Nationwide Coverage",
    desc: "Delivering across all 36 states and the FCT with a growing rider network.",
  },
];

const steps = [
  {
    step: "01",
    title: "Register your package",
    desc: "Enter sender and receiver details, package weight, and delivery fee.",
  },
  {
    step: "02",
    title: "A rider picks it up",
    desc: "Our nearest rider collects the package from the sender's location.",
  },
  {
    step: "03",
    title: "Track in real time",
    desc: "Both sender and receiver get a tracking code to monitor delivery status.",
  },
  {
    step: "04",
    title: "Delivered to the door",
    desc: "The package is handed over at the receiver's address and status marked delivered.",
  },
];

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Small Business Owner, Lagos",
    text: "Ty Logistics has transformed how I ship products to my customers. Fast, reliable, and great support.",
    rating: 5,
  },
  {
    name: "Emeka Nwosu",
    role: "E-commerce Seller, Abuja",
    text: "I send packages weekly across Nigeria. The tracking system is excellent — my customers always know where their order is.",
    rating: 5,
  },
  {
    name: "Fatima Aliyu",
    role: "Receiver, Kano",
    text: "Received my package in perfect condition. The real-time updates kept me informed the whole time.",
    rating: 4,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-2">
            <Package className="h-4 w-4" />
            Delivering across Nigeria
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Ship Anything, Anywhere<br className="hidden sm:block" /> in Nigeria
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Ty Logistics makes sending and receiving packages across all 36 states fast, affordable, and fully trackable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              href="/register-package"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Send a Package
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/track-package"
              className="inline-flex items-center justify-center gap-2 bg-blue-500/30 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-500/50 transition-colors"
            >
              Track a Package
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK TRACK BAR */}
      <section className="bg-gray-50 border-b border-gray-200 py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-widest">
            Quick Track
          </p>
          <form action="/track-package" method="get" className="flex flex-col sm:flex-row gap-3">
            <input
              name="code"
              type="text"
              placeholder="Enter your tracking code — e.g. NG-LAG-2026-00001"
              className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Track
            </button>
          </form>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Why Ty Logistics
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Built for Nigeria&apos;s delivery needs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20 px-6 border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              From your door to theirs — in 4 steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="text-center space-y-3">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/register-package"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ROLES CTA CARDS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              A platform for everyone
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sender */}
            <div className="border border-blue-100 bg-blue-50 rounded-2xl p-8 space-y-4">
              <Package className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Senders</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Register packages, get a tracking code instantly, and monitor your delivery from start to finish.
              </p>
              <Link
                href="/sender"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Sender dashboard <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Receiver */}
            <div className="border border-emerald-100 bg-emerald-50 rounded-2xl p-8 space-y-4">
              <MapPin className="h-8 w-8 text-emerald-600" />
              <h3 className="text-xl font-bold text-gray-900">Receivers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                View all packages coming your way and track them in real time right up to delivery.
              </p>
              <Link
                href="/receiver"
                className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-800"
              >
                Receiver dashboard <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Rider */}
            <div className="border border-amber-100 bg-amber-50 rounded-2xl p-8 space-y-4">
              <Truck className="h-8 w-8 text-amber-600" />
              <h3 className="text-xl font-bold text-gray-900">Riders</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                View assigned deliveries, update package statuses on the go, and earn per delivery.
              </p>
              <Link
                href="/rider"
                className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-800"
              >
                Rider dashboard <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What our users say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating }) => (
              <div
                key={name}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-xs text-gray-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to send your first package?
          </h2>
          <p className="text-blue-100 text-lg">
            Join thousands of Nigerians who trust Ty Logistics every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Create an Account
            </Link>
            <Link
              href="/register-package"
              className="bg-blue-500/30 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-500/50 transition-colors"
            >
              Send a Package
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
