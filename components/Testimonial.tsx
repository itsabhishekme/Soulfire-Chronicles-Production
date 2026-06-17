"use client";

import {
  Quote,
  Star,
  Sparkles,
  Award,
  Film,
  Camera,
  PlayCircle,
  Globe,
  Users,
  Clapperboard,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Heart,
} from "lucide-react";
import Link from "next/link";

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating?: number;
  featured?: boolean;
  location?: string;
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
    location: "United Kingdom",
    quote:
      "Soulfire Chronicles Production understands the power of storytelling. Their ability to transform ideas into cinematic experiences is truly remarkable.",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "David Thompson",
    role: "Creative Director",
    company: "Global Media Network",
    location: "United States",
    quote:
      "Professional, visionary, and deeply committed to meaningful storytelling. Every project reflects passion and exceptional attention to detail.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Film Consultant",
    company: "Independent Filmmaker",
    location: "Canada",
    quote:
      "Working with Soulfire Chronicles Production was an inspiring experience. Their documentaries connect emotionally while maintaining cinematic excellence.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Anderson",
    role: "Executive Producer",
    company: "Storyline Productions",
    location: "Australia",
    quote:
      "A rare combination of creativity, authenticity, and technical expertise. Their storytelling approach leaves a lasting impact on audiences.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jennifer Collins",
    role: "Media Strategist",
    company: "Creative Impact Agency",
    location: "Germany",
    quote:
      "Soulfire Chronicles Production delivers meaningful narratives that inspire, educate, and connect people through the power of film.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Evans",
    role: "Documentary Enthusiast",
    company: "Audience Member",
    location: "New Zealand",
    quote:
      "The stories they tell feel authentic and deeply human. Their work reminds us why storytelling matters.",
    rating: 5,
  },
  {
    id: 7,
    name: "Olivia Parker",
    role: "Creative Producer",
    company: "Visionary Films",
    location: "Ireland",
    quote:
      "Exceptional storytelling, outstanding visuals, and a powerful emotional connection with audiences.",
    rating: 5,
  },
  {
    id: 8,
    name: "James Walker",
    role: "Research Director",
    company: "Global Research Films",
    location: "Singapore",
    quote:
      "One of the most inspiring creative teams we have worked with in recent years.",
    rating: 5,
  },
];

export default function Testimonial({
  title = "Voices From Around The World",
  subtitle = "Discover what filmmakers, producers, creatives, researchers, and audiences say about Soulfire Chronicles Production.",
  testimonials = defaultTestimonials,
}: TestimonialProps) {
  const averageRating =
    testimonials.reduce(
      (acc, item) => acc + (item.rating || 5),
      0
    ) / testimonials.length;

  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f59e0b15,transparent_60%)]" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm uppercase tracking-[0.3em] text-amber-300">
              Testimonials
            </span>
          </div>

          <h2 className="mx-auto max-w-5xl text-5xl font-bold md:text-7xl">
            {title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            {subtitle}
          </p>
        </div>

        {/* Review Summary */}
        <div className="mb-20 grid gap-8 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <Star className="mx-auto mb-4 h-10 w-10 text-amber-400" />
            <h3 className="text-5xl font-bold text-amber-400">
              {averageRating.toFixed(1)}
            </h3>
            <p className="mt-3 text-gray-400">
              Average Rating
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <Users className="mx-auto mb-4 h-10 w-10 text-amber-400" />
            <h3 className="text-5xl font-bold text-amber-400">
              100+
            </h3>
            <p className="mt-3 text-gray-400">
              Creative Collaborations
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <Globe className="mx-auto mb-4 h-10 w-10 text-amber-400" />
            <h3 className="text-5xl font-bold text-amber-400">
              Global
            </h3>
            <p className="mt-3 text-gray-400">
              Audience Vision
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <Trophy className="mx-auto mb-4 h-10 w-10 text-amber-400" />
            <h3 className="text-5xl font-bold text-amber-400">
              100%
            </h3>
            <p className="mt-3 text-gray-400">
              Storytelling Passion
            </p>
          </div>
        </div>

        {/* Featured Spotlight */}
        <div className="mb-20 rounded-[32px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-12">
          <Quote className="mb-8 h-16 w-16 text-amber-400" />

          <blockquote className="max-w-5xl text-3xl font-medium leading-relaxed">
            "Soulfire Chronicles Production creates stories that remain
            in the hearts of audiences long after the screen fades to
            black. Their work blends authenticity, creativity, and
            cinematic excellence into something truly unforgettable."
          </blockquote>

          <div className="mt-10">
            <h3 className="text-xl font-bold">
              Sophia Bennett
            </h3>

            <p className="text-amber-400">
              Story Consultant • Narrative Works
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <Quote className="h-8 w-8 text-amber-400" />

                {testimonial.featured && (
                  <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-black">
                    Featured
                  </span>
                )}
              </div>

              <div className="mb-5 flex gap-1">
                {[...Array(testimonial.rating || 5)].map(
                  (_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  )
                )}
              </div>

              <p className="mb-8 leading-8 text-gray-300">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-white/10 pt-5">
                <h4 className="font-semibold">
                  {testimonial.name}
                </h4>

                <p className="text-amber-400">
                  {testimonial.role}
                </p>

                <p className="text-sm text-gray-500">
                  {testimonial.company}
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
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

        {/* Trust Section */}
        <div className="mt-24 rounded-[32px] border border-white/10 bg-white/[0.03] p-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="text-center">
              <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-amber-400" />
              <h3 className="mb-3 text-xl font-bold">
                Trusted Storytelling
              </h3>
              <p className="text-gray-400">
                Authentic stories built on research, creativity,
                and human connection.
              </p>
            </div>

            <div className="text-center">
              <Clapperboard className="mx-auto mb-4 h-10 w-10 text-amber-400" />
              <h3 className="mb-3 text-xl font-bold">
                Cinematic Quality
              </h3>
              <p className="text-gray-400">
                Professional filmmaking standards across every
                production.
              </p>
            </div>

            <div className="text-center">
              <Heart className="mx-auto mb-4 h-10 w-10 text-amber-400" />
              <h3 className="mb-3 text-xl font-bold">
                Human Impact
              </h3>
              <p className="text-gray-400">
                Stories designed to inspire, educate, and create
                meaningful conversations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Ready To Tell Your Story?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-400">
            Partner with Soulfire Chronicles Production and create
            documentaries, films, and visual experiences that leave
            a lasting impact.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
          >
            Start Your Project

            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}