export default function ValuesSection() {
  const values = [
    "Integrity & Trust",
    "Value-Driven Precision", 
    "Strategic Partnership",
    "Rapid Innovation",
    "Relentless Improvement"
  ];

  return (
    <section id="values" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            The principles that guide every decision we make.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div key={index} className="value-card text-center bg-gray-900/50 p-6 rounded-lg">
              <h3 className="font-semibold text-white">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
