export default function Button({ children, onClick, type }) {
  return (
    <button className="w-full p-2 text-white font-bold border-none bg-black rounded" onClick={onClick} type={type}>
      {children}
    </button>
  )
}