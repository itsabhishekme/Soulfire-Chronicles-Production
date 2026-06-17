import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Lock,
  Mail,
  Shield,
  Sparkles,
  UserCheck,
  Eye,
  Database,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Soulfire Chronicles Production and learn how we collect, use, store, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="uppercase tracking-widest text-sm">
                Privacy Policy
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Your Privacy
              <span className="block text-amber-400">
                Matters To Us
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Soulfire Chronicles Production respects your privacy and
              is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, store,
              and safeguard your information when you visit our website
              or interact with our services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                Last Updated: June 2026
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                GDPR Friendly
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                Secure & Transparent
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-10 h-10 text-amber-400" />

              <h2 className="text-4xl font-bold">
                Introduction
              </h2>
            </div>

            <p className="text-gray-300 leading-8 text-lg">
              Soulfire Chronicles Production is committed to maintaining
              the trust and confidence of visitors, clients,
              collaborators, and partners. We recognize the importance
              of protecting personal information and ensuring
              transparency regarding how data is handled.
            </p>
          </div>
        </div>
      </section>

      {/* INFORMATION WE COLLECT */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-4 mb-8">
              <Database className="w-10 h-10 text-amber-400" />

              <h2 className="text-4xl font-bold">
                Information We Collect
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-8">
              <p>
                We may collect the following information when you use
                our website:
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 mt-1" />
                  Full name and contact details.
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 mt-1" />
                  Email addresses submitted through forms.
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 mt-1" />
                  Project inquiries and communication records.
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 mt-1" />
                  Technical information such as browser type and device
                  data.
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 mt-1" />
                  Website usage and analytics information.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE USE DATA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-4 mb-8">
              <UserCheck className="w-10 h-10 text-amber-400" />

              <h2 className="text-4xl font-bold">
                How We Use Your Information
              </h2>
            </div>

            <div className="space-y-5 text-gray-300 leading-8">
              <p>Information collected may be used to:</p>

              <ul className="space-y-4">
                <li>• Respond to inquiries and communication requests.</li>
                <li>• Provide production and creative services.</li>
                <li>• Improve website performance and user experience.</li>
                <li>• Send project-related communications.</li>
                <li>• Maintain security and prevent misuse.</li>
                <li>• Comply with applicable legal requirements.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COOKIES */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-4 mb-8">
              <Globe className="w-10 h-10 text-amber-400" />

              <h2 className="text-4xl font-bold">
                Cookies & Analytics
              </h2>
            </div>

            <p className="text-gray-300 leading-8 text-lg">
              Our website may use cookies and analytics tools to
              understand visitor behavior, improve performance, and
              enhance user experience. Cookies do not provide us with
              direct access to your personal information unless you
              voluntarily provide it.
            </p>
          </div>
        </div>
      </section>

      {/* DATA SECURITY */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-4 mb-8">
              <Lock className="w-10 h-10 text-amber-400" />

              <h2 className="text-4xl font-bold">
                Data Security
              </h2>
            </div>

            <p className="text-gray-300 leading-8 text-lg">
              We implement reasonable technical and organizational
              safeguards to protect personal information from
              unauthorized access, misuse, alteration, disclosure, or
              destruction.
            </p>
          </div>
        </div>
      </section>

      {/* USER RIGHTS */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-4 mb-8">
              <Eye className="w-10 h-10 text-amber-400" />

              <h2 className="text-4xl font-bold">
                Your Rights
              </h2>
            </div>

            <div className="space-y-5 text-gray-300 leading-8">
              <p>You may have the right to:</p>

              <ul className="space-y-3">
                <li>• Access your personal information.</li>
                <li>• Request correction of inaccurate data.</li>
                <li>• Request deletion of personal information.</li>
                <li>• Withdraw consent where applicable.</li>
                <li>• Request information about stored data.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THIRD PARTY SERVICES */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-4 mb-8">
              <FileText className="w-10 h-10 text-amber-400" />

              <h2 className="text-4xl font-bold">
                Third-Party Services
              </h2>
            </div>

            <p className="text-gray-300 leading-8 text-lg">
              Our website may use third-party services for hosting,
              analytics, communication, or performance monitoring.
              These providers maintain their own privacy policies and
              data protection practices.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex items-center gap-4 mb-8">
              <Mail className="w-10 h-10 text-amber-400" />

              <h2 className="text-4xl font-bold">
                Contact Us
              </h2>
            </div>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              If you have questions regarding this Privacy Policy,
              personal information, or data protection practices,
              please contact us.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>Email: hello@soulfirechronicles.com</p>
              <p>Company: Soulfire Chronicles Production</p>
              <p>Location: India</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <Shield className="w-14 h-14 text-amber-400 mx-auto mb-6" />

            <h2 className="text-5xl font-bold mb-6">
              Transparency & Trust
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              Soulfire Chronicles Production values your trust and is
              committed to maintaining responsible data practices while
              creating meaningful experiences through storytelling and
              filmmaking.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}