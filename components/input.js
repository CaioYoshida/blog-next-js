export default function Input({ value, setValue, type, label, marginTop = 2, placeholder, placeholderColor }) {
  return (
    <>
      <label className="font-semibold" for={label}>{label}</label>
      <input 
        id={label}
        className={`text-base shadow appearance-none rounded w-full mt-${marginTop} px-4 py-2 focus:outline-none focus:shadow-outline leading-tight ${placeholderColor}`} 
        type={type}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
    </>
  )
}