import axios from "axios";

export const axiosClient = axios.create({
    baseURL : import.meta.env.VITE_BACK_BASE_URL ,
    withCredentials : true , 

})


axiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

// axiosClient.interceptors.response.use((response)=>response,(error)=>{
//     const {response} = error 

//     if(response.status === 401){
//         localStorage.removeItem('ACCESS_TOKEN')
//     }
//     throw Error
// })
