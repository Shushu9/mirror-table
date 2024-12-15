export type UserItem = {
    address: UserAdress,
    description: string,
    email: string,
    firstName: string,
    id: number,
    lastName: string,
    phone: string,
};

export type UserAdress = {
    streetAddress: string,
    city: string,
    state: string,
    zip: string,
}

export type ISort = {
    name: string,
    sort: string,
}


export enum SortPropertyEnum {
    ID_DESC = 'id',
    ID_ASC = '-id',
    FIRST_NAME_DESC = 'firstName',
    FIRST_NAME_ASC = '-firstName',
    LAST_NAME_DESC = 'lastName',
    LAST_NAME_ASC = '-lastName',
    EMAIL_DESC = 'email',
    EMAIL_ASC = '-email',
    PHONE_DESC = 'phone',
    PHONE_ASC = '-phone',
}
