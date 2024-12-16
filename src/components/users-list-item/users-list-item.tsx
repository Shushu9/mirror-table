import React from 'react';
import { UserItem } from '../../types';
import styled from 'styled-components';

type IProps = {
    item: UserItem,
    setChosenItem: (item: UserItem) => void
}

const UsersListItem: React.FC<IProps> = ({ item, setChosenItem }) => {

    return (
        <UserRow onClick={() => setChosenItem(item)}>
            <UserRowItem>
                {item.id}
            </UserRowItem>
            <UserRowItem>
                {item.firstName}
            </UserRowItem>
            <UserRowItem>
                {item.lastName}
            </UserRowItem>
            <UserRowItem>
                {item.email}
            </UserRowItem>
            <UserRowItem>
                {item.phone}
            </UserRowItem>
        </UserRow>
    )

}

export default UsersListItem;


const UserRow = styled.tr`
    cursor: pointer;
    padding: 15px 20px;
    border-bottom: 1px solid white;
    transition: .3s;
    &:hover {
        background-color: rgb(60, 106, 107);
    }
    &:last-child {
        border-bottom: unset;
    }
`;

const UserRowItem = styled.th`
    width: 20 %;
    padding: 15px 20px;
`;