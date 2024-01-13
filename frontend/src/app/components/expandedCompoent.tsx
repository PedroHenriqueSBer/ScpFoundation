'use client'

import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

interface expandedComponentsProps {
    title: string,
    children: ReactNode
}

export const ExpandedComponents = ({ title, children }: expandedComponentsProps) => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="w-full bg-gray-100 rounded-md shadow-md">
            <button onClick={()=>{setIsOpen(!isOpen)}} className="flex w-full justify-between bg-gray-200 p-2 rounded-md shadow-md">
                <span>{title}</span>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isOpen && <div className="p-2">{children}</div>}
        </div>
    )
}