import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectRestaurantReviewsById } from "../../restaurant";
import { selectReviewIds } from "..";

export const getReviews = createAsyncThunk(
    "review/getReviews",
    async ({restaurantId}) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=:${restaurantId}`);
        return await response.json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const restaurantReviewIds = selectRestaurantReviewsById(getState(), restaurantId);
            const reviewIds = selectReviewIds(getState());

            return !restaurantReviewIds.every(id => reviewIds.includes(id));
        }
    }

)