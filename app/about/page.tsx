import Link from "next/link";
import {
  ArrowRight,
  Award,
  Camera,
  Film,
  Globe,
  Heart,
  Lightbulb,
  Sparkles,
  Star,
  Users,
  Video,
} from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Soulfire Chronicles Production, our mission, vision, values, and passion for cinematic storytelling.",
};

const values = [
  {
    icon: <Heart className="w-8 h-8 text-amber-400" />,
    title: "Authentic Storytelling",
    description:
      "We believe every story deserves to be told with honesty, emotion, and respect.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-amber-400" />,
    title: "Creative Excellence",
    description:
      "Every frame is carefully crafted to create meaningful cinematic experiences.",
  },
  {
    icon: <Globe className="w-8 h-8 text-amber-400" />,
    title: "Global Impact",
    description:
      "Stories have the power to connect people across cultures and generations.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
    title: "Innovation",
    description:
      "We embrace new technologies and creative approaches to filmmaking.",
  },
];

const milestones = [
  {
    year: "2025",
    title: "The Beginning",
    description:
      "Soulfire Chronicles Production was founded with a vision to create inspiring documentaries and cinematic stories.",
  },
  {
    year: "2026",
    title: "First Documentary Projects",
    description:
      "Development began on original documentary concepts exploring destiny, spirituality, and human connection.",
  },
  {
    year: "2027",
    title: "Global Expansion",
    description:
      "Building partnerships and reaching international audiences through digital platforms.",
  },
  {
    year: "Future",
    title: "A Legacy of Stories",
    description:
      "Creating films that inspire generations and leave a lasting impact on audiences worldwide.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full px-5 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm uppercase tracking-widest">
                About Soulfire Chronicles Production
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Telling Stories
              <span className="block text-amber-400">
                That Inspire Humanity
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Soulfire Chronicles Production is dedicated to creating
              powerful documentaries, cinematic narratives, and visual
              experiences that illuminate minds, awaken souls, and
              celebrate the extraordinary journey of human life.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 uppercase tracking-wider">
                Our Story
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                More Than A Production House
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-8">
                <p>
                  Soulfire Chronicles Production was founded on the
                  belief that stories possess the power to transform
                  lives. Through documentaries, films, interviews,
                  and cinematic storytelling, we explore themes of
                  destiny, spirituality, human connection, personal
                  growth, and extraordinary experiences.
                </p>

                <p>
                  Our mission is not simply to create content but to
                  create meaningful experiences that inspire audiences
                  to reflect, dream, and connect with something
                  greater than themselves.
                </p>

                <p>
                  Every project is approached with passion,
                  creativity, and a commitment to excellence,
                  ensuring that each story leaves a lasting impact.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Film className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Documentary Films
                </h3>
                <p className="text-gray-400">
                  Exploring real stories with cinematic quality and
                  emotional depth.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Camera className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Visual Storytelling
                </h3>
                <p className="text-gray-400">
                  Crafting unforgettable experiences through powerful
                  imagery.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Video className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Production Services
                </h3>
                <p className="text-gray-400">
                  End-to-end production from concept to final release.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Users className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Audience Impact
                </h3>
                <p className="text-gray-400">
                  Creating stories that resonate across cultures and
                  generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <h2 className="text-4xl font-bold mb-6 text-amber-400">
                Our Mission
              </h2>

              <p className="text-gray-300 leading-8 text-lg">
                To create compelling documentaries, films, and visual
                stories that inspire curiosity, encourage reflection,
                and celebrate the beauty of the human experience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <h2 className="text-4xl font-bold mb-6 text-amber-400">
                Our Vision
              </h2>

              <p className="text-gray-300 leading-8 text-lg">
                To become a globally recognized production company
                known for meaningful storytelling, cinematic
                excellence, and transformative audience experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-amber-400/50 transition"
              >
                {value.icon}

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-20">
            Our Journey
          </h2>

          <div className="space-y-10">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="border border-white/10 rounded-3xl bg-white/5 p-8"
              >
                <span className="text-amber-400 font-bold text-xl">
                  {item.year}
                </span>

                <h3 className="text-2xl font-semibold mt-3 mb-4">
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

      {/* STATS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="text-gray-400 mt-3">
                Planned Productions
              </p>
            </div>

            <div className="text-center">
              <Film className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">100+</h3>
              <p className="text-gray-400 mt-3">
                Creative Concepts
              </p>
            </div>

            <div className="text-center">
              <Users className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-5xl font-bold">Global</h3>
              <p className="text-gray-400 mt-3">
                Audience Vision
              </p>
            </div>

            <div className="text-center">
              <Star className="w-10 h-10 text-amber-400 mx-auto mb-4" />
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
            <h2 className="text-5xl font-bold mb-6">
              Let’s Create Something Meaningful
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Whether you're developing a documentary, film, visual
              campaign, or creative project, Soulfire Chronicles
              Production is ready to bring your vision to life.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-amber-500 text-black font-semibold px-8 py-4 rounded-xl hover:bg-amber-400 transition"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}