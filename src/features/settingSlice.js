import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//******* 
 

//=---------- READ
export const showSettingData = createAsyncThunk("showSettingData", async (args, { rejectWithValue }) => {

    const response = await fetch("http://localhost/react_php_bms/api/setting.php", {
        method: "GET", // *GET, POST, PUT, DELETE, etc. 
        headers: {
            "Content-Type": "application/json"
        }
    });
    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error)
    }
})



//--------- DELETE
export const deleteuser = createAsyncThunk("deleteuser", async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost/react_php_bms/api/create_user.php/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    try {
        const result = await response.json();
        return result;
    }
    catch (error) {
        return rejectWithValue(error)
    }
})




//*************************************** FOR API END *************************


export const setting = createSlice({
    name: "setting",
    initialState: {
        usersdata: [],
        loading: false,
        error: null
    },
    //*************************************** FOR WITHOUT API ONLY FUNCTION START *************************   


    //*************************************** FOR API START *************************
    extraReducers: (builder) => {
  
        //---------------------- FOR SELECT ---------------------------
        builder.addCase(showSettingData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(showSettingData.fulfilled, (state, action) => {
            state.loading = false;
            state.usersdata = action.payload;

        })
        builder.addCase(showSettingData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //---------------------- END --------------------------


        //---------------------- FOR DELETE ---------------------------
        builder.addCase(deleteuser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteuser.fulfilled, (state, action) => {
            state.loading = false;
            const id = action.payload.id;
            if (id) {
                state.usersdata = state.usersdata.filter((ele) => ele.id !== id)
            }
        })
        builder.addCase(deleteuser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //---------------------- END --------------------------



        //*************************************** FOR API END ************************* 
    },

});
export default setting.reducer;