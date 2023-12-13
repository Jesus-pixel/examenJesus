import React, {useEffect, useState} from 'react'
import GetLastBudget from '../services/GetLastBudget';
import TablaResumen from '../components/TablaResumen';
import TablaAhorro from '../components/TablaAhorro';
import TotalesResumen from '../components/fragments/TotalesResumen';
import CalcTotal from "../components/functions/CalcTotal"
import TitleStep from '../components/TitleStep';
export default function Presupuesto(){
    const [presupuesto, setPresupuesto] = useState({})
    const [lasBudget, setLastBudget] = useState()
    useEffect(() =>{
        if (Object.values(presupuesto).length < 1) {
            GetLastBudget({endpoint:"budget/last"}).then((response) =>{
                setPresupuesto(response.data.data)
            })            
        }                
    }, [lasBudget])

    console.log(presupuesto)
    return(
        <div className='container m-auto'>
            <TitleStep text={`Presupuesto Familiar del año ${presupuesto.AñoInicio} ${presupuesto.AñoFin != presupuesto.AñoInicio ? ` al ${presupuesto.AñoFin}` : ""}`}></TitleStep>
            <TotalesResumen title="" total={CalcTotal({presupuesto})}/>
            <TablaResumen presupuesto={presupuesto}></TablaResumen>
            <div className="container m-auto mb-8">
                <div className="w-full">
                    <TablaAhorro disabled={true} presupuesto={presupuesto}/>            
                </div>
            </div> 
            <a href="/" className="border border-gray-700 rounded-md mt-9 px-4 py-1 m-auto">Volver a inicio</a> 
        </div>
    )
}