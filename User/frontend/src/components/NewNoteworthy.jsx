import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Sparkles, Lock, PaintBucket, User, Droplets, Scissors } from "lucide-react"

const NewNoteworthy = () => {
  const services = [
    {
      emoji: "🏠",
      name: "Wall Panels",
      description: "Transform your walls with premium panels",
      color: "from-gray-100 to-gray-200",
    },
    {
      icon: Sparkles,
      name: "Spa for Women",
      description: "Refresh. Rewind. Rejuvenate.",
      color: "from-pink-100 to-rose-100",
      badge: "Popular",
      badgeColor: "from-pink-500 to-rose-500",
    },
    {
      icon: Lock,
      name: "Native Smart Locks",
      description: "Secure your home with smart technology",
      color: "from-blue-100 to-sky-100",
    },
    {
      icon: PaintBucket,
      name: "Full Home Painting",
      description: "Complete home makeover solutions",
      color: "from-orange-100 to-red-100",
    },
    {
      icon: User,
      name: "Massage for Men",
      description: "Curated massages by top therapists",
      color: "from-green-100 to-emerald-100",
    },
    {
      icon: Droplets,
      name: "Water Purifier Setup",
      description: "Clean water solutions for your home",
      color: "from-sky-100 to-blue-100",
    },
    {
      icon: Scissors,
      name: "Salon for Men",
      description: "Professional grooming at your doorstep",
      color: "from-purple-100 to-indigo-100",
    },
  ]

  return (
    <section className="py-16 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            New &{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Noteworthy</span>
          </h2>
          <p className="text-xl text-gray-600">Discover our latest and most popular services</p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:transform hover:scale-105 flex-shrink-0 w-64 md:w-auto snap-start"
                >
                  <CardContent className="p-0">
                    <div
                      className={`bg-gradient-to-br ${service.color} h-48 rounded-t-lg flex items-center justify-center relative`}
                    >
                      {service.emoji ? (
                        <div className="text-6xl">{service.emoji}</div>
                      ) : (
                        <IconComponent className="h-16 w-16 text-gray-600" />
                      )}
                      {service.badge && (
                        <Badge
                          className={`absolute top-2 right-2 bg-gradient-to-r ${service.badgeColor} text-white border-0`}
                        >
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
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

export default NewNoteworthy
