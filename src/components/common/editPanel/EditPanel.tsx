import './editPanel.css';
import { posts } from '../../../types/types';

import EditableText from '../editableText/EditableText';

export default (post:posts) => {
    return (
        <div className="editPanel-wrapper">
            <div className='editPanel'>
                <div className='editPanel-title'>
                    <h2>Title:</h2>
                    <EditableText text={post.title} resize={true} />
                </div>
            </div>
        </div>
    )
}