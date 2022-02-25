interface IContact {
    id: number;
    name: string;
    email: string;
}

export interface IContacts {
    contacts: IContact[]
}