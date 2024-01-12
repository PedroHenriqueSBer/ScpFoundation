import { api } from "../service/api";
import { ILoginInputModel } from "../types/inputModel";
import { IUser } from "../types/models";

const login = (input: ILoginInputModel) => {
    return new Promise<IUser>((resolve, reject) => {
        api.post('/user/login',input).then(({data}) => resolve(data)).catch(error => reject(error));
    })
}

const getById = (id: string) => {
    return new Promise<IUser>((resolve, reject) => {
        api.get(`/user/${id}`).then(({data}) => resolve(data)).catch(error => reject(error));
    })
}

export const userController = {
    login,
    getById
}
