import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { postReq } from "../../types/types";
import { getPosts, removePost } from "../../services/postsService";


const initialState: postReq = {
    loading: false,
    posts:[],
    error:'',
}

const fetchPosts = createAsyncThunk('posts/fetchPosts', getPosts)


const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        deletePost: (state:postReq, action: PayloadAction<number>)=>{
            let postDelete = state.posts.findIndex(post => post.id === action.payload)
            state.posts.splice(postDelete, 1);
            // removePost(action.payload);
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
        })
    }
})


export default postsSlice.reducer;
export {fetchPosts}
export const {deletePost} = postsSlice.actions;