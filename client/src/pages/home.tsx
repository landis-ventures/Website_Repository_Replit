import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import ValuesSection from "@/components/values-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-landis-bg">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
