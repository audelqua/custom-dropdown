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
        if (newItem === "") return

        let tempItems = [ {id: generateRandomNumber(), text: newItem }, ...items ]
        setItems(tempItems)
        setItem("")
    }

    const selectItem = (id: string) => {
        const tempItem = items.find((item: IItem) => item.id === id);
        setSelected(tempItem);
        if(tempItem) setItem(tempItem.text)
    }

    return {items, handleChange, addItem, newItem, selected, selectItem};
}

export default useAddItem;