import { supabase, FormSubmission } from './supabase';
import { sendEmail, formatEmailData, EmailData } from './emailjs';

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

export const submitForm = async (
  formData: any,
  formType: 'contact' | 'dealer' | 'booking' | 'hero'
): Promise<FormSubmissionResult> => {
  try {
    // First, save to Supabase
    const supabaseResult = await saveToSupabase(formData, formType);
    
    if (!supabaseResult.success) {
      return {
        success: false,
        message: 'Failed to save form data',
        error: supabaseResult.error
      };
    }

    // Then, send email notification
    const emailData = formatEmailData(formData, formType);
    const emailResult = await sendEmail(emailData);

    if (!emailResult.success) {
      // Even if email fails, we still consider the form submission successful
      // since the data was saved to Supabase
      console.warn('Form saved to database but email notification failed:', emailResult.error);
    }

    return {
      success: true,
      message: 'Form submitted successfully! We\'ll get back to you soon.'
    };

  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

const saveToSupabase = async (
  formData: any,
  formType: 'contact' | 'dealer' | 'booking' | 'hero'
): Promise<FormSubmissionResult> => {
  try {
    let submission: {
      Name: string;
      Email: string;
      Phone: string | null;
      'Additional info': string;
    };

    switch (formType) {
      case 'contact':
        submission = {
          Name: formData.name?.trim() || '',
          Email: formData.email?.trim() || '',
          Phone: formData.phone?.trim() || null,
          'Additional info': `Form Type: Contact\nProject Description: ${formData.projectDescription?.trim() || 'N/A'}`
        };
        break;
      
      case 'dealer':
        submission = {
          Name: `${formData.firstName?.trim() || ''} ${formData.lastName?.trim() || ''}`.trim(),
          Email: formData.email?.trim() || '',
          Phone: formData.phone?.trim() || null,
          'Additional info': `Form Type: Dealer\nCompany: ${formData.company?.trim() || 'N/A'}\nZip: ${formData.zipCode?.trim() || 'N/A'}\nCountry: ${formData.country?.trim() || 'N/A'}\nOnline Only: ${formData.onlineOnly?.trim() || 'N/A'}`
        };
        break;
      
      case 'booking':
        submission = {
          Name: formData.name?.trim() || 'Booking Inquiry',
          Email: formData.email?.trim() || 'booking@infinitespa.co',
          Phone: formData.phone?.trim() || null,
          'Additional info': `Form Type: Booking\nMessage: ${formData.message?.trim() || 'Booking consultation request'}`
        };
        break;
      
      case 'hero':
        submission = {
          Name: formData.name?.trim() || '',
          Email: formData.email?.trim() || '',
          Phone: formData.phone?.trim() || null,
          'Additional info': `Form Type: Hero\nLocation: ${formData.location?.trim() || 'Not specified'}`
        };
        break;
      
      default:
        throw new Error('Invalid form type');
    }

    const { data, error } = await supabase
      .from('infinitespa_all_leads')
      .insert([submission]);

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: 'Form data saved successfully'
    };

  } catch (error) {
    console.error('Error saving to Supabase:', error);
    return {
      success: false,
      message: 'Failed to save form data',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
};
