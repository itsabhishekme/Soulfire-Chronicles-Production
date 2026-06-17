export interface Documentary {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  duration: string;
  releaseYear: string;
  featured: boolean;
  rating: number;
  views: string;
  poster: string;
  thumbnail: string;
  trailerUrl?: string;
  director: string;
  producer: string;
  language: string;
  location: string;
  shortDescription: string;
  description: string;
  tags: string[];
  highlights: string[];
}

export const documentaries: Documentary[] = [
  {
    id: "DOC001",
    slug: "before-her-name-existed",
    title: "Before Her Name Existed",
    subtitle:
      "I Loved The Story Before I Knew The Character",
    category: "Inspirational Documentary",
    status: "In Production",
    duration: "90 Minutes",
    releaseYear: "2026",
    featured: true,
    rating: 4.9,
    views: "25K+",
    poster: "/images/documentaries/before-her-name-existed.jpg",
    thumbnail:
      "/images/documentaries/thumbnails/before-her-name-existed.jpg",
    trailerUrl: "#",
    director: "Soulfire Chronicles Production",
    producer: "Soulfire Chronicles Production",
    language: "English",
    location: "Global",
    shortDescription:
      "A cinematic exploration of destiny, intuition, dreams, and synchronicities before life-changing relationships begin.",
    description: `
What if the most important person in your life entered your story long
before you knew their name?

Before Her Name Existed explores dreams, intuition, coincidences,
synchronicities, spiritual experiences, and extraordinary stories
shared by people around the world.

Through interviews, research, and cinematic storytelling, the film
examines how meaningful relationships often leave traces long before
their arrival, creating a powerful narrative about destiny, connection,
and human experience.
    `,
    tags: [
      "Destiny",
      "Relationships",
      "Spirituality",
      "Dreams",
      "Synchronicity",
      "Human Stories",
    ],
    highlights: [
      "Global Interviews",
      "Cinematic Storytelling",
      "Inspirational Narrative",
      "Original Research",
      "Visual Journey",
    ],
  },

  {
    id: "DOC002",
    slug: "the-soulfire-chronicles",
    title: "The Soulfire Chronicles",
    subtitle:
      "Stories Of Transformation And Purpose",
    category: "Documentary Feature",
    status: "Development",
    duration: "75 Minutes",
    releaseYear: "2027",
    featured: true,
    rating: 4.8,
    views: "18K+",
    poster: "/images/documentaries/soulfire-chronicles.jpg",
    thumbnail:
      "/images/documentaries/thumbnails/soulfire-chronicles.jpg",
    director: "Soulfire Chronicles Production",
    producer: "Soulfire Chronicles Production",
    language: "English",
    location: "International",
    shortDescription:
      "A collection of powerful stories exploring resilience, transformation, and purpose.",
    description: `
The Soulfire Chronicles follows individuals whose lives were transformed
through adversity, faith, perseverance, and extraordinary personal journeys.

The documentary explores universal themes of hope, resilience,
self-discovery, and the courage to pursue purpose despite uncertainty.
    `,
    tags: [
      "Purpose",
      "Transformation",
      "Human Spirit",
      "Hope",
      "Resilience",
    ],
    highlights: [
      "Personal Journeys",
      "Global Perspectives",
      "Inspirational Stories",
      "Emotional Storytelling",
    ],
  },

  {
    id: "DOC003",
    slug: "signs-before-destiny",
    title: "Signs Before Destiny",
    subtitle:
      "The Hidden Clues That Shape Our Lives",
    category: "Investigative Documentary",
    status: "Research",
    duration: "60 Minutes",
    releaseYear: "2027",
    featured: false,
    rating: 4.7,
    views: "12K+",
    poster: "/images/documentaries/signs-before-destiny.jpg",
    thumbnail:
      "/images/documentaries/thumbnails/signs-before-destiny.jpg",
    director: "Soulfire Chronicles Production",
    producer: "Soulfire Chronicles Production",
    language: "English",
    location: "Worldwide",
    shortDescription:
      "Investigating extraordinary signs and moments that appear to guide human lives.",
    description: `
Many people describe moments that seemed insignificant at the time but
later revealed themselves as important turning points.

Signs Before Destiny investigates dreams, coincidences, intuitive
feelings, and unexplained experiences that people believe shaped
their future.
    `,
    tags: [
      "Signs",
      "Coincidence",
      "Destiny",
      "Life Stories",
      "Research",
    ],
    highlights: [
      "Case Studies",
      "Interviews",
      "Investigative Research",
      "Visual Storytelling",
    ],
  },

  {
    id: "DOC004",
    slug: "the-language-of-intuition",
    title: "The Language Of Intuition",
    subtitle:
      "Listening To The Voice Within",
    category: "Psychology Documentary",
    status: "Concept",
    duration: "70 Minutes",
    releaseYear: "2028",
    featured: false,
    rating: 4.6,
    views: "8K+",
    poster: "/images/documentaries/language-of-intuition.jpg",
    thumbnail:
      "/images/documentaries/thumbnails/language-of-intuition.jpg",
    director: "Soulfire Chronicles Production",
    producer: "Soulfire Chronicles Production",
    language: "English",
    location: "Global",
    shortDescription:
      "Exploring intuition and the mysterious inner guidance that influences decisions.",
    description: `
The Language Of Intuition explores how instinct, perception,
awareness, and intuition influence human decision-making.

Through expert interviews and personal experiences, the documentary
examines the relationship between logic and inner knowing.
    `,
    tags: [
      "Psychology",
      "Intuition",
      "Decision Making",
      "Awareness",
    ],
    highlights: [
      "Expert Interviews",
      "Scientific Perspectives",
      "Human Stories",
      "Visual Exploration",
    ],
  },

  {
    id: "DOC005",
    slug: "beyond-coincidence",
    title: "Beyond Coincidence",
    subtitle:
      "When Life Defies Probability",
    category: "Investigative Film",
    status: "Concept",
    duration: "80 Minutes",
    releaseYear: "2028",
    featured: false,
    rating: 4.5,
    views: "7K+",
    poster: "/images/documentaries/beyond-coincidence.jpg",
    thumbnail:
      "/images/documentaries/thumbnails/beyond-coincidence.jpg",
    director: "Soulfire Chronicles Production",
    producer: "Soulfire Chronicles Production",
    language: "English",
    location: "Worldwide",
    shortDescription:
      "Examining extraordinary events that challenge conventional explanations.",
    description: `
Beyond Coincidence explores remarkable stories that blur the line
between chance and meaning.

The documentary asks whether some events are merely random or part of
a deeper pattern connecting human lives.
    `,
    tags: [
      "Coincidence",
      "Mystery",
      "Life Events",
      "Destiny",
    ],
    highlights: [
      "Real Stories",
      "Global Perspectives",
      "Research",
      "Narrative Documentary",
    ],
  },

  {
    id: "DOC006",
    slug: "journey-of-the-soul",
    title: "Journey Of The Soul",
    subtitle:
      "Exploring Purpose Beyond The Ordinary",
    category: "Inspirational Film",
    status: "Future Project",
    duration: "95 Minutes",
    releaseYear: "2029",
    featured: false,
    rating: 4.8,
    views: "15K+",
    poster: "/images/documentaries/journey-of-the-soul.jpg",
    thumbnail:
      "/images/documentaries/thumbnails/journey-of-the-soul.jpg",
    director: "Soulfire Chronicles Production",
    producer: "Soulfire Chronicles Production",
    language: "English",
    location: "International",
    shortDescription:
      "A cinematic exploration of identity, purpose, growth, and meaning.",
    description: `
Journey Of The Soul follows individuals seeking answers to life's
biggest questions.

The film explores purpose, identity, spirituality, personal growth,
and the search for meaning in an increasingly complex world.
    `,
    tags: [
      "Purpose",
      "Identity",
      "Growth",
      "Spirituality",
      "Meaning",
    ],
    highlights: [
      "Global Stories",
      "Inspiring Interviews",
      "Cinematic Visuals",
      "Human Connection",
    ],
  },
];

export const featuredDocumentaries =
  documentaries.filter(
    (documentary) => documentary.featured
  );

export const upcomingDocumentaries =
  documentaries.filter(
    (documentary) =>
      documentary.status !== "Released"
  );

export const getDocumentaryBySlug = (
  slug: string
): Documentary | undefined => {
  return documentaries.find(
    (documentary) => documentary.slug === slug
  );
};

export const getFeaturedDocumentary = () => {
  return documentaries.find(
    (documentary) => documentary.featured
  );
};

export const getDocumentariesByCategory = (
  category: string
) => {
  return documentaries.filter(
    (documentary) =>
      documentary.category === category
  );
};