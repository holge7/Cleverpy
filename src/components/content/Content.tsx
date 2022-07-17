import { useAppSelector } from "../../store/hooks";
import useDisplayed from "../../hooks/useDisplayed";
import Post from "../common/post/Post";
import { createContext, Dispatch, useEffect, useReducer, useState, useRef } from "react";

type editStateType = {
    optionsDown:number|null,
    editMode:number|null,
}

type action = {
    type:string,
    payload:number,
}


const reducers = (state:editStateType, action:action) => {
    switch(action.type){
        case 'OPTIONS_CHANGE':
            if (action.payload == state.optionsDown) {
                return {...state, optionsDown: null}
            }
            return {...state, optionsDown: action.payload}

        case 'EDIT_CHANGE':
            if (action.payload == state.editMode) {
                return {...state, editMode: null}
            }
            return { ...state, editMode: action.payload}

        default: return state
    }
        
}

const optionStateInitial = {
    optionsDown:null,
    editMode:null,
}

export const OptionsContext = createContext<{optionState:editStateType, optionDispatch: Dispatch<any>}>({optionState:optionStateInitial, optionDispatch:()=>null})

const LIMIT = 10;

export default () => {

    //State
    const [offset, setOffset] = useState(0)
    const lastPost = useRef<HTMLDivElement>(null);
    const askPosts = useDisplayed(lastPost)

    //Store
    const {posts, loading, error} = useAppSelector((state)=>state.posts);

    //Context
    const [optionState, optionDispatch] = useReducer(reducers, optionStateInitial)

    useEffect(()=>{
        if (askPosts && offset+LIMIT<=posts.length) setOffset(offset+LIMIT)
    },[askPosts, loading])

    return (
        <OptionsContext.Provider value={{optionState, optionDispatch}}>

            <div className="Content">
                {posts.slice(0, offset).map(post=><Post {...post} key={post.id} />)}
                <div ref={lastPost}>We dont have more Posts 🙀</div>
            </div>

        </OptionsContext.Provider>
    )

}