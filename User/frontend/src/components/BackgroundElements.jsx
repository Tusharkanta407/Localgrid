const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-sky-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-sky-100/25 to-blue-100/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-sky-50/20 to-blue-50/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>
  )
}

export default BackgroundElements
