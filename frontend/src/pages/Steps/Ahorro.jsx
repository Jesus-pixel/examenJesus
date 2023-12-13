import React, {useState, useEffect} from "react"
import Input from "../../components/Input"
import CalcTotal from "../../components/functions/CalcTotal"
import TablaAhorro from '../../components/TablaAhorro'
import TitleStep from "../../components/TitleStep"

export default function Ahorro({presupuesto, setPresupuesto, setDisabled}){        
    const [newAmount, setNewAmount] = useState(true)        

    const handleChange = (e) =>{
      const presupuestoFilter = presupuesto.DetallePresupuesto.filter((presupuesto) => (presupuesto.Año == e.target.dataset.year && presupuesto.Integrante == e.target.dataset.origen) && presupuesto )
      console.log(presupuestoFilter)
      
      
        if (presupuestoFilter && presupuestoFilter.length > 0) {
          const updatePResupuestos = presupuesto.DetallePresupuesto.map((presupuesto) => {            
            if (presupuesto.Año == e.target.dataset.year && presupuesto.Integrante == e.target.dataset.origen) {
              return{...presupuesto, Monto:e.target.value}
            }
            return presupuesto
        })

        setPresupuesto({
          ...presupuesto, ['DetallePresupuesto']:updatePResupuestos         
        })        
      }else{
        setPresupuesto({
          ...presupuesto, ['DetallePresupuesto']:
          [...presupuesto.DetallePresupuesto,{            
            ['Monto']:(e.target.value > 0 ? e.target.value : 0),
            ['Año']:e.target.dataset.year,
            ['Integrante']:e.target.dataset.origen
          }]         
        })
      }
      setNewAmount(true)
    }
    useEffect(() =>{
        if (presupuesto.total && presupuesto.total < 1) {
          setDisabled(true)
        }else{
          setDisabled(false)
        }
        if (newAmount) {            
            setPresupuesto({...presupuesto, ['Total']: CalcTotal({presupuesto})})
            setNewAmount(false)
            
        }

    }, [newAmount, presupuesto])

    return(
      <div className="container">
        <div className="flex flex-col mt-8">
          <TitleStep text={" Ahorro por familiar"} paso={2}/>          
          <TablaAhorro presupuesto={presupuesto} handleChange={handleChange}/>
          <div className="container flex justify-end">
            <div className="w2/12">                
                <Input label={"Total ahorro:"} className={"border rounded"} defaultValue={presupuesto.Total && presupuesto.Total} value={presupuesto.Total && presupuesto.Total}></Input>
            </div>
          </div>
        </div>

      </div>
    )
  }