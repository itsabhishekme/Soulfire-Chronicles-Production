import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Film,
  PlayCircle,
  Sparkles,
  Star,
  Video,
  Award,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Documentaries",
  description:
    "Explore documentary films and cinematic storytelling projects from Soulfire Chronicles Production.",
};

const featuredDocumentary = {
  title: "Before Her Name Existed",
  status: "Featured Production",
  duration: "90 Minutes",
  genre: "Documentary",
  release: "Coming Soon",
  description:
    "What if the most important person in your life entered your story long before you knew their name? This documentary explores dreams, intuition, synchronicities, destiny, and extraordinary experiences shared by people across cultures and generations.",
};

const documentaries = [
  {
    title: "Before Her Name Existed",
    category: "Spiritual Documentary",
    duration: "90 Min",
    status: "In Production",
    description:
      "A cinematic exploration of destiny, intuition, signs, and meaningful coincidences before life-changing relationships begin.",
  },
  {
    title: "The Soulfire Chronicles",
    category: "Human Stories",
    duration: "75 Min",
    status: "Development",
    description:
      "Powerful stories of resilience, transformation, purpose, and personal awakening from around the world.",
  },
  {
    title: "Signs Before Destiny",
    category: "Inspirational Documentary",
    duration: "60 Min",
    status: "Research Phase",
    description:
      "An investigation into dreams, synchronicities, and moments that appear to shape our future.",
  },
  {
    title: "The Language of Intuition",
    category: "Psychology & Spirituality",
    duration: "70 Min",
    status: "Concept",
    description:
      "Exploring the mysterious connection between instinct, intuition, and decision-making.",
  },
  {
    title: "Beyond Coincidence",
    category: "Investigative Documentary",
    duration: "80 Min",
    status: "Concept",
    description:
      "Examining extraordinary stories that challenge conventional explanations of coincidence.",
  },
  {
    title: "Journey of the Soul",
    category: "Inspirational Film",
    duration: "95 Min",
    status: "Future Project",
    description:
      "A cinematic journey into purpose, identity, growth, and the search for meaning.",
  },
];

const productionProcess = [
  {
    title: "Research",
    description:
      "Comprehensive investigation and story development before production begins.",
  },
  {
    title: "Story Development",
    description:
      "Transforming ideas into compelling documentary narratives.",
  },
  {
    title: "Production",
    description:
      "Capturing interviews, visuals, cinematic footage, and authentic moments.",
  },
  {
    title: "Post Production",
    description:
      "Editing, sound design, color grading, and finishing touches.",
  },
];

export default function DocumentariesPage() {
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
                Documentary Films
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Stories That
              <span className="block text-amber-400">
                Leave A Lasting Impact
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              Soulfire Chronicles Production creates cinematic
              documentaries that explore destiny, spirituality,
              transformation, human connection, and the extraordinary
              experiences that shape our lives.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED DOCUMENTARY */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[500px] bg-gradient-to-br from-amber-500/20 to-black flex items-center justify-center">
                <PlayCircle className="w-24 h-24 text-amber-400" />
              </div>

              <div className="p-10 md:p-14">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm">
                  <Star className="w-4 h-4" />
                  {featuredDocumentary.status}
                </span>

                <h2 className="text-5xl font-bold mt-6 mb-6">
                  {featuredDocumentary.title}
                </h2>

                <p className="text-gray-300 text-lg leading-8 mb-8">
                  {featuredDocumentary.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <Film className="w-5 h-5 text-amber-400" />
                    <span>{featuredDocumentary.genre}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span>{featuredDocumentary.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <span>{featuredDocumentary.release}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-amber-400" />
                    <span>Cinematic Documentary</span>
                  </div>
                </div>

                <button className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTARY GRID */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Documentary Collection
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {documentaries.map((doc) => (
              <article
                key={doc.title}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-amber-400/40 transition"
              >
                <div className="h-64 bg-gradient-to-br from-amber-500/20 to-black flex items-center justify-center">
                  <Film className="w-16 h-16 text-amber-400" />
                </div>

                <div className="p-8">
                  <span className="inline-block text-xs uppercase tracking-wider text-amber-400 mb-4">
                    {doc.category}
                  </span>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition">
                    {doc.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mb-6">
                    {doc.description}
                  </p>

                  <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <span>{doc.duration}</span>
                    <span>{doc.status}</span>
                  </div>

                  <button className="inline-flex items-center gap-2 text-amber-400">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Our Documentary Process
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {productionProcess.map((step, index) => (
              <div
                key={step.title}
                className="relative border border-white/10 bg-white/5 rounded-3xl p-8"
              >
                <div className="text-6xl font-bold text-amber-400/20 mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <Film className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="text-gray-400 mt-3">
                Documentary Concepts
              </p>
            </div>

            <div>
              <Award className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">100%</h3>
              <p className="text-gray-400 mt-3">
                Original Storytelling
              </p>
            </div>

            <div>
              <Globe className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">Global</h3>
              <p className="text-gray-400 mt-3">
                Audience Vision
              </p>
            </div>

            <div>
              <Video className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">∞</h3>
              <p className="text-gray-400 mt-3">
                Stories To Discover
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <Film className="w-12 h-12 text-amber-400 mx-auto mb-6" />

            <h2 className="text-5xl font-bold mb-6">
              Every Story Deserves To Be Told
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              We believe powerful stories have the ability to inspire,
              educate, and transform audiences. Explore our projects
              and discover the stories that define Soulfire Chronicles
              Production.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
            >
              Start A Documentary Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}