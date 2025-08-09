import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, Clock, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

const consultationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  automationNeeds: z.string().min(1, "Please select your automation needs"),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to receive communications"),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

export default function ContactSectionStatic() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      automationNeeds: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ConsultationForm) => {
    setIsSubmitting(true);
    
    try {
      // Create email content
      const subject = `Consultation Request from ${data.firstName} ${data.lastName}`;
      const body = `
Hello,

I am interested in learning more about Landis Ventures' automation services.

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}
- Company: ${data.company}

Automation Needs: ${data.automationNeeds}

${data.message ? `Additional Details:\n${data.message}` : ''}

I consent to receive communications regarding this consultation request.

Best regards,
${data.firstName} ${data.lastName}
      `.trim();

      // For GitHub Pages deployment, open email client
      const mailtoLink = `mailto:info@landisventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Try to use Formspree if configured, otherwise fallback to mailto
      if (process.env.NODE_ENV === 'production' && import.meta.env.VITE_FORMSPREE_ID) {
        const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone,
            company: data.company,
            automationNeeds: data.automationNeeds,
            message: data.message,
            _subject: subject
          }),
        });

        if (response.ok) {
          setLocation("/thank-you");
          return;
        }
      }
      
      // Fallback to email client
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Email Client Opened",
        description: "Please send the email to complete your consultation request. We'll respond within 24 hours.",
        variant: "default",
      });
      
      // Redirect to thank you page after a delay
      setTimeout(() => {
        setLocation("/thank-you");
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try contacting us directly at info@landisventures.com",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 rounded-lg p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Automate Your Success?
            </h2>
            <p className="text-gray-300 mt-4 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can solve your most pressing operational challenges and unlock new opportunities for growth. The first step is a complimentary consultation.
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">First Name *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Enter your first name"
                          className="form-input text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Last Name *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Enter your last name"
                          className="form-input text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          placeholder="your.email@company.com"
                          className="form-input text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="form-input text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Company *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        placeholder="Your company name"
                        className="form-input text-white"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="automationNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Automation Needs *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="form-input text-white">
                          <SelectValue placeholder="Select your primary need" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="rpa">Robotic Process Automation (RPA)</SelectItem>
                        <SelectItem value="idp">Intelligent Document Processing (IDP)</SelectItem>
                        <SelectItem value="data-processing">Data Processing & Reconciliation</SelectItem>
                        <SelectItem value="workflow">End-to-End Workflow Automation</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="consultation">Not sure - Need consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={4}
                        placeholder="Tell us about your current challenges and automation goals..."
                        className="form-input text-white resize-vertical"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="accent-blue-600"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-300">
                        I agree to receive communications from Landis Ventures regarding my consultation request. *
                      </FormLabel>
                      <FormMessage className="text-red-400" />
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-button bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed min-w-[280px]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing Request...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="w-5 h-5" />
                      <span>Schedule Free Consultation</span>
                    </div>
                  )}
                </Button>
                
                {/* Form validation summary */}
                {Object.keys(form.formState.errors).length > 0 && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md">
                    <div className="flex items-center space-x-2 text-red-400">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm">Please fill in all required fields correctly</span>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </Form>
          
          {/* Direct Contact Info */}
          <div className="mt-16 pt-12 border-t border-gray-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="mb-4">
                  <Mail className="w-8 h-8 mx-auto text-blue-500" />
                </div>
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">info@landisventures.com</p>
              </div>
              <div>
                <div className="mb-4">
                  <Phone className="w-8 h-8 mx-auto text-blue-500" />
                </div>
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">(555) 123-AUTOMATE</p>
              </div>
              <div>
                <div className="mb-4">
                  <Clock className="w-8 h-8 mx-auto text-blue-500" />
                </div>
                <h3 className="font-semibold text-white mb-2">Response Time</h3>
                <p className="text-gray-400">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}