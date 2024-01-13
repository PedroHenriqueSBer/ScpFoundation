import Link from "next/link"
import { IconScp } from "../svg/IconScp"
import { MenuBar } from "./menuBar"
import { Button } from "./button"

export const Header = () => {
    return <>
        <header className="flex w-full px-4 h-20 justify-between items-center shadow bg-gray-300">
            <div className="flex items-center gap-4">
                <Link href="/library" >
                    <IconScp className='w-10 h-10 sm:w-14 sm:h-14' />
                </Link>
                <h1 className="text-gray-800 font-bold text-xl sm:text-2xl">
                    Scp Foundation
                </h1>
            </div>
            <MenuBar />
        </header>
    </>

}