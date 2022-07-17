import React from "react"
import './btn.css';

type props={
    content:string,
    class:string,
}

export default (props:props) => {

    return(
        <button  className={`btn btn-${props.class}`}>
            <div className='btn-back'></div>
            {props.content}
        </button>
    )
}