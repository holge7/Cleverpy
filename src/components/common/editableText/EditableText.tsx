import React from "react";
import './editableText.css';
import { useState, useEffect, useRef } from "react";

type editableTextProps = {
    text:string,
    resize:boolean,
}

export default (props:editableTextProps) => {
    const [editText, setEditText] = useState(props.text ?? '')

    const changeText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setEditText(e.target.value)
    }


    const area = useRef<HTMLTextAreaElement | null>(null)

    useEffect(()=>{
        area!.current!.style.height = area!.current!.scrollHeight+"px";
    },[editText])

    return(
        <textarea 
        ref={area} 
        rows={1}
        value={editText} 
        onChange={changeText} 
        className={`editableText`} 
    />
    )
}