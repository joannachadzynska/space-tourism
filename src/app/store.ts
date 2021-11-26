import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import destinationReducer from "../features/destination/destinationSlice";

export const store = configureStore({
    reducer: {
        destination: destinationReducer,
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
