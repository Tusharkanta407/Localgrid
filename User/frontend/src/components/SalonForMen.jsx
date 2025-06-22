import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Scissors, Zap, Shirt, User } from "lucide-react"

const SalonForMen = () => {
  const services = [
    {
      icon: Scissors,
      name: "Hair Cut & Styling",
      description: "Professional haircut with modern styling",
      duration: "45 minutes",
      rating: "4.8",
      color: "from-blue-500 to-indigo-500",
      popular: true,
    },
    {
      icon: Zap,
      name: "Beard Grooming",
      description: "Complete beard trimming and grooming service",
      duration: "30 minutes",
      rating: "4.9",
      color: "from-gray-500 to-slate-500",
      popular: false,
    },
    {
      icon: User,
      name: "Face Treatment",
      description: "Deep cleansing facial for men's skin",
      duration: "60 minutes",
      rating: "4.7",
      color: "from-green-500 to-emerald-500",
      popular: false,
    },
    {
      icon: Shirt,
      name: "Full Grooming",
      description: "Complete grooming package - hair, beard & face",
      duration: "90 minutes",
      rating: "4.8",
      color: "from-purple-500 to-indigo-500",
      popular: true,
    },
  ]

  return (
    <section className="py-16 relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Salon for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Men</span>
          </h2>
          <p className="text-xl text-gray-600">Professional grooming services at your doorstep</p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:scale-105 relative flex-shrink-0 w-72 md:w-auto snap-start"
                >
                  <CardContent className="p-0">
                    {/* Image Placeholder */}
                    <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative border-2 border-dashed border-blue-300">
                      <div className="text-gray-400 text-center">
                        <div className="text-3xl mb-2">📷</div>
                        <p className="text-sm font-medium">Add Photo</p>
                        <p className="text-xs">Salon service image</p>
                      </div>
                      {service.popular && (
                        <Badge className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 text-xs px-2 py-1">
                          👑 Popular
                        </Badge>
                      )}
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
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
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

        {/* Special Package Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 text-center border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Men's Grooming Package 🎯</h3>
          <p className="text-gray-600 mb-4">Monthly grooming subscription - 4 visits for the price of 3</p>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SalonForMen
