"use client";

import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Briefcase,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return "Full Name is required.";
    }

    if (!formData.email.trim()) {
      return "Email Address is required.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      return "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      return "Subject is required.";
    }

    if (!formData.message.trim()) {
      return "Message is required.";
    }

    return "";
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      console.log("Contact Form Data:", formData);

      setSuccess(true);
      setFormData(initialFormData);
    } catch {
      setError(
        "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-4">
            Contact Our Team
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Tell us about your documentary, film project,
            storytelling concept, or creative collaboration.
            We would love to hear from you.
          </p>
        </div>

        {success && (
          <div className="mb-8 flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
            <CheckCircle2 className="w-6 h-6 text-green-400" />

            <div>
              <h4 className="font-semibold">
                Message Sent Successfully
              </h4>

              <p className="text-sm text-gray-300">
                Thank you for contacting Soulfire Chronicles
                Production.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-8 flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
            <AlertCircle className="w-6 h-6 text-red-400" />

            <div>
              <h4 className="font-semibold">
                Submission Error
              </h4>

              <p className="text-sm text-gray-300">
                {error}
              </p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-3 font-medium">
                Full Name
              </label>

              <div className="relative">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-500" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-3 font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-500" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-3 font-medium">
                Phone Number
              </label>

              <div className="relative">
                <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-500" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-3 font-medium">
                Company / Organization
              </label>

              <div className="relative">
                <Building2 className="absolute left-4 top-4 w-5 h-5 text-gray-500" />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-sm mb-3 font-medium">
                Service Required
              </label>

              <div className="relative">
                <Briefcase className="absolute left-4 top-4 w-5 h-5 text-gray-500 z-10" />

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                >
                  <option value="">
                    Select Service
                  </option>

                  <option>
                    Documentary Production
                  </option>

                  <option>Film Production</option>

                  <option>Video Editing</option>

                  <option>Motion Graphics</option>

                  <option>Script Writing</option>

                  <option>Creative Direction</option>

                  <option>
                    Voice Over Production
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm mb-3 font-medium">
                Project Budget
              </label>

              <div className="relative">
                <DollarSign className="absolute left-4 top-4 w-5 h-5 text-gray-500 z-10" />

                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
                >
                  <option value="">
                    Select Budget
                  </option>

                  <option>
                    Below ₹50,000
                  </option>

                  <option>
                    ₹50,000 - ₹1,00,000
                  </option>

                  <option>
                    ₹1,00,000 - ₹5,00,000
                  </option>

                  <option>
                    ₹5,00,000 - ₹10,00,000
                  </option>

                  <option>
                    Above ₹10,00,000
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* SUBJECT */}
          <div>
            <label className="block text-sm mb-3 font-medium">
              Subject
            </label>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion"
                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm mb-3 font-medium">
              Project Details
            </label>

            <textarea
              rows={8}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, audience, timeline, and vision..."
              className="w-full resize-none bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* SUBMIT */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}