import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Soulfire Chronicles Production for documentary filmmaking, film production, storytelling projects, collaborations, and creative services.",
};

export default function ContactPage() {
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
                Contact Soulfire Chronicles Production
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Let's Create
              <span className="block text-amber-400">
                Something Extraordinary
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're planning a documentary, film project,
              cinematic story, branded content, or creative
              collaboration, we'd love to hear your vision and help
              bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* CONTACT FORM */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
                <h2 className="text-4xl font-bold mb-4">
                  Send Us a Message
                </h2>

                <p className="text-gray-400 mb-10">
                  Tell us about your project, idea, or collaboration
                  opportunity. Our team will get back to you as soon
                  as possible.
                </p>

                <form className="space-y-6">
                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Full Name
                    </label>

                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-gray-500" />

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-500" />

                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-500" />

                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Documentary Project"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-sm font-medium mb-3">
                      Service Required
                    </label>

                    <select
                      id="serviceRequired"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-400"
                    >
                      <option>Documentary Production</option>
                      <option>Film Production</option>
                      <option>Video Production</option>
                      <option>Post Production</option>
                      <option>Script Writing</option>
                      <option>Motion Graphics</option>
                      <option>Creative Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* BUDGET */}
                  <div>
                    <label htmlFor="estimatedBudget" className="block text-sm font-medium mb-3">
                      Estimated Budget
                    </label>

                    <select
                      id="estimatedBudget"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-400"
                    >
                      <option>Select Budget Range</option>
                      <option>Below ₹50,000</option>
                      <option>₹50,00,000 - ₹1,00,000</option>
                      <option>₹1,00,000 - ₹5,00,000</option>
                      <option>₹5,00,000 - ₹10,00,000</option>
                      <option>Above ₹10,00,000</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Project Details
                    </label>

                    <textarea
                      rows={8}
                      placeholder="Tell us about your project, vision, goals, and requirements..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 resize-none focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl transition"
                  >
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Building2 className="w-10 h-10 text-amber-400 mb-5" />

                <h3 className="text-2xl font-bold mb-4">
                  Soulfire Chronicles Production
                </h3>

                <p className="text-gray-400 leading-7">
                  Creating cinematic documentaries, inspirational
                  films, and meaningful visual stories that illuminate
                  minds and awaken souls.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Mail className="w-8 h-8 text-amber-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Email Address
                </h4>

                <p className="text-gray-400">
                  hello@soulfirechronicles.com
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Phone className="w-8 h-8 text-amber-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Phone Number
                </h4>

                <p className="text-gray-400">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <MapPin className="w-8 h-8 text-amber-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Location
                </h4>

                <p className="text-gray-400">
                  India
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Clock3 className="w-8 h-8 text-amber-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Business Hours
                </h4>

                <div className="space-y-2 text-gray-400">
                  <p>Monday - Friday</p>
                  <p>09:00 AM - 06:00 PM</p>
                  <p>Saturday</p>
                  <p>10:00 AM - 02:00 PM</p>
                  <p>Sunday - Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-black p-16 text-center">
            <h2 className="text-5xl font-bold mb-6">
              Ready To Start Your Project?
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              From concept development to final delivery, Soulfire
              Chronicles Production is committed to bringing powerful
              stories to life through cinematic excellence and
              meaningful storytelling.
            </p>

            <button className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl transition">
              Begin Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}