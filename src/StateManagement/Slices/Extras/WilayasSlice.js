import { createSlice } from "@reduxjs/toolkit";

const wilayasSlice = createSlice({
    name : "wilayas",
    initialState : [],
    reducers : {
        setWilayas : (state, action)=>action.payload
    }
})

export const {setWilayas} = wilayasSlice.actions ;
export default wilayasSlice.reducer ;