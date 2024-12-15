import React from 'react';
import './users-list-item.css';
import { UserItem } from '../../types';

type IProps = {
    item: UserItem,
    setChosenItem: (item: UserItem) => void
}

const UsersListItem: React.FC<IProps> = ({ item, setChosenItem }) => {

    return (
        <tr className='user__row' onClick={() => setChosenItem(item)}>
            <th className='user__row-item'>
                {item.id}
            </th>
            <th className='user__row-item'>
                {item.firstName}
            </th>
            <th className='user__row-item'>
                {item.lastName}
            </th>
            <th className='user__row-item'>
                {item.email}
            </th>
            <th className='user__row-item'>
                {item.phone}
            </th>
        </tr>
    )

}

export default UsersListItem;