import { useState, useEffect } from "react"
import Input from "../../components/Input"
import ConvertoUSD from "../../components/ConvertertoUSD"

export default function TotalesResumen({title, total}){
    const [convertFactor, setConvertFactor] = useState([])    

    useEffect(() =>{
        if (convertFactor.length == 0 ) {
            ConvertoUSD().then((response) => setConvertFactor(response.reduce((acum, cur) => {                          
                return cur
            }, 0)))
        }
    }, [convertFactor])    
    return (
        <div className="flex justify-center items-center mt-8 mb-8">
            <div className="w-4/12 flex justify-end pr-8">
                {title}
            </div>
            <div className="w-8/12 flex">
                <Input  helperText={"Pesos"} type="number" additionals={{readOnly:true}} value={parseFloat(total).toFixed(2)} className={"mr-4"}></Input>
                <Input  helperText={"Dolares"} additionals={{readOnly:true}} type="number" value={parseFloat(total / convertFactor).toFixed(2)}></Input>
            </div>
        </div>
    )
}