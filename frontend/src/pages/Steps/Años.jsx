import React from "react"
import Input from "../../components/Input"
import AlertError from "../../components/AlertError"
import TitleStep from "../../components/TitleStep"
export default function Años({presupuesto, setPresupuesto, errors, setErrors, setDisabled}){
    const validateYears = (e) =>{
        
        if(e.target.value > 2030){
            setErrors({["general"]:`El año de ${e.target.name} debe ser menor a 2030`})
            return false
        }
        if (e.target.name == 'AñoInicio') {
            if (e.target.value < 2000) {                
                setErrors({[e.target.name]:"El año de inicio debe ser mayor a 2000"})
            } 
            return false
        }
        if (presupuesto.AñoInicio && presupuesto.AñoInicio > presupuesto.AñoFin) {                
            setErrors({["general"]: "El año de inicio no puede ser mayor al final"})
            return false
        }
        setErrors({})
        setDisabled(false)
        console.log(errors)
    }

    return(
      <div className="container">
        <TitleStep text={" Ingresa los años para generar tu presupuesto familiar"}></TitleStep>            
        <div className="flex justify-center items-center flex-col mt-8">
            <Input name="AñoInicio" className={"py-2"} label={"Inicio"} value={(presupuesto && presupuesto.AñoInicio) && presupuesto.AñoInicio} type="number" additionals={{onBlur:validateYears}} handleChange={(e) => setPresupuesto({...presupuesto, [e.target.name]:e.target.value})}></Input>   
            {errors.AñoInicio && <AlertError text={errors.AñoInicio}/>}
            <Input name="AñoFin" label={"Fin"} className={"py-2"} mt={6} value={(presupuesto && presupuesto.AñoFin) && presupuesto.AñoFin} type="number" additionals={{onBlur:validateYears}} handleChange={(e) => setPresupuesto({...presupuesto, [e.target.name]:e.target.value})}></Input>                 
        </div>
        <div className="w-6/12 flex justify-center m-auto mt-9">
            {errors.general &&<AlertError text={errors.general}/>}
        </div>
      </div>
    )
  }