"use client";

import {
  Quote,
  Star,
  Sparkles,
  Award,
  Film,
  Camera,
  PlayCircle,
} from "lucide-react";

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating?: number;
}

interface TestimonialProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Documentary Producer",
    company: "Creative Vision Studios",
    quote:
      "Soulfire Chronicles Production understands the power of storytelling. Their ability to transform ideas into cinematic experiences is truly remarkable.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Thompson",
    role: "Creative Director",
    company: "Global Media Network",
    quote:
      "Professional, visionary, and deeply committed to meaningful storytelling. Every project reflects passion and exceptional attention to detail.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Film Consultant",
    company: "Independent Filmmaker",
    quote:
      "Working with Soulfire Chronicles Production was an inspiring experience. Their documentaries connect emotionally while maintaining cinematic excellence.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Anderson",
    role: "Executive Producer",
    company: "Storyline Productions",
    quote:
      "A rare combination of creativity, authenticity, and technical expertise. Their storytelling approach leaves a lasting impact on audiences.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jennifer Collins",
    role: "Media Strategist",
    company: "Creative Impact Agency",
    quote:
      "Soulfire Chronicles Production delivers meaningful narratives that inspire, educate, and connect people through the power of film.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Evans",
    role: "Documentary Enthusiast",
    company: "Audience Member",
    quote:
      "The stories they tell feel authentic and deeply human. Their work reminds us why storytelling matters.",
    rating: 5,
  },
];

export default function Testimonial({
  title = "What People Say",
  subtitle = "Trusted by storytellers, filmmakers, creatives, and audiences who believe in the transformative power of meaningful storytelling.",
  testimonials = defaultTestimonials,
}: TestimonialProps) {
  return (
    <section className="relative overflow-hidden py-24 bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f59e0b10,transparent_60%)]" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2">
            <Sparkles className="h-4 w-4 text-amber-400" />

            <span className="text-sm uppercase tracking-[0.2em] text-amber-300">
              Testimonials
            </span>
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold md:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            {subtitle}
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-amber-500/30
              "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5" />
              </div>

              {/* Quote Icon */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Quote className="h-8 w-8 text-amber-400" />
                </div>
              </div>

              {/* Rating */}
              <div className="relative z-10 mb-6 flex gap-1">
                {[...Array(testimonial.rating || 5)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 mb-8 text-gray-300 leading-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="relative z-10 border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-amber-400">
                  {testimonial.role}
                </p>

                {testimonial.company && (
                  <p className="mt-1 text-sm text-gray-500">
                    {testimonial.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-24 grid gap-8 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <Film className="mx-auto mb-4 h-10 w-10 text-amber-400" />

            <h3 className="text-4xl font-bold text-amber-400">
              10+
            </h3>

            <p className="mt-3 text-gray-400">
              Documentary Projects
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <Award className="mx-auto mb-4 h-10 w-10 text-amber-400" />

            <h3 className="text-4xl font-bold text-amber-400">
              100%
            </h3>

            <p className="mt-3 text-gray-400">
              Original Storytelling
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <Camera className="mx-auto mb-4 h-10 w-10 text-amber-400" />

            <h3 className="text-4xl font-bold text-amber-400">
              Creative
            </h3>

            <p className="mt-3 text-gray-400">
              Production Excellence
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <PlayCircle className="mx-auto mb-4 h-10 w-10 text-amber-400" />

            <h3 className="text-4xl font-bold text-amber-400">
              Global
            </h3>

            <p className="mt-3 text-gray-400">
              Audience Vision
            </p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
          <Quote className="mx-auto mb-6 h-12 w-12 text-amber-400" />

          <blockquote className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-gray-200">
            “Stories have the ability to change perspectives,
            inspire action, and connect people through shared
            human experiences.”
          </blockquote>

          <p className="mt-6 text-amber-400">
            Soulfire Chronicles Production
          </p>
        </div>
      </div>
    </section>
  );
}