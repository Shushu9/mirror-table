import React, { useCallback, useRef } from 'react';
import './search-panel.css';

type IProps = {
    setFilter: (word: string) => void;
}

const SearchPanel: React.FC<IProps> = ({ setFilter }) => {
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const submitFilter = useCallback(() => {
        if (inputRef.current) {
            setFilter(inputRef.current.value)
            console.log(inputRef.current.value)
        }
    }, [setFilter])

    return (
        <div className='search-panel'>
            <input ref={inputRef} type="text" className="search-panel-input" placeholder="find text" defaultValue="" />
            <button onClick={submitFilter} type="button" className="search-panel-trigger">Найти</button>
        </div>
    )
}

export default SearchPanel;