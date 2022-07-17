import './editPanel.css';

import { useContext, useState } from 'react';

//Components
import EditableText from '../editableText/EditableText';
import Btn from '../btn/Btn';

//Store
import { useAppDispatch } from '../../../store/hooks';
import { useAppSelector } from '../../../store/hooks';
import { editPost } from '../../../store/posts/postsSlice';

//Context
import { OptionsContext } from '../../content/Content';

type props = {
    top:number
}

export default (props:props) => {

    
    //Context
    const {optionDispatch} = useContext(OptionsContext)
    
    //Store
    const {editArea} = useAppSelector((state)=>state.posts);
    const dispatchStore = useAppDispatch();

    //State
    const [modifyPost, setModifyPost] = useState({...editArea})
    
    const modifyText = (newString:string, name:string) => {
        setModifyPost({...modifyPost, [name]:newString})
    }
    
    const close = () => optionDispatch({type:'EDIT_CHANGE', payload:editArea.id})
    const save = () => {
        dispatchStore(editPost(modifyPost))
        close()
    }
    

    return (
        <div className="editPanel-wrapper" style={{top:props.top}}>
            <div className='editPanel'>

                <div>
                    <h2>Edit post {editArea.id}</h2>
                    <div className='editable-box'>
                        <h2 className='editable_reference'>Title</h2>
                        <EditableText callback={modifyText} name={'title'} text={editArea.title} max={75} />
                    </div>
                    <div className='editable-box'>
                        <h2 className='editable_reference'>Body</h2>
                        <div className='editPanel-body'>
                            <EditableText callback={modifyText} name={'body'} text={editArea.body} />
                        </div>
                    </div>
                </div>

                <div className='edit_panel-btns'>
                    <div onClick={save}>
                        <Btn class='save' content='Save' />
                    </div>
                    <div onClick={close}>
                        <Btn class='discard' content='Discard'/>
                    </div>
                </div>

            </div>
        </div>
    )
}