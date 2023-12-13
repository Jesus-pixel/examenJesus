export default function CalcTotalByPerson({year, presupuesto, totalYear, propio = false}){

    const budgetByPerson = Object.values(presupuesto.DetallePresupuesto).reduce((acum, cur) =>{            
        if (propio) {
            if(cur.Año == year && cur.Integrante == "Propio"){            
                acum = acum + parseFloat(cur.Monto)
            }
        }else{
            if(cur.Año == year && cur.Integrante != "Propio"){
                acum = acum + parseFloat(cur.Monto)
            }
        }
        return acum
    }, 0)    
    
    return ((budgetByPerson / totalYear) * 100)
}