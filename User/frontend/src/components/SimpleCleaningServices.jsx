import SimpleServiceCard from "./SimpleServiceCard"

const SimpleCleaningServices = () => {
  const services = [
    {
      icon: "🏠",
      title: "Full Home Cleaning",
      description: "Complete deep cleaning of your entire home with professional equipment",
      duration: "4-6 hours",
      rating: "4.8",
    },
    {
      icon: "🛋️",
      title: "Sofa Cleaning",
      description: "Professional upholstery cleaning for sofas and furniture",
      duration: "2-3 hours",
      rating: "4.7",
    },
    {
      icon: "🚿",
      title: "Bathroom Cleaning",
      description: "Deep sanitization and cleaning of bathrooms and fixtures",
      duration: "1-2 hours",
      rating: "4.9",
    },
    {
      icon: "🐛",
      title: "Pest Control",
      description: "Safe and effective pest control solutions for your home",
      duration: "2-4 hours",
      rating: "4.6",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cleaning Services</h2>
          <p className="text-lg text-gray-600">Professional cleaning solutions for your home</p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4">
              {services.map((service, index) => (
                <SimpleServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <SimpleServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimpleCleaningServices
