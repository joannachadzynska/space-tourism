import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Destination } from "../../models/destination.model";

export interface destinationState {
    destinations: Destination[];
}

const initialState: destinationState = {
    destinations: [],
};

export const destinationSlice = createSlice({
    name: "destination",
    initialState,

    reducers: {
        getDestinations: (state, action: PayloadAction<Destination[]>) => {
            state.destinations = action.payload;
        },
    },
});

export const { getDestinations } = destinationSlice.actions;

export const selectDestination =
    (path: string | undefined) => (state: RootState) =>
        state.destination.destinations.find(
            (destination) => destination.path === path
        );

export const selectDestinations = (state: RootState) =>
    state.destination.destinations;

export default destinationSlice.reducer;
