import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import crewReducer from "../features/crewSlice";
import destinationReducer from "../features/destination/destinationSlice";
import technologyReducer from "../features/technologySlice";

export const store = configureStore({
    reducer: {
        destination: destinationReducer,
        crew: crewReducer,
        technology: technologyReducer,
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
