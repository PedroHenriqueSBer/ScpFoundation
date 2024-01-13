'use client'

import { 
    User,
    Lock
} from "lucide-react"
import { useEffect, useState } from "react"
import { IconScp } from "../svg/IconScp"
import { Button } from "./button"
import { Input } from "./input"
import { userController } from "../controller/userController"
import { useUser } from "../hooks/useUser"
import { useRouter } from "next/navigation"
import { scpController } from "../controller/scpsController"
import { useScp } from "../hooks/useScp"


export const Login = () => {
    const router = useRouter()
    const {setUser} = useUser()
    const {setScp} = useScp()
    
    const [name,setName] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const handleLogin = () => {
        userController.login({
            name,
            password
        })
        .then(u => {
            setUser(u)
            localStorage.setItem('id',u.id)
            scpController.getScps(u.id).then(setScp)
            router.push('/library')
        })
        .catch(()=>alert('Senha ou nome inexistente'))
    }

    useEffect(()=>{
        const id = localStorage.getItem('id')
        if(id){
            userController.getById(id).then(u => {
                setUser(u)
                router.push('/library')
            })
        }
    },[])

    return(
        <div className="w-screen h-screen justify-center sm:w-auto sm:h-auto p-6 bg-gray-300 flex flex-col items-center rounded shadow-md gap-3">
            <IconScp />
            <Input onChange={e => setName(e.target.value)} Icon={User} placeholder="Nome"/>
            <Input onChange={e => setPassword(e.target.value)} Icon={Lock} placeholder="Senha"/>
            <div className="w-1/2">
                <Button onClick={() => handleLogin()}>
                    Entrar
                </Button>
            </div>
        </div>
    )
}