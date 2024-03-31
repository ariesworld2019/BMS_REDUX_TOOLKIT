import { createSlice } from "@reduxjs/toolkit"; 

export const alertmsgdetail = createSlice({
    name: "alertmsgdetail",
    initialState: {
        alertmsg: "",
        loading: false,
        error: null
    },
    //*************************************** FOR WITHOUT API ONLY FUNCTION START *************************   
    reducers: {
        alertMsgFunction: (state, action) => { 
            state.alertmsg = action.payload 
        },
        //*************************************** FOR WITHOUT API ONLY FUNCTION END *************************
    }, 
});
export default alertmsgdetail.reducer;
export const { alertMsgFunction } = alertmsgdetail.actions; // FOR EXPORT REDUCERS