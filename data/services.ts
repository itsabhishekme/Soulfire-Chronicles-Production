import {
  Camera,
  Clapperboard,
  Film,
  Mic,
  MonitorPlay,
  PenTool,
  Wand2,
  Video,
  Globe,
  Users,
  Award,
  Sparkles,
  LucideIcon,
} from "lucide-react";

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServicePricing {
  starter: string;
  professional: string;
  enterprise: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  icon: LucideIcon;

  featured: boolean;
  popular: boolean;

  description: string;
  shortDescription: string;

  duration: string;
  deliveryTime: string;

  pricing: ServicePricing;

  targetAudience: string[];

  features: ServiceFeature[];

  process: ServiceProcess[];

  benefits: string[];

  technologies: string[];

  image: string;

  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: "SRV001",
    slug: "documentary-production",
    title: "Documentary Production",
    shortTitle: "Documentary",
    category: "Film Production",
    icon: Film,

    featured: true,
    popular: true,

    description:
      "Professional documentary production services focused on authentic storytelling, powerful narratives, cinematic visuals, and emotional audience engagement. We help transform real stories into meaningful documentary experiences.",

    shortDescription:
      "Research-driven documentaries crafted with cinematic storytelling.",

    duration: "4 - 12 Weeks",
    deliveryTime: "Project Dependent",

    pricing: {
      starter: "₹50,000+",
      professional: "₹2,00,000+",
      enterprise: "Custom Quote",
    },

    targetAudience: [
      "Filmmakers",
      "Organizations",
      "Researchers",
      "Educational Institutions",
      "Brands",
    ],

    features: [
      {
        id: "f1",
        title: "Research & Development",
        description:
          "Comprehensive research and story discovery.",
      },
      {
        id: "f2",
        title: "Interview Production",
        description:
          "Professional interviews and documentary conversations.",
      },
      {
        id: "f3",
        title: "Story Structuring",
        description:
          "Creating compelling documentary narratives.",
      },
      {
        id: "f4",
        title: "Cinematic Filming",
        description:
          "Professional documentary cinematography.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "Research and project planning.",
      },
      {
        step: 2,
        title: "Pre-Production",
        description:
          "Story development and scheduling.",
      },
      {
        step: 3,
        title: "Production",
        description:
          "Filming interviews and visual sequences.",
      },
      {
        step: 4,
        title: "Post Production",
        description:
          "Editing, sound, and finishing.",
      },
    ],

    benefits: [
      "Authentic Storytelling",
      "Professional Production",
      "Cinematic Quality",
      "Audience Engagement",
      "Global Distribution Ready",
    ],

    technologies: [
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
      "Cinema Cameras",
    ],

    image: "/images/services/documentary-production.jpg",

    seoTitle:
      "Documentary Production Services | Soulfire Chronicles Production",

    seoDescription:
      "Professional documentary filmmaking and storytelling services.",
  },

  {
    id: "SRV002",
    slug: "film-production",
    title: "Film Production",
    shortTitle: "Film Production",
    category: "Production",
    icon: Clapperboard,

    featured: true,
    popular: false,

    description:
      "End-to-end film production services covering planning, production management, filming, directing, editing, and final delivery.",

    shortDescription:
      "Complete filmmaking solutions from concept to screen.",

    duration: "Custom Timeline",
    deliveryTime: "Project Based",

    pricing: {
      starter: "₹75,000+",
      professional: "₹3,00,000+",
      enterprise: "Custom Quote",
    },

    targetAudience: [
      "Production Houses",
      "Independent Filmmakers",
      "Brands",
      "Studios",
    ],

    features: [
      {
        id: "f1",
        title: "Production Planning",
        description:
          "Comprehensive project planning and logistics.",
      },
      {
        id: "f2",
        title: "Crew Management",
        description:
          "Professional production team coordination.",
      },
      {
        id: "f3",
        title: "Location Management",
        description:
          "Location scouting and production setup.",
      },
      {
        id: "f4",
        title: "Final Delivery",
        description:
          "Broadcast and digital-ready outputs.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Concept",
        description:
          "Project planning and vision alignment.",
      },
      {
        step: 2,
        title: "Preparation",
        description:
          "Scheduling and resource planning.",
      },
      {
        step: 3,
        title: "Production",
        description:
          "Professional filming execution.",
      },
      {
        step: 4,
        title: "Delivery",
        description:
          "Final exports and distribution assets.",
      },
    ],

    benefits: [
      "Professional Production Workflow",
      "Scalable Solutions",
      "Creative Direction",
      "High-End Deliverables",
    ],

    technologies: [
      "Cinema Cameras",
      "Drone Systems",
      "Lighting Equipment",
      "Audio Systems",
    ],

    image: "/images/services/film-production.jpg",

    seoTitle:
      "Film Production Company | Soulfire Chronicles Production",

    seoDescription:
      "Professional film production services for brands and filmmakers.",
  },

  {
    id: "SRV003",
    slug: "video-editing",
    title: "Video Editing",
    shortTitle: "Editing",
    category: "Post Production",
    icon: MonitorPlay,

    featured: false,
    popular: true,

    description:
      "Professional editing services transforming raw footage into polished, engaging visual stories.",

    shortDescription:
      "Professional editing for films, documentaries, and digital content.",

    duration: "1 - 6 Weeks",
    deliveryTime: "Fast Turnaround",

    pricing: {
      starter: "₹10,000+",
      professional: "₹50,000+",
      enterprise: "Custom Quote",
    },

    targetAudience: [
      "YouTubers",
      "Filmmakers",
      "Businesses",
      "Content Creators",
    ],

    features: [
      {
        id: "f1",
        title: "Timeline Editing",
        description:
          "Professional story-driven editing.",
      },
      {
        id: "f2",
        title: "Color Correction",
        description:
          "Balanced and cinematic visuals.",
      },
      {
        id: "f3",
        title: "Audio Enhancement",
        description:
          "Clean and professional sound.",
      },
      {
        id: "f4",
        title: "Export Optimization",
        description:
          "Ready for multiple platforms.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Footage Review",
        description:
          "Assessing project assets.",
      },
      {
        step: 2,
        title: "Editing",
        description:
          "Story-focused editing workflow.",
      },
      {
        step: 3,
        title: "Review",
        description:
          "Client feedback and revisions.",
      },
      {
        step: 4,
        title: "Delivery",
        description:
          "Final project exports.",
      },
    ],

    benefits: [
      "Faster Turnaround",
      "Professional Quality",
      "Creative Storytelling",
      "Platform Optimization",
    ],

    technologies: [
      "Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
    ],

    image: "/images/services/video-editing.jpg",

    seoTitle:
      "Professional Video Editing Services",

    seoDescription:
      "Professional editing services for films and content creators.",
  },

  {
    id: "SRV004",
    slug: "motion-graphics",
    title: "Motion Graphics",
    shortTitle: "Motion Graphics",
    category: "Animation",
    icon: Wand2,

    featured: false,
    popular: false,

    description:
      "Engaging motion graphics, title sequences, animated explainers, and visual effects.",

    shortDescription:
      "Professional motion graphics and animation services.",

    duration: "1 - 4 Weeks",
    deliveryTime: "Flexible",

    pricing: {
      starter: "₹15,000+",
      professional: "₹75,000+",
      enterprise: "Custom Quote",
    },

    targetAudience: [
      "Brands",
      "Agencies",
      "Filmmakers",
    ],

    features: [],
    process: [],
    benefits: [
      "Animated Storytelling",
      "Modern Design",
      "Brand Enhancement",
    ],

    technologies: [
      "After Effects",
      "Illustrator",
      "Cinema 4D",
    ],

    image: "/images/services/motion-graphics.jpg",

    seoTitle:
      "Motion Graphics Services",

    seoDescription:
      "Creative motion graphics and animated visual content.",
  },

  {
    id: "SRV005",
    slug: "script-writing",
    title: "Script Writing",
    shortTitle: "Script Writing",
    category: "Creative Development",
    icon: PenTool,

    featured: false,
    popular: false,

    description:
      "Professional screenplay writing, documentary scripting, storytelling consultation, and narrative development.",

    shortDescription:
      "Story development and professional script writing.",

    duration: "1 - 8 Weeks",
    deliveryTime: "Project Based",

    pricing: {
      starter: "₹5,000+",
      professional: "₹30,000+",
      enterprise: "Custom Quote",
    },

    targetAudience: [
      "Authors",
      "Filmmakers",
      "Creators",
      "Brands",
    ],

    features: [],
    process: [],
    benefits: [
      "Stronger Storytelling",
      "Narrative Structure",
      "Audience Engagement",
    ],

    technologies: [
      "Final Draft",
      "Celtx",
      "Story Mapping",
    ],

    image: "/images/services/script-writing.jpg",

    seoTitle:
      "Script Writing Services",

    seoDescription:
      "Professional script writing and storytelling services.",
  },

  {
    id: "SRV006",
    slug: "voice-over-production",
    title: "Voice Over Production",
    shortTitle: "Voice Over",
    category: "Audio Production",
    icon: Mic,

    featured: false,
    popular: false,

    description:
      "Professional narration, documentary voiceovers, podcast intros, and branded audio production.",

    shortDescription:
      "Professional voice-over and narration production.",

    duration: "2 - 10 Days",
    deliveryTime: "Quick Delivery",

    pricing: {
      starter: "₹2,500+",
      professional: "₹15,000+",
      enterprise: "Custom Quote",
    },

    targetAudience: [
      "Filmmakers",
      "Businesses",
      "Podcasters",
    ],

    features: [],
    process: [],
    benefits: [
      "Professional Audio Quality",
      "Clear Narration",
      "Fast Turnaround",
    ],

    technologies: [
      "Adobe Audition",
      "Professional Microphones",
      "Audio Processing",
    ],

    image: "/images/services/voice-over.jpg",

    seoTitle:
      "Voice Over Production Services",

    seoDescription:
      "Professional narration and voice-over production services.",
  },
];

export const featuredServices = services.filter(
  (service) => service.featured
);

export const popularServices = services.filter(
  (service) => service.popular
);

export const getServiceBySlug = (
  slug: string
): Service | undefined => {
  return services.find(
    (service) => service.slug === slug
  );
};

export const getServicesByCategory = (
  category: string
): Service[] => {
  return services.filter(
    (service) => service.category === category
  );
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(
    (service) => service.featured
  );
};