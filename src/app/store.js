import { configureStore } from "@reduxjs/toolkit";
import global_slice from "../features/global/global_slice";

export const store = configureStore({
    reducer: {
        global_slice: global_slice,
    },
});
