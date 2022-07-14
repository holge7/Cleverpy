import React from "react";
import { useState } from "react";
import { useAppDispatch } from './../../../store/hooks';
import { deletePost } from "../../../store/posts/postsSlice";
import EditPanel from "../editPanel/EditPanel";

import { posts } from "../../../types/types";

import './optionBtn.css';

type id = {
    id:number
}

export default (post:posts) => {

    const [option, setOption] = useState(false)
    const [edit, setEdit] = useState(false)
    const dispatch = useAppDispatch()

    const changeOption = () => setOption(!option)
    const changeEdit = () => setEdit(!edit)
    

    const removePost = () => {
        dispatch(deletePost(post.id)) 
    }

    



    return(
        <div className="option_wrapper">
            <div className="option-menu">
                <div className={`option_btn ${option ? 'option_btn-act' : ''}`} onClick={changeOption}><i className={`bi bi-caret-down`}></i></div>
                {option && 
                <div className="option_card-wrapper">
                    <div className="option-card">
                        <div className="option option-danger" onClick={removePost}>Delete <i className="bi bi-trash"></i></div>
                        <div className="option option-blue" onClick={changeEdit}>Edit <i className="bi bi-pencil"></i></div>
                        <div className="option">Other options... 🤔</div>
                    </div>
                </div>
                }
            </div>
            {edit && <EditPanel {...post} />}
        </div>
    )
}