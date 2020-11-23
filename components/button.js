export default function Button({ children, onClick, type, backgroundColor, buttonClassName }) {
  return (
    <button className={`w-full p-2 text-white font-bold border-none rounded ${backgroundColor} ${buttonClassName}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}