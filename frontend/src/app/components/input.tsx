import { ComponentProps, ElementType } from "react"

interface InputProps extends ComponentProps<'input'> {
    Icon?: ElementType
}
export const Input = ({Icon, ...props}: InputProps) => {
    return (
        <div className="w-full h-10 px-2 flex items-center gap-2 border rounded-md shadow-md bg-gray-100">
            {Icon && <Icon className='w-4 h-4 text-gray-900'/>}
            <input className="outline-none bg-transparent w-full" type="text" {...props} />
        </div>
    )
}