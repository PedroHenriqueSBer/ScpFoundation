import { api } from "../service/api";
import { IScp } from "../types/models";

const getScps = (id: string) => {
    return new Promise<IScp[]>((resolve, reject)=>{
        api.get(`/scp/get/${id}`).then(({data}) => resolve(data)).catch(error => reject(error));
    })
}

export const scpController = {
    getScps
}
