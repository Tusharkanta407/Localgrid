import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Hammer, Wrench, WrenchIcon as Screwdriver, Settings } from "lucide-react"

const HomeRepairInstallation = () => {
  const services = [
    {
      icon: Hammer,
      name: "Carpentry Work",
      description: "Furniture repair, door/window fixing, custom woodwork",
      duration: "3-6 hours",
      rating: "4.8",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Wrench,
      name: "Plumbing Services",
      description: "Pipe repair, tap fixing, bathroom installations",
      duration: "2-4 hours",
      rating: "4.7",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Screwdriver,
      name: "Wall Mounting",
      description: "TV mounting, shelf installation, picture hanging",
      duration: "1-2 hours",
      rating: "4.9",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: Settings,
      name: "Home Installation",
      description: "Furniture assembly, fixture installation, setup services",
      duration: "2-5 hours",
      rating: "4.6",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section className="py-16 relative bg-gradient-to-br from-gray-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Home Repair &{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Installation
            </span>
          </h2>
          <p className="text-xl text-gray-600">Professional home repair and installation services</p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:scale-105 flex-shrink-0 w-72 md:w-auto snap-start"
                >
                  <CardContent className="p-0">
                    {/* Photo Upload Area */}
                    <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                      <div className="text-gray-400 text-center">
                        <div className="text-3xl mb-2">📷</div>
                        <p className="text-sm font-medium">Add Photo</p>
                        <p className="text-xs">Service image</p>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Rating:</span>
                          <span className="font-medium text-yellow-500">⭐ {service.rating}</span>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeRepairInstallation
