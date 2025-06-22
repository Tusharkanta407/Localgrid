const Card = ({ className = "", children, ...props }) => {
  const baseClasses = "rounded-lg border bg-card text-card-foreground shadow-sm"

  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardContent = ({ className = "", children, ...props }) => {
  const baseClasses = "p-6 pt-0"

  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Card, CardContent }

