import SimpleCard from "./SimpleCard"

const SimpleCardGrid = () => {
  const services = [
    {
      title: "Home Cleaning",
      description: "Professional deep cleaning services for your entire home",
      icon: "🏠",
    },
    {
      title: "Appliance Repair",
      description: "Expert repair services for all your home appliances",
      icon: "🔧",
    },
    {
      title: "Plumbing Services",
      description: "Complete plumbing solutions and emergency repairs",
      icon: "🚿",
    },
    {
      title: "Electrical Work",
      description: "Safe and reliable electrical installations and repairs",
      icon: "⚡",
    },
    {
      title: "Gardening",
      description: "Professional landscaping and garden maintenance",
      icon: "🌱",
    },
    {
      title: "Painting Services",
      description: "Interior and exterior painting with premium materials",
      icon: "🎨",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Simple, reliable, and professional</p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4">
              {services.map((service, index) => (
                <SimpleCard key={index} className="flex-shrink-0 w-72">
                  {/* Photo Upload Area */}
                  <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                    <div className="text-gray-400 text-center">
                      <div className="text-3xl mb-2">📷</div>
                      <p className="text-sm font-medium">Add Photo</p>
                      <p className="text-xs">Service image</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </SimpleCard>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <SimpleCard key={index}>
              {/* Photo Upload Area */}
              <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                <div className="text-gray-400 text-center">
                  <div className="text-3xl mb-2">📷</div>
                  <p className="text-sm font-medium">Add Photo</p>
                  <p className="text-xs">Service image</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </SimpleCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimpleCardGrid
