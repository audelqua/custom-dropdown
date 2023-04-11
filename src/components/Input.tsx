import React, { FormEvent, useRef, useState } from 'react'
import {createUseStyles} from 'react-jss'

import useAddItem from '../hooks/useAddItem'
import {IItem, IUseAddItem} from '../types'
import useOnClickOutside from '../hooks/useOnClickOutSide'


const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        display: 'flex',
        background: "#fff",
        borderRadius: 12,
        border: '1px solid #ccc',
        overflow: 'hidden',
        cursor: "text",
        padding: '16px 20px',

        '& input': {
            fontSize: 14,
            fontWeight: 'bold',
            border: 'none',
            outline: 'none'
        },
    },
    list: {
        background: "#fff",
        border: '1px solid #ccc',
        borderRadius: 12,
        padding: 8,
        marginTop: 6,
        maxHeight: 300,
        overflowY: 'scroll',

        '& div': {
            listStyle: 'none',
            padding: "8px 12px",
            borderRadius: 10,
            cursor: 'pointer',
            marginBottom: 4,
            display: 'flex',
            justifyContent: 'space-between',

            '&:hover, &.selected': {
                background: '#f2f4ff',
                color: "#778fc7",
            }
        }
    }
})


const Input = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<any>(null);

    const classes = useStyles()
    const {items, handleChange, addItem, newItem, selected, selectItem} = useAddItem();
    useOnClickOutside(wrapperRef, () => setDropdownVisible(false));

    return (<div 
        className={classes.wrapper}
            ref={wrapperRef}
        >
        <div
            className={classes.input}
            onClick={() => inputRef?.current?.focus()}
        >

            <form onSubmit={addItem}>
                <input 
                    ref={inputRef}
                    value={newItem}
                    onChange={(event: any) => handleChange(event?.target?.value)}
                    placeholder='placeholder'
                    onFocus={() => setDropdownVisible(true)}
                />
            </form>
            <img height={18} src="/chevron-down.svg" />
        </div>
        {dropdownVisible && items.length > 0 && <div 
            className={classes.list}
        >
            {
                items.map((item: IItem) => <div key={item.id} className={item.id === selected?.id ? "selected": ""}
                    onClick={() => selectItem(item.id)}
                >
                    {item.text}
                    {item.id === selected?.id && <img height={16} src="/check.svg" />}
                </div>)
            }
        </div>}
    </div>)
}
export default Input