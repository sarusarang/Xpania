import { useQuery, useQueryClient } from '@tanstack/react-query';


const useUserState = () => {

    const queryClient = useQueryClient();


    const { data: Brand, isLoading, error } = useQuery({

        queryKey: ['Brand'],
        queryFn: () => {

            return null;
        },
        staleTime: Infinity,
        cacheTime: Infinity,
    })


    const updateUser = (newUser) => {

        queryClient.setQueryData(['Brand'], newUser)

    }

    return { Brand, isLoading, error, updateUser }

    
}

export default useUserState;

