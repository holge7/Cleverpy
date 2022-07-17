import React from "react";
import './editableText.css';
import { useState, useEffect, useRef } from "react"


type editableTextProps = {
    text:string,
    name:string,
    max?:number,
    callback:Function
}


const errors = {
    'max':{
        class:'textarea-max',
        msg:'Max number of characters reached'
    }
}
type ObjectKeyErrors = keyof typeof errors;

export default (props:editableTextProps) => {


    const [editText, setEditText] = useState(props.text ?? '')
    const [error, setError] = useState<ObjectKeyErrors | null>()

    const changeText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditText(e.target.value)
        props.callback(e.target.value, props.name)
    }


    const area = useRef<HTMLTextAreaElement | null>(null)

    useEffect(()=>{
        area!.current!.style.height = area!.current!.scrollHeight+"px";
        if (props.max) {
            if (editText.length >= props.max ) {
                setError('max' as ObjectKeyErrors)
            }
            else setError(null)
            
        }
    },[editText])

    return(
        <div>
            <div className="editable_error-max">{error && errors[error].msg}</div>
            <textarea 
            ref={area} 
            maxLength={props.max}
            rows={1}
            value={editText} 
            onChange={changeText} 
            className={`editableText ${error == null ? '' : errors[error].class}`} 
            />
        </div>
    )
}