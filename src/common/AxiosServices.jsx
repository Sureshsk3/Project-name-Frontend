import axios from 'axios'
import UseLogout from "../utils/UseLogout"

const AxiosService = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

AxiosService.interceptors.request.use(config=>{
    let token = sessionStorage.getItem('token')    
    if(token && config.authenticate)
        config.headers.Authorization = `Bearer ${token}`
    return config
},error=>Promise.reject(error))


AxiosService.interceptors.response.use(response=>{
    return response.data
},error=>{
    const {response} = error
    const logout = UseLogout()
    if(response.status===401)
    {
        logout()
        // window.location.assign('/login')
    }
    else
       throw response.data
})

export default AxiosService