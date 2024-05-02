import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

const storeData = configureStore({
     reducer:{
        users:userReducer
     }
});
export default storeData;