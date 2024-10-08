import { toast } from "sonner"
import { GetCart, DeleteCart } from "../Services/AllAPi"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"




const user = sessionStorage.getItem("user")


// Get Cart
export const GetCartItems = () => {

    return useQuery({

        queryKey: ["CartItems"],
        queryFn: async () => {

            const response = await GetCart(user)

            return response.data

        },

        refetchOnWindowFocus: true, // Refetch data when window regains focus
        refetchOnMount: true, // Refetch data when component mounts
        staleTime: 0, // Always consider data fresh to refetch

    })

}





// Delete Cart
export const DeleteCartItems = () => {


    const query = useQueryClient()


    return useMutation({

        mutationFn: async (data) => {

            const response = await DeleteCart(data, user)


            if (response.status >= 200 && response.status <= 300) {

                toast.success("Product Removed...!")

            } else {

                console.log(response);


            }


        },

        onSuccess: () => {

            query.invalidateQueries({

                queryKey: ["CartItems"],

            })

        }

    })


}






