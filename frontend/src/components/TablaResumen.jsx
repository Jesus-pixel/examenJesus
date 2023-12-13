import GetAños from "./functions/GetAños"
import CalcTotalByYear from "./functions/CalcTotalByYear"
import CalcTotalByPerson from "./functions/CalcTotalByPerson"
export default function TablaResumen({presupuesto}){
    const años = GetAños({presupuesto})
    const columns = ["Año", "% Ahorro Propio", "% Ahorro Familiar", "Total ahorro"]

    return(
        <table className="table-fixed border-collapse border border-slate-500">
            <thead>
                <tr>
                    {
                        columns.map((column, index) => {
                            return <th key={index} className="border w-96 text-left px-4 py-2">{column}</th>
                        })
                    }                            

                </tr>
            </thead>
            <tbody>
                    {
                        años.map((año, index) => { 
                            let totalYear = parseFloat(CalcTotalByYear({'year': año, presupuesto})).toFixed(2)                                       
                            return (
                                <tr>
                                    <td key={index} className="border px-4 py-2">{año}</td>
                                    <td key={index+"my"} className="border px-4"py-2>%{parseFloat(CalcTotalByPerson({'year': año, presupuesto, totalYear, propio:true})).toFixed(2)}</td>
                                    <td key={index+"fam"} className="border px-4"py-2>%{parseFloat(CalcTotalByPerson({'year': año, presupuesto, totalYear})).toFixed(2)}</td>
                                    <td key={index+"total"} className="border px-4"py-2>${totalYear}</td>
                                </tr>
                            )
                        })
                    }                                                            
            </tbody>
        </table> 
    )
}