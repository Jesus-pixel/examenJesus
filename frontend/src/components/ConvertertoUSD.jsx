export default async function ConvertoUSD(){
    const API_URL = "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/oportuno?token=37b48e422f639067b4517ca51359cc57c7621b17a8f38577db373f8fffa3e57d"

    const res = await fetch(API_URL)
    const response = await res.json()    
    const { bmx } = response
    const {series } = bmx
    const result = series.map(({datos}) => datos[0].dato)
    return result
}