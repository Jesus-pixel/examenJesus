import React, {useState} from "react";
import Button from "../components/Button";
import Años from "./Steps/Años";
import Ahorro from "./Steps/Ahorro";
import Resumen from "./Steps/Resumen";
import SaveBudget from "../services/SaveBudget";

export default function NuevoPresupuesto(){

    const [presupuesto, setPresupuesto] = useState({
        AñoInicio:"",
        AñoFin:"", 
        DetallePresupuesto:[],
        currentDate: (new Date).toJSON() 
    })
    const [activeStep, setActiveStep] = useState(1)
    
    const [errors, setErrors] = useState({})  
    const [disabled, setDisabled] = useState(true) 
    const steps = [
        {paso: 1, title: "Años", content: <Años setDisabled={setDisabled} presupuesto={presupuesto} setPresupuesto={setPresupuesto} errors={errors} setErrors={setErrors}></Años>},
        {paso: 2, title: "Ahorro por familiar", content:<Ahorro setDisabled={setDisabled}  presupuesto={presupuesto} setPresupuesto={setPresupuesto}></Ahorro>},
        {paso: 3, title: "RESUMEN", content:<Resumen setDisabled={setDisabled}  presupuesto={presupuesto} setPresupuesto={setPresupuesto}/>}
        
    ]
    let limitStep = steps.length
    return(
        <div className="container m-auto flex flex-wrap border-b-orange-50 ">

            {
                steps.filter(step => step.paso == activeStep).map((step, index) =>{
                    return step.content
                })
            }


            <div className="container flex flex-wrap justify-center border-b-orange-50 mt-24">       
                <div className="flex justify-start mt-6">
                    <Button  className="mr-3 btn-color" handleClick={
                        () => {
                            if (activeStep > 1) {
                            return setActiveStep(activeStep - 1)
                            }
                        }
                        }>
                        Atras
                    </Button>
                    <Button  className="btn-color"disabled={disabled} handleClick={() => {
                            if (activeStep <  limitStep) {
                                return setActiveStep(activeStep + 1)
                            }else{
                                if (confirm("¿Estas seguro de guardar tu Presupuesto?")) {
                                    console.log(SaveBudget({data:presupuesto, endpoint:'budget'}))
                                }else{
                                    alert('OK sigamos editando')
                                }
                                
                            }
                        }}>
                        {activeStep <  limitStep ? "Siguiente":"Terminar"}
                    </Button>
                </div>        
            </div>            
            
      </div>
    )
}