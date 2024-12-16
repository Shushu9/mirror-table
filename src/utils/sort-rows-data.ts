import { UserItem } from "../types";


const sortRowsData = (header: string, data: UserItem[], sortType: string) => {
    const newdata = [...data].sort((a, b) => {
        if (sortType !== header) {
            // @ts-expect-error header всегда является ключом UserItem
            if (a[header] > b[header]) {
                return 1
            } else {
                return -1
            }
        } else {
            // @ts-expect-error header всегда является ключом UserItem
            if (a[header] > b[header]) {
                return -1
            } else {
                return 1
            }
        }
    });
    return newdata;

}

export default sortRowsData;