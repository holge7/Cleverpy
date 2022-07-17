import { useContext } from 'react';

//Store
import { useAppDispatch, useAppSelector } from './../../../store/hooks';
import { deletePost } from "../../../store/posts/postsSlice";

//Context
import { OptionsContext } from '../../content/Content';

export default () => {

    const {optionDispatch} = useContext(OptionsContext)
    const {editArea} = useAppSelector((state)=>state.posts);

    const dispatch = useAppDispatch()

    const removePost = () => dispatch(deletePost())
    const editView = () => {
        optionDispatch({type:'OPTIONS_CHANGE', payload:editArea.id})
        optionDispatch({type:'EDIT_CHANGE', payload:editArea.id})
    }


    return (
        <div className={`option_card-wrapper`}>
            <div className={`option_card`}>
                <div className="option option-danger" onClick={removePost} >Delete <i className="bi bi-trash"></i></div>
                <div className="option" onClick={editView}>Edit <i className="bi bi-pencil"></i></div>
                <div className="option">Other options... 🤔</div>
            </div>
        </div>
    )
}