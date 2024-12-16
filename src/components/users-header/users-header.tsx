import { UserItem } from '../../types';
import UsersHeaderItem from '../users-header-item/users-header-item';
import './users-header.css';

type IProps = {
    data: UserItem[]
    sortData: (header: string) => void;
    sortType: string;
}

const UsersHeader = ({ data, sortData, sortType }: IProps) => {

    const haeders = Object.keys(data[0]).map((word, index) => {
        if (word !== "address" && word !== "description") {
            return <UsersHeaderItem sortData={sortData} key={index} word={word} sortType={sortType} />
        }
    })

    return (
        <thead className="users-list">
            <tr className='user__row-head'>
                {haeders}
            </tr>
        </thead >
    )
}

export default UsersHeader;