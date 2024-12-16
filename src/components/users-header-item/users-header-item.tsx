import React from 'react';
import styled from 'styled-components';

type IProps = {
    sortData: (word: string) => void;
    word: string;
    sortType: string;
}

const UsersHeaderItem: React.FC<IProps> = ({ sortData, word, sortType }) => {
    const classes = sortType == word ? " sort-arrow-asc" : sortType == '-' + word ? " sort-arrow-desc" : '';
    const isActive: boolean = sortType == word || sortType == '-' + word;
    const isRotated: boolean = sortType == word;
    return (
        <UserHeaderTh onClick={() => sortData(word)}>
            {word}
            <SortArrow isActive={isActive} className={classes}>
                <SvgIcon isRotated={isRotated} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#fff"></path></SvgIcon>
            </SortArrow>
        </UserHeaderTh>
    )
}

export default UsersHeaderItem;

const SvgIcon = styled.svg<{ isRotated: boolean }>`
    transition: .3s;
    transform: ${props => (props.isRotated ? `rotate(180deg)` : `rotate(0)`)}; ;
`;

const SortArrow = styled.span<{ isActive: boolean }>`
    margin-left: 12px;
    opacity:    ${props => (props.isActive ? `1` : `0`)};
    transition: .3s;
`;

const UserHeaderTh = styled.th`
    cursor: pointer;
    width: 20%;
    padding: 15px 20px;
    text-transform: capitalize;
    &:hover ${SortArrow}{
        opacity: 1;
    }
`;
