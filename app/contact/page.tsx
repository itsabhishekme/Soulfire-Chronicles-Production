import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  User,
  Camera,
  Film,
  Clapperboard,
  Globe,
  MessageSquare,
  CheckCircle,
  Star,
  Heart,
  Award,
  Users,
  Briefcase,
  Calendar,
  ShieldCheck,
  Zap,
  Quote,
  Flame,
  Headphones,
  Video,
  Wand2,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Soulfire Chronicles Production",
  description:
    "Contact Soulfire Chronicles Production for documentary filmmaking, film production, storytelling projects, collaborations, and creative services.",
};

const services = [
  {
    title: "Documentary Production",
    icon: Film,
    description:
      "Research-driven documentaries crafted with cinematic storytelling.",
  },
  {
    title: "Film Production",
    icon: Camera,
    description:
      "End-to-end production services from concept to completion.",
  },
  {
    title: "Creative Development",
    icon: Wand2,
    description:
      "Story development, scripting, creative direction, and planning.",
  },
  {
    title: "Post Production",
    icon: Video,
    description:
      "Editing, sound design, color grading, and finishing.",
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Professional Production",
  },
  {
    icon: Award,
    title: "Original Storytelling",
  },
  {
    icon: Globe,
    title: "Global Audience Vision",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Collaboration",
  },
];

const process = [
  {
    icon: MessageSquare,
    title: "Initial Discussion",
    description:
      "Tell us about your idea, project goals, and creative vision.",
  },
  {
    icon: Target,
    title: "Project Planning",
    description:
      "We develop a roadmap and strategy tailored to your project.",
  },
  {
    icon: Clapperboard,
    title: "Production",
    description:
      "Our team brings the story to life through cinematic execution.",
  },
  {
    icon: Star,
    title: "Final Delivery",
    description:
      "A polished production delivered with quality and impact.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute left-10 top-40 hidden lg:block">
        <Film className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute right-16 top-56 hidden lg:block">
        <Camera className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute bottom-40 left-20 hidden lg:block">
        <Clapperboard className="h-24 w-24 text-amber-400/10" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-amber-400" />

              <span className="uppercase tracking-[0.25em] text-sm text-amber-300">
                Contact Soulfire Chronicles Production
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              Let's Create
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Something Extraordinary
              </span>
            </h1>

            <p className="mt-10 max-w-4xl text-xl leading-9 text-gray-300">
              Whether you're planning a documentary, film project,
              cinematic story, branded content, or creative
              collaboration, we'd love to hear your vision and help
              bring it to life.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <item.icon className="h-4 w-4 text-amber-400" />
                  <span className="text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
              >
                <service.icon className="h-10 w-10 text-amber-400 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-xl">
                <h2 className="text-4xl font-black mb-4">
                  Send Us A Message
                </h2>

                <p className="text-gray-400 mb-10">
                  Tell us about your project, idea, or collaboration
                  opportunity. Our team will get back to you shortly.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-3 text-sm font-medium">
                        Full Name
                      </label>

                      <div className="relative">
                        <User className="absolute left-4 top-4 h-5 w-5 text-gray-500" />

                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-3 text-sm font-medium">
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-500" />

                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-3 text-sm font-medium">
                        Phone Number
                      </label>

                      <div className="relative">
                        <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-500" />

                        <input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-3 text-sm font-medium">
                        Company / Organization
                      </label>

                      <div className="relative">
                        <Briefcase className="absolute left-4 top-4 h-5 w-5 text-gray-500" />

                        <input
                          type="text"
                          placeholder="Company Name"
                          className="w-full rounded-xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-3 text-sm font-medium">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Documentary Project Inquiry"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-required" className="block mb-3 text-sm font-medium">
                      Service Required
                    </label>

                    <select
                      id="service-required"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 focus:border-amber-400 focus:outline-none"
                    >
                      <option>Documentary Production</option>
                      <option>Film Production</option>
                      <option>Video Production</option>
                      <option>Creative Development</option>
                      <option>Post Production</option>
                      <option>Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-3 text-sm font-medium">
                      Project Timeline
                    </label>

                    <div className="relative">
                      <Calendar className="absolute left-4 top-4 h-5 w-5 text-gray-500" />

                      <input
                        type="text"
                        placeholder="Expected timeline"
                        className="w-full rounded-xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-3 text-sm font-medium">
                      Project Details
                    </label>

                    <textarea
                      rows={8}
                      placeholder="Tell us about your vision, goals, requirements, and creative ideas..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-4 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
                  >
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <Building2 className="h-10 w-10 text-amber-400 mb-5" />

                <h3 className="text-2xl font-bold mb-4">
                  Soulfire Chronicles Production
                </h3>

                <p className="leading-7 text-gray-400">
                  Creating cinematic documentaries, inspirational
                  films, and meaningful visual stories that illuminate
                  minds and awaken souls.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <Mail className="h-8 w-8 text-amber-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Email Address
                </h4>

                <p className="text-gray-400">
                  hello@soulfirechronicles.com
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <Phone className="h-8 w-8 text-amber-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Phone Number
                </h4>

                <p className="text-gray-400">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <MapPin className="h-8 w-8 text-amber-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Location
                </h4>

                <p className="text-gray-400">
                  India
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <Clock3 className="h-8 w-8 text-amber-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Business Hours
                </h4>

                <div className="space-y-2 text-gray-400">
                  <p>Monday - Friday</p>
                  <p>09:00 AM - 06:00 PM</p>
                  <p>Saturday</p>
                  <p>10:00 AM - 02:00 PM</p>
                  <p>Sunday - Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.25em] text-sm text-amber-400">
              How We Work
            </span>

            <h2 className="mt-4 text-5xl font-black">
              From Vision To Reality
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
              >
                <step.icon className="h-12 w-12 text-amber-400 mx-auto mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[32px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <Flame className="h-16 w-16 text-amber-400 mx-auto mb-6" />

            <h2 className="text-6xl font-black mb-6">
              Ready To Start Your Project?
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-300 mb-10">
              From concept development to final delivery, Soulfire
              Chronicles Production is committed to bringing powerful
              stories to life through cinematic excellence and
              meaningful storytelling.
            </p>

            <Link
              href="/documentaries"
              className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
            >
              Begin Your Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
