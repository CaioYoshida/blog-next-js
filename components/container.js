export default function Container({ children, color, containerId }) {
  return (
    <div id={containerId} className={`w-full ${color} py-20`}>
      <div className="container mx-auto px-5">
        {children}
      </div>
    </div>
  )
}
