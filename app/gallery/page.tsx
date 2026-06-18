import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Film,
  ImageIcon,
  PlayCircle,
  Sparkles,
  Eye,
  Clapperboard,
  Aperture,
  Award,
  GalleryVertical,
  Heart,
  Star,
  Globe,
  Flame,
  Quote,
  Wand2,
  ChevronRight,
  Download,
  Maximize2,
  Layers,
  MonitorPlay,
  Users,
  Bookmark,
  ScanEye,
} from "lucide-react";

export const metadata = {
  title: "Gallery | Soulfire Chronicles Production",
  description:
    "Explore the visual world of Soulfire Chronicles Production through cinematic frames, behind-the-scenes moments, production stills, documentaries, and storytelling imagery.",
};

const galleryItems = [
  {
    title: "Before Her Name Existed",
    category: "Featured Documentary",
  },
  {
    title: "Behind The Lens",
    category: "Production Photography",
  },
  {
    title: "Story Development Sessions",
    category: "Creative Process",
  },
  {
    title: "Interview Production",
    category: "Documentary",
  },
  {
    title: "Cinematic Landscapes",
    category: "Visual Storytelling",
  },
  {
    title: "Soulfire Chronicles",
    category: "Production Journey",
  },
  {
    title: "Editing Studio",
    category: "Post Production",
  },
  {
    title: "Creative Direction",
    category: "Behind The Scenes",
  },
  {
    title: "Documentary Research",
    category: "Development",
  },
];

const collections = [
  {
    title: "Documentary Films",
    description:
      "A collection of visual moments captured during documentary production and storytelling projects.",
    icon: Film,
  },
  {
    title: "Behind The Scenes",
    description:
      "Exclusive access to production environments, filming sessions, and creative collaboration.",
    icon: Camera,
  },
  {
    title: "Visual Storytelling",
    description:
      "Powerful imagery designed to inspire emotion and create meaningful audience experiences.",
    icon: Eye,
  },
  {
    title: "Production Journey",
    description:
      "Snapshots from concept development to final cinematic delivery.",
    icon: Clapperboard,
  },
];

const process = [
  {
    title: "Pre-Production",
    description:
      "Planning, research, scripting, and creative development.",
    icon: Clapperboard,
  },
  {
    title: "Production",
    description:
      "Capturing authentic moments and cinematic visuals.",
    icon: Camera,
  },
  {
    title: "Editing",
    description:
      "Shaping narratives through editing and storytelling.",
    icon: Aperture,
  },
  {
    title: "Release",
    description:
      "Delivering meaningful experiences to audiences worldwide.",
    icon: PlayCircle,
  },
];

const stats = [
  {
    icon: ImageIcon,
    value: "500+",
    label: "Visual Assets",
  },
  {
    icon: Camera,
    value: "50+",
    label: "Production Sessions",
  },
  {
    icon: Award,
    value: "10+",
    label: "Documentary Projects",
  },
  {
    icon: Eye,
    value: "∞",
    label: "Stories To Capture",
  },
];

const highlights = [
  {
    icon: Heart,
    title: "Emotion",
    description:
      "Every frame is designed to create emotional resonance.",
  },
  {
    icon: Wand2,
    title: "Creativity",
    description:
      "Visual storytelling that inspires curiosity and wonder.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description:
      "Stories crafted for audiences around the world.",
  },
];

