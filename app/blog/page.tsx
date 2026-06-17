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
} from "lucide-react";

export const metadata = {
  title: "Blog",
  description:
    "Explore filmmaking insights, documentary storytelling, production tips, creative inspiration, and behind-the-scenes articles from Soulfire Chronicles Production.",
};

const featuredPost = {
  title: "Before Her Name Existed: The Power of Stories That Find Us",
  excerpt:
    "Some stories enter our lives long before we understand their meaning. Discover how documentary storytelling can reveal hidden connections, destiny, intuition, and the human experience.",
  category: "Featured Story",
  author: "Soulfire Chronicles Editorial Team",
  date: "June 2026",
  readTime: "12 min read",
};

const blogPosts = [
  {
    title: "How Documentary Films Change Perspectives",
    excerpt:
      "Exploring how documentaries influence audiences, challenge assumptions, and inspire action through authentic storytelling.",
    category: "Documentary",
    readTime: "8 min read",
  },
  {
    title: "The Art of Visual Storytelling",
    excerpt:
      "Learn how cinematography, editing, sound design, and narrative structure create emotional audience experiences.",
    category: "Filmmaking",
    readTime: "10 min read",
  },
  {
    title: "Signs, Synchronicities, and Storytelling",
    excerpt:
      "Why stories about destiny and coincidence continue to fascinate audiences across cultures and generations.",
    category: "Inspiration",
    readTime: "7 min read",
  },
  {
    title: "Creating a Documentary From an Idea",
    excerpt:
      "A practical guide for turning a concept into a fully developed documentary project.",
    category: "Production",
    readTime: "11 min read",
  },
  {
    title: "The Importance of Sound in Film",
    excerpt:
      "Discover how music, voiceovers, and ambient audio shape audience emotions.",
    category: "Post Production",
    readTime: "6 min read",
  },
  {
    title: "Why Human Stories Matter",
    excerpt:
      "The enduring power of authentic experiences in a world increasingly driven by technology.",
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

export default function BlogPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="uppercase tracking-widest text-sm">
                Soulfire Chronicles Blog
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Stories,
              <span className="block text-amber-400">
                Insights & Inspiration
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Explore filmmaking insights, documentary storytelling,
              production techniques, creative inspiration, and
              behind-the-scenes journeys from Soulfire Chronicles
              Production.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />

            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-amber-500/20 to-black min-h-[400px]" />

              <div className="p-12">
                <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm">
                  <TrendingUp className="w-4 h-4" />
                  Featured Article
                </span>

                <h2 className="text-4xl font-bold mt-6 mb-6">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-300 text-lg leading-8 mb-8">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-amber-400 transition">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Explore Categories
          </h2>

          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:border-amber-400 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-amber-400/50 transition"
              >
                <div className="h-56 bg-gradient-to-br from-amber-600/20 to-black" />

                <div className="p-8">
                  <div className="flex items-center gap-2 text-amber-400 text-sm mb-4">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>

                    <button className="inline-flex items-center gap-2 text-amber-400">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BookOpen className="w-12 h-12 text-amber-400 mx-auto mb-6" />

          <h2 className="text-5xl font-bold mb-6">
            Stay Inspired
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Subscribe to receive updates on new documentaries,
            filmmaking insights, behind-the-scenes stories, and
            exclusive content from Soulfire Chronicles Production.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-400"
            />

            <button className="bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <Film className="w-12 h-12 text-amber-400 mx-auto mb-6" />

            <h2 className="text-5xl font-bold mb-6">
              Discover Our Films
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Explore documentaries, visual stories, and cinematic
              experiences created by Soulfire Chronicles Production.
            </p>

            <Link
              href="/documentaries"
              className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
            >
              View Documentaries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}