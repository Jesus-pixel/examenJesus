export default function Input  ({label = null, defaultValue, helperText, value, type = "text", handleChange, className, name, error, mt=6, additionals}){
    return(
      <div className={`input-group mt-${mt} flex ${helperText && "flex-col"} justify-between`}>
        {
          label &&
            <label htmlFor={name} className="w-56 text-left mr-6">{label}</label>
        }
        <input name={name} id={name} step='0.01' value={value} defaultValue={defaultValue} {...additionals} className={`border px-4 rounded border-${error ? "red": "gray"}-300 ${className}`} onChange={handleChange} type={type} />
        {
          helperText &&
            <span className="text-sm">{helperText}</span>
        }
      </div>
    )
  }