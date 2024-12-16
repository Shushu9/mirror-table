import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

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
        <SearchWrap>
            <SearchInput ref={inputRef} type="text" placeholder="find text" defaultValue="" />
            <SearchButton onClick={submitFilter} type="button">Найти</SearchButton>
        </SearchWrap>
    )
}

export default SearchPanel;


const SearchWrap = styled.div`
    margin: 20px 0;
    padding: 15px 20px;
    border: 2px solid #3d5a80;
    border-radius: 8px;
    display: flex;
    gap: 20px;
`;

const SearchInput = styled.input`
    width: 100%;
    border-radius: 4px;
    border: 1px solid grey;
    padding: 0 20px;
`;

const SearchButton = styled.button`
    cursor: pointer;
    padding: 4px 20px;
    font-size: 1.2rem;
    background-color: #3d5a80;
    color: #fff;
    border: none;
    border-radius: 4px;
    transition: 0.3s;
    &:hover {
        background-color: rgb(60, 106, 107);}
`;
