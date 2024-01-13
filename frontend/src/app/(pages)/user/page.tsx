import { Bag } from "@/app/components/bag";
import { Bank } from "@/app/components/bank";
import { Professions } from "@/app/components/professionsSettings";
import { UserSettings } from "@/app/components/userSettings";

export default function UserPage(){
    return (
        <div className="w-full h-full p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:p-6 xl:grid-cols-3">
            <UserSettings />
            <div className="w-full h-full flex flex-col gap-6">
                <Bank />
                <Professions />
            </div>
            <Bag />
        </div>
    )
}