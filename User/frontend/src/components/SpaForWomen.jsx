import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Sparkles, Heart, Flower, Smile } from "lucide-react"

const SpaForWomen = () => {
  const services = [
    {
      icon: Sparkles,
      name: "Full Body Massage",
      description: "Relaxing full body massage with aromatherapy oils",
      duration: "90 minutes",
      rating: "4.9",
      color: "from-pink-500 to-rose-500",
      popular: true,
    },
    {
      icon: Heart,
      name: "Facial Treatment",
      description: "Deep cleansing facial with natural ingredients",
      duration: "60 minutes",
      rating: "4.8",
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
    {
      icon: Flower,
      name: "Manicure & Pedicure",
      description: "Complete nail care with spa treatment",
      duration: "75 minutes",
      rating: "4.7",
      color: "from-rose-500 to-pink-500",
      popular: false,
    },
    {
      icon: Smile,
      name: "Hair Spa Treatment",
      description: "Nourishing hair spa with scalp massage",
      duration: "120 minutes",
      rating: "4.8",
      color: "from-indigo-500 to-purple-500",
      popular: true,
    },
  ]

  return (
    <section className="py-16 relative bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Spa for{" "}
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Women</span>
          </h2>
          <p className="text-xl text-gray-600">Refresh. Rewind. Rejuvenate at your doorstep</p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:scale-105 relative flex-shrink-0 w-72 md:w-auto snap-start"
                >
                  <CardContent className="p-0">
                    {/* Photo Upload Area */}
                    <div className="h-40 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center relative border-2 border-dashed border-pink-300">
                      <div className="text-gray-400 text-center">
                        <div className="text-3xl mb-2">📷</div>
                        <p className="text-sm font-medium">Add Photo</p>
                        <p className="text-xs">Spa service image</p>
                      </div>
                      {service.popular && (
                        <Badge className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 text-xs px-2 py-1">
                          💖 Popular
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
                        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
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

        {/* Special Offer Banner */}
        <div className="mt-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 text-center border border-pink-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ Special Women's Day Offer ✨</h3>
          <p className="text-gray-600 mb-4">Book any 2 spa services and get 20% off on your total bill</p>
          <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3">
            Claim Offer
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SpaForWomen
