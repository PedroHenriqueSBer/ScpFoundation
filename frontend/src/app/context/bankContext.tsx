'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { IBank } from "../types/models";
import { bankController } from "../controller/bankController";

interface bankContextProps{
    bank:IBank,
    setBank:Dispatch<SetStateAction<IBank>>
}

export const BankContext = createContext({} as bankContextProps)

export const BankProvider = (props: {children: ReactNode}) => {

    const [bank,setBank] = useState<IBank>({} as IBank)

    useEffect(()=>{
        const id = localStorage.getItem('id')
        if(id){
            bankController.get(id).then(setBank)
        }
    },[])

    return <BankContext.Provider value={{
        bank,
        setBank
    }}>
        {props.children}
    </BankContext.Provider>
}