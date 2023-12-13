export default function AlertError({text, bgColor= "bg-red-500", ColorText = "text-white"}){
    return <span className={`px-4 py-2 fixed top-0 right-0 m-auto rounded mt-3 ${bgColor} ${ColorText}`}>{text}</span>
}