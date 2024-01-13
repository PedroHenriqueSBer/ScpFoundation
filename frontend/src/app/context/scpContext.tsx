'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { IScp } from "../types/models";
import { scpController } from "../controller/scpsController";

interface scpContextProps{
    scp:IScp[],
    setScp:Dispatch<SetStateAction<IScp[]>>
    scpSelected:IScp,
    setScpSelected:Dispatch<SetStateAction<IScp>>,
}

export const ScpContext = createContext({} as scpContextProps)

export const ScpProvider = (props: {children: ReactNode}) => {

    const [scp,setScp] = useState<IScp[]>([])
    const [scpSelected,setScpSelected] = useState<IScp>(
        {} as IScp
    )

    useEffect(()=>{
        const id = localStorage.getItem('id')
        if(id){
            scpController.getScps(id).then(s => {
                setScp(s)
                const scpId = localStorage.getItem('scpId')
                if(scpId)
                    setScpSelected(s.filter(s => s.id === scpId)[0])
            })
        }
    },[])

    return <ScpContext.Provider value={{
        scp,
        setScp,
        scpSelected,
        setScpSelected
    }}>
        {props.children}
    </ScpContext.Provider>
}