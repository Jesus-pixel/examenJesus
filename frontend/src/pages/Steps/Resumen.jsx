import React, { useEffect, useState } from "react"
import ConvertoUSD from "../../components/ConvertertoUSD"
import TablaResumen from "../../components/TablaResumen"
import TitleStep from "../../components/TitleStep"
import CalcTotal from "../../components/functions/CalcTotal"
import TotalesResumen from "../../components/fragments/TotalesResumen"

export default function Resumen({presupuesto, setPresupuesto, errors, setErrors, setDisabled}){    
    const [convertFactor, setConvertFactor] = useState([])    

    useEffect(() =>{
        if (convertFactor.length == 0 ) {
            ConvertoUSD().then((response) => setConvertFactor(response.reduce((acum, cur) => {
                setPresupuesto({...presupuesto, ['TipoCambioDolar']:cur})                
                return cur
            }, 0)))
        }
    }, [convertFactor])    
    console.log(presupuesto)
    return(
      <div className="container">
            <TitleStep text="Resumen" paso={3}/>                            
            <TotalesResumen title="" total={CalcTotal({presupuesto})}/>
            <div className="flex flex-wrap">
                <div className="w-8/12 m-auto  mt-9">
                   <TablaResumen  presupuesto={presupuesto} />    
                </div>
            </div>
      </div>
    )
  }