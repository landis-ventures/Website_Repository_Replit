import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-landis-bg">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-landis-text mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-landis-card rounded-lg p-8 mb-8">
                <p className="text-landis-text-muted text-lg mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <p className="text-landis-text-muted">
                  These Terms of Service govern your use of the Landis Ventures website and services. By accessing or using our services, you agree to be bound by these terms.
                </p>
              </div>

              <div className="space-y-8">
                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">1. Acceptance of Terms</h2>
                  <p className="text-landis-text-muted">
                    By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">2. Service Description</h2>
                  <div className="text-landis-text-muted space-y-4">
                    <p>Landis Ventures provides automation consulting services including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Robotic Process Automation (RPA) implementation</li>
                      <li>Intelligent Document Processing (IDP) solutions</li>
                      <li>Data processing and reconciliation automation</li>
                      <li>End-to-end workflow automation design</li>
                      <li>Consultation and strategic automation planning</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">3. User Responsibilities</h2>
                  <div className="text-landis-text-muted space-y-4">
                    <p>You agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and complete information when using our services</li>
                      <li>Maintain the confidentiality of any account credentials</li>
                      <li>Use our services only for lawful purposes</li>
                      <li>Not interfere with or disrupt the integrity of our services</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">4. Consultation Process</h2>
                  <div className="text-landis-text-muted space-y-4">
                    <p>Our consultation process includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Initial consultation requests are non-binding inquiries</li>
                      <li>Formal proposals require separate agreement and signatures</li>
                      <li>Project scope and deliverables will be clearly defined in writing</li>
                      <li>Payment terms and schedules will be specified in project agreements</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">5. Intellectual Property</h2>
                  <div className="text-landis-text-muted space-y-4">
                    <p>
                      All content on this website, including text, graphics, logos, and software, is the property of Landis Ventures and is protected by intellectual property laws. Custom solutions developed for clients will be governed by separate project agreements.
                    </p>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">6. Confidentiality</h2>
                  <p className="text-landis-text-muted">
                    We understand the sensitive nature of financial services automation. All client information and project details are treated as confidential. Formal non-disclosure agreements will be executed for all consulting engagements.
                  </p>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">7. Limitation of Liability</h2>
                  <p className="text-landis-text-muted">
                    In no event shall Landis Ventures be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you for the specific services giving rise to the claim.
                  </p>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">8. Service Availability</h2>
                  <p className="text-landis-text-muted">
                    While we strive to maintain continuous service availability, we do not guarantee that our website or services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice.
                  </p>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">9. Governing Law</h2>
                  <p className="text-landis-text-muted">
                    These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in our business location.
                  </p>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">10. Changes to Terms</h2>
                  <p className="text-landis-text-muted">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services after any changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">11. Contact Information</h2>
                  <div className="text-landis-text-muted">
                    <p className="mb-4">
                      For questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p>Email: legal@landisventures.com</p>
                      <p>Phone: (555) 123-AUTOMATE</p>
                      <p>Address: Landis Ventures Legal Department</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}