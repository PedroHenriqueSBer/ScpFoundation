'use client'

import { 
    User,
    Heart,
    Waves,
    GanttChart,
    SquareUserRound,
    Sword,
    Rabbit,
    Brain,
    Shield,
    Smile,
    Activity } from "lucide-react"
import { Input } from "./input"
import { useUser } from "../hooks/useUser"
import { ChangeEvent, useEffect } from "react"

export const UserSettings = () => {

    const { user } = useUser()

    const Substats = ({msg}:{msg: string}) => {
        return <span className="border-b text-gray-900 hover:font-bold hover:border-b-gray-800 border-b-gray-900">{msg}</span>
    }

    return (
        <div className="bg-gray-300 p-4 rounded-md shadow-md flex flex-col gap-2 lg:p-6">
            <h1 className="ml-2 text-gray-900 font-bold">Ficha Pessoal</h1>
            <Input 
                onChange={e => {user.name = e.target.value}} 
                defaultValue={user.name} 
                legend="Nome" 
                Icon={User} />
            <div className="w-full grid grid-cols-2 gap-2">
                <Input 
                    type="number" 
                    onChange={e => {user.hp = parseFloat(e.target.value)}} 
                    defaultValue={user.hp} 
                    legend="Hp" 
                    Icon={Heart} />
                <Input 
                    type="number" 
                    onChange={e => {user.mp = parseFloat(e.target.value)}} 
                    defaultValue={user.mp} 
                    legend="Mp" 
                    Icon={Waves} />
                <Input 
                    type="number" 
                    onChange={e => {user.level = parseFloat(e.target.value)}} 
                    defaultValue={user.level}
                    legend="Level" 
                    Icon={GanttChart} />
                <Input 
                    type="number" 
                    onChange={e => {user.type = parseFloat(e.target.value)}} 
                    defaultValue={user.type}
                    legend="Tipo" 
                    Icon={SquareUserRound} />
            </div>
            <h1 className="ml-2 text-gray-900 font-bold">Status</h1>
            <div className="w-full grid grid-cols-2 gap-2">
                <Input 
                    type="number" 
                    onChange={e => {user.stats.strength = parseFloat(e.target.value)}} 
                    defaultValue={user.stats.strength}
                    legend="Força" 
                    Icon={Sword} />
                <Input 
                    type="number" 
                    onChange={e => {user.stats.dexterity = parseFloat(e.target.value)}} 
                    defaultValue={user.stats.dexterity}
                    legend="Destreza" 
                    Icon={Rabbit} />
                <Input
                    type="number" 
                    onChange={e => {user.stats.intelligence = parseFloat(e.target.value)}} 
                    defaultValue={user.stats.intelligence}
                    legend="Inteligência"
                    Icon={Brain} />
                <Input
                    type="number" 
                    onChange={e => {user.stats.resistance = parseFloat(e.target.value)}} 
                    defaultValue={user.stats.resistance}
                    legend="Resistência"
                    Icon={Shield} />
                <Input
                    type="number" 
                    onChange={e => {user.stats.charisma = parseFloat(e.target.value)}} 
                    defaultValue={user.stats.charisma}
                    legend="Carisma"
                    Icon={Smile} />
                <Input
                    type="number" 
                    onChange={e => {user.stats.sanity = parseFloat(e.target.value)}} 
                    defaultValue={user.stats.sanity}
                    legend="Sanidade"
                    Icon={Activity} />
            </div>
            <h1 className="ml-2 text-gray-900 font-bold">Status</h1>
            <div  className="w-full h-48 p-4 flex flex-col gap-1 border rounded-md shadow-md bg-gray-100 overflow-auto">
                {user.substats.length > 0 ? 
                    user.substats.map((s, index) => 
                        <Substats key={index} msg={s} />    
                    ) :
                    <span>Nenhum sustatus</span>
                }
            </div>
        </div>
    )
}