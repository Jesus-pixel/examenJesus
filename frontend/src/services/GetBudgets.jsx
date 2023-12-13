import axios from "axios"

export default function GetBudgets({endpoint = ""}){
    const api_url = `http://localhost:3000/api/${endpoint}`
    axios.get(api_url).then((response) =>{
        console.log(response)
        return response
    }).catch((error) => {
        console.log(error)
        return error
    })
}