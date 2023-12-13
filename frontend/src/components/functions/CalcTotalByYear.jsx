export default function CalcTotalByYear({year, presupuesto}){
    const budgetByyear = Object.values(presupuesto.DetallePresupuesto).reduce((acum, cur) => cur.Año == year ? parseFloat(cur.Monto) && acum + parseFloat(cur.Monto): acum, 0)    
    return budgetByyear
}