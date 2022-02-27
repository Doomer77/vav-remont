interface IAddressContact {
    street: string
    suite: string
    city: string
    zipcode: string
}

interface IContactInfo {
    name: string
    email: string
    address: IAddressContact
}

export interface IContact {
    contact: IContactInfo
}