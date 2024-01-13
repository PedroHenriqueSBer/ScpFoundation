
interface DangerLevelProps{
    level: number
}

export const DangerLevel = ({level}: DangerLevelProps ) => {
    return <>
        {level === 0 && <div className="bg-white rounded w-fit text-sm flex items-center px-2 text-gray-900">Branco</div>}
        {level === 1 && <div className="bg-green-600 rounded w-fit text-sm flex items-center px-2 text-gray-50">Verde</div>}
        {level === 2 && <div className="bg-blue-600 rounded w-fit text-sm flex items-center px-2 text-gray-50">Azul</div>}
        {level === 3 && <div className="bg-yellow-500 rounded w-fit text-sm flex items-center px-2 text-gray-50">Amarelo</div>}
        {level === 4 && <div className="bg-pink-500 rounded w-fit text-sm flex items-center px-2 text-gray-50">Rosa</div>}
        {level === 5 && <div className="bg-orange-500 rounded w-fit text-sm flex items-center px-2 text-gray-50">Laranja</div>}
        {level === 6 && <div className="bg-red-600 rounded w-fit text-sm flex items-center px-2 text-gray-50">Vermelho</div>}
        {level === 7 && <div className="bg-black rounded w-fit text-sm flex items-center px-2 text-gray-50">Preto</div>}
    </>
}






