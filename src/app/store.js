import { configureStore } from "@reduxjs/toolkit";
import userdetail  from "../features/userDetailSlice";
import touchWiseStockSlice from "../features/touchWiseStockSlice";
import boxWeightDifferSlice from "../features/boxWeightDifferSlice";
import boxLogDataSlice from "../features/boxLogDataSlice";
import alertMsgSlice from "../features/alertMsgSlice";
import createUserSlice from "../features/createUserSlice";
import settingSlice from "../features/settingSlice";
export const store = configureStore({
    reducer:{
        app:userdetail,
        touchreportstore:touchWiseStockSlice,
        boxwtdiffstore:boxWeightDifferSlice,
        boxlogdatastore:boxLogDataSlice,
        alertmsgstore:alertMsgSlice,
        createuserstore:createUserSlice,
        settingstore:settingSlice
    },
})