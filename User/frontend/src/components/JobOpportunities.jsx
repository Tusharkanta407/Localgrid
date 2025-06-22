import { Users, TrendingUp, Star } from "lucide-react"

const JobOpportunities = () => {
  return (
    <section className="py-16 relative bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">1100+</span> Job
            Opportunities Across India
          </h2>
          <p className="text-xl text-gray-600">Join thousands of professionals earning with LocalGrid</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 shadow-lg shadow-sky-500/25 group-hover:shadow-sky-500/40 transition-all">
              <Users className="h-8 w-8 text-white mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">1100+</h3>
            <p className="text-gray-600">Active Workers</p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-r from-blue-500 to-sky-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all">
              <TrendingUp className="h-8 w-8 text-white mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+</h3>
            <p className="text-gray-600">Jobs Completed</p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all">
              <Star className="h-8 w-8 text-white mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobOpportunities
