

export interface IItem {
    id: string,
    text: string,
}

export interface IUseAddItem {
    items: IItem[],
    handleChange: (item: string) => void,
    addItem: (event: any) => void,
    newItem: string,
    selected: IItem | undefined,
    selectItem: (id: string) => void,
}