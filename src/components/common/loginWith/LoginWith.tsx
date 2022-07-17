import './loginWith.css'

type props = {
    icon:string,
    name:string,
    color:string
}

export default (props:props) => {

    return (
        <div style={{backgroundColor:props.color}} className="loginWith_wrapper">
            <i className={`${props.icon} loginWith-icon`}></i>
            <p>&nbsp;Continue with {props.name}</p>
        </div>
    )
}