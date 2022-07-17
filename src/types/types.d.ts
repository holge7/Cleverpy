export interface posts{
    userId:number,
    id:number,
    title:string,
    body:string,
}

export interface postReq{
    loading: boolean,
    error:string | undefined,
    posts: Array<posts>,
    editArea:post | null,
}

type posts = {
    userId:number,
    id:number,
    title:string,
    body:string,
}