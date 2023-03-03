export interface IAutorization {
    avatar: string
    token?: string,
    username: string,
    _id: string,
    
}

export type autorizationState = {
    user: IAutorization,
    isAdmin: boolean,
}