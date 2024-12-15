import React from 'react';
import './users-header-item.css';

type IProps = {
    sortData: (word: string) => void;
    word: string;
}

const UsersHeaderItem: React.FC<IProps> = ({ sortData, word }) => {
    return <th onClick={() => sortData(word)} className='user__row-item' > {word}</th>;
}

export default UsersHeaderItem;