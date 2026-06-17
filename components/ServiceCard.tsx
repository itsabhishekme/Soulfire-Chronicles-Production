"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Sparkles,
  Star,
  Award,
} from "lucide-react";
import { ReactNode } from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  features?: string[];
  duration?: string;
  featured?: boolean;
  popular?: boolean;
  category?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href = "/contact",
  features = [],
  duration = "Custom Timeline",
  featured = false,
  popular = false,
  category = "Production Service",
}: ServiceCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        ${
          featured
            ? "border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-black"
            : "border-white/10 bg-white/[0.03]"
        }
      `}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/10" />
      </div>

      {/* Popular Badge */}
      {popular && (
        <div className="absolute right-5 top-5 z-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-black shadow-lg">
            <Star className="h-3 w-3 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      {/* Featured Badge */}
      {featured && !popular && (
        <div className="absolute right-5 top-5 z-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-400">
            <Award className="h-3 w-3" />
            Featured
          </div>
        </div>
      )}

      <div className="relative z-10 p-8">
        {/* Icon */}
        <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-amber-400">{icon}</div>
        </div>

        {/* Category */}
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-amber-400" />

          <span className="text-xs uppercase tracking-[0.2em] text-amber-400">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-3xl font-bold transition-colors duration-300 group-hover:text-amber-400">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-8 text-gray-400 leading-8">
          {description}
        </p>

        {/* Timeline */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-amber-400" />

            <div>
              <p className="text-xs text-gray-500">
                Delivery Timeline
              </p>

              <p className="font-medium">{duration}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              What's Included
            </h4>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />

                  <span className="text-gray-400">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <Link
          href={href}
          className="
            group/button
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-amber-500
            px-6
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:bg-amber-400
          "
        >
          Learn More

          <ArrowRight
            className="
              h-5
              w-5
              transition-transform
              duration-300
              group-hover/button:translate-x-1
            "
          />
        </Link>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}