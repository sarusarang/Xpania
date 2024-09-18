import { CommonApi } from "./CommonApi"



const base_url = "https://server.xpania.in"



// Login
export const Login = async (data, headers) => {


    return await CommonApi("POST", `${base_url}/api/token/`, data, headers)


}


// Register
export const Register = async (data, headers) => {


    return await CommonApi("POST", `${base_url}/api/register/`, data, headers)

}