import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//*************************************** FOR API START ************************* 
//=---------- READ
export const showBoxData = createAsyncThunk("showBoxData", async (args, { rejectWithValue }) => {

    const response = await fetch("https://ariesworldsofttech.co.in/react_php_bms/api/user.php", {
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
export const deletebox = createAsyncThunk("deletebox", async (box_no, { rejectWithValue }) => {
    const response = await fetch(`https://ariesworldsofttech.co.in/react_php_bms/api/user.php/${box_no}`, {
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


export const userdetail = createSlice({
    name: "userdetail",
    initialState: {
        users: [],
        loading: false,
        error: null 
    },
    //*************************************** FOR WITHOUT API ONLY FUNCTION START *************************   
 

    //*************************************** FOR API START *************************
    extraReducers: (builder) => {
       

        //---------------------- FOR SELECT ---------------------------
        builder.addCase(showBoxData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(showBoxData.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        builder.addCase(showBoxData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //---------------------- END --------------------------

  

        //---------------------- FOR DELETE ---------------------------
        builder.addCase(deletebox.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deletebox.fulfilled, (state, action) => {
            state.loading = false;    
            const box_no = action.payload.box_no; 
            if (box_no) {
                state.users = state.users.filter((ele) => ele.box_no !== box_no)
            } 
        })
        builder.addCase(deletebox.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //---------------------- END --------------------------
 
        //*************************************** FOR API END ************************* 
    },

});
export default userdetail.reducer;