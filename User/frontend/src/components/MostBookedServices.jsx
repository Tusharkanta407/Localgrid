import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { GraduationCap, Home, Scissors } from "lucide-react"

const MostBookedServices = () => {
  const services = [
    {
      icon: GraduationCap,
      name: "Home Tuition",
      description: "Expert tutors for all subjects and grades",
      bookings: "2,890+",
      rating: "4.9",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Home,
      name: "House Cleaning",
      description: "Professional deep cleaning services",
      bookings: "2,450+",
      rating: "4.8",
      color: "from-blue-500 to-sky-500",
    },
    {
      icon: Scissors,
      name: "Beauty Services",
      description: "Premium salon services at home",
      bookings: "1,650+",
      rating: "4.7",
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section className="py-16 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Most{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Booked Services
            </span>
          </h2>
          <p className="text-xl text-gray-600">Top trending services across India</p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:scale-105 relative overflow-hidden flex-shrink-0 w-80 md:w-auto snap-start"
                >
                  <CardContent className="p-0">
                    {/* Photo Upload Area */}
                    <div className="h-48 bg-gray-100 flex items-center justify-center relative border-2 border-dashed border-gray-300">
                      <div className="text-gray-400 text-center">
                        <div className="text-4xl mb-2">📷</div>
                        <p className="text-sm font-medium">Add Service Photo</p>
                        <p className="text-xs text-gray-500">Upload image here</p>
                      </div>
                      {/* Trending Badge */}
                      <Badge className="absolute top-2 right-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white border-0 text-xs px-2 py-1">
                        🔥 Trending
                      </Badge>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>

                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Bookings</p>
                          <p className="text-lg font-bold text-sky-600">{service.bookings}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Rating</p>
                          <p className="text-lg font-bold text-yellow-500">⭐ {service.rating}</p>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white">
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

export default MostBookedServices
