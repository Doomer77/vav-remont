interface IContact {
    id: number
    name: string
    email?: string
    address: string
}

export interface IContacts {
    contacts: IContact[]
}

interface IPost {
    id: number
    title: string
    body: string
}

export interface IPostInfo {
    post: IPost
}

export interface IPosts {
    posts: IPost[]
}

export interface IParams {
    id: string
}

export interface ISocials {
    id: number,
    icon: string,
    path: string
}