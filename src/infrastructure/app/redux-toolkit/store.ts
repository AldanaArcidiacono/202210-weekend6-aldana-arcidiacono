import { configureStore } from "@reduxjs/toolkit";
import { dessertReducer } from "../../../features/dessert/reducer/reducer";
import { mateReducer } from "../../../features/mates/reducer/reducer";

export const appStore = configureStore({
    reducer: {
        mate: mateReducer,
        dessert: dessertReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
