export default function Button({ onClick, buttonClassName }) {
  return (
    <div className={`w-full flex justify-center`}>
      <div className={`group flex cursor-pointer justify-center items-center self-center transition duration-500 ease-in-out w-10 h-10 rounded-full bg-red-300 transform hover:scale-50 ${buttonClassName}`} onClick={onClick}>
        <div className={`transition duration-500 ease-in-out w-6 h-6 rounded-full bg-white transform group-hover:bg-red-700 group-hover:scale-200`}/>
      </div>
    </div>
  )
}