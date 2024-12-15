import UsersListItem from "../users-list-item/users-list-item";

import './users-list.css';
import { UserItem } from '../../types';

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
        <tbody className="users-list">
            {elements && elements.length > 0 ? elements : <div className="no-results"> NOTHIG FOUND</div>}
        </tbody>
    )
}

export default UsersList;