import './optionBtn.css';
import { useContext, useEffect } from "react";

//Components
import OptionsPanel from '../optionsPanel/OptionsPanel';
import EditPanel from "../editPanel/EditPanel";

//Types
import { posts } from "../../../types/types";

//Context
import { OptionsContext } from '../../content/Content';

//Store
import { useAppDispatch } from './../../../store/hooks';
import { addEditArea } from "../../../store/posts/postsSlice";

export default (post:posts) => {

    const {optionState, optionDispatch} = useContext(OptionsContext);
    
    const dispatch = useAppDispatch()

    const optionDown = () => {
        optionDispatch({type:'OPTIONS_CHANGE', payload:post.id});
        dispatch(addEditArea(post)) 
    }


    const isOptionDown = () => optionState.optionsDown == post.id
    const isEditMode = () => optionState.editMode == post.id
    let top=0;
    useEffect(()=>{
        top = window.scrollY
    }, [isEditMode])



    return(

        <div>
            <div className="option-menu">
                <div 
                    onClick={optionDown}
                    className={`option_btn ${isOptionDown() && 'option_btn-act'}`}>
                    <i className={`bi bi-caret-down`}></i>
                </div>
                {isOptionDown() && <OptionsPanel />}
            </div>
            {isEditMode() && <EditPanel top={window.scrollY} />}
        </div>
    )
}