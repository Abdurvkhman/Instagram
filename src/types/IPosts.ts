export interface IPosts {
        _id: string,
        description: string,
        comments: [],
        image: string,
        user: string,
        created_at: string,
        likes: number,
}

export type postsState = {
    posts: IPosts[],
    isAdmin?: boolean,
    error?: string
}