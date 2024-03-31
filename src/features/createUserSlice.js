import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//******* 

//--------- INSERT
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://ariesworldsofttech.co.in/react_php_bms/api/create_user.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const result = await response.json();
        return result;
    }
    catch (error) {
        return rejectWithValue(error)
    }
})



//=---------- READ
export const showUserData = createAsyncThunk("showUserData", async (args, { rejectWithValue }) => {

    const response = await fetch("https://ariesworldsofttech.co.in/react_php_bms/api/create_user.php", {
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
    const response = await fetch(`https://ariesworldsofttech.co.in/react_php_bms/api/create_user.php/${id}`, {
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


export const createuser = createSlice({
    name: "createuser",
    initialState: {
        usersdata: [],
        loading: false,
        error: null
    },
    //*************************************** FOR WITHOUT API ONLY FUNCTION START *************************   


    //*************************************** FOR API START *************************
    extraReducers: (builder) => {

        //-------------------- FOR INSERT -------------------------
        builder.addCase(createUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            //state.usersdata.push(action.payload)
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.usersdata = action.payload.message;
        })
        //---------------------- END --------------------------


        //---------------------- FOR SELECT ---------------------------
        builder.addCase(showUserData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(showUserData.fulfilled, (state, action) => {
            state.loading = false;
            state.usersdata = action.payload;

        })
        builder.addCase(showUserData.rejected, (state, action) => {
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
export default createuser.reducer;