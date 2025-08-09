import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-landis-bg">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-landis-text mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-landis-card rounded-lg p-8 mb-8">
                <p className="text-landis-text-muted text-lg mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <p className="text-landis-text-muted">
                  At Landis Ventures, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>
              </div>

              <div className="space-y-8">
                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">Information We Collect</h2>
                  <div className="text-landis-text-muted space-y-4">
                    <p>We collect information you provide directly to us, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact information (name, email address, phone number)</li>
                      <li>Company information and business details</li>
                      <li>Communication preferences and consultation requests</li>
                      <li>Project requirements and automation needs</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">How We Use Your Information</h2>
                  <div className="text-landis-text-muted space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Respond to your consultation requests and inquiries</li>
                      <li>Provide personalized automation solutions and services</li>
                      <li>Communicate with you about our services and updates</li>
                      <li>Improve our website and service offerings</li>
                      <li>Comply with legal and regulatory requirements</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">Information Sharing</h2>
                  <div className="text-landis-text-muted space-y-4">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Service providers who assist us in operating our business</li>
                      <li>Legal authorities when required by law or to protect our rights</li>
                      <li>Business partners with your explicit consent</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">Data Security</h2>
                  <p className="text-landis-text-muted">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, access controls, and regular security assessments.
                  </p>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">Your Rights</h2>
                  <div className="text-landis-text-muted space-y-4">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and receive a copy of your personal information</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to or restrict the processing of your information</li>
                      <li>Withdraw consent where processing is based on consent</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">Cookies and Tracking</h2>
                  <p className="text-landis-text-muted">
                    Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized content. You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">Contact Us</h2>
                  <div className="text-landis-text-muted">
                    <p className="mb-4">
                      If you have questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p>Email: privacy@landisventures.com</p>
                      <p>Phone: (555) 123-AUTOMATE</p>
                      <p>Address: Landis Ventures Privacy Office</p>
                    </div>
                  </div>
                </section>

                <section className="bg-landis-card rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-landis-text mb-4">Policy Updates</h2>
                  <p className="text-landis-text-muted">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                  </p>
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