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
  slug,
}: DocumentaryCardProps) {
  const href =
    slug || id
      ? `/documentaries/${slug || id}`
      : "/documentaries";

  return (
    <article
      className={`
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-sm
        transition-all duration-500
        hover:border-amber-400/40
        hover:shadow-[0_0_50px_rgba(245,158,11,0.08)]
        hover:-translate-y-1
        ${
          featured
            ? "ring-1 ring-amber-500/20"
            : ""
        }
      `}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute left-5 top-5 z-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-black">
            <Star className="h-3 w-3 fill-current" />
            Featured Documentary
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="
              flex h-20 w-20 items-center justify-center
              rounded-full
              bg-black/60
              backdrop-blur-md
              border border-white/10
              transition-all duration-300
              group-hover:scale-110
              group-hover:border-amber-400
            "
          >
            <PlayCircle className="h-10 w-10 text-amber-400" />
          </div>
        </div>

        {/* Status */}
        <div className="absolute bottom-5 left-5">
          <span className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs backdrop-blur-sm">
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Category */}
        <div className="mb-4 flex items-center gap-2">
          <Film className="h-4 w-4 text-amber-400" />

          <span className="text-xs uppercase tracking-[0.25em] text-amber-400">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            mb-4 text-3xl font-bold
            transition-colors duration-300
            group-hover:text-amber-400
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p className="mb-8 line-clamp-4 text-gray-400 leading-8">
          {description}
        </p>

        {/* Metadata */}
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

            <p className="font-medium">
              {releaseYear}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

            <span className="font-medium">
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
              Original
            </span>
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
            px-6 py-4
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

      {/* Glow Effect */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-amber-500/5
            via-transparent
            to-amber-500/5
          "
        />
      </div>
    </article>
  );
}