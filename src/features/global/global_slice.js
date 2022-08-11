import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
};

const timeNow = {};

const global_slice = createSlice({
    name: "global_slice",
    initialState,
    reducers: {},
});

export default global_slice.reducer;
