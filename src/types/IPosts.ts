export interface IPosts {
    _id: string,
    description: string,
    comments: [],
    image: string,
    user: {
        avatar: string,
        username: string,
        _id: string
    },
    created_at: string,
    likes: number,
}

export type postsState = {
    posts: IPosts[]
}