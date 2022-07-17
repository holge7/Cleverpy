import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { postReq, posts } from "../../types/types";
import { getPosts, removePostBack, editPostBack } from "../../services/postsService";


const initialState: postReq = {
    loading: true,
    error:'',
    posts:[],
    editArea:{},
}

const fetchPosts = createAsyncThunk('posts/fetchPosts', getPosts)


const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        deletePost: (state:postReq)=>{
            let postDelete = state.posts.findIndex(post => post.id === state.editArea.id)
            state.posts.splice(postDelete, 1);
            // removePostBack(action.payload); BACK-END
        },
        editPost: (state:postReq, action:PayloadAction<posts>)=>{
            let postEdit = state.posts.findIndex(post => post.id === action.payload.id)
            state.posts[postEdit] = action.payload
            // editPostBack(state.posts[postEdit]); BACK-END
        },
        addEditArea: (state:postReq, action:PayloadAction<posts>)=>{
            state.editArea = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true;
        })
        .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.posts = action.payload.data;
            state.error = '';
        })
        .addCase(fetchPosts.rejected, (state, action)=>{
            state.loading = false;
            state.posts = [];
            state.error = action.error.message;
            console.log("error")
        })
    }
})


export default postsSlice.reducer;
export {fetchPosts}
export const {deletePost, editPost, addEditArea} = postsSlice.actions;