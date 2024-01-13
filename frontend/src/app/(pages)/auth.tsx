'use client'

import { useEffect } from "react"
import { userController } from "../controller/userController"
import { useUser } from "../hooks/useUser"
import { useRouter } from "next/navigation"

export function Auth(){

    const router = useRouter()
    const { setUser } = useUser()

    useEffect(()=>{
        const id = localStorage.getItem('id')
        if(id){
            userController.getById(id).then(u => {
                setUser(u)
            })
        }
        else
            router.push('/')
    },[])
  
    return (
      <></>
    )
  }