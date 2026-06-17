export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;

  image: string;

  rating: number;
  featured: boolean;

  project: string;
  industry: string;

  quote: string;
  shortQuote: string;

  completedYear: string;

  tags: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: "TEST001",
    name: "Sarah Mitchell",
    role: "Documentary Producer",
    company: "Creative Vision Studios",
    location: "United Kingdom",

    image: "/images/testimonials/sarah-mitchell.jpg",

    rating: 5,
    featured: true,

    project: "Documentary Story Development",
    industry: "Film Production",

    quote:
      "Soulfire Chronicles Production demonstrated an extraordinary ability to transform complex ideas into compelling visual narratives. Their storytelling approach combines creativity, authenticity, and emotional depth in a way that truly resonates with audiences. Every stage of the production process reflected professionalism and passion.",

    shortQuote:
      "An extraordinary team with a remarkable gift for storytelling.",

    completedYear: "2025",

    tags: [
      "Documentary",
      "Storytelling",
      "Production",
      "Creative Direction",
    ],
  },

  {
    id: "TEST002",
    name: "David Thompson",
    role: "Creative Director",
    company: "Global Media Network",
    location: "United States",

    image: "/images/testimonials/david-thompson.jpg",

    rating: 5,
    featured: true,

    project: "Film Development",
    industry: "Media",

    quote:
      "Working with Soulfire Chronicles Production was an inspiring experience. Their commitment to meaningful storytelling and cinematic excellence exceeded expectations. The team consistently delivered creative solutions while maintaining a strong focus on audience engagement and emotional impact.",

    shortQuote:
      "Meaningful storytelling delivered with cinematic excellence.",

    completedYear: "2025",

    tags: [
      "Film",
      "Creative",
      "Visual Storytelling",
      "Production",
    ],
  },

  {
    id: "TEST003",
    name: "Emily Rodriguez",
    role: "Independent Filmmaker",
    company: "ER Productions",
    location: "Canada",

    image: "/images/testimonials/emily-rodriguez.jpg",

    rating: 5,
    featured: true,

    project: "Documentary Consultation",
    industry: "Independent Film",

    quote:
      "Soulfire Chronicles Production helped bring clarity and structure to a complex documentary concept. Their understanding of narrative flow and emotional storytelling significantly elevated the final project.",

    shortQuote:
      "Their storytelling expertise elevated the entire documentary.",

    completedYear: "2024",

    tags: [
      "Documentary",
      "Consulting",
      "Film",
      "Narrative",
    ],
  },

  {
    id: "TEST004",
    name: "Michael Anderson",
    role: "Executive Producer",
    company: "Storyline Productions",
    location: "Australia",

    image: "/images/testimonials/michael-anderson.jpg",

    rating: 5,
    featured: false,

    project: "Film Production Strategy",
    industry: "Entertainment",

    quote:
      "Professional, reliable, and highly creative. Soulfire Chronicles Production approaches every project with passion and dedication. Their ability to uncover the emotional core of a story sets them apart.",

    shortQuote:
      "A highly creative team that uncovers the heart of every story.",

    completedYear: "2025",

    tags: [
      "Production",
      "Film",
      "Creative Strategy",
    ],
  },

  {
    id: "TEST005",
    name: "Jennifer Collins",
    role: "Content Strategist",
    company: "Creative Impact Agency",
    location: "Germany",

    image: "/images/testimonials/jennifer-collins.jpg",

    rating: 5,
    featured: false,

    project: "Brand Storytelling Project",
    industry: "Marketing",

    quote:
      "The team delivered exceptional visual storytelling that connected deeply with audiences. Their creative vision and attention to detail made a significant difference to the project's success.",

    shortQuote:
      "Exceptional visual storytelling with outstanding attention to detail.",

    completedYear: "2024",

    tags: [
      "Brand Storytelling",
      "Creative",
      "Visual Content",
    ],
  },

  {
    id: "TEST006",
    name: "Robert Evans",
    role: "Media Consultant",
    company: "Insight Media",
    location: "New Zealand",

    image: "/images/testimonials/robert-evans.jpg",

    rating: 5,
    featured: false,

    project: "Research Documentary",
    industry: "Media",

    quote:
      "Soulfire Chronicles Production excels at combining research-driven content with cinematic presentation. Their documentaries are informative, engaging, and emotionally compelling.",

    shortQuote:
      "Research and storytelling blended into compelling documentaries.",

    completedYear: "2025",

    tags: [
      "Research",
      "Documentary",
      "Media",
    ],
  },

  {
    id: "TEST007",
    name: "Olivia Parker",
    role: "Creative Producer",
    company: "Visionary Films",
    location: "United Kingdom",

    image: "/images/testimonials/olivia-parker.jpg",

    rating: 5,
    featured: false,

    project: "Visual Narrative Development",
    industry: "Film",

    quote:
      "Their storytelling process is thoughtful, strategic, and deeply human. Soulfire Chronicles Production creates stories that leave a lasting impression long after the credits roll.",

    shortQuote:
      "Stories that remain with audiences long after viewing.",

    completedYear: "2025",

    tags: [
      "Narrative",
      "Film",
      "Story Development",
    ],
  },

  {
    id: "TEST008",
    name: "Daniel Harris",
    role: "Production Manager",
    company: "Northern Studios",
    location: "Ireland",

    image: "/images/testimonials/daniel-harris.jpg",

    rating: 5,
    featured: false,

    project: "Documentary Production",
    industry: "Production",

    quote:
      "The professionalism and creative insight provided by Soulfire Chronicles Production were invaluable. Their dedication to excellence was evident throughout the project lifecycle.",

    shortQuote:
      "Professional, insightful, and committed to excellence.",

    completedYear: "2024",

    tags: [
      "Production",
      "Documentary",
      "Creative Excellence",
    ],
  },

  {
    id: "TEST009",
    name: "Sophia Bennett",
    role: "Story Consultant",
    company: "Narrative Works",
    location: "United States",

    image: "/images/testimonials/sophia-bennett.jpg",

    rating: 5,
    featured: true,

    project: "Story Development",
    industry: "Creative Services",

    quote:
      "Few production companies understand the emotional power of storytelling as well as Soulfire Chronicles Production. Their work consistently inspires, educates, and connects people.",

    shortQuote:
      "Storytelling that inspires, educates, and connects audiences.",

    completedYear: "2025",

    tags: [
      "Storytelling",
      "Creative",
      "Audience Engagement",
    ],
  },

  {
    id: "TEST010",
    name: "James Walker",
    role: "Documentary Researcher",
    company: "Global Research Films",
    location: "Singapore",

    image: "/images/testimonials/james-walker.jpg",

    rating: 5,
    featured: true,

    project: "Research Documentary",
    industry: "Research",

    quote:
      "Their ability to transform research and complex ideas into accessible visual narratives is remarkable. Every project demonstrates authenticity, depth, and artistic excellence.",

    shortQuote:
      "Authentic, insightful, and visually outstanding storytelling.",

    completedYear: "2025",

    tags: [
      "Research",
      "Visual Storytelling",
      "Documentary",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Featured Testimonials */
/* -------------------------------------------------------------------------- */

export const featuredTestimonials = testimonials.filter(
  (testimonial) => testimonial.featured
);

/* -------------------------------------------------------------------------- */
/* Helper Functions */
/* -------------------------------------------------------------------------- */

export const getTestimonialById = (
  id: string
): Testimonial | undefined => {
  return testimonials.find(
    (testimonial) => testimonial.id === id
  );
};

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(
    (testimonial) => testimonial.featured
  );
};

export const getTestimonialsByIndustry = (
  industry: string
): Testimonial[] => {
  return testimonials.filter(
    (testimonial) =>
      testimonial.industry
        .toLowerCase()
        .includes(industry.toLowerCase())
  );
};

export const getTestimonialsByRating = (
  rating: number
): Testimonial[] => {
  return testimonials.filter(
    (testimonial) => testimonial.rating >= rating
  );
};

export const getRecentTestimonials = (
  limit = 6
): Testimonial[] => {
  return testimonials
    .sort(
      (a, b) =>
        Number(b.completedYear) -
        Number(a.completedYear)
    )
    .slice(0, limit);
};

export const averageRating = Number(
  (
    testimonials.reduce(
      (acc, testimonial) => acc + testimonial.rating,
      0
    ) / testimonials.length
  ).toFixed(1)
);

export const totalTestimonials =
  testimonials.length;

export const totalFeaturedTestimonials =
  featuredTestimonials.length;