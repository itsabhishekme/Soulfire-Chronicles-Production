"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clapperboard,
  Sparkles,
  Film,
  PlayCircle,
  Camera,
  Star,
} from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTA({
  title = "Ready To Tell Your Story?",
  description = "Whether you're creating a documentary, producing a cinematic film, developing a storytelling project, or building a powerful visual experience, Soulfire Chronicles Production is here to bring your vision to life.",
  buttonText = "Start Your Project",
  buttonLink = "/contact",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-black" />

      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md">
          {/* Decorative Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10" />

          {/* Floating Icons */}
          <div className="absolute top-10 left-10 hidden lg:block">
            <Film className="w-16 h-16 text-amber-400/10" />
          </div>

          <div className="absolute top-10 right-10 hidden lg:block">
            <Camera className="w-16 h-16 text-amber-400/10" />
          </div>

          <div className="absolute bottom-10 left-16 hidden lg:block">
            <PlayCircle className="w-16 h-16 text-amber-400/10" />
          </div>

          <div className="absolute bottom-10 right-16 hidden lg:block">
            <Star className="w-16 h-16 text-amber-400/10" />
          </div>

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />

              <span className="text-sm uppercase tracking-[0.2em] text-amber-300">
                Soulfire Chronicles Production
              </span>
            </div>

            {/* Heading */}
            <h2 className="mx-auto max-w-4xl text-4xl md:text-6xl font-bold leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-8 text-gray-300">
              {description}
            </p>

            {/* Feature Highlights */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <Film className="mx-auto mb-4 h-10 w-10 text-amber-400" />

                <h3 className="mb-2 text-lg font-semibold">
                  Documentary Production
                </h3>

                <p className="text-sm text-gray-400 leading-7">
                  Authentic stories crafted into compelling cinematic
                  experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <Clapperboard className="mx-auto mb-4 h-10 w-10 text-amber-400" />

                <h3 className="mb-2 text-lg font-semibold">
                  Film Development
                </h3>

                <p className="text-sm text-gray-400 leading-7">
                  Creative concepts transformed into professional
                  productions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <Camera className="mx-auto mb-4 h-10 w-10 text-amber-400" />

                <h3 className="mb-2 text-lg font-semibold">
                  Visual Storytelling
                </h3>

                <p className="text-sm text-gray-400 leading-7">
                  Powerful narratives designed to inspire audiences.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href={buttonLink}
                className="group inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-amber-400 hover:scale-105"
              >
                {buttonText}

                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/documentaries"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-8 py-4 font-semibold transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                Explore Our Films

                <PlayCircle className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h4 className="text-4xl font-bold text-amber-400">
                  10+
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Productions
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-amber-400">
                  100+
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Creative Concepts
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-amber-400">
                  Global
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Audience Vision
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-amber-400">
                  ∞
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Stories To Tell
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}