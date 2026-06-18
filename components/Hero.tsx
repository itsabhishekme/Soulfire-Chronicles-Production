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
  Quote,
  ChevronDown,
  Wand2,
  Heart,
  Eye,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute left-10 top-40 hidden animate-pulse lg:block">
        <Film className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute right-16 top-48 hidden animate-pulse lg:block">
        <Camera className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute bottom-40 left-20 hidden animate-pulse lg:block">
        <Clapperboard className="h-24 w-24 text-amber-400/10" />
      </div>

      <div className="absolute bottom-32 right-20 hidden animate-pulse lg:block">
        <Sparkles className="h-20 w-20 text-yellow-400/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="w-full">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-3 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-amber-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
              Soulfire Chronicles Production
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="max-w-7xl text-5xl font-black leading-[0.95] md:text-7xl xl:text-8xl 2xl:text-9xl">
            Stories That
            <span className="mt-2 block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Illuminate Minds
            </span>
            <span className="block">
              And Awaken
              <span className="text-amber-400"> Souls</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-10 max-w-4xl text-lg leading-9 text-gray-300 md:text-xl">
            Soulfire Chronicles Production creates cinematic
            documentaries, inspirational films, and transformative visual
            experiences exploring destiny, spirituality, human
            connection, synchronicity, and the unseen forces that shape
            our lives.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              href="/documentaries"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-500 px-8 py-5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
            >
              Explore Documentaries

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/productions"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-5 font-semibold backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              <PlayCircle className="h-5 w-5" />

              View Productions
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <Film className="h-6 w-6 text-amber-400" />

                <span className="text-sm uppercase tracking-widest text-gray-400">
                  Projects
                </span>
              </div>

              <h3 className="text-5xl font-black text-amber-400">10+</h3>

              <p className="mt-3 text-gray-400">
                Original Documentary Concepts
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <Award className="h-6 w-6 text-amber-400" />

                <span className="text-sm uppercase tracking-widest text-gray-400">
                  Quality
                </span>
              </div>

              <h3 className="text-5xl font-black text-amber-400">100%</h3>

              <p className="mt-3 text-gray-400">
                Original Storytelling Vision
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="h-6 w-6 text-amber-400" />

                <span className="text-sm uppercase tracking-widest text-gray-400">
                  Reach
                </span>
              </div>

              <h3 className="text-5xl font-black text-amber-400">
                Global
              </h3>

              <p className="mt-3 text-gray-400">
                Worldwide Audience Vision
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <Star className="h-6 w-6 text-amber-400" />

                <span className="text-sm uppercase tracking-widest text-gray-400">
                  Mission
                </span>
              </div>

              <h3 className="text-5xl font-black text-amber-400">∞</h3>

              <p className="mt-3 text-gray-400">
                Endless Stories To Inspire
              </p>
            </div>
          </div>

          {/* Featured Documentary */}
          <div className="mt-24 overflow-hidden rounded-[32px] border border-amber-500/20 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-xl">
            <div className="p-10 md:p-12">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-amber-400">
                <Sparkles className="h-4 w-4" />

                <span className="text-sm font-medium">
                  Featured Documentary
                </span>
              </div>

              <h2 className="mb-3 text-4xl font-black md:text-5xl">
                Before Her Name Existed
              </h2>

              <div className="mb-6 flex items-center gap-2 text-amber-300">
                <Quote className="h-5 w-5" />

                <span className="italic">
                  “I loved the story before I knew the character.”
                </span>
              </div>

              <p className="max-w-4xl text-lg leading-8 text-gray-300">
                What if the most important person in your life entered
                your story long before you knew their name? A cinematic
                exploration of dreams, intuition, synchronicities,
                destiny, and the mysterious connections that guide two
                lives toward each other long before they meet.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Eye className="mb-3 h-6 w-6 text-amber-400" />

                  <h4 className="font-semibold">Vision</h4>

                  <p className="mt-2 text-sm text-gray-400">
                    Exploring the invisible threads connecting lives.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Heart className="mb-3 h-6 w-6 text-amber-400" />

                  <h4 className="font-semibold">Connection</h4>

                  <p className="mt-2 text-sm text-gray-400">
                    Stories of destiny, love, and spiritual alignment.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Zap className="mb-3 h-6 w-6 text-amber-400" />

                  <h4 className="font-semibold">Discovery</h4>

                  <p className="mt-2 text-sm text-gray-400">
                    Uncovering synchronicities hidden in everyday life.
                  </p>
                </div>
              </div>

              <Link
                href="/documentaries"
                className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-amber-400 transition hover:text-amber-300"
              >
                Discover The Story

                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-24 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <Film className="mb-5 h-10 w-10 text-amber-400" />

              <h3 className="mb-3 text-2xl font-bold">
                Cinematic Storytelling
              </h3>

              <p className="leading-8 text-gray-400">
                High-quality documentary narratives crafted to inspire,
                educate, and emotionally connect with audiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <Wand2 className="mb-5 h-10 w-10 text-amber-400" />

              <h3 className="mb-3 text-2xl font-bold">
                Spiritual Exploration
              </h3>

              <p className="leading-8 text-gray-400">
                Thought-provoking journeys into consciousness,
                synchronicity, purpose, and human transformation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <Globe className="mb-5 h-10 w-10 text-amber-400" />

              <h3 className="mb-3 text-2xl font-bold">
                Global Impact
              </h3>

              <p className="leading-8 text-gray-400">
                Stories designed to resonate across cultures,
                generations, and communities around the world.
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex justify-center">
            <div className="flex flex-col items-center gap-3 text-gray-500">
              <span className="text-xs uppercase tracking-[0.3em]">
                Scroll To Explore
              </span>

              <ChevronDown className="h-6 w-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </section>
  );
}