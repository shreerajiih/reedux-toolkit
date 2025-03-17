import { createAsyncThunk, createReducer,createSlice } from "@reduxjs/toolkit";
import { changeNameOfuserAction } from "./userAciton";

// const initialState = {

//     name : "hello",
//     age : 20
// }

// export const userReducer = createReducer(initialState, 
    
    
//     (builder) => {

//     builder
//     .addCase(changeNameOfuserAction, (state,action) => { // direct imported action or named action like below
//         state.name = action.payload
//     })
//     .addCase("changeAgeOfUser", (state,action) => {
//         state.age = action.payload
//     })
// }



// )


 const userReducer = createSlice({
    name:"user_info",
    initialState : {
        name : "hello",
        age : 20
    },
    reducers : {
        changeNameOfUser : (state,action) => {  // action
            state.name = action.payload
        },
        changeAgeOfUser : (state,action) => {  // action
            state.age = action.payload
        },
       
    },
    extraReducers :(builder) => {
        builder
        .addCase(getUserNameFromApi.pending,(state,action) => {
            console.log("pending")
        })
        .addCase(getUserNameFromApi.fulfilled,(state,action) => {
            console.log("fulfilled",action)
            state.name = action.payload.name || action.payload.message
        })
        .addCase(getUserNameFromApi.rejected,(state,action) => {
            console.log("rejected",action.payload)
            console.log("rejected")
            state.name = "rejected  "

        })
    }
})


export const getUserNameFromApi = createAsyncThunk(
    "getUserNameFromApi",
    async (name) => {
        const response = await fetch(`https://api.githusb.com/admin/${name}`)
        const data = await response.json()
        return data
    }
)

export const {changeNameOfUser,changeAgeOfUser} = userReducer.actions // no need to create diff file for action

export default userReducer.reducer
    
   

