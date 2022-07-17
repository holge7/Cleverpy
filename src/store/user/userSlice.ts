import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type user={
    name:string,
    pass:string,
}

type userState = {
    user:user,
    error:string,
    login:boolean,
}

const initialState:userState = {
    user:{
        name:'',
        pass:'',
    },
    error:'',
    login:false,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login: (state:userState, action:PayloadAction<user>)=>{
            if (action.payload.name != 'jorge' || action.payload.pass!='1234') {
                state.error = 'Name or pass incorrect :/'
            }else{
                state.user.name = action.payload.name
                state.user.pass = action.payload.pass
                state.login = true
            }
        }
    }
})

export default userSlice.reducer;
export const {login} = userSlice.actions;