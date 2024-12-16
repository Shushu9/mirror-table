import React from 'react';
import { UserItem } from '../../types';
import { styled } from 'styled-components';

type IProps = {
    item: UserItem,
}

const ChosenRow: React.FC<IProps> = ({ item }) => {

    return (
        <ChosenWrap>
            <h1>
                {item.firstName + ' ' + item.lastName}
            </h1>
            <ChosenLink href={"mailto:" + item.email}>
                Email: {item.email}
            </ChosenLink>
            <ChosenLink href={"tel:" + item.phone}>
                Phone: {item.phone}
            </ChosenLink>
            <address>
                Address: {item.address.streetAddress + ' ,' + item.address.city + ' ,' + item.address.state + ' ,' + item.address.zip}
            </address>
            <p>
                Info: {item.description}
            </p>
        </ChosenWrap>
    )
}

export default ChosenRow;

const ChosenWrap = styled.div`
    margin-top: 20px;
    padding: 15px 20px;
    border: 2px solid #3d5a80;
    border-radius: 8px
`;

const ChosenLink = styled.a`
    display: block;
    color: black;
    text-decoration: none;
`;