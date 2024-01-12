'use client'

import { 
    User,
    Lock
} from "lucide-react"
import { useState } from "react"
import { IconScp } from "../svg/IconScp"
import { Button } from "./button"
import { Input } from "./input"
import { useUser } from "../hook/useUser"

export const Login = () => {
    const {setUser} = useUser()

    const [name,setName] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const handleLogin = () => {
        console.log('dasdasd')
    }

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