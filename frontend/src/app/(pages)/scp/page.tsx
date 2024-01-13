'use client'

import { DangerLevel } from "@/app/components/dangerLevel"
import { useScp } from "@/app/hooks/useScp"

export default function ScpPage(){

    const { scpSelected } = useScp()

    return (
        <div className="flex flex-col items-center">
            <div className="p-4 gap-4 w-80 md:w-[600px] md:grid md:grid-cols-2 mg:gap-2 justify-center">
                <div>
                    <img src={scpSelected.imgUrl} className="rounded w-full h-72 shadow md:w-64"/>
                    <div className="w-full flex flex-col gap-1">
                        <h1 className="font-bold text-gray-900">{scpSelected.id} - {scpSelected.name}</h1>
                        <DangerLevel level={scpSelected.dangerLevel}/>
                        <h1 className="font-bold text-gray-900">{scpSelected.classObject}</h1>
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col gap-1">
                        <h1 className="font-bold text-gray-900">Descrição</h1>
                        <div className="text-gray-900">
                            {scpSelected.description}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <h1 className="font-bold text-gray-900">Procedimentos</h1>
                        <div className="text-gray-900">
                            {scpSelected.procedures}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <h1 className="font-bold text-gray-900">Descoberta</h1>
                        <div className="text-gray-900">
                            {scpSelected.discovery}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}