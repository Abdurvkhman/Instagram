export interface IAutorization {
    token: string,
    username: string,
    _id: string,
    avatar: string
}

export type autorizeState = {
    login?: IAutorization,
    isAdmin?: boolean,
    error?: string
}