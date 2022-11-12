import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { mateReducer } from "../../features/mates/reducer/reducer";

export const store = configureStore({
    reducer: {
        mate: mateReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
