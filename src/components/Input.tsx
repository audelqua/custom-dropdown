import React, { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import useAddItem from '../hooks/useAddItem'
import { IItem } from '../types'
import useOnClickOutside from '../hooks/useOnClickOutSide'

const Input: React.FC = () => {
    const classes = useStyles()
    const { items, handleChange, addItem, newItem, selected, selectItem } = useAddItem();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<any>(null);
    useOnClickOutside(wrapperRef, () => setDropdownVisible(false));
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className={classes.wrapper} ref={wrapperRef}>
            <div 
                className={classes.inputWrapper} 
                style={{
                    boxShadow: dropdownVisible ? '0px 0px 10px #9da9dc' : 'none',
                    outline: dropdownVisible ? '1px solid #9da9dc' : 'none',
                }} 
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
                {dropdownVisible && items.length > 0
                    ?   <img height={18} alt='chevron-down-icon' src="/chevron-up.svg" />
                    :   <img height={18} alt='chevron-down-icon' src="/chevron-down.svg" />
                }
            </div>
            {dropdownVisible && items.length > 0 && 
                <div className={classes.list}>
                    {items.map((item: IItem) => (
                        <div
                            key={item.id} 
                            className={item.id === selected?.id ? "selected" : ""}
                            onClick={() => selectItem(item.id)}
                        >
                            {item.text}
                            {item.id === selected?.id && <img height={16} alt='check-icon' src="/check.svg" />}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}
export default Input

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        background: "#fff",
        borderRadius: 12,
        border: '1px solid #ccc',
        overflow: 'hidden',
        cursor: "text",
        padding: '16px 20px',
        width: 300,
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
            borderRadius: 6,
            cursor: 'pointer',
            marginBottom: 4,
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: '600',
            '&:hover, &.selected': {
                background: '#f2f4ff',
                color: "#5f7bc1",
            }
        }
    }
})