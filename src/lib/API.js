import axios from "axios"

let URL = "https://fakestoreapi.com/products"

export const fetchDummyDataFromAPi = () => {
    return axios.get(URL)
}