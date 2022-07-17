import './sideCard.css'

type card = {
    title:string,
    body:string,
    img?:string,
} 

export default (props:card) => {
    return (
        <div className="card_wrapper">
            {props.img && <img src={props.img} alt="" className='card_img' />}
            <h2 className="card_title">{props.title}</h2>
            <p className="card_body">{props.body}</p>
        </div>
    )
}