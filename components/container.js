export default function Container({ children, color, containerId }) {
  return (
    <div id={containerId} className={`w-full ${color} py-20`}>
      <div className="container mx-auto py-5 px-5 lg:px-20">
        {children}
      </div>
    </div>
  )
}
