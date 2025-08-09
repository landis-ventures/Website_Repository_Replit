import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { CheckCircle, Clock, Mail, Phone } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    // Add any analytics tracking here if needed
    console.log("Thank you page visited");
  }, []);

  return (
    <div className="min-h-screen bg-landis-bg">
      <SEOHead
        title="Thank You - Consultation Request Submitted | Landis Ventures"
        description="Thank you for your consultation request. Our automation experts will contact you within 24 hours to discuss your financial services automation needs."
        canonicalUrl={`${window.location.origin}/thank-you`}
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-8">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>

            {/* Main Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-landis-text mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-landis-text-muted mb-8">
              Your consultation request has been successfully submitted. We're excited to help you transform your operations with intelligent automation.
            </p>

            {/* What's Next */}
            <div className="bg-landis-card rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold text-landis-text mb-6">
                What Happens Next?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-landis-primary rounded-full flex items-center justify-center text-white font-semibold">
                      1
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-landis-text mb-1">Initial Review</h3>
                    <p className="text-landis-text-muted">
                      Our team will review your submission and prepare a customized consultation agenda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-landis-primary rounded-full flex items-center justify-center text-white font-semibold">
                      2
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-landis-text mb-1">Personal Contact</h3>
                    <p className="text-landis-text-muted">
                      A senior consultant will reach out within 24 hours to schedule your free consultation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-landis-primary rounded-full flex items-center justify-center text-white font-semibold">
                      3
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-landis-text mb-1">Strategic Discussion</h3>
                    <p className="text-landis-text-muted">
                      We'll dive deep into your challenges and outline potential automation opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-landis-card rounded-lg p-8 mb-8">
              <h2 className="text-xl font-semibold text-landis-text mb-6">
                Need Immediate Assistance?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Mail className="w-8 h-8 mx-auto text-landis-primary mb-2" />
                  <h3 className="font-semibold text-landis-text mb-1">Email</h3>
                  <p className="text-landis-text-muted">info@landisventures.com</p>
                </div>
                <div>
                  <Phone className="w-8 h-8 mx-auto text-landis-primary mb-2" />
                  <h3 className="font-semibold text-landis-text mb-1">Phone</h3>
                  <p className="text-landis-text-muted">(555) 123-AUTOMATE</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto text-landis-primary mb-2" />
                  <h3 className="font-semibold text-landis-text mb-1">Response Time</h3>
                  <p className="text-landis-text-muted">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* CTA to return home */}
            <Link
              href="/"
              className="inline-block bg-landis-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-landis-primary-dark transition"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}