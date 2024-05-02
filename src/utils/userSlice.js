import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
           name:"users",
           initialState:{
            userData :[]
           },
           reducers:{
              addUser:(state, action)=>{
                state.userData.push(action.payload); 
              },
              removeUser:(state ,action)=>{
                state.userData="-1";
              }
           }

});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;