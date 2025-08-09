import { useEffect } from "react";

interface FormAnalyticsProps {
  formName: string;
  eventType: 'view' | 'start' | 'submit' | 'error' | 'abandon';
  eventData?: Record<string, any>;
}

export default function FormAnalytics({ formName, eventType, eventData }: FormAnalyticsProps) {
  useEffect(() => {
    // Simple form analytics tracking
    const analyticsEvent = {
      formName,
      eventType,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...eventData
    };

    // In a real implementation, you would send this to your analytics service
    console.log('Form Analytics:', analyticsEvent);

    // Example: Send to Google Analytics (if gtag is available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventType, {
        custom_parameter_form_name: formName,
        custom_parameter_event_data: JSON.stringify(eventData || {})
      });
    }

    // Example: Send to your custom analytics endpoint
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(analyticsEvent)
    // }).catch(console.error);

  }, [formName, eventType, eventData]);

  return null;
}

// Utility hook for form analytics
export function useFormAnalytics(formName: string) {
  const trackEvent = (eventType: FormAnalyticsProps['eventType'], eventData?: Record<string, any>) => {
    const event = new CustomEvent('formAnalytics', {
      detail: { formName, eventType, eventData }
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    // Track form view on mount
    trackEvent('view');

    // Track form abandonment on page unload
    const handleBeforeUnload = () => {
      trackEvent('abandon');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return { trackEvent };
}