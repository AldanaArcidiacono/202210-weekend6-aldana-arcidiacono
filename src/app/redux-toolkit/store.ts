import { configureStore } from "@reduxjs/toolkit";
import { mateReducer } from "../../features/mates/reducer/reducer";

export const appStore = configureStore({
    reducer: {
        mate: mateReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
