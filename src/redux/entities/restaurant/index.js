import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
//import { normalizedRestaurants } from "../../../../materials/normalized-mock";
import { getRestaurants } from "./thunks/get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantMenuById: (state, id) => 
            restaurantSlice.getSelectors().selectRestaurantById(state, id)?.menu,
        selectRestaurantIds: (state) => state.ids,
    },
    extraReducers: (builder) => builder
    .addCase(getRestaurants.fulfilled, (state, {payload}) => {
        entityAdapter.setAll(state, payload);
    })
});

export const { selectRestaurantById, selectRestaurantIds, selectRestaurantMenuById } = restaurantSlice.selectors;