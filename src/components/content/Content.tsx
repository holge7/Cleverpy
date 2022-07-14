import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

import Post from "../common/post/Post";


export default () => {
    const {posts} = useAppSelector((state)=>state.posts);
    
    return (
        <div className="Content">
            {posts.map(post=><Post {...post} key={post.id} />)}
        </div>
    )
}