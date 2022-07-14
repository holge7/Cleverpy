import './post.css';
import OptionBtn from './../optionBtn/OptionBtn';
type posts = {
    userId:number,
    id:number,
    title:string,
    body:string,
}


export default (props:posts) => {
    const obj = {'id':props.id}
    return (
        <div className='post_wrapper'> 
            <div className='post_data'>
                <div className='post-user'>UserId: {props.userId} - {props.id}</div>
                <div className='post-title'>{props.title}</div>
                <div className='post-body'>{props.body}</div>
            </div>
            <div className='post_options'>
                <OptionBtn {...props} />
            </div>
        </div>
    )
}