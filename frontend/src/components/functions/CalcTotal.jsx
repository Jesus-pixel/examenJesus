import GetAños from "./GetAños"

export default function CalcTotal({presupuesto}){
    const años = GetAños({presupuesto})
    let prevTotalAnual = 0
    años.map(año => {
        const sum = Object.values(presupuesto.DetallePresupuesto).reduce((acum, cur) => {
            if (cur.Año == año) {
                console.log(cur);
                if (parseFloat(cur.Monto) > 0) {                            
                    return parseFloat(acum) + parseFloat(cur.Monto)                                        
                }
                return acum
            }
            return acum
        } , 0) 
        prevTotalAnual += sum
    })
    return prevTotalAnual
}