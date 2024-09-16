import { CommonApi } from "./CommonApi"



const base_url = ""



// Login
export const Login = async (data, headers) => {


    return await CommonApi("POST", `${base_url}`, data, headers)


}


// Register
export const Register = async (data, headers) => {


    return await CommonApi("POST", `${base_url}`, data, headers)


}