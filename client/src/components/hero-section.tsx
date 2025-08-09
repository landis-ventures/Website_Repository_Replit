export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 fade-in-up">
          Intelligent Automation for Financial Services
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 fade-in-up">
          We unlock new levels of profitability and efficiency by designing and implementing intelligent automation solutions that streamline your operations and drive measurable growth.
        </p>
        <button 
          onClick={scrollToContact}
          className="cta-button bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 inline-block fade-in-up"
        >
          Schedule Your Free Consultation
        </button>
      </div>
    </section>
  );
}
