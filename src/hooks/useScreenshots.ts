import { useQuery } from "@tanstack/react-query";
import Screenshots from "../entites/Screenshots"
import APIClient from "../services/api-client"


const useScreenshots = (gameId: number) => {
    
    const apiClinet = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClinet.getAll,
    })
}

export default useScreenshots;