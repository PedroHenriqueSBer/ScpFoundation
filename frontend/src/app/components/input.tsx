import { ComponentProps, ElementType } from "react"

interface InputProps extends ComponentProps<'input'> {
    Icon?: ElementType
    legend?: string
}
export const Input = ({Icon, legend, ...props}: InputProps) => {
    return (
        <div className="w-full h-fit">
            {legend && <span className="text-sm ml-1 text-gray-900 font-bold">{legend}</span>}
            <div  className="w-full p-2 px-3 flex items-center gap-2 border rounded-md shadow-md bg-gray-100">
                {Icon && <Icon className='w-4 h-4 text-gray-900'/>}
                <input className="outline-none bg-transparent w-full" type="text" {...props} />
            </div>
        </div>

    )
}