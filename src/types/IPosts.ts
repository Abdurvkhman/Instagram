export interface IPosts {
    _id: string,
    description: string,
    comments: [],
    image: string,
    user: {
        _id: string,
        username: string,
        avatar: string,
    },
    created_at: string,
    likes: number,
}

export type postsState = {
    posts: IPosts[]
}