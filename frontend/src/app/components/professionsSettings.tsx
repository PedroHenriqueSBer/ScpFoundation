'use client'

import { useUser } from "../hooks/useUser"
import { DangerLevel } from "./dangerLevel"
import { ExpandedComponents } from "./expandedCompoent"

export const Professions = () => {
    
    const { user } = useUser()
    
    return (
        <div className="bg-gray-300 p-4 rounded-md shadow-md flex flex-col gap-2 lg:p-6">
            <h1 className="ml-2 text-gray-900 font-bold">Habilidades</h1>
            <div  className="w-full h-[233px] p-4 flex flex-col gap-3 border rounded-md shadow-md bg-gray-100 overflow-auto">
                {user.professionCharacteristic.length > 0 ? 
                    user.professionCharacteristic.map((pc, index) => 
                        <ExpandedComponents key={index} title={pc.title}>
                            <div className="flex flex-col gap-2">
                                <span className="flex items-center gap-1"><h1 className="font-bold">Nível: </h1>{pc.lvl}</span>
                                <div>
                                    <h1 className="font-bold">Descrição</h1>
                                    <span>{pc.description}</span>
                                </div>
                            </div>
                        </ExpandedComponents>    
                    )
                : <span>Nenhuma habilidade encontrada</span> }

            </div>
            <h1 className="ml-2 text-gray-900 font-bold">Maldições</h1>
            <div  className="w-full h-[233px] p-4 flex flex-col gap-3 border rounded-md shadow-md bg-gray-100 overflow-auto">
            {user.curses.length > 0 ? 
                    user.curses.map((c, index) => 
                        <ExpandedComponents key={index} title={c.title}>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <span className="flex items-center gap-1"><h1 className="font-bold">Nível: </h1> <DangerLevel level={c.lvl} /></span>
                                    <span className="flex items-center gap-1"><h1 className="font-bold">Gasto de mana: </h1>{c.mp}</span>
                                    <span className="flex items-center gap-1"><h1 className="font-bold">Quantidade: </h1>{c.quantity}/{c.maxQuantity}</span>
                                    <span className="flex items-center gap-1"><h1 className="font-bold">Tipo: </h1>{c.type}</span>
                                </div>
                                <div>
                                    <h1 className="font-bold">Descrição</h1>
                                    <span>{c.description}</span>
                                </div>
                            </div>
                        </ExpandedComponents>    
                    )
                : <span>Nenhuma habilidade encontrada</span> }
            </div>
        </div>
    )
}