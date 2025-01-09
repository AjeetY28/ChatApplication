import { httpClient } from "../config/AxiosHelper";


export const createRoomApi=async (roomDetail)=>
{
    const response= await httpClient.post(`/api/v1/rooms`,roomDetail,{
        headers:{
            "Content-Type":"text/plain",
        },
    });
    return response.data;
};