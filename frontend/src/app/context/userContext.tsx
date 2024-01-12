'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState} from "react";
import { IUser } from "../types/models";

interface userContextProps{
    user: IUser,
    setUser: Dispatch<SetStateAction<IUser>>
}

export const UserContext = createContext({} as userContextProps)

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [user,setUser] = useState<IUser>({
        id: "",
        name: "",
        password: "",
        type: 0,
        level: 0,
        hp: 0,
        mp: 0,
        stats: {
            strength: 0,
            dexterity: 0,
            resistance: 0,
            intelligence: 0,
            charisma: 0,
            sanity: 0
        },
        substats: [],
        bag: [],
        curses: "",
        profession: "",
        professionCharacteristic: []
    })
    return <UserContext.Provider value={{
        user,
        setUser
    }}>
        {children}
    </UserContext.Provider>
}