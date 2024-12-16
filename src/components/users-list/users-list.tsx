import UsersListItem from "../users-list-item/users-list-item";

import { UserItem } from '../../types';
import { styled } from "styled-components";

type IProps = {
    data: UserItem[],
    setChosenItem: (el: UserItem) => void,
    searchFilter: string
}

const UsersList = ({ data, setChosenItem, searchFilter }: IProps) => {

    const elements = data.map(el => {
        if (`${el.id}`.includes(searchFilter)
            || el.firstName.includes(searchFilter)
            || el.lastName.includes(searchFilter)
            || el.phone.includes(searchFilter)
            || el.email.includes(searchFilter)) {
            return (
                <UsersListItem
                    key={el.id + el.phone} //item.id не являются уникальным значением и не может быть id. 
                    setChosenItem={setChosenItem}
                    item={el} />
            )
        }
    }).filter((i) => i !== undefined)

    return (
        <UserList>
            {elements && elements.length > 0 ? elements : <NoResult> NOTHIG FOUND</NoResult>}
        </UserList>
    )
}

export default UsersList;


const UserList = styled.tbody`
    background-color: #3d5a80;
    color: #fff;
`;

const NoResult = styled.tr`
    text-align: center;
    font-size: 1.5rem;
    padding: 20px;
`;
