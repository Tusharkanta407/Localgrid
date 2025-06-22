import { Card, CardContent } from "./ui/card"
import { Home, GraduationCap, Scissors, Wrench, PaintBucket } from "lucide-react"

const ServiceCategories = () => {
  return (
    <section className="py-16 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Popular{" "}
          <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Services</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <Card className="bg-white border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-sky-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all">
                <Home className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900">Household Help</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all">
                <GraduationCap className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900">Tuition Classes</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all">
                <Scissors className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900">Salon & Spa at Home</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all">
                <Wrench className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900">AC/Electrical Repair</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all">
                <PaintBucket className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900">Kitchen & Home Painting</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories
