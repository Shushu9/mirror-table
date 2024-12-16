import styled from 'styled-components';
import { UserItem } from '../../types';
import UsersHeaderItem from '../users-header-item/users-header-item';

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
        <UsersList>
            <UserRowHead>
                {haeders}
            </UserRowHead>
        </UsersList >
    )
}

export default UsersHeader;

const UsersList = styled.thead`
    margin-top: 30px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, .15);
    color: #fff;
    max-height: 70vh;
    overflow: auto;
    scrollbar-width: thin;
    padding-left: 0;
`;

const UserRowHead = styled.tr`
    padding: 15px 20px;
    border-bottom: 1px solid white;
`;