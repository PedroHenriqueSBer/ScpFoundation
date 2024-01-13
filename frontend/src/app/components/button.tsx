import { ComponentProps, ElementType } from "react"

interface ButtonProps extends ComponentProps<'button'> {
    Icon?: ElementType
}
export const Button = ({Icon, children, ...props}: ButtonProps) => {
    return (
        <button className="w-full p-2 px-3 bg-gray-900 text-gray-200 rounded-md shadow-md" {...props}>
            {Icon && <Icon className='w-4 h-4'/>}
            {children}
        </button>
    )
}