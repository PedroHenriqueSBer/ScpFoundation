'use client'

import { 
    DollarSign,
    TrendingDown,
    TrendingUp} from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"
import { useBank } from "../hooks/useBank"

export const Bank = () => {

    const {bank} = useBank()

    return (
        <div className="bg-gray-300 p-4 rounded-md shadow-md flex flex-col gap-2 lg:p-6">
            <h1 className="ml-2 text-gray-900 font-bold">Banco</h1>
            <div className="w-full grid grid-cols-2 gap-2">
                <Input value={bank.cash} disabled Icon={DollarSign} />
                <Input value={`+ ${bank.up}`} disabled Icon={TrendingUp} />
                <Button>Transações</Button>
                <Input value={`- ${bank.down}`} disabled Icon={TrendingDown} />
            </div>
        </div>
    )
}