import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AllPages {
    isLogin: boolean;
}

const initialState: AllPages = {
    isLogin: false,
};

const allPages_slice = createSlice({
    name: "allPages_slice",
    initialState,
    reducers: {},
});

export default allPages_slice.reducer;
