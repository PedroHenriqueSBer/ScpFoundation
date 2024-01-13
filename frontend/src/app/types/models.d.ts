export interface IStats{
    strength: number,
    dexterity: number,
    resistance: number,
    intelligence: number,
    charisma: number,
    sanity: number
}

export interface IProfessionCharacteristic{
    title: string,
    lvl: number,
    description: string
}

export interface IBag{
    name: string,
    description: string
    damage?: string,
    type?: string,
    ca?: number,
    caAdvantage?: string,
}

export interface ICurses{
    title: string,
    lvl: number,
    description: string,
    mp: number,
    quantity: number, 
    maxQuantity: number, 
    type: string
}

export interface IUser{
    id: string,
    bankId: string,
    name: string,
    password: string,
    type: number,
    level: number,
    hp: number,
    maxHp: number,
    mp: number,
    maxMp: number,
    stats: IStats,
    substats: string[],
    bag: IBag[],
    curses: ICurses[],
    profession: string,
    professionCharacteristic: IProfessionCharacteristic[]
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

export interface IBank{
    id: string,
    cash: number,
    up: number,
    down: number
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