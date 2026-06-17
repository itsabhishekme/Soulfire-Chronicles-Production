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
} from "lucide-react";

export const metadata = {
  title: "Productions",
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
  },
  {
    title: "Film Production",
    description:
      "End-to-end production services from concept development to final release.",
  },
  {
    title: "Creative Development",
    description:
      "Story ideation, script development, creative direction, and project planning.",
  },
  {
    title: "Post Production",
    description:
      "Editing, color grading, motion graphics, sound design, and finishing.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding the vision, purpose, audience, and goals of the project.",
  },
  {
    step: "02",
    title: "Development",
    description:
      "Research, scripting, storyboarding, planning, and creative preparation.",
  },
  {
    step: "03",
    title: "Production",
    description:
      "Capturing cinematic footage, interviews, visuals, and storytelling elements.",
  },
  {
    step: "04",
    title: "Post Production",
    description:
      "Transforming raw footage into a compelling and polished story.",
  },
];

export default function ProductionsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="uppercase tracking-widest text-sm">
                Soulfire Chronicles Productions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Creating
              <span className="block text-amber-400">
                Cinematic Experiences
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              Soulfire Chronicles Production develops documentaries,
              films, visual narratives, and creative projects that
              inspire audiences through powerful storytelling,
              cinematic excellence, and meaningful human experiences.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTION */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[500px] bg-gradient-to-br from-amber-500/20 via-black to-black flex items-center justify-center">
                <PlayCircle className="w-28 h-28 text-amber-400" />
              </div>

              <div className="p-10 md:p-14">
                <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm">
                  <Star className="w-4 h-4" />
                  {featuredProduction.status}
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-6">
                  {featuredProduction.title}
                </h2>

                <p className="text-gray-300 text-lg leading-8 mb-8">
                  {featuredProduction.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <Film className="w-5 h-5 text-amber-400" />
                    <span>{featuredProduction.genre}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span>{featuredProduction.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span>Original Production</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-amber-400" />
                    <span>Global Audience</span>
                  </div>
                </div>

                <button className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition">
                  Explore Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTIONS GRID */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Production Portfolio
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {productions.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-amber-400/40 transition"
              >
                <div className="h-64 bg-gradient-to-br from-amber-500/15 to-black flex items-center justify-center">
                  <Film className="w-16 h-16 text-amber-400" />
                </div>

                <div className="p-8">
                  <span className="text-xs uppercase tracking-wider text-amber-400">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-3 mb-4">
                    {project.title}
                  </h3>

                  <div className="space-y-3 text-gray-400 mb-6">
                    <p>Stage: {project.stage}</p>
                    <p>Duration: {project.duration}</p>
                  </div>

                  <button className="inline-flex items-center gap-2 text-amber-400">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Production Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-10"
              >
                <Video className="w-10 h-10 text-amber-400 mb-6" />

                <h3 className="text-3xl font-bold mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Our Production Workflow
          </h2>

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

      {/* ACHIEVEMENTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            What Drives Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Trophy className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="text-gray-400 mt-3">
                Production Concepts
              </p>
            </div>

            <div>
              <Users className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">Global</h3>
              <p className="text-gray-400 mt-3">
                Audience Vision
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
              <CheckCircle className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">∞</h3>
              <p className="text-gray-400 mt-3">
                Stories To Tell
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
              Ready To Produce Something Extraordinary?
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              Whether you're developing a documentary, film, branded
              content project, or visual storytelling experience,
              Soulfire Chronicles Production is ready to help bring
              your vision to life.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
            >
              Start Your Production
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}