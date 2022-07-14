import './editPanel.css';
import { posts } from '../../../types/types';

import EditableText from '../editableText/EditableText';

export default (post:posts) => {
    return (
        <div className="editPanel-wrapper">
            <div className='editPanel'>
                <h2>Edit post {post.id}</h2>
                <div className='editable-box editPanel-title'>
                    <h2>Title</h2>
                    <EditableText text={post.title} resize={true} />
                </div>
                <div className='editable-box editPanel-body'>
                    <h2>Body</h2>
                    <EditableText text={post.body} resize={true} />
                </div>
                <button className='btn btn-save'>Save</button>
                <button className='btn btn-discard'>Discard</button>
            </div>
        </div>
    )
}