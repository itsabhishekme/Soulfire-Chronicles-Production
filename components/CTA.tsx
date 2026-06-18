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
  Globe,
  Award,
  Users,
  Heart,
  Flame,
  CheckCircle,
  Target,
  ShieldCheck,
  Quote,
  Video,
  Wand2,
  MonitorPlay,
  Lightbulb,
  BadgeCheck,
  Clock3,
} from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const features = [
  {
    icon: Film,
    title: "Documentary Production",
    description:
      "Authentic stories transformed into cinematic experiences that educate, inspire, and connect audiences.",
  },
  {
    icon: Clapperboard,
    title: "Film Development",
    description:
      "From concept creation to final release, we help shape meaningful visual narratives.",
  },
  {
    icon: Camera,
    title: "Visual Storytelling",
    description:
      "Powerful imagery, interviews, and cinematic sequences crafted to leave lasting impact.",
  },
];

const process = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description:
      "Understanding your vision, audience, and project goals.",
  },
  {
    icon: Wand2,
    title: "Creative Development",
    description:
      "Research, story design, scripting, and strategic planning.",
  },
  {
    icon: Camera,
    title: "Production",
    description:
      "Capturing compelling footage, interviews, and cinematic visuals.",
  },
  {
    icon: MonitorPlay,
    title: "Post Production",
    description:
      "Editing, sound design, motion graphics, and final delivery.",
  },
];

const trustItems = [
  "Original Storytelling",
  "Creative Excellence",
  "Documentary Expertise",
  "Global Audience Vision",
];

export default function CTA({
  title = "Ready To Tell Your Story?",
  description = "Whether you're creating a documentary, producing a cinematic film, developing a storytelling project, or building a powerful visual experience, Soulfire Chronicles Production is here to bring your vision to life.",
  buttonText = "Start Your Project",
  buttonLink = "/contact",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-black to-black" />

      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10" />

          {/* Floating Icons */}
          <Film className="absolute left-10 top-10 hidden h-20 w-20 text-amber-400/10 lg:block" />
          <Camera className="absolute right-10 top-10 hidden h-20 w-20 text-amber-400/10 lg:block" />
          <PlayCircle className="absolute bottom-10 left-10 hidden h-20 w-20 text-amber-400/10 lg:block" />
          <Star className="absolute bottom-10 right-10 hidden h-20 w-20 text-amber-400/10 lg:block" />

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-24">
            {/* Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2">
                <Sparkles className="h-4 w-4 text-amber-400" />

                <span className="text-sm uppercase tracking-[0.25em] text-amber-300">
                  Soulfire Chronicles Production
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-5xl font-black leading-tight md:text-7xl">
                {title}
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
                {description}
              </p>
            </div>

            {/* Trust Pills */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2"
                >
                  <BadgeCheck className="h-4 w-4 text-amber-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-8"
                >
                  <feature.icon className="mx-auto mb-5 h-12 w-12 text-amber-400" />

                  <h3 className="mb-4 text-center text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-center leading-8 text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-black/20 p-10 text-center">
              <Quote className="mx-auto mb-6 h-12 w-12 text-amber-400" />

              <p className="text-xl italic leading-9 text-gray-300">
                "Every extraordinary story begins with a conversation,
                a vision, and the courage to bring it to life."
              </p>

              <p className="mt-5 text-sm uppercase tracking-widest text-amber-400">
                Soulfire Chronicles Production
              </p>
            </div>

            {/* Workflow */}
            <div className="mt-24">
              <h3 className="mb-14 text-center text-4xl font-black">
                Our Creative Process
              </h3>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {process.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-black/20 p-8"
                  >
                    <div className="mb-4 text-6xl font-black text-amber-400/10">
                      0{index + 1}
                    </div>

                    <item.icon className="mb-5 h-10 w-10 text-amber-400" />

                    <h4 className="mb-4 text-2xl font-bold">
                      {item.title}
                    </h4>

                    <p className="leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-20 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href={buttonLink}
                className="group inline-flex items-center gap-3 rounded-xl bg-amber-500 px-10 py-5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
              >
                {buttonText}

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/documentaries"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-10 py-5 font-semibold transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                Explore Our Films

                <PlayCircle className="h-5 w-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <Film className="mx-auto mb-4 h-8 w-8 text-amber-400" />

                <h4 className="text-5xl font-black text-amber-400">
                  10+
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Productions
                </p>
              </div>

              <div className="text-center">
                <Award className="mx-auto mb-4 h-8 w-8 text-amber-400" />

                <h4 className="text-5xl font-black text-amber-400">
                  100+
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Creative Concepts
                </p>
              </div>

              <div className="text-center">
                <Globe className="mx-auto mb-4 h-8 w-8 text-amber-400" />

                <h4 className="text-5xl font-black text-amber-400">
                  Global
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Audience Vision
                </p>
              </div>

              <div className="text-center">
                <Flame className="mx-auto mb-4 h-8 w-8 text-amber-400" />

                <h4 className="text-5xl font-black text-amber-400">
                  ∞
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Stories To Tell
                </p>
              </div>
            </div>

            {/* Bottom Trust Section */}
            <div className="mt-24 grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                <Users className="mx-auto mb-4 h-10 w-10 text-amber-400" />
                <h5 className="font-semibold">Audience Focused</h5>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                <Heart className="mx-auto mb-4 h-10 w-10 text-amber-400" />
                <h5 className="font-semibold">Human Stories</h5>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                <Target className="mx-auto mb-4 h-10 w-10 text-amber-400" />
                <h5 className="font-semibold">Purpose Driven</h5>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                <Clock3 className="mx-auto mb-4 h-10 w-10 text-amber-400" />
                <h5 className="font-semibold">Long-Term Vision</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
