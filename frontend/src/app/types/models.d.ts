export interface IStats{
    strength: number,
    dexterity: number,
    resistance: number,
    intelligence: number,
    charisma: number,
    sanity: number
}

export interface IUser{
    id: string,
    name: string,
    password: string,
    type: number,
    level: number,
    hp: number,
    mp: number,
    stats: IStats,
    substats: string[],
    bag: string[],
    curses: string,
    profession: string,
    professionCharacteristic: string[]
}
export interface IScp{
    id: string,
    name: string,
    dangerLevel: number,
    classObject: string,
    imgUrl: string,
    procedures: string,
    discovery: string,
    description: string
    
}

export interface IDefaultValues{
    hp: number,
    mp: number,
    stats: IStats,
    substats: string[],
    bag: string[]
}
export interface IProfessions{
    id: string,
    name: string,
    professionCharacteristic: string[],
    defaultValues: IDefaultValues
}