import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision-Driven",
      description: "We deliver solutions with surgical precision, ensuring every automation is perfectly tailored to your specific needs."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships focused on delivering measurable value."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation-First",
      description: "We stay at the forefront of automation technology to provide cutting-edge solutions for complex challenges."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality-Focused",
      description: "Every solution undergoes rigorous testing and validation to ensure reliability and performance."
    }
  ];

  const stats = [
    { value: "500+", label: "Processes Automated" },
    { value: "95%", label: "Client Satisfaction Rate" },
    { value: "50M+", label: "Documents Processed" },
    { value: "24/7", label: "System Uptime" }
  ];

  return (
    <div className="min-h-screen bg-landis-bg">
      <SEOHead
        title="About Landis Ventures - Financial Automation Experts"
        description="Learn about Landis Ventures' mission to transform financial services through intelligent automation. Discover our expertise in RPA, IDP, and workflow automation for banks and fintech companies."
        canonicalUrl={`${window.location.origin}/about`}
        ogTitle="About Landis Ventures - Automation Consulting Specialists"
        ogDescription="Expert automation consultants with decades of experience in financial services, process automation, and enterprise technology solutions."
      />
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-landis-text leading-tight mb-6">
                About Landis Ventures
              </h1>
              <p className="text-xl text-landis-text-muted mb-8">
                We are automation experts dedicated to transforming financial services through intelligent solutions that drive efficiency, accuracy, and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-landis-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-landis-text mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-landis-text-muted leading-relaxed">
                To empower financial institutions with intelligent automation solutions that eliminate manual processes, 
                reduce operational costs, and enable teams to focus on high-value strategic initiatives. We believe that 
                the future of financial services lies in seamless, automated workflows that deliver exceptional customer 
                experiences while maximizing operational efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-landis-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-landis-text-muted text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-landis-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-landis-text mb-4">
                Our Values
              </h2>
              <p className="text-lg text-landis-text-muted max-w-2xl mx-auto">
                These core principles guide everything we do and ensure we deliver exceptional value to our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-landis-primary/20 rounded-full text-landis-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-landis-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-landis-text-muted">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-landis-text mb-6">
                Our Expertise
              </h2>
              <p className="text-lg text-landis-text-muted mb-12">
                Our team brings decades of combined experience in financial services, process automation, 
                and enterprise technology solutions. We understand the unique challenges and regulatory 
                requirements that financial institutions face.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-landis-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-landis-text mb-3">
                    Financial Services Expertise
                  </h3>
                  <p className="text-landis-text-muted">
                    Deep understanding of banking, insurance, investment management, and fintech operations.
                  </p>
                </div>
                
                <div className="bg-landis-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-landis-text mb-3">
                    Technical Excellence
                  </h3>
                  <p className="text-landis-text-muted">
                    Advanced skills in RPA platforms, AI/ML, cloud technologies, and enterprise integration.
                  </p>
                </div>
                
                <div className="bg-landis-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-landis-text mb-3">
                    Regulatory Knowledge
                  </h3>
                  <p className="text-landis-text-muted">
                    Comprehensive understanding of compliance requirements and regulatory frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}