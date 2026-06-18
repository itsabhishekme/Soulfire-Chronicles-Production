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
  Eye,
  Heart,
  Flame,
  Camera,
  Clapperboard,
  ChevronRight,
  BadgeCheck,
  Users,
  BookOpen,
  Wand2,
  Target,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Documentaries | Soulfire Chronicles Production",
  description:
    "Explore documentary films, cinematic storytelling projects, inspirational productions, and visual journeys from Soulfire Chronicles Production.",
};

const featuredDocumentary = {
  title: "Before Her Name Existed",
  status: "Featured Production",
  duration: "90 Minutes",
  genre: "Spiritual Documentary",
  release: "Coming Soon",
  description:
    "What if the most important person in your life entered your story long before you knew their name? A cinematic journey through dreams, intuition, synchronicities, destiny, and extraordinary human experiences shared across cultures and generations.",
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

const process = [
  {
    title: "Research",
    description:
      "Deep investigation, interviews, and story discovery before production begins.",
    icon: BookOpen,
  },
  {
    title: "Story Development",
    description:
      "Building compelling narratives that resonate emotionally with audiences.",
    icon: Wand2,
  },
  {
    title: "Production",
    description:
      "Capturing cinematic footage, interviews, and authentic human experiences.",
    icon: Camera,
  },
  {
    title: "Post Production",
    description:
      "Editing, color grading, sound design, and cinematic finishing touches.",
    icon: Clapperboard,
  },
];

const values = [
  {
    icon: Heart,
    title: "Human Connection",
    description:
      "Stories that reveal the shared experiences connecting people worldwide.",
  },
  {
    icon: Eye,
    title: "Authentic Truth",
    description:
      "Exploring real experiences with honesty, curiosity, and compassion.",
  },
  {
    icon: Target,
    title: "Meaningful Impact",
    description:
      "Films designed to inspire reflection, growth, and transformation.",
  },
];

export default function DocumentariesPage() {
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

      <div className="absolute right-20 top-60 hidden lg:block">
        <Camera className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute bottom-40 left-20 hidden lg:block">
        <Clapperboard className="h-24 w-24 text-amber-400/10" />
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Documentary Films
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              Stories That
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Leave A Lasting
              </span>
              Impact
            </h1>

            <p className="mt-10 max-w-4xl text-xl leading-9 text-gray-300">
              Soulfire Chronicles Production creates cinematic
              documentaries exploring destiny, spirituality,
              transformation, human connection, intuition, purpose,
              and extraordinary experiences that shape our lives.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
              >
                Start A Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#collection"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm hover:border-amber-400"
              >
                <PlayCircle className="h-5 w-5" />
                Explore Films
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Documentary */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-[32px] border border-amber-500/20 bg-white/[0.03] backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative flex min-h-[550px] items-center justify-center bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-black">
                <PlayCircle className="h-32 w-32 text-amber-400" />

                <div className="absolute bottom-8 left-8 rounded-xl border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
                  <span className="text-sm text-gray-300">
                    Featured Production
                  </span>
                </div>
              </div>

              <div className="p-10 md:p-14">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
                  <Star className="h-4 w-4" />
                  {featuredDocumentary.status}
                </span>

                <h2 className="mt-6 text-5xl font-black">
                  {featuredDocumentary.title}
                </h2>

                <div className="mt-4 flex items-center gap-2 text-amber-300">
                  <Quote className="h-4 w-4" />
                  <span className="italic">
                    “I loved the story before I knew the character.”
                  </span>
                </div>

                <p className="mt-8 text-lg leading-8 text-gray-300">
                  {featuredDocumentary.description}
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Film className="h-5 w-5 text-amber-400" />
                    <span>{featuredDocumentary.genre}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-400" />
                    <span>{featuredDocumentary.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-amber-400" />
                    <span>{featuredDocumentary.release}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-amber-400" />
                    <span>Cinematic Documentary</span>
                  </div>
                </div>

                <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Collection */}
      <section id="collection" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 uppercase tracking-widest text-sm">
              Documentary Collection
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-black">
              Current & Future Projects
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {documentaries.map((doc) => (
              <article
                key={doc.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50"
              >
                <div className="flex h-72 items-center justify-center bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-black">
                  <Film className="h-20 w-20 text-amber-400/40" />
                </div>

                <div className="p-8">
                  <span className="text-xs uppercase tracking-wider text-amber-400">
                    {doc.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold group-hover:text-amber-400">
                    {doc.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {doc.description}
                  </p>

                  <div className="mt-6 flex justify-between text-sm text-gray-500">
                    <span>{doc.duration}</span>
                    <span>{doc.status}</span>
                  </div>

                  <button className="mt-8 inline-flex items-center gap-2 text-amber-400">
                    View Project
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 uppercase tracking-widest text-sm">
              Production Workflow
            </span>

            <h2 className="mt-4 text-5xl font-black">
              Our Documentary Process
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
              >
                <div className="mb-6 text-7xl font-black text-amber-400/10">
                  0{index + 1}
                </div>

                <step.icon className="mb-5 h-10 w-10 text-amber-400" />

                <h3 className="mb-4 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-black mb-16">
            What Drives Our Stories
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
              >
                <value.icon className="h-12 w-12 text-amber-400 mx-auto mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {value.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {value.description}
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
            <div>
              <Film className="h-10 w-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-black">10+</h3>
              <p className="mt-3 text-gray-400">
                Documentary Concepts
              </p>
            </div>

            <div>
              <Award className="h-10 w-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-black">100%</h3>
              <p className="mt-3 text-gray-400">
                Original Storytelling
              </p>
            </div>

            <div>
              <Globe className="h-10 w-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-black">Global</h3>
              <p className="mt-3 text-gray-400">
                Audience Vision
              </p>
            </div>

            <div>
              <Users className="h-10 w-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-black">∞</h3>
              <p className="mt-3 text-gray-400">
                Stories To Discover
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[32px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <Flame className="h-16 w-16 text-amber-400 mx-auto mb-6" />

            <h2 className="text-6xl font-black mb-6">
              Every Story Deserves To Be Told
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-300 mb-10">
              We believe powerful stories have the ability to inspire,
              educate, challenge perspectives, and transform lives.
              Explore our productions and discover the stories that
              define Soulfire Chronicles Production.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
            >
              Start A Documentary Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
