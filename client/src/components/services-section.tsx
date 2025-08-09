export default function ServicesSection() {
  const services = [
    {
      title: "Robotic Process Automation (RPA)",
      description: "Automating repetitive, rule-based tasks within your existing desktop applications, web portals, and legacy systems."
    },
    {
      title: "Intelligent Document Processing (IDP)",
      description: "Using AI and OCR to automatically capture, extract, and validate data from invoices, forms, and financial statements."
    },
    {
      title: "Data Processing & Reconciliation",
      description: "Building robust automations to aggregate data, perform complex reconciliation, and generate actionable reports."
    },
    {
      title: "End-to-End Workflow Automation",
      description: "Designing holistic solutions that connect disparate systems and create seamless, autonomous business processes."
    }
  ];

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            We solve complex operational challenges with a focused suite of automation services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
