import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './posts/postsSlice';
import userReducer from "./user/userSlice";

const store = configureStore({
    reducer:{
        posts:postsReducer,
        user:userReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;