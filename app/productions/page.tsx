import Link from "next/link";
import {
  ArrowRight,
  Award,
  Camera,
  Clapperboard,
  Film,
  Globe,
  PlayCircle,
  Sparkles,
  Star,
  Video,
  Clock,
  Users,
  Trophy,
  Target,
  CheckCircle,
  Flame,
  Heart,
  Eye,
  Quote,
  Wand2,
  BadgeCheck,
  ChevronRight,
  MonitorPlay,
  BookOpen,
  Layers,
  Lightbulb,
  Mic,
  Aperture,
  ScanLine,
} from "lucide-react";

export const metadata = {
  title: "Productions | Soulfire Chronicles Production",
  description:
    "Explore the productions, documentaries, cinematic storytelling projects, and creative works of Soulfire Chronicles Production.",
};

const featuredProduction = {
  title: "Before Her Name Existed",
  status: "Flagship Documentary",
  duration: "90 Minutes",
  genre: "Inspirational Documentary",
  description:
    "A cinematic exploration of destiny, intuition, synchronicities, and the mysterious ways people often encounter the most important relationships of their lives long before they know a person's name.",
};

const productions = [
  {
    title: "Before Her Name Existed",
    category: "Documentary",
    stage: "In Production",
    duration: "90 Min",
  },
  {
    title: "The Soulfire Chronicles",
    category: "Feature Documentary",
    stage: "Development",
    duration: "75 Min",
  },
  {
    title: "Signs Before Destiny",
    category: "Documentary Series",
    stage: "Research",
    duration: "60 Min",
  },
  {
    title: "Journey Of The Soul",
    category: "Inspirational Film",
    stage: "Concept",
    duration: "95 Min",
  },
  {
    title: "The Language Of Intuition",
    category: "Documentary",
    stage: "Concept",
    duration: "70 Min",
  },
  {
    title: "Beyond Coincidence",
    category: "Investigative Documentary",
    stage: "Future Project",
    duration: "80 Min",
  },
];

const services = [
  {
    title: "Documentary Production",
    description:
      "Research-driven documentaries that combine cinematic visuals with meaningful storytelling.",
    icon: Film,
  },
  {
    title: "Film Production",
    description:
      "End-to-end production services from concept development to final release.",
    icon: Camera,
  },
  {
    title: "Creative Development",
    description:
      "Story ideation, script development, creative direction, and project planning.",
    icon: Lightbulb,
  },
  {
    title: "Post Production",
    description:
      "Editing, color grading, motion graphics, sound design, and finishing.",
    icon: Aperture,
  },
];

const workflow = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding the vision, purpose, audience, and goals of the project.",
    icon: Eye,
  },
  {
    step: "02",
    title: "Development",
    description:
      "Research, scripting, storyboarding, planning, and creative preparation.",
    icon: BookOpen,
  },
  {
    step: "03",
    title: "Production",
    description:
      "Capturing cinematic footage, interviews, visuals, and storytelling elements.",
    icon: Camera,
  },
  {
    step: "04",
    title: "Post Production",
    description:
      "Transforming raw footage into a compelling and polished story.",
    icon: MonitorPlay,
  },
];

const highlights = [
  {
    icon: Heart,
    title: "Human Stories",
    description:
      "Authentic stories that connect audiences emotionally.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description:
      "Productions designed to resonate across cultures.",
  },
  {
    icon: Wand2,
    title: "Creative Excellence",
    description:
      "Blending artistry, storytelling, and cinematic quality.",
  },
];

const stats = [
  {
    icon: Trophy,
    value: "10+",
    label: "Production Concepts",
  },
  {
    icon: Users,
    value: "Global",
    label: "Audience Vision",
  },
  {
    icon: Target,
    value: "100%",
    label: "Creative Focus",
  },
  {
    icon: CheckCircle,
    value: "∞",
    label: "Stories To Tell",
  },
];

