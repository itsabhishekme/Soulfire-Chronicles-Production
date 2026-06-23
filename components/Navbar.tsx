"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Film,
  Sparkles,
  ChevronDown,
  Clapperboard,
} from "lucide-react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Productions",
    href: "/productions",
  },
  {
    name: "Documentaries",
    href: "/documentaries",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
            ? "backdrop-blur-xl bg-black/80 border-b border-white/10"
            : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-4">
              <div
                className="
      flex h-12 w-12 items-center justify-center
      overflow-hidden rounded-xl
      shadow-lg shadow-amber-500/20
    "
              >
                <img
                  src="/logo.png"
                  alt="Soulfire Chronicles Production Logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h1 className="text-lg font-bold tracking-wide">
                  SOULFIRE
                </h1>

                <p
                  className="
        text-[10px]
        uppercase
        tracking-[0.35em]
        text-amber-400
      "
                >
                  Chronicles Production
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative
                      px-4 py-2
                      rounded-lg
                      text-sm font-medium
                      transition-all duration-300
                      ${isActive
                        ? "text-amber-400"
                        : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    {item.name}

                    {isActive && (
                      <span
                        className="
                          absolute
                          left-3
                          right-3
                          bottom-0
                          h-[2px]
                          bg-amber-400
                          rounded-full
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-amber-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-amber-400
                  hover:scale-105
                "
              >
                <Sparkles className="h-4 w-4" />

                Start Project
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="
                lg:hidden
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
              "
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/95
            backdrop-blur-xl
            lg:hidden
          "
        >
          <div className="pt-28 px-6">
            <div className="mb-8 flex items-center gap-3">
              <Clapperboard className="h-8 w-8 text-amber-400" />

              <div>
                <h2 className="font-bold">
                  Soulfire Chronicles
                </h2>

                <p className="text-sm text-gray-400">
                  Production House
                </p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-5
                      py-4
                      transition-all
                      duration-300
                      ${isActive
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-white/5 border border-white/5 text-gray-300"
                      }
                    `}
                  >
                    <span>{item.name}</span>

                    <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-10">
              <Link
                href="/contact"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-amber-500
                  px-6
                  py-4
                  font-semibold
                  text-black
                "
              >
                <Sparkles className="h-5 w-5" />

                Start Your Project
              </Link>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold text-amber-400">
                Featured Project
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                <strong className="text-white">
                  Before Her Name Existed
                </strong>
                {" "}
                explores destiny, intuition, synchronicity,
                and the mysterious connections that shape
                our lives long before we understand them.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}