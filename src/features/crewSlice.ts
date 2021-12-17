import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Crew } from "../models/crew.model";

export interface crewState {
    crewMembers: Crew[];
}

const initialState: crewState = {
    crewMembers: [],
};

export const crewSlice = createSlice({
    name: "crew",
    initialState,

    reducers: {
        getCrewMembers: (state, action: PayloadAction<Crew[]>) => {
            state.crewMembers = action.payload;
        },
    },
});

export const { getCrewMembers } = crewSlice.actions;

export const selectCrewMember =
    (path: string | undefined) => (state: RootState) =>
        state.crew.crewMembers.find((member) => member.name === path);

export const selectCrew = (state: RootState) => state.crew.crewMembers;

export default crewSlice.reducer;
