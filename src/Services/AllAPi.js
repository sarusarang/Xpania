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

// Google Auth
export const GoogleAuth = async (data, header) => {


    return await CommonApi("POST", `${base_url}/api/google-auth/`, data, header)

}


// Get Products
export const AllProducts = async () => {


    return await CommonApi("GET", `${base_url}/products/`, "", "")

}



// Filter Size
export const GetFilter = async (categ, size, color) => {

    const params = new URLSearchParams({ category: categ, size: size, color: color })

    return CommonApi("GET", `${base_url}/filter/?${params.toString()}`, "", "")

}



// Get Quanity
export const GetQuanity = async () => {

    return CommonApi("GET", `${base_url}/sizes`)

}



// Get Color
export const GetColor = async () => {

    return CommonApi("GET", `${base_url}/colors/`, "", "")

}