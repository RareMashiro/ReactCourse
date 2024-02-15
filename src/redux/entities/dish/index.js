import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectDishIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id], 
    },
    extraReducers: (builder) => builder
    .addCase(getDishes.fulfilled, (state, {payload}) => {
        entityAdapter.upsertMany(state, payload);
    })
})

export const { selectDishIds, selectDishById } = dishSlice.selectors;