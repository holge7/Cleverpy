import axios, { AxiosResponse } from "axios"

const url: string = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () =>{
    return axios
        .get<AxiosResponse>(url)
        .then(response => response)
}

const removePost = (id:number) =>{
    axios.delete('apiChula/posts/'+id)
}

export {getPosts, removePost}