import { UserItem } from '../../types';
import './users-header.css';
// import { UsersHeaderItem } from '../../types';

type IProps = {
    data: UserItem[]
    sortData: () => void;
}



const UsersHeader = ({ data, sortData }: IProps) => {

    // const elements = data.map(item => {

    //     return (
    //         <UsersListItem
    //             key={item.id + item.phone} //item.id не являются уникальным значением и не может быть id. 
    //             {...item} />
    //     )
    // })

    return (
        <thead className="users-list">
            <tr className='user__row-head'>
                {Object.keys(data[0]).map((hd, index) => {
                    if (hd !== "address" && hd !== "description") {
                        return <th className='user__row-item' key={`tr-${index}`} > {hd}</th>;
                    }
                })}
            </tr>
        </thead >
    )
}

export default UsersHeader;