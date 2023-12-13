export default function GetAños({presupuesto}){        
    var startDate = presupuesto.AñoInicio
    var endDate = presupuesto.AñoFin
    let años = []
    while (startDate <= endDate) {        
        años.push(startDate)
        startDate++
    }    
    return años
}