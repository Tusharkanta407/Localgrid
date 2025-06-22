const SimpleCard = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        p-6 
        hover:bg-gray-50 
        hover:shadow-lg 
        hover:-translate-y-0.5 
        transition-all 
        duration-200 
        ease-in-out
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default SimpleCard
