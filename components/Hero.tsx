"use client";

import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  Film,
  Camera,
  Clapperboard,
  Star,
  Globe,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Icons */}
      <div className="absolute left-10 top-40 hidden lg:block">
        <Film className="h-20 w-20 text-amber-400/10" />
      </div>

      <div className="absolute right-16 top-48 hidden lg:block">
        <Camera className="h-20 w-20 text-amber-400/10" />
      </div>

      <div className="absolute bottom-40 left-20 hidden lg:block">
        <Clapperboard className="h-20 w-20 text-amber-400/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="w-full">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2">
            <Sparkles className="h-4 w-4 text-amber-400" />

            <span className="text-sm uppercase tracking-[0.25em] text-amber-300">
              Soulfire Chronicles Production
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-6xl text-5xl font-bold leading-tight md:text-7xl xl:text-8xl">
            Stories That
            <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Illuminate Minds
            </span>
            And Awaken Souls
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
            Soulfire Chronicles Production creates cinematic
            documentaries, inspirational films, and powerful visual
            storytelling experiences that explore destiny, human
            connection, spirituality, and the extraordinary journeys
            that shape our lives.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              href="/documentaries"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
            >
              Explore Documentaries

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/productions"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 px-8 py-4 font-semibold transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              <PlayCircle className="h-5 w-5" />

              View Productions
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Film className="h-5 w-5 text-amber-400" />

                <span className="text-sm uppercase tracking-wider text-gray-400">
                  Projects
                </span>
              </div>

              <h3 className="text-4xl font-bold text-amber-400">
                10+
              </h3>

              <p className="mt-2 text-gray-500">
                Documentary Concepts
              </p>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-400" />

                <span className="text-sm uppercase tracking-wider text-gray-400">
                  Quality
                </span>
              </div>

              <h3 className="text-4xl font-bold text-amber-400">
                100%
              </h3>

              <p className="mt-2 text-gray-500">
                Original Storytelling
              </p>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-amber-400" />

                <span className="text-sm uppercase tracking-wider text-gray-400">
                  Reach
                </span>
              </div>

              <h3 className="text-4xl font-bold text-amber-400">
                Global
              </h3>

              <p className="mt-2 text-gray-500">
                Audience Vision
              </p>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-400" />

                <span className="text-sm uppercase tracking-wider text-gray-400">
                  Mission
                </span>
              </div>

              <h3 className="text-4xl font-bold text-amber-400">
                ∞
              </h3>

              <p className="mt-2 text-gray-500">
                Stories To Tell
              </p>
            </div>
          </div>

          {/* Featured Project Card */}
          <div className="mt-20 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2 text-amber-400">
              <Sparkles className="h-5 w-5" />

              <span className="font-medium">
                Featured Documentary
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-bold">
              Before Her Name Existed
            </h2>

            <p className="mb-6 text-gray-400 leading-8">
              What if the most important person in your life entered
              your story long before you knew their name? A cinematic
              journey into dreams, intuition, synchronicities, and the
              mysterious connections that shape destiny.
            </p>

            <Link
              href="/documentaries"
              className="inline-flex items-center gap-3 text-amber-400 transition hover:text-amber-300"
            >
              Discover The Story

              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}