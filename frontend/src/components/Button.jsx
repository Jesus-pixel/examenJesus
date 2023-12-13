export default function Button({children, className = "", handleClick = null, disabled=false}){
    return(
        <button disabled={disabled} onClick={handleClick} className={`border border-gray-700 rounded-md px-4 py-1 ${className}`}>{children}</button>
    )
}

