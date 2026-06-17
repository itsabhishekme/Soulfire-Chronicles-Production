import Link from "next/link";
import {
  Film,
  Camera,
  Sparkles,
  PlayCircle,
  ArrowRight,
  Star,
  Video,
  Globe,
} from "lucide-react";

export default function HomePage() {
  const documentaries = [
    {
      title: "Before Her Name Existed",
      description:
        "A cinematic exploration of destiny, intuition, signs, and the mysterious connections that appear before two lives meet.",
    },
    {
      title: "The Soulfire Chronicles",
      description:
        "Stories of transformation, resilience, spiritual awakening, and extraordinary human journeys.",
    },
    {
      title: "Signs Before Destiny",
      description:
        "A documentary investigating synchronicities, dreams, and moments that seem to shape our future.",
    },
  ];

  const services = [
    "Documentary Production",
    "Film Production",
    "Video Editing",
    "Motion Graphics",
    "Script Writing",
    "Story Development",
    "Voice Over Production",
    "Creative Direction",
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-amber-500/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm tracking-widest uppercase">
              Soulfire Chronicles Production
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Stories That
            <span className="block text-amber-400">
              Illuminate Minds
            </span>
            And Awaken Souls
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            We create cinematic documentaries, inspirational films,
            spiritual storytelling experiences, and visual journeys
            that explore destiny, human connection, transformation,
            and the extraordinary moments that shape our lives.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/documentaries"
              className="px-8 py-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold transition"
            >
              Explore Films
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg border border-white/20 hover:border-amber-400 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Vision
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              Soulfire Chronicles Production exists to create
              meaningful visual stories that inspire audiences
              across cultures and generations.
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              Through documentaries, films, interviews, cinematic
              narratives, and digital storytelling, we explore
              destiny, spirituality, personal growth, and the
              extraordinary human experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Film className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Documentary Films
              </h3>
              <p className="text-gray-400">
                Powerful real-world stories with cinematic quality.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Camera className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Visual Storytelling
              </h3>
              <p className="text-gray-400">
                Creative narratives designed to inspire audiences.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Video className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Production Services
              </h3>
              <p className="text-gray-400">
                End-to-end production from concept to final release.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Globe className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Global Reach
              </h3>
              <p className="text-gray-400">
                Stories that connect audiences around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DOCUMENTARIES */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Featured Documentaries
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentaries.map((doc) => (
              <div
                key={doc.title}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-amber-400/40 transition"
              >
                <div className="h-64 bg-gradient-to-br from-amber-600/30 to-black" />

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {doc.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {doc.description}
                  </p>

                  <button className="flex items-center gap-2 text-amber-400">
                    Learn More
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
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-amber-400 transition"
              >
                <PlayCircle className="w-8 h-8 text-amber-400 mb-4" />

                <h3 className="font-semibold text-lg">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-gradient-to-r from-amber-500/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-5xl font-bold text-amber-400">
                10+
              </h3>
              <p className="text-gray-400 mt-3">
                Documentary Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-amber-400">
                50K+
              </h3>
              <p className="text-gray-400 mt-3">
                Audience Reach
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-amber-400">
                100+
              </h3>
              <p className="text-gray-400 mt-3">
                Production Hours
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-amber-400">
                Global
              </h3>
              <p className="text-gray-400 mt-3">
                Storytelling Vision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">
            Audience Response
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />

                <p className="text-gray-300">
                  Soulfire Chronicles creates stories that stay
                  with you long after the credits roll.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <h2 className="text-5xl font-bold mb-6">
              Ready To Tell Your Story?
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Let us help transform your vision into a cinematic
              experience that inspires, educates, and connects with
              audiences worldwide.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}