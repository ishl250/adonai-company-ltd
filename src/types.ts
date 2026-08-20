export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'finishing' | 'building' | 'painting' | 'interior' | 'renovation';
  imageUrl?: string;
  fullDescription?: string;
  features?: string[];
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  location?: string;
  year?: string;
  duration?: string;
  client?: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  phone?: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface StatItem {
  percentage: number;
  title: string;
  subtitle: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  subtitle: string;
  icon: 'shield' | 'team' | 'clock' | 'satisfaction';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  location: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  category: string;
  date: string;
  imageUrl?: string;
  excerpt?: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectBudget: string;
  location: string;
  message: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  serviceType: string;
  notes: string;
}

export interface EmailSettings {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
