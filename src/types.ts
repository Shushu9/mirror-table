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