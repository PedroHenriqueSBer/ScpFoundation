'use client'

import { CardScpItem } from "@/app/components/cardScpItem";
import { useScp } from "@/app/hooks/useScp";
import { useUser } from "@/app/hooks/useUser";
import { IScp } from "@/app/types/models";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Library(){
    const router = useRouter()
    const { scp, setScp, setScpSelected } = useScp()
    const { user } = useUser()

    const [search, setSearch] = useState('')

    const goToScpInfo = (scp: IScp) => {
        setScpSelected(scp)
        localStorage.setItem('scpId',scp.id)
        router.push('/scp')
    }

    return (
        <div className="p-6 flex flex-col items-center max-h-screen gap-4">
            <div className="bg-gray-300 w-full rounded-md shadow-md p-6">
                <div className="flex gap-2 items-center border-b border-b-gray-900">
                    <Search className="w-4 h-4"/>
                    <input onChange={e => setSearch(e.target.value)} className="w-full bg-transparent outline-none" />
                </div>
            </div>
            <div className="flex pb-4 flex-col gap-4 items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {scp.length > 0? 
                    scp.filter(s => 
                        s.name.toLowerCase().includes(search.toLowerCase()) || 
                        s.id.toLowerCase().includes(search.toLowerCase())) .map(s => 
                            <CardScpItem onClick={() => goToScpInfo(s)} key={s.id} {...s} />
                        ) 
                    : 
                    (
                        <span>Nenhum scp encontrado...</span>
                    )}
            </div>
        </div>
    )
}