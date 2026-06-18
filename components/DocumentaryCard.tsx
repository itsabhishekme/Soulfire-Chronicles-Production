"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  Film,
  PlayCircle,
  Star,
  Eye,
  Award,
  Globe,
  Heart,
  Bookmark,
  Share2,
  Camera,
  Clapperboard,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  BadgeCheck,
  Layers,
  Quote,
} from "lucide-react";

export interface DocumentaryCardProps {
  id?: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  duration?: string;
  releaseYear?: string;
  status?: string;
  featured?: boolean;
  rating?: string;
  views?: string;
  slug?: string;
  director?: string;
  country?: string;
  language?: string;
  awards?: number;
  featuredQuote?: string;
}

export default function DocumentaryCard({
  id,
  title,
  description,
  image = "/documentaries/placeholder.jpg",
  category = "Documentary",
  duration = "90 Min",
  releaseYear = "2026",
  status = "In Production",
  featured = false,
  rating = "4.9",
  views = "10K+",
  director = "Soulfire Chronicles",
  country = "Global",
  language = "English",
  awards = 3,
  featuredQuote = "Every story has a deeper meaning waiting to be discovered.",
  slug,
}: DocumentaryCardProps) {
  const href =
    slug || id
      ? `/documentaries/${slug || id}`
      : "/documentaries";

  return (
    <article
      className={`
        group relative overflow-hidden rounded-[32px]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition-all duration-700
        hover:-translate-y-2
        hover:border-amber-400/40
        hover:shadow-[0_0_80px_rgba(245,158,11,0.10)]
        ${
          featured
            ? "ring-1 ring-amber-500/20"
            : ""
        }
      `}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5" />
      </div>

      {/* Featured Ribbon */}
      {featured && (
        <div className="absolute left-5 top-5 z-30">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-black shadow-lg">
            <Sparkles className="h-3 w-3 fill-current" />
            Featured Documentary
          </div>
        </div>
      )}

      {/* Top Controls */}
      <div className="absolute right-5 top-5 z-30 flex gap-2">
        <button
          type="button"
          aria-label="Bookmark documentary"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md transition hover:border-amber-400"
        >
          <Bookmark className="h-4 w-4" />
        </button>

        <button
          type="button"
          aria-label="Share documentary"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md transition hover:border-amber-400"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </div>

      {/* Image Section */}
      <div className="relative h-[380px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="
              flex h-24 w-24 items-center justify-center
              rounded-full
              border border-white/20
              bg-black/50
              backdrop-blur-md
              transition-all duration-500
              group-hover:scale-110
              group-hover:border-amber-400
            "
          >
            <PlayCircle className="h-12 w-12 text-amber-400" />
          </div>
        </div>

        {/* Status */}
        <div className="absolute bottom-5 left-5">
          <span className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs backdrop-blur-md">
            {status}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-5 right-5">
          <span className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs backdrop-blur-md">
            {duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-8">
        {/* Category */}
        <div className="mb-5 flex items-center gap-2">
          <Film className="h-4 w-4 text-amber-400" />

          <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-3xl font-black leading-tight transition-colors duration-300 group-hover:text-amber-400">
          {title}
        </h3>

        {/* Quote */}
        <div className="mb-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="mb-2 flex items-center gap-2 text-amber-400">
            <Quote className="h-4 w-4" />

            <span className="text-xs uppercase tracking-wider">
              Documentary Insight
            </span>
          </div>

          <p className="text-sm italic text-gray-400">
            "{featuredQuote}"
          </p>
        </div>

        {/* Description */}
        <p className="mb-8 line-clamp-4 leading-8 text-gray-400">
          {description}
        </p>

        {/* Metadata Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-400" />

              <span className="text-xs text-gray-400">
                Duration
              </span>
            </div>

            <p className="font-medium">{duration}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-amber-400" />

              <span className="text-xs text-gray-400">
                Release
              </span>
            </div>

            <p className="font-medium">{releaseYear}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Globe className="h-4 w-4 text-amber-400" />

              <span className="text-xs text-gray-400">
                Region
              </span>
            </div>

            <p className="font-medium">{country}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-amber-400" />

              <span className="text-xs text-gray-400">
                Language
              </span>
            </div>

            <p className="font-medium">{language}</p>
          </div>
        </div>

        {/* Production Details */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-5">
          <div className="mb-4 flex items-center gap-2">
            <Clapperboard className="h-4 w-4 text-amber-400" />

            <span className="text-sm font-medium">
              Production Details
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">
                Director
              </span>

              <span>{director}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">
                Awards
              </span>

              <span>{awards}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">
                Production
              </span>

              <span>Soulfire Chronicles</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

            <span className="font-semibold">
              {rating}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-gray-400" />

            <span className="text-gray-400">
              {views}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-gray-400" />

            <span className="text-gray-400">
              Award Worthy
            </span>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="mb-8 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs">
            <Heart className="h-3 w-3 text-amber-400" />
            Human Stories
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs">
            <TrendingUp className="h-3 w-3 text-amber-400" />
            Inspirational
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs">
            <ShieldCheck className="h-3 w-3 text-amber-400" />
            Original
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs">
            <Layers className="h-3 w-3 text-amber-400" />
            Cinematic
          </div>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="
            group/button
            inline-flex items-center gap-3
            rounded-xl
            bg-amber-500
            px-7 py-4
            font-semibold
            text-black
            transition-all duration-300
            hover:bg-amber-400
          "
        >
          View Documentary

          <ArrowRight
            className="
              h-5 w-5
              transition-transform duration-300
              group-hover/button:translate-x-1
            "
          />
        </Link>
      </div>

      {/* Animated Border Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[32px] border border-amber-400/20" />
      </div>

      {/* Bottom Shine */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity duration-700
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute -left-20 top-0 h-full w-40
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/5
            to-transparent
            transition-all duration-1000
            group-hover:left-[120%]
          "
        />
      </div>
    </article>
  );
}
