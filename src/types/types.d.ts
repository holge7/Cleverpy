export interface posts{
    userId:number,
    id:number,
    title:string,
    body:string,
}

export interface postReq{
    loading: boolean,
    posts: Array<posts>,
    error:string | undefined,
}

type posts = {
    userId:number,
    id:number,
    title:string,
    body:string,
}