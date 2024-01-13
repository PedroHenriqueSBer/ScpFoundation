import { IScp } from "../types/models"
import { Button } from "./button"
import { DangerLevel } from "./dangerLevel"

interface CardScpItemProps extends IScp {
    onClick?: () => void
}

export const CardScpItem = ({
    id,
    name,
    dangerLevel,
    classObject,
    imgUrl,
    onClick,
    ...props
}: CardScpItemProps) => {
    return (
        <div className="w-full flex flex-col gap-1 bg-gray-300 p-6 rounded-md shadow-md">
            <img src={imgUrl} className="rounded w-64 h-72 shadow" />
            <span>{id} - {name}</span>
            <span><DangerLevel level={dangerLevel} /> - {classObject}</span>
            <Button onClick={onClick}>Visualizar</Button>
        </div>
    )
}