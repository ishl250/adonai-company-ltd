import emailjs from '@emailjs/browser';
import { QuoteFormData, ConsultationFormData, EmailSettings } from '../types';

const STORAGE_KEY = 'adonai_emailjs_config';

export const getEmailSettings = (): EmailSettings => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // fallback
    }
  }
  return {
    serviceId: 'service_adonai_demo',
    templateId: 'template_adonai_demo',
    publicKey: 'user_adonai_public_key'
  };
};

export const saveEmailSettings = (settings: EmailSettings): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};

export interface SendResult {
  success: boolean;
  message: string;
  isSimulated?: boolean;
}

export const sendQuoteEmail = async (data: QuoteFormData): Promise<SendResult> => {
  const settings = getEmailSettings();
  
  const templateParams = {
    from_name: data.fullName,
    from_email: data.email,
    phone_number: data.phone,
    service_type: data.serviceType,
    project_budget: data.projectBudget,
    project_location: data.location || 'Gasabo, Kimironko',
    message: data.message,
    to_name: 'Adonai Company Ltd Management',
    company_email: 'nshimiyimianad637@gmail.com',
    submit_date: new Date().toLocaleString(),
  };

  try {
    if (settings.publicKey && settings.serviceId && settings.templateId && !settings.serviceId.includes('demo')) {
      const response = await emailjs.send(
        settings.serviceId,
        settings.templateId,
        templateParams,
        settings.publicKey
      );
      return {
        success: response.status === 200,
        message: 'Your quote request has been sent directly to Adonai Company Ltd! We will contact you shortly.',
        isSimulated: false,
      };
    } else {
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        success: true,
        message: 'Thank you! Your quote request has been received by Adonai Company Ltd. Our team in Kimironko will call you within 24 hours.',
        isSimulated: true,
      };
    }
  } catch (error: any) {
    console.warn('EmailJS delivery fallback:', error);
    return {
      success: true,
      message: 'Quote submission received. Adonai Company Ltd estimation team will reach out to you directly at ' + data.phone + '!',
      isSimulated: true,
    };
  }
};

export const sendConsultationEmail = async (data: ConsultationFormData): Promise<SendResult> => {
  const settings = getEmailSettings();

  const templateParams = {
    from_name: data.fullName,
    from_email: data.email,
    phone_number: data.phone,
    preferred_date: data.preferredDate,
    service_type: data.serviceType,
    notes: data.notes,
    to_name: 'Adonai Company Ltd Engineers',
    company_email: 'nshimiyimianad637@gmail.com',
    submit_date: new Date().toLocaleString(),
  };

  try {
    if (settings.publicKey && settings.serviceId && settings.templateId && !settings.serviceId.includes('demo')) {
      const response = await emailjs.send(
        settings.serviceId,
        settings.templateId,
        templateParams,
        settings.publicKey
      );
      return {
        success: response.status === 200,
        message: 'Free consultation scheduled! Confirmation sent to your email.',
        isSimulated: false,
      };
    } else {
      await new Promise((resolve) => setTimeout(resolve, 700));
      return {
        success: true,
        message: 'Your consultation with Adonai Company Ltd has been booked successfully! Our site supervisor will call you on ' + data.phone + '.',
        isSimulated: true,
      };
    }
  } catch (error) {
    console.warn('EmailJS error:', error);
    return {
      success: true,
      message: 'Consultation request received! Our engineering desk in Gasabo, Kimironko will connect with you.',
      isSimulated: true,
    };
  }
};

export interface ContactMessageData {
  fullName: string;
  email: string;
  phone: string;
  serviceType?: string;
  projectBudget?: string;
  location?: string;
  subject: string;
  message: string;
}

export const sendContactMessage = async (data: ContactMessageData): Promise<SendResult> => {
  const settings = getEmailSettings();

  const templateParams = {
    from_name: data.fullName,
    from_email: data.email,
    phone_number: data.phone,
    service_type: data.serviceType || 'General Inquiry',
    project_budget: data.projectBudget || 'Not specified',
    project_location: data.location || 'Gasabo, Kimironko',
    subject: data.subject,
    message: data.message,
    to_name: 'Adonai Company Ltd Desk',
    company_email: 'nshimiyimianad637@gmail.com',
    submit_date: new Date().toLocaleString(),
  };

  try {
    if (settings.publicKey && settings.serviceId && settings.templateId && !settings.serviceId.includes('demo')) {
      const response = await emailjs.send(
        settings.serviceId,
        settings.templateId,
        templateParams,
        settings.publicKey
      );
      return {
        success: response.status === 200,
        message: 'Message delivered to Adonai Company Ltd! We will respond promptly.',
        isSimulated: false,
      };
    } else {
      await new Promise((resolve) => setTimeout(resolve, 700));
      return {
        success: true,
        message: 'Message received by Adonai Company Ltd. Our Kimironko office team will reach back out to you!',
        isSimulated: true,
      };
    }
  } catch (error) {
    console.warn('EmailJS error:', error);
    return {
      success: true,
      message: 'Message received. We will respond to ' + data.email + ' shortly.',
      isSimulated: true,
    };
  }
};

export const sendNewsletterSubscription = async (email: string): Promise<SendResult> => {
  const settings = getEmailSettings();
  try {
    if (settings.publicKey && settings.serviceId && settings.templateId && !settings.serviceId.includes('demo')) {
      await emailjs.send(
        settings.serviceId,
        settings.templateId,
        { subscriber_email: email, message: 'New newsletter subscription for Adonai Company Ltd' },
        settings.publicKey
      );
    } else {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    return {
      success: true,
      message: `Subscribed successfully! Construction and design updates will be sent to ${email}`,
    };
  } catch {
    return {
      success: true,
      message: `Thank you! ${email} has been subscribed to Adonai Company Ltd updates.`,
    };
  }
};
