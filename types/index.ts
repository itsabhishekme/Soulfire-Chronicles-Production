
/* ============================================================================
   GLOBAL APPLICATION TYPES
   Soulfire Chronicles Production
============================================================================ */

/* ============================================================================
   COMMON TYPES
============================================================================ */

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonicalUrl?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
}

export interface StatItem {
  title: string;
  value: string;
  description?: string;
}

export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

/* ============================================================================
   DOCUMENTARY TYPES
============================================================================ */

export interface DocumentaryHighlight {
  title: string;
  description?: string;
}

export interface DocumentaryCrew {
  director: string;
  producer: string;
  writer?: string;
  cinematographer?: string;
  editor?: string;
  narrator?: string;
}

export interface Documentary extends BaseEntity {
  slug: string;

  title: string;

  subtitle: string;

  category: string;

  status:
    | "Concept"
    | "Research"
    | "Development"
    | "Pre Production"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Future Project";

  featured: boolean;

  duration: string;

  releaseYear: string;

  language: string;

  location: string;

  rating: number;

  views: string;

  poster: string;

  thumbnail: string;

  trailerUrl?: string;

  crew: DocumentaryCrew;

  shortDescription: string;

  description: string;

  tags: string[];

  highlights: DocumentaryHighlight[];
}

/* ============================================================================
   PRODUCTION TYPES
============================================================================ */

export interface Production extends BaseEntity {
  slug: string;

  title: string;

  category: string;

  featured: boolean;

  status: string;

  duration: string;

  description: string;

  image: string;

  releaseYear?: string;

  technologies?: string[];

  tags?: string[];
}

/* ============================================================================
   SERVICE TYPES
============================================================================ */

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

export interface Service extends BaseEntity {
  slug: string;

  title: string;

  shortTitle: string;

  category: string;

  featured: boolean;

  popular: boolean;

  description: string;

  shortDescription: string;

  duration: string;

  deliveryTime: string;

  image: string;

  seoTitle: string;

  seoDescription: string;

  targetAudience: string[];

  benefits: string[];

  technologies: string[];

  pricing: ServicePricing;

  features: ServiceFeature[];

  process: ServiceProcess[];
}

/* ============================================================================
   TESTIMONIAL TYPES
============================================================================ */

export interface Testimonial extends BaseEntity {
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

/* ============================================================================
   BLOG TYPES
============================================================================ */

export interface BlogAuthor {
  name: string;
  image?: string;
  role?: string;
}

export interface BlogPost extends BaseEntity {
  slug: string;

  title: string;

  excerpt: string;

  content: string;

  coverImage: string;

  category: string;

  tags: string[];

  featured: boolean;

  publishedAt: string;

  readingTime: string;

  author: BlogAuthor;

  seo: SeoMeta;
}

/* ============================================================================
   GALLERY TYPES
============================================================================ */

export interface GalleryItem extends BaseEntity {
  title: string;

  category: string;

  image: string;

  description?: string;

  featured?: boolean;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description?: string;
}

/* ============================================================================
   CONTACT TYPES
============================================================================ */

export interface ContactFormData {
  fullName: string;

  email: string;

  phone: string;

  company: string;

  service: string;

  budget: string;

  subject: string;

  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

/* ============================================================================
   TEAM TYPES
============================================================================ */

export interface TeamMember extends BaseEntity {
  name: string;

  role: string;

  image: string;

  bio: string;

  experience?: string;

  specialties?: string[];
}

/* ============================================================================
   HERO TYPES
============================================================================ */

export interface HeroContent {
  badge: string;

  title: string;

  highlightedTitle?: string;

  description: string;

  primaryButtonText: string;

  primaryButtonLink: string;

  secondaryButtonText?: string;

  secondaryButtonLink?: string;
}

/* ============================================================================
   FOOTER TYPES
============================================================================ */

export interface FooterLinkGroup {
  title: string;
  links: NavigationLink[];
}

/* ============================================================================
   PAGINATION TYPES
============================================================================ */

export interface PaginationMeta {
  currentPage: number;

  totalPages: number;

  totalItems: number;

  itemsPerPage: number;

  hasNextPage: boolean;

  hasPreviousPage: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];

  pagination: PaginationMeta;
}

/* ============================================================================
   API RESPONSE TYPES
============================================================================ */

export interface ApiResponse<T> {
  success: boolean;

  data?: T;

  message?: string;

  error?: string;
}

/* ============================================================================
   SEARCH TYPES
============================================================================ */

export interface SearchResult {
  id: string;

  title: string;

  slug: string;

  category: string;

  description: string;

  image?: string;
}

/* ============================================================================
   SITE CONFIG TYPES
============================================================================ */

export interface SiteConfig {
  name: string;

  description: string;

  url: string;

  email: string;

  phone: string;

  location: string;
}

/* ============================================================================
   PRODUCTION WORKFLOW TYPES
============================================================================ */

export interface WorkflowStep {
  step: string;

  title: string;

  description: string;
}

/* ============================================================================
   STATISTICS TYPES
============================================================================ */

export interface CompanyStat {
  title: string;

  value: string;

  icon?: string;

  description?: string;
}

/* ============================================================================
   THEME TYPES
============================================================================ */

export interface ThemeConfig {
  primaryColor: string;

  secondaryColor: string;

  backgroundColor: string;

  textColor: string;

  mutedTextColor: string;

  borderColor: string;
}

/* ============================================================================
   FILTER TYPES
============================================================================ */

export interface DocumentaryFilter {
  category?: string;

  status?: string;

  featured?: boolean;

  releaseYear?: string;
}

export interface ServiceFilter {
  category?: string;

  featured?: boolean;

  popular?: boolean;
}

export interface BlogFilter {
  category?: string;

  featured?: boolean;

  tag?: string;
}

/* ============================================================================
   UTILITY TYPES
============================================================================ */

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type AsyncResult<T> = Promise<ApiResponse<T>>;

export type ID = string;

/* ============================================================================
   RE-EXPORT HELPER TYPES
============================================================================ */

export type {
  ReactNode,
  ComponentProps,
  HTMLAttributes,
} from "react";