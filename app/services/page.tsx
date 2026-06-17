import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Film,
  Mic,
  MonitorPlay,
  PenTool,
  PlayCircle,
  Sparkles,
  Video,
  Wand2,
  Globe,
  Users,
  CheckCircle,
  Award,
  Clock,
  Target,
  Lightbulb,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Professional documentary production, filmmaking, video editing, motion graphics, storytelling, scriptwriting, and creative production services from Soulfire Chronicles Production.",
};

const services = [
  {
    icon: <Film className="w-10 h-10 text-amber-400" />,
    title: "Documentary Production",
    description:
      "Research-driven documentary filmmaking that combines authentic storytelling with cinematic visuals and emotional impact.",
  },
  {
    icon: <Camera className="w-10 h-10 text-amber-400" />,
    title: "Film Production",
    description:
      "Complete production services from concept development to filming, editing, and final delivery.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-amber-400" />,
    title: "Script Writing",
    description:
      "Professional script development, documentary narratives, storytelling structures, and creative content writing.",
  },
  {
    icon: <MonitorPlay className="w-10 h-10 text-amber-400" />,
    title: "Video Editing",
    description:
      "Transforming raw footage into compelling stories through professional editing workflows.",
  },
  {
    icon: <Wand2 className="w-10 h-10 text-amber-400" />,
    title: "Motion Graphics",
    description:
      "Dynamic visual graphics, title sequences, animations, and branded visual experiences.",
  },
  {
    icon: <Mic className="w-10 h-10 text-amber-400" />,
    title: "Voice Over Production",
    description:
      "Professional voiceovers, narration recording, audio production, and documentary narration services.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "Understanding your goals, audience, story, and creative vision.",
  },
  {
    step: "02",
    title: "Concept Development",
    description:
      "Building a strong creative foundation through research and planning.",
  },
  {
    step: "03",
    title: "Production",
    description:
      "Capturing high-quality visuals, interviews, and cinematic storytelling elements.",
  },
  {
    step: "04",
    title: "Post Production",
    description:
      "Editing, sound design, color grading, and final content delivery.",
  },
];

const benefits = [
  "Cinematic Storytelling",
  "Creative Direction",
  "Professional Production Workflow",
  "Documentary Expertise",
  "High Quality Visual Content",
  "Scalable Production Solutions",
  "Global Audience Focus",
  "Modern Production Technology",
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-amber-500/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="uppercase tracking-widest text-sm">
                Soulfire Chronicles Services
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Bringing Stories
              <span className="block text-amber-400">
                To Life Through Film
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              From documentary filmmaking and creative storytelling to
              post-production and motion graphics, Soulfire Chronicles
              Production provides end-to-end services designed to create
              meaningful, cinematic experiences.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 uppercase tracking-wider">
                What We Do
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-8">
                Full-Service Creative Production
              </h2>

              <p className="text-gray-300 text-lg leading-8 mb-6">
                Our team combines creativity, strategy, storytelling,
                and technical expertise to produce documentaries,
                films, branded content, and visual experiences that
                inspire audiences.
              </p>

              <p className="text-gray-300 text-lg leading-8">
                Whether you're developing an original documentary,
                launching a storytelling campaign, or creating a
                cinematic brand experience, we help bring your vision
                to life from concept to completion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <Film className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Documentary Focus
                </h3>
                <p className="text-gray-400">
                  Powerful stories grounded in authenticity.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <Video className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Visual Excellence
                </h3>
                <p className="text-gray-400">
                  Cinematic production with attention to detail.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <Users className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Audience Impact
                </h3>
                <p className="text-gray-400">
                  Stories designed to inspire and connect.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <Globe className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Global Vision
                </h3>
                <p className="text-gray-400">
                  Content created for worldwide audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-amber-400/40 transition"
              >
                {service.icon}

                <h3 className="text-2xl font-bold mt-6 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 uppercase tracking-wider">
              Workflow
            </span>

            <h2 className="text-5xl font-bold mt-4">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="text-6xl font-bold text-amber-400/20 mb-4">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 uppercase tracking-wider">
                Why Choose Us
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-8">
                Built Around Powerful Storytelling
              </h2>

              <p className="text-gray-300 text-lg leading-8">
                Every project we create is driven by purpose,
                creativity, and a commitment to delivering meaningful
                experiences through film and visual storytelling.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5"
                >
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <Award className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="text-gray-400 mt-3">
                Production Projects
              </p>
            </div>

            <div>
              <Target className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">100%</h3>
              <p className="text-gray-400 mt-3">
                Creative Focus
              </p>
            </div>

            <div>
              <Clock className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">24/7</h3>
              <p className="text-gray-400 mt-3">
                Project Commitment
              </p>
            </div>

            <div>
              <Layers className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">∞</h3>
              <p className="text-gray-400 mt-3">
                Creative Possibilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <Clapperboard className="w-14 h-14 text-amber-400 mx-auto mb-6" />

            <h2 className="text-5xl font-bold mb-6">
              Ready To Start Your Next Project?
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              Let Soulfire Chronicles Production help transform your
              vision into a cinematic story that inspires, informs,
              and creates lasting impact.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}