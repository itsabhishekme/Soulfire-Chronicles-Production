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
} from "lucide-react";

export const metadata = {
  title: "Gallery",
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
  },
  {
    title: "Behind The Scenes",
    description:
      "Exclusive access to production environments, filming sessions, and creative collaboration.",
  },
  {
    title: "Visual Storytelling",
    description:
      "Powerful imagery designed to inspire emotion and create meaningful audience experiences.",
  },
  {
    title: "Production Journey",
    description:
      "Snapshots from concept development to final cinematic delivery.",
  },
];

export default function GalleryPage() {
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
                Soulfire Chronicles Gallery
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Moments Behind
              <span className="block text-amber-400">
                Every Great Story
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              Explore cinematic frames, production stills,
              documentary photography, behind-the-scenes moments,
              and visual storytelling from Soulfire Chronicles
              Production.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED SHOWCASE */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <div className="h-[500px] bg-gradient-to-br from-amber-500/20 via-black to-black flex items-center justify-center">
                <Camera className="w-28 h-28 text-amber-400" />
              </div>
            </div>

            <div>
              <span className="text-amber-400 uppercase tracking-wider">
                Featured Collection
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-8">
                Before Her Name Existed
              </h2>

              <p className="text-gray-300 text-lg leading-8 mb-8">
                A visual journey through the making of one of our most
                ambitious documentary projects. Discover cinematic
                moments, creative processes, interviews, location
                scouting, and the storytelling elements that bring the
                project to life.
              </p>

              <button className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition">
                View Collection
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-bold">
              Gallery Showcase
            </h2>

            <div className="hidden md:flex items-center gap-3 text-amber-400">
              <GalleryVertical className="w-5 h-5" />
              <span>{galleryItems.length} Collections</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-amber-400/40 transition"
              >
                <div className="relative h-72 bg-gradient-to-br from-amber-500/10 via-black to-black flex items-center justify-center overflow-hidden">
                  <ImageIcon className="w-20 h-20 text-amber-400 transition-transform duration-500 group-hover:scale-110" />

                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/10">
                    #{index + 1}
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-xs uppercase tracking-widest text-amber-400">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-3 mb-4 group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>

                  <button className="inline-flex items-center gap-2 text-amber-400">
                    Explore Gallery
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Gallery Collections
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-amber-400/30 transition"
              >
                <Film className="w-10 h-10 text-amber-400 mb-6" />

                <h3 className="text-3xl font-bold mb-5">
                  {collection.title}
                </h3>

                <p className="text-gray-400 leading-8 text-lg">
                  {collection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BTS SECTION */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 uppercase tracking-wider">
              Behind The Scenes
            </span>

            <h2 className="text-5xl font-bold mt-4">
              The Creative Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <Clapperboard className="w-12 h-12 text-amber-400 mx-auto mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Pre-Production
              </h3>

              <p className="text-gray-400">
                Planning, research, scripting, and creative
                development.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <Camera className="w-12 h-12 text-amber-400 mx-auto mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Production
              </h3>

              <p className="text-gray-400">
                Capturing authentic moments and cinematic visuals.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <Aperture className="w-12 h-12 text-amber-400 mx-auto mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Editing
              </h3>

              <p className="text-gray-400">
                Shaping narratives through editing and storytelling.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <PlayCircle className="w-12 h-12 text-amber-400 mx-auto mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Release
              </h3>

              <p className="text-gray-400">
                Delivering meaningful experiences to audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <ImageIcon className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-5xl font-bold">500+</h3>

              <p className="text-gray-400 mt-3">
                Visual Assets
              </p>
            </div>

            <div>
              <Camera className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-5xl font-bold">50+</h3>

              <p className="text-gray-400 mt-3">
                Production Sessions
              </p>
            </div>

            <div>
              <Award className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-5xl font-bold">10+</h3>

              <p className="text-gray-400 mt-3">
                Documentary Projects
              </p>
            </div>

            <div>
              <Eye className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-5xl font-bold">∞</h3>

              <p className="text-gray-400 mt-3">
                Stories To Capture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <Camera className="w-14 h-14 text-amber-400 mx-auto mb-6" />

            <h2 className="text-5xl font-bold mb-6">
              Every Frame Tells A Story
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              Discover the artistry, creativity, and passion behind
              every Soulfire Chronicles Production project through
              our growing visual archive.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
            >
              Work With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}