import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redusers/user";
import cartReducer from "./redusers/cartReducer";




const store = configureStore({
reducer :{
    users : userReducer,
    cart : cartReducer
}


})
export default store;