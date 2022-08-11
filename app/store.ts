import { configureStore } from "@reduxjs/toolkit";
import allPages_slice from "../components/allPages/allPages_slice";

export const store = configureStore({
    reducer: {
        allPages: allPages_slice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
