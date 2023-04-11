import { useState } from "react"

import { generateRandomNumber } from "../utils/generateRandomNumber";
import {IItem, IUseAddItem} from '../types'


const useAddItem = (): IUseAddItem => {
    const [items, setItems] = useState<IItem[]>([]);
    const [newItem, setItem] = useState<string>("");
    const [selected, setSelected] = useState<IItem | undefined>();

    const handleChange = (item: string): void => {
        setItem(item)
    }

    const addItem = (event: any): void => {
        event.preventDefault()

        if (newItem === "") {
            return
        }

        const tempItems = [...items];
        tempItems.push({id: generateRandomNumber(), text: newItem})
        setItems(tempItems)
        setItem("")
    }

    const selectItem = (id: string) => {
        const item = items.find((i: IItem) => i.id === id);
        setSelected(item);
        setItem(item?.text!)
    }

    return {items, handleChange, addItem, newItem, selected, selectItem};
}

export default useAddItem;