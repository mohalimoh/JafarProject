import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/basic-info/vessel/";


export const getVesselTypes = () =>{
     return http.get(apiEndpoint + 'vesselTypes')
 }


export const getVessels = () =>{
    return http.get(apiEndpoint)
}


export const deleteVessel = (vesselId) => {
    console.log(apiEndpoint + `/${vesselId}`)
    return http.delete(apiEndpoint + `/${vesselId}`);
}

export const editVessel = (vessel) => {
    console.log('editVessel', vessel)
    return http.put(apiEndpoint,vessel);
}