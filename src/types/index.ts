export interface IItem {
    id: string;
    text: string;
}

export interface IUseAddItem {
    items: IItem[];
    newItem: string;
    selected: IItem | undefined;
    addItem: (event: any) => void;
    handleChange: (item: string) => void;
    selectItem: (id: string) => void;
}