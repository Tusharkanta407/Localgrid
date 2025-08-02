import { Button } from "./ui/button"
import { Shield, Star } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative pt-36 lg:pt-28 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">

      {/* 3D Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1 - Large Stars */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-sky-400 rounded-full opacity-60 animate-pulse shadow-lg shadow-sky-400/30"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-70 animate-ping shadow-lg shadow-blue-500/30"></div>
        <div className="absolute top-40 left-1/4 w-2.5 h-2.5 bg-sky-500 rounded-full opacity-50 animate-pulse shadow-lg shadow-sky-500/30"></div>
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-65 animate-ping shadow-lg shadow-blue-400/30"></div>
        <div className="absolute top-28 left-2/3 w-2 h-2 bg-sky-600 rounded-full opacity-55 animate-pulse shadow-lg shadow-sky-600/30"></div>

        {/* Layer 2 - Medium Stars */}
        <div className="absolute top-60 left-16 w-1.5 h-1.5 bg-sky-300 rounded-full opacity-40 animate-pulse delay-1000 shadow-md shadow-sky-300/25"></div>
        <div className="absolute top-72 right-32 w-1 h-1 bg-blue-400 rounded-full opacity-50 animate-ping delay-500 shadow-md shadow-blue-400/25"></div>
        <div className="absolute top-80 left-1/3 w-2 h-2 bg-sky-400 rounded-full opacity-45 animate-pulse delay-1500 shadow-md shadow-sky-400/25"></div>
        <div className="absolute top-52 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60 animate-ping delay-700 shadow-md shadow-blue-300/25"></div>
        <div className="absolute top-64 left-3/4 w-1 h-1 bg-sky-500 rounded-full opacity-55 animate-pulse delay-300 shadow-md shadow-sky-500/25"></div>

        {/* Layer 3 - Small Stars */}
        <div className="absolute top-44 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-ping delay-2000 shadow-sm shadow-blue-300/20"></div>
        <div className="absolute top-56 right-16 w-0.5 h-0.5 bg-sky-200 rounded-full opacity-40 animate-pulse delay-800 shadow-sm shadow-sky-200/20"></div>
        <div className="absolute top-68 left-1/2 w-1 h-1 bg-blue-200 rounded-full opacity-35 animate-ping delay-1200 shadow-sm shadow-blue-200/20"></div>
        <div className="absolute top-36 right-2/3 w-0.5 h-0.5 bg-sky-300 rounded-full opacity-45 animate-pulse delay-400 shadow-sm shadow-sky-300/20"></div>
        <div className="absolute top-48 left-1/5 w-1 h-1 bg-blue-400 rounded-full opacity-25 animate-ping delay-1800 shadow-sm shadow-blue-400/20"></div>

        {/* Layer 4 - Tiny Sparkles */}
        <div className="absolute top-24 left-32 w-0.5 h-0.5 bg-sky-100 rounded-full opacity-20 animate-pulse delay-600 shadow-sm shadow-sky-100/15"></div>
        <div className="absolute top-84 right-24 w-0.5 h-0.5 bg-blue-200 rounded-full opacity-25 animate-ping delay-900 shadow-sm shadow-blue-200/15"></div>
        <div className="absolute top-76 left-2/5 w-0.5 h-0.5 bg-sky-200 rounded-full opacity-30 animate-pulse delay-1400 shadow-sm shadow-sky-200/15"></div>
        <div className="absolute top-88 right-1/5 w-0.5 h-0.5 bg-blue-100 rounded-full opacity-25 animate-ping delay-200 shadow-sm shadow-blue-100/15"></div>
        <div className="absolute top-92 left-4/5 w-0.5 h-0.5 bg-sky-300 rounded-full opacity-20 animate-pulse delay-1600 shadow-sm shadow-sky-300/15"></div>

        {/* Additional scattered stars for more density */}
        <div className="absolute top-12 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-ping delay-100 shadow-md shadow-blue-400/25"></div>
        <div className="absolute top-96 right-1/2 w-1.5 h-1.5 bg-sky-300 rounded-full opacity-50 animate-pulse delay-1100 shadow-md shadow-sky-300/25"></div>
        <div className="absolute top-100 left-1/6 w-1 h-1 bg-blue-500 rounded-full opacity-45 animate-ping delay-1700 shadow-md shadow-blue-500/25"></div>
        <div className="absolute top-104 right-1/6 w-2 h-2 bg-sky-400 rounded-full opacity-55 animate-pulse delay-500 shadow-lg shadow-sky-400/30"></div>

        {/* 3D Star Shapes using CSS transforms */}
        <div className="absolute top-20 left-1/3 transform rotate-12">
          <div className="relative w-3 h-3">
            <div
              className="absolute inset-0 bg-sky-400 rounded-full opacity-60 animate-spin shadow-lg shadow-sky-400/30"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute inset-0.5 bg-blue-300 rounded-full opacity-40 animate-spin shadow-md shadow-blue-300/25"
              style={{ animationDuration: "6s", animationDirection: "reverse" }}
            ></div>
          </div>
        </div>

        <div className="absolute top-60 right-1/3 transform -rotate-12">
          <div className="relative w-2.5 h-2.5">
            <div
              className="absolute inset-0 bg-blue-500 rounded-full opacity-55 animate-spin shadow-lg shadow-blue-500/30"
              style={{ animationDuration: "10s" }}
            ></div>
            <div
              className="absolute inset-0.5 bg-sky-300 rounded-full opacity-30 animate-spin shadow-md shadow-sky-300/25"
              style={{ animationDuration: "7s", animationDirection: "reverse" }}
            ></div>
          </div>
        </div>

        <div className="absolute top-80 left-1/5 transform rotate-45">
          <div className="relative w-2 h-2">
            <div
              className="absolute inset-0 bg-sky-300 rounded-full opacity-50 animate-spin shadow-lg shadow-sky-300/30"
              style={{ animationDuration: "12s" }}
            ></div>
            <div
              className="absolute inset-0.5 bg-blue-400 rounded-full opacity-20 animate-spin shadow-md shadow-blue-400/25"
              style={{ animationDuration: "5s", animationDirection: "reverse" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 bg-clip-text text-transparent">
              Empowering India's Local Workforce
            </span>
            <br />
            <span className="text-gray-900">— One Job at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Trusted by <span className="text-sky-600 font-semibold">1100+</span> users across household help, tutoring,
            beauty and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-8 py-3 text-lg shadow-lg shadow-sky-500/25 transform hover:scale-105 transition-all"
            >
              Join as a Worker
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white px-8 py-3 text-lg bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all"
            >
              Find Services Near Me
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-sky-500" />
              <span>Verified professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.8+ rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Trusted platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
