import axios, { AxiosResponse } from "axios"

import { posts } from "../types/types"

const url: string = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () =>{
    return axios
        .get<AxiosResponse>(url)
        .then(response => response)

}

const removePostBack = (id:number) =>{
    axios.delete('apiChula/posts/'+id)
}

const editPostBack = (post:posts) =>{
    axios.put('apiChula/posts/'+post)
}

export {getPosts, removePostBack, editPostBack}