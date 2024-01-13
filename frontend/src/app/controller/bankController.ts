import { api } from "../service/api";
import { IBank } from "../types/models";

const get = (id: string) => {
    return new Promise<IBank>((resolve, reject)=>{
        api.get(`/bank/${id}`).then(({data}) => resolve(data)).catch(error => reject(error));
    })
}

export const bankController = {
    get
}
