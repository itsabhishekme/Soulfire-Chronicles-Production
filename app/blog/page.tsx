import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Film,
  Search,
  Sparkles,
  Tag,
  TrendingUp,
  User,
  Star,
  Eye,
  Award,
  Heart,
  Flame,
  ChevronRight,
  Newspaper,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Blog | Soulfire Chronicles Production",
  description:
    "Explore filmmaking insights, documentary storytelling, production tips, creative inspiration, and behind-the-scenes articles from Soulfire Chronicles Production.",
};

const featuredPost = {
  title: "Before Her Name Existed: The Power of Stories That Find Us",
  excerpt:
    "Some stories enter our lives long before we understand their meaning. Explore destiny, intuition, synchronicity, and the mysterious connections that shape our lives.",
  category: "Featured Story",
  author: "Soulfire Chronicles Editorial Team",
  date: "June 2026",
  readTime: "12 min read",
};

const blogPosts = [
  {
    title: "How Documentary Films Change Perspectives",
    excerpt:
      "Authentic storytelling that transforms how audiences see the world.",
    category: "Documentary",
    readTime: "8 min read",
  },
  {
    title: "The Art of Visual Storytelling",
    excerpt:
      "How cinematography, editing, and sound shape unforgettable experiences.",
    category: "Filmmaking",
    readTime: "10 min read",
  },
  {
    title: "Signs, Synchronicities, and Storytelling",
    excerpt:
      "Why destiny-based narratives fascinate audiences worldwide.",
    category: "Inspiration",
    readTime: "7 min read",
  },
  {
    title: "Creating a Documentary From an Idea",
    excerpt:
      "Transforming concepts into compelling documentary experiences.",
    category: "Production",
    readTime: "11 min read",
  },
  {
    title: "The Importance of Sound in Film",
    excerpt:
      "How audio influences emotional engagement and immersion.",
    category: "Post Production",
    readTime: "6 min read",
  },
  {
    title: "Why Human Stories Matter",
    excerpt:
      "The timeless power of authentic experiences and emotional truth.",
    category: "Storytelling",
    readTime: "9 min read",
  },
];

const categories = [
  "Documentary",
  "Filmmaking",
  "Production",
  "Storytelling",
  "Inspiration",
  "Post Production",
];

const stats = [
  {
    icon: Film,
    value: "100+",
    label: "Articles Published",
  },
  {
    icon: Eye,
    value: "50K+",
    label: "Monthly Readers",
  },
  {
    icon: Award,
    value: "10+",
    label: "Documentary Projects",
  },
  {
    icon: Globe,
    value: "Worldwide",
    label: "Audience Reach",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="uppercase tracking-[0.25em] text-sm text-amber-300">
                Soulfire Chronicles Blog
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              Stories,
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Insights &
              </span>
              Inspiration
            </h1>

            <p className="mt-8 max-w-3xl text-xl text-gray-300 leading-9">
              Discover filmmaking wisdom, documentary storytelling,
              creative inspiration, production insights, and cinematic
              journeys that illuminate minds and awaken souls.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="relative pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              placeholder="Search articles..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-5 pl-14 pr-6 backdrop-blur-md focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
              >
                <item.icon className="h-8 w-8 text-amber-400 mb-4" />

                <h3 className="text-5xl font-black text-amber-400">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-[32px] border border-amber-500/20 bg-white/[0.03] backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[500px] bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-black flex items-center justify-center">
                <Film className="h-40 w-40 text-amber-400/20" />
              </div>

              <div className="p-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-amber-400">
                  <TrendingUp className="h-4 w-4" />
                  Featured Article
                </div>

                <h2 className="mt-6 text-5xl font-black leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400">
                  Read Article
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-8 text-4xl font-bold">
            Explore Categories
          </h2>

          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 hover:border-amber-400"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-16 text-5xl font-black">
            Latest Articles
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-amber-400/50 hover:-translate-y-2"
              >
                <div className="h-60 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-black flex items-center justify-center">
                  <Newspaper className="h-16 w-16 text-amber-400/30" />
                </div>

                <div className="p-8">
                  <div className="mb-4 flex items-center gap-2 text-amber-400">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-amber-400">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>

                    <button className="inline-flex items-center gap-2 text-amber-400">
                      Read More
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[32px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-14 text-center">
            <BookOpen className="h-14 w-14 text-amber-400 mx-auto mb-6" />

            <h2 className="text-5xl font-black mb-6">
              Stay Inspired
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-8">
              Receive filmmaking insights, documentary updates,
              storytelling inspiration, and exclusive behind-the-scenes
              content directly in your inbox.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-6 py-4 focus:border-amber-400 focus:outline-none"
              />

              <button className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[32px] border border-amber-500/20 bg-white/[0.03] p-16 text-center">
            <Flame className="h-16 w-16 text-amber-400 mx-auto mb-6" />

            <h2 className="text-6xl font-black mb-6">
              Discover Our Films
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8 mb-10">
              Explore powerful documentaries, inspirational stories,
              and cinematic experiences from Soulfire Chronicles
              Production.
            </p>

            <Link
              href="/documentaries"
              className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
            >
              View Documentaries
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}