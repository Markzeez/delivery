import Link from "next/link";
import { Package, Mail, Phone, MapPin } from "lucide-react";

const SERVICES = [
  { href: "/register-package", label: "Send a Package" },
  { href: "/track-package", label: "Track a Package" },
  { href: "/map", label: "Live Map" },
  { href: "/payment", label: "Payment" },
];

const COMPANY = [
  { href: "/contact", label: "Contact Us" },
  { href: "/sender", label: "Sender Dashboard" },
  { href: "/receiver", label: "Receiver Dashboard" },
  { href: "/rider", label: "Rider Dashboard" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookie", label: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-extrabold text-xl text-white"
            >
              <Package className="h-6 w-6 text-blue-400" />
              Ty Logistics
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Nigeria&apos;s trusted delivery network. Connecting senders and receivers across all 36 states and the FCT.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                support@tylogistics.ng
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                +234 800 000 0000
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ty Logistics. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built for Nigeria&apos;s delivery ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
