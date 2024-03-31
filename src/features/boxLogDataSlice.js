import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//*************************************** FOR API START ************************* 
//=---------- READ
export const boxstocklogdata = createAsyncThunk("boxstocklogdata", async (box_no, { rejectWithValue }) => {

    const response = await fetch(`https://ariesworldsofttech.co.in/react_php_bms/api/box_log_data.php/${box_no}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc. 
        headers: {
            "Content-Type": "application/json"
        }
    });
    try {
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})
//*************************************** FOR API END *************************



//--------- DELETE
export const deleteboxitm = createAsyncThunk("deleteboxitm", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://ariesworldsofttech.co.in/react_php_bms/api/box_log_data.php/${id}`, {
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



export const boxdifferreport = createSlice({
    name: "boxdifferreport",
    initialState: {
        boxdifferReportData: [],
        loading: false,
        error: null,
    },
    //*************************************** FOR WITHOUT API ONLY FUNCTION START *************************   
    reducers: {
        // searchDataFunction: (state, action) => { 
        //     state.searchData = action.payload
        // },
        //*************************************** FOR WITHOUT API ONLY FUNCTION END *************************
    },

    //*************************************** FOR API START *************************
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed 
        //---------------------- FOR SELECT ---------------------------
        builder.addCase(boxstocklogdata.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(boxstocklogdata.fulfilled, (state, action) => {
            state.loading = false;
            state.boxdifferReportData = action.payload;
            //console.log(action.payload);
        })
        builder.addCase(boxstocklogdata.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //---------------------- END -------------------------- 


        //---------------------- FOR DELETE ---------------------------
        builder.addCase(deleteboxitm.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteboxitm.fulfilled, (state, action) => {
            state.loading = false;
            const id = action.payload.id; 
            if (id) {
                state.boxdifferReportData = state.boxdifferReportData.filter((ele) => ele.id !== id)
            } 
        })
        builder.addCase(deleteboxitm.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //---------------------- END --------------------------



        //*************************************** FOR API END ************************* 
    },

});
export default boxdifferreport.reducer;