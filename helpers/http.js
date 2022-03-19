import axios from "axios";

const {NEXT_PUBLIC_BACKEND_URL} = process.env
console.log(NEXT_PUBLIC_BACKEND_URL)

const http = (token) =>{
    const headers = {}
    if(token){
        headers["Authorization"] = `Bearer ${token}`
    }

    return axios.create({
        baseURL : NEXT_PUBLIC_BACKEND_URL,
        headers
    })
}

export default http