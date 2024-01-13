'use client'

import { Book, LogOut, MoreVertical, Save, User } from "lucide-react"
import { useState } from "react"
import { useUser } from "../hooks/useUser"
import { useRouter } from "next/navigation"
import { userController } from "../controller/userController"
import { useBank } from "../hooks/useBank"

export const MenuBar = () => {
    const router = useRouter()
    const { user, setUser } = useUser()
    const { bank } = useBank()

    const [dropdownOpen,setDropdownOpen] = useState(false)
    const [isSaving,setIsSaving] = useState(false)

    const save = () => {
        setIsSaving(true)
        userController.save(user,bank).then(()=>{
            setIsSaving(false)
        })
    }

    const logOut = () => {
        setUser({
            id: "",
            bankId: "",
            name: "",
            password: "",
            type: 0,
            level: 0,
            hp: 0,
            maxHp: 0,
            mp: 0,
            maxMp: 0,
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
            curses: [],
            profession: "",
            professionCharacteristic: []
        })
        localStorage.removeItem('id')
        router.push('/')
    }

    const redirect = (message: string) => {
        router.push(message)
        setDropdownOpen(false)
    }

    return (
        <div className="flex items-center">
            <button onClick={()=>setDropdownOpen(!dropdownOpen)} className="rounded-full hover:bg-slate-200 transition p-3" type="button"><MoreVertical /></button> 
            {dropdownOpen &&
                <div id="dropdown" className="absolute z-10 right-3 top-[5.5rem] bg-gray-300 rounded border shadow p-3 font-bold">
                    <button onClick={()=>redirect('/library')}  className="flex items-center gap-1 pl-1 pr-5 py-1 hover:text-gray-600"><Book className="w-5 h-5 text-gray-900" /> Biblioteca</button>
                    <button onClick={()=>redirect('/user')}  className="flex items-center gap-1 pl-1 pr-5 py-1 hover:text-gray-600"><User className="w-5 h-5 text-gray-900"/> Ficha</button>
                    <button onClick={()=>save()} className="flex items-center gap-1 pl-1 pr-5 py-1 hover:text-gray-600">
                        {isSaving?                     <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg> : <Save className="w-5 h-5 text-gray-900"/>
                    }

                     Salvar</button>
                    <hr />
                    <button onClick={() => logOut()} className="flex items-center gap-1 pl-1 pr-5 py-1 hover:text-gray-600"><LogOut className="w-5 h-5 text-gray-900"/> Sair</button>
                </div>
            }
        
        </div>
    )
}