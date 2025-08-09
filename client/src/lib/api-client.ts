// Static version for GitHub Pages - no backend API calls
export interface ConsultationData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  automationNeeds: string;
  message?: string;
}

export async function submitConsultation(data: ConsultationData): Promise<{ success: boolean; message: string }> {
  // For GitHub Pages deployment, we'll use a service like Formspree, Netlify Forms, or similar
  // This is a placeholder that simulates the API call
  
  try {
    // Option 1: Use Formspree (recommended)
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      return { success: true, message: 'Form submitted successfully!' };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    // Fallback: mailto link or alternative service
    console.log('Consultation request:', data);
    
    // Create mailto link as fallback
    const subject = `Consultation Request from ${data.firstName} ${data.lastName}`;
    const body = `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company}
Automation Needs: ${data.automationNeeds}
Message: ${data.message || 'Not provided'}
    `.trim();
    
    const mailtoLink = `mailto:info@landisventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    
    return { 
      success: true, 
      message: 'Your email client has been opened with the consultation request. Please send the email to complete your request.' 
    };
  }
}

export async function getConsultations(): Promise<any[]> {
  // For static GitHub Pages, this would return empty array
  // In a real implementation, this could fetch from a headless CMS or similar
  return [];
}