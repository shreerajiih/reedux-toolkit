import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
// import { composeWithDevTools } from 'redux-devtools-extension'; // for debugging redux stats in browser dev tools -- recommanded 
import { userApi } from "./apis/user_api";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        user_info: userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),

});


setupListeners(store.dispatch);

export default store