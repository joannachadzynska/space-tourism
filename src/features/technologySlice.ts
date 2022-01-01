import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Technology } from "../models/technology.model";

export interface technologyState {
    technologies: Technology[];
}

const initialState: technologyState = {
   technologies: [],
};

export const technologySlice = createSlice({
    name: "crew",
    initialState,

    reducers: {
        getTechnologies: (state, action: PayloadAction<Technology[]>) => {
            state.technologies = action.payload;
        },
    },
});

export const { getTechnologies } = technologySlice.actions;

export const selectTechnology =
    (path: string | undefined) => (state: RootState) =>
        state.technology.technologies.find((tech) => tech.name === path);

export const selectTechnologies = (state: RootState) => state.technology.technologies;

export default technologySlice.reducer;
