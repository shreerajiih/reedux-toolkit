import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension'; // for debugging redux stats in browser dev tools -- recommanded 


const store = configureStore({
    reducer: {
        user_info:userReducer
    },
},composeWithDevTools());

export default store