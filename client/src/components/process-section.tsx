export default function ProcessSection() {
  const processSteps = [
    {
      number: 1,
      title: "Discovery & Analysis",
      description: "Understanding your goals and assessing ROI."
    },
    {
      number: 2,
      title: "Solution Design",
      description: "Creating the blueprint for your automation."
    },
    {
      number: 3,
      title: "Development & Testing",
      description: "Building the bot and conducting rigorous UAT."
    },
    {
      number: 4,
      title: "Deployment & Launch",
      description: "Moving the solution to production with training."
    },
    {
      number: 5,
      title: "Support & Maintenance",
      description: "Ensuring long-term success and reliability."
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Structured 5-Phase Process
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            We ensure high-quality, sustainable results through a proven methodology.
          </p>
        </div>
        
        <div className="relative">
          {/* The connecting line */}
          <div className="hidden md:block absolute top-5 left-0 w-full h-0.5 bg-gray-700"></div>
          <div className="grid md:grid-cols-5 gap-8 relative">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="relative mb-4">
                  <div className="w-10 h-10 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 relative">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