export default function ProductionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px),linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute left-10 top-40 hidden lg:block">
        <Film className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute right-20 top-60 hidden lg:block">
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
                Soulfire Chronicles Productions
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              Creating
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Cinematic Experiences
              </span>
            </h1>

            <p className="mt-10 max-w-4xl text-xl leading-9 text-gray-300">
              Soulfire Chronicles Production develops documentaries,
              films, visual narratives, and creative projects that
              inspire audiences through powerful storytelling,
              cinematic excellence, and meaningful human experiences.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
              >
                Start A Production
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm hover:border-amber-400"
              >
                <PlayCircle className="h-5 w-5" />
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Production */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-[32px] border border-amber-500/20 bg-white/[0.03] backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative flex min-h-[600px] items-center justify-center bg-gradient-to-br from-amber-500/20 via-black to-black">
                <PlayCircle className="h-32 w-32 text-amber-400" />

                <div className="absolute bottom-8 left-8 rounded-xl border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
                  <span className="text-sm text-gray-300">
                    Flagship Production
                  </span>
                </div>
              </div>

              <div className="p-10 md:p-14">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
                  <Star className="h-4 w-4" />
                  {featuredProduction.status}
                </span>

                <h2 className="mt-6 text-5xl font-black">
                  {featuredProduction.title}
                </h2>

                <div className="mt-4 flex items-center gap-2 text-amber-300">
                  <Quote className="h-4 w-4" />
                  <span className="italic">
                    “I loved the story before I knew the character.”
                  </span>
                </div>

                <p className="mt-8 text-lg leading-8 text-gray-300">
                  {featuredProduction.description}
                </p>

                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Film className="h-5 w-5 text-amber-400" />
                    <span>{featuredProduction.genre}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-400" />
                    <span>{featuredProduction.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-amber-400" />
                    <span>Original Production</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-amber-400" />
                    <span>Global Audience</span>
                  </div>
                </div>

                <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400">
                  Explore Project
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
              >
                <item.icon className="h-12 w-12 text-amber-400 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-24 bg-white/[0.02]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-amber-400 text-sm">
              Production Portfolio
            </span>

            <h2 className="mt-4 text-6xl font-black">
              Current & Future Projects
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {productions.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-72 flex items-center justify-center bg-gradient-to-br from-amber-500/15 via-black to-black">
                  <Film className="h-20 w-20 text-amber-400/40" />
                </div>

                <div className="p-8">
                  <span className="text-xs uppercase tracking-wider text-amber-400">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold group-hover:text-amber-400">
                    {project.title}
                  </h3>

                  <div className="mt-6 space-y-3 text-gray-400">
                    <p>Stage: {project.stage}</p>
                    <p>Duration: {project.duration}</p>
                  </div>

                  <button className="mt-8 inline-flex items-center gap-2 text-amber-400">
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-black mb-16">
            Production Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
              >
                <service.icon className="h-10 w-10 text-amber-400 mb-6" />

                <h3 className="text-3xl font-bold mb-5">
                  {service.title}
                </h3>

                <p className="text-lg leading-8 text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-black mb-16">
            Our Production Workflow
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="text-7xl font-black text-amber-400/10 mb-4">
                  {item.step}
                </div>

                <item.icon className="h-10 w-10 text-amber-400 mb-5" />

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-10 w-10 text-amber-400 mx-auto mb-4" />

                <h3 className="text-5xl font-black">
                  {stat.value}
                </h3>

                <p className="mt-3 text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[32px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <Flame className="h-16 w-16 text-amber-400 mx-auto mb-6" />

            <h2 className="text-6xl font-black mb-6">
              Ready To Produce Something Extraordinary?
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-300 mb-10">
              Whether you're developing a documentary, film,
              branded content project, or visual storytelling
              experience, Soulfire Chronicles Production is ready
              to help bring your vision to life.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
            >
              Start Your Production
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
