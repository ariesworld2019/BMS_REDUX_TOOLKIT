import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//*************************************** FOR API START ************************* 
//=---------- READ
export const boxwtdiffdata = createAsyncThunk("boxwtdiffdata", async (args, { rejectWithValue }) => {

    const response = await fetch("https://ariesworldsofttech.co.in/react_php_bms/api/box_weight_difference.php", {
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
        builder.addCase(boxwtdiffdata.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(boxwtdiffdata.fulfilled, (state, action) => {
            state.loading = false;
            state.boxdifferReportData = action.payload;  
        })
        builder.addCase(boxwtdiffdata.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //---------------------- END -------------------------- 
  

        //*************************************** FOR API END ************************* 
    },

});
export default boxdifferreport.reducer;