import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectReviewIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) => builder
        .addCase(getReviews.fulfilled, (state, {payload}) => {
            entityAdapter.upsertMany(state, payload);
        }),
});

export const { selectReviewById, selectReviewIds } = reviewSlice.selectors;