export default function GalleryPage() {
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
        <Camera className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute right-20 top-52 hidden lg:block">
        <ImageIcon className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute bottom-40 left-20 hidden lg:block">
        <Film className="h-24 w-24 text-amber-400/10" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2">
              <Sparkles className="h-4 w-4 text-amber-400" />

              <span className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Soulfire Chronicles Gallery
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              Moments Behind
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Every Great Story
              </span>
            </h1>

            <p className="mt-10 max-w-4xl text-xl leading-9 text-gray-300">
              Explore cinematic frames, production stills,
              documentary photography, behind-the-scenes moments,
              creative development, and visual storytelling from
              Soulfire Chronicles Production.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400">
                Explore Collections
                <ArrowRight className="h-5 w-5" />
              </button>

              <button className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm hover:border-amber-400">
                <PlayCircle className="h-5 w-5" />
                View Showcase
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-[32px] border border-amber-500/20 bg-white/[0.03] backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative flex min-h-[600px] items-center justify-center bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-black">
                <Camera className="h-32 w-32 text-amber-400" />

                <div className="absolute bottom-8 left-8 rounded-xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
                  <span className="text-sm text-gray-300">
                    Featured Collection
                  </span>
                </div>
              </div>

              <div className="p-10 md:p-14">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
                  <Star className="h-4 w-4" />
                  Featured Documentary
                </span>

                <h2 className="mt-6 text-5xl font-black">
                  Before Her Name Existed
                </h2>

                <div className="mt-4 flex items-center gap-2 text-amber-300">
                  <Quote className="h-4 w-4" />
                  <span className="italic">
                    “I loved the story before I knew the character.”
                  </span>
                </div>

                <p className="mt-8 text-lg leading-8 text-gray-300">
                  A visual journey through the making of one of our most
                  ambitious documentary projects. Discover cinematic
                  moments, creative processes, interviews, location
                  scouting, story development, and the artistic vision
                  behind every frame.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <Layers className="mb-3 h-6 w-6 text-amber-400" />
                    <h4 className="font-semibold">Production</h4>
                    <p className="mt-2 text-sm text-gray-400">
                      Documentary creation process.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <MonitorPlay className="mb-3 h-6 w-6 text-amber-400" />
                    <h4 className="font-semibold">Storytelling</h4>
                    <p className="mt-2 text-sm text-gray-400">
                      Visual narrative development.
                    </p>
                  </div>
                </div>

                <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400">
                  View Collection
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

                <p className="leading-8 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-black">
              Gallery Showcase
            </h2>

            <div className="hidden md:flex items-center gap-3 text-amber-400">
              <GalleryVertical className="h-5 w-5" />
              <span>{galleryItems.length} Collections</span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40"
              >
                <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gradient-to-br from-amber-500/15 via-black to-black">
                  <ImageIcon className="h-20 w-20 text-amber-400 transition-transform duration-500 group-hover:scale-125" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs backdrop-blur-md">
                    #{index + 1}
                  </div>

                  <div className="absolute right-4 top-4 flex gap-2">
                    <button type="button" title="Bookmark this gallery" className="rounded-full bg-black/60 p-2 backdrop-blur-md">
                      <Bookmark className="h-4 w-4" />
                    </button>

                    <button type="button" title="View fullscreen" className="rounded-full bg-black/60 p-2 backdrop-blur-md">
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-xs uppercase tracking-widest text-amber-400">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold group-hover:text-amber-400">
                    {item.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between">
                    <button className="inline-flex items-center gap-2 text-amber-400">
                      Explore Gallery
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    <ScanEye className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-black mb-16">
            Gallery Collections
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 hover:border-amber-400/30"
              >
                <collection.icon className="h-10 w-10 text-amber-400 mb-6" />

                <h3 className="text-3xl font-bold mb-5">
                  {collection.title}
                </h3>

                <p className="text-lg leading-8 text-gray-400">
                  {collection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-amber-400 text-sm">
              Behind The Scenes
            </span>

            <h2 className="mt-4 text-5xl font-black">
              The Creative Process
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
              >
                <div className="mb-4 text-6xl font-black text-amber-400/10">
                  0{index + 1}
                </div>

                <step.icon className="h-12 w-12 text-amber-400 mx-auto mb-5" />

                <h3 className="text-xl font-semibold mb-3">
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

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 text-center md:grid-cols-2 xl:grid-cols-4">
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
              Every Frame Tells A Story
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-300 mb-10">
              Discover the artistry, creativity, passion, and purpose
              behind every Soulfire Chronicles Production project
              through our growing visual archive.
            </p>

            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
              >
                Work With Us
                <ArrowRight className="h-5 w-5" />
              </Link>

              <button className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm">
                <Download className="h-5 w-5" />
                Media Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
