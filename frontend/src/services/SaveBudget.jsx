import axios from "axios"

export default function SaveBudget({data, endpoint = ""}){
    const api_url = `http://localhost:3000/api/${endpoint}`
    axios.post(api_url, data).then((response) =>{
        console.log(response)
        return response
    }).catch((error) => {
        console.log(error)
        return error
    })
}