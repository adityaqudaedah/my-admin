import Axios, { AxiosInstance } from "axios"

const instance :AxiosInstance = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default instance