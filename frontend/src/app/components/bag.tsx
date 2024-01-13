'use client'

import { useUser } from "../hooks/useUser"
import { ExpandedComponents } from "./expandedCompoent"

export const Bag = () => {
    const { user } = useUser()

    return (
        <div className="bg-gray-300 p-4 rounded-md shadow-md flex flex-col gap-2 lg:p-6">
            <h1 className="ml-2 text-gray-900 font-bold">Equipamentos</h1>
            <div  className="min-h-64 h-full  p-4 flex flex-col gap-3 border rounded-md shadow-md bg-gray-100 overflow-auto">
                {user.bag.length > 0 ? 
                user.bag.map((b, index) => 
                    <ExpandedComponents key={index} title={b.name}>
                        <div className="flex flex-col gap-2">
                            <div>
                                {b.type && <span className="flex items-center gap-1"><h1 className="font-bold">Tipo: </h1>{b.type}</span>}
                                {b.damage && <span className="flex items-center gap-1"><h1 className="font-bold">Dano: </h1>{b.damage}</span>}
                                {b.ca && <span className="flex items-center gap-1"><h1 className="font-bold">Ca: </h1>{b.ca}</span>}
                                {b.caAdvantage && <span className="flex items-center gap-1"><h1 className="font-bold">Proteção extra: </h1>{b.caAdvantage}</span>}
                            </div>
                            <div>
                                <h1 className="font-bold">Descrição</h1>
                                <span>{b.description}</span>
                            </div>
                        </div>
                    </ExpandedComponents>
                )
                : <span>Nenhum item encontrado</span>}
            </div>
        </div>
    )
}