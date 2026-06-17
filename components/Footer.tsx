import Link from "next/link";
import {
  Film,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Clapperboard,
  Camera,
  Sparkles,
  Clock3,
  Shield,
  FileText,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Productions", href: "/productions" },
  { name: "Documentaries", href: "/documentaries" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Documentary Production",
  "Film Production",
  "Video Editing",
  "Motion Graphics",
  "Script Writing",
  "Creative Direction",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#f59e0b15,transparent_60%)]" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative">
        {/* Top Section */}
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/20">
                  <Film className="h-7 w-7" />
                </div>

                <div>
                  <h2 className="text-xl font-bold tracking-wide">
                    SOULFIRE
                  </h2>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400">
                    Chronicles Production
                  </p>
                </div>
              </div>

              <p className="mb-8 text-gray-400 leading-8">
                Soulfire Chronicles Production creates documentaries,
                cinematic films, and meaningful visual experiences that
                inspire audiences and illuminate stories worth telling.
              </p>

              <div className="flex gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Camera className="h-5 w-5 text-amber-400" />
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Clapperboard className="h-5 w-5 text-amber-400" />
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Navigation
              </h3>

              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-gray-400 transition-all hover:text-amber-400"
                    >
                      {item.name}

                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Services
              </h3>

              <ul className="space-y-4">
                {services.map((service) => (
                  <li
                    key={service}
                    className="text-gray-400"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 text-amber-400" />

                  <div>
                    <p className="mb-1 text-sm text-gray-500">
                      Email
                    </p>

                    <p className="text-gray-300">
                      hello@soulfirechronicles.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 text-amber-400" />

                  <div>
                    <p className="mb-1 text-sm text-gray-500">
                      Phone
                    </p>

                    <p className="text-gray-300">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-amber-400" />

                  <div>
                    <p className="mb-1 text-sm text-gray-500">
                      Location
                    </p>

                    <p className="text-gray-300">
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3 className="mt-1 h-5 w-5 text-amber-400" />

                  <div>
                    <p className="mb-1 text-sm text-gray-500">
                      Business Hours
                    </p>

                    <p className="text-gray-300">
                      Mon - Fri: 9 AM - 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm">
            <Sparkles className="mx-auto mb-6 h-10 w-10 text-amber-400" />

            <blockquote className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-gray-200">
              “Every story carries the power to inspire, transform,
              and connect people across cultures, generations, and
              experiences.”
            </blockquote>

            <p className="mt-5 text-amber-400">
              Soulfire Chronicles Production
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  © {currentYear} Soulfire Chronicles Production.
                  All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-amber-400"
                >
                  <Shield className="h-4 w-4" />
                  Privacy Policy
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-amber-400"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>

                <Link
                  href="/documentaries"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-amber-400"
                >
                  <Film className="h-4 w-4" />
                  Documentaries
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-amber-400"
                >
                  <FileText className="h-4 w-4" />
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}