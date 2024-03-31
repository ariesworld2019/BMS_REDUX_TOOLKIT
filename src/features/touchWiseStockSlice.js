import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//*************************************** FOR API START ************************* 
//=---------- READ
export const touchwisedata = createAsyncThunk("touchwisedata", async (args, { rejectWithValue }) => {

    const response = await fetch("https://ariesworldsofttech.co.in/react_php_bms/api/touch_wise_stock_count.php", {
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
//*************************************** FOR API END *************************


export const touchwisereport = createSlice({
    name: "touchwisereport",
    initialState: {
        touchReportData: [],
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
        builder.addCase(touchwisedata.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(touchwisedata.fulfilled, (state, action) => {
            state.loading = false;
            state.touchReportData = action.payload;  
        })
        builder.addCase(touchwisedata.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //---------------------- END -------------------------- 
  

        //*************************************** FOR API END ************************* 
    },

});
export default touchwisereport.reducer;