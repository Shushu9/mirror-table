import React from 'react';
import './chosen-row.css';
import { UserItem } from '../../types';

type IProps = {
    item: UserItem,
}

const ChosenRow: React.FC<IProps> = ({ item }) => {

    return (
        <div className='chosen-row'>
            <h1 className='chosen-row__title'>
                {item.firstName + ' ' + item.lastName}
            </h1>
            <a className='chosen-row__link' href={"mailto:" + item.email}>
                Email: {item.email}
            </a>
            <a className='chosen-row__link' href={"tel:" + item.phone}>
                Phone: {item.phone}
            </a>
            <address>
                Address: {item.address.streetAddress + ' ,' + item.address.city + ' ,' + item.address.state + ' ,' + item.address.zip}
            </address>
            <p>
                Info: {item.description}
            </p>
        </div>
    )
}

export default ChosenRow;