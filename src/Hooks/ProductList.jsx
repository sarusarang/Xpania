import { useQuery } from "@tanstack/react-query"
import { AllProducts } from "../Services/AllAPi"




export const ProductList = () => {

    return useQuery({

        queryKey: ["Product"],
        queryFn: async () => {

            const response = await AllProducts()

            return response.data

        },
        refetchOnWindowFocus: false

    })


}