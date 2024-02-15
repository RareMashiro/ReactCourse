import { createAsyncThunk } from "@reduxjs/toolkit"

export const getReviews = createAsyncThunk(
    "review/getReviews",
    async ({restaurantId}) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=:${restaurantId}`);
        return await response.json();
    },

)