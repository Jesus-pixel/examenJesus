import React, {useState, useEffect} from "react"
import Input from "./Input"
import GetAños from "./functions/GetAños"
import CalcTotalByYear from "./functions/CalcTotalByYear"

export default function TablaAhorro({presupuesto, handleChange, disabled = false}){
    const [años, setAños] = useState([])
    const columns = ["Origen del ahorro", ...años]  
    const Config_OrigenAhorro = [
        {id:"1", origen:"Jesus"},
        {id:"2", origen:"Amanda"},
        {id:"3", origen:"Nicolas"},
        {id:"4", origen:"Esperanza"},
        {id:"5", origen:"Jose"},
    
    ]
    useEffect(() =>{        
        setAños(GetAños({presupuesto}))
    }, [presupuesto]) 
    return(
      <table className="table-fixed w-full mt-8 overflow-x-scroll">
        <thead className="">                         
          {
            columns.length > 0 && 
            columns.map((value, index) => {                  
              return(
                <th className="text-center border" key={index}>{value}</th>
              )
            })
          }              
        </thead>
      <tbody>
      {
          Config_OrigenAhorro.length > 0 &&
          Config_OrigenAhorro.map(({id, origen}) => {
              return(
              <tr>
                  <td key={id} className="border pl-2">{origen}</td>                    
                  {
                  años.map(año => {
                    var ExistePresupuesto = Object.values(presupuesto.DetallePresupuesto).filter((presupuesto) => (presupuesto.Año == año && presupuesto.Integrante == origen)).map((presupuesto) => presupuesto)
                      return(
                      <td className="border">
                          <Input 
                              handleChange={handleChange} 
                              defaultValue={(ExistePresupuesto[0] && ExistePresupuesto[0].Monto)} 
                              key={año+"-"+origen} 
                              additionals={{ "data-year":año, "data-origen":origen, 'placeholder':0.00, disabled:disabled}} 
                              mt={2} 
                              className={"w-20 px-2 m-auto mb-2 mt-2 border-0 text-center"} 
                          />
                      </td>

                      )
                  })
                  }                        
              </tr>
              )
          })              
      }
          <tr>
              <td className="border">Total Anual</td>                    
              {
                años.length > 0 &&
                  años.map(año => {                         
                      return <td className="border text-center">{parseFloat(CalcTotalByYear({'year': año, presupuesto})).toFixed(2)}</td>
                  })
              }            
          </tr>
      </tbody>
      </table>      
    )
}