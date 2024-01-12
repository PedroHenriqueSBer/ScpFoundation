import { ComponentProps, ElementType } from "react"

interface ButtonProps extends ComponentProps<'button'> {
    Icon?: ElementType
}
export const Button = ({Icon, children, ...props}: ButtonProps) => {
    return (
        <button className="w-full bg-gray-900 text-gray-200 p-2 rounded-md shadow-md">
            {Icon && <Icon className='w-4 h-4'/>}
            {children}
        </button>
    )
}