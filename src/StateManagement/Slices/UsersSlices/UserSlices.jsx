import { createSlice } from "@reduxjs/toolkit";

const UsersSlices = createSlice({
    name : "user" ,
    initialState:{
        user : {},
        type : '',
        token : '',
    },
    reducers:{
        setUser : (state , action)=>{
            state.user = action.payload.data
            state.type = action.payload.type
            state.token = action.payload.token
        },
        clearUser : (state)=>{
            state = {
                user : {},
                type : '',
                token : '',
            }
        }
        
    }
})

export const {setUser , clearUser} = UsersSlices.actions ;
export default UsersSlices.reducer