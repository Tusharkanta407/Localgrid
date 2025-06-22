import SimpleCard from "./SimpleCard"

const SimpleServiceCard = ({ icon, title, description, duration, rating, buttonText = "Book Now" }) => {
  return (
    <SimpleCard className="flex-shrink-0 w-80 md:w-auto">
      {/* Photo Upload Area */}
      <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
        <div className="text-gray-400 text-center">
          <div className="text-4xl mb-2">📷</div>
          <p className="text-sm font-medium">Add Your Photo Here</p>
          <p className="text-xs text-gray-500">Upload service image</p>
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Service Details */}
        {(duration || rating) && (
          <div className="space-y-2 mb-4">
            {duration && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Duration:</span>
                <span className="font-medium text-gray-700">{duration}</span>
              </div>
            )}
            {rating && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rating:</span>
                <span className="font-medium text-gray-700">⭐ {rating}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
          {buttonText}
        </button>
      </div>
    </SimpleCard>
  )
}

export default SimpleServiceCard
