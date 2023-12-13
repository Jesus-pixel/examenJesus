export default function TitleStep({paso, text}){
    return(
        <div className="flex justify-center items-center mt-8">
            <h5 className="text-xl">{ paso && <strong>Paso:{paso}</strong>}{text}</h5>
        </div>

    ) 
}