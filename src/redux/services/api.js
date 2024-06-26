import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi(
    {
        reducerPath: "api",
        tagTypes: ["Review", "Restaurant"],
        baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api/"}),
        endpoints: builder => ({
            getRestaurants: builder.query({
                query: () => ({
                    url: 'restaurants',
                }),
            }),
            getDishes: builder.query({
                query: (restaurantId) => ({
                    url: 'dishes',
                    params: {restaurantId}
                }),
            }),
            getReviews: builder.query({
                query: (restaurantId) => ({
                    url: 'reviews',
                    params: {restaurantId}
                }),
                providesTags: (result, _, restaurantId) => result
                    .map(({id}) => ({type: "Review", id}))
                    .concat(
                        {type: "Review", id: "ALL"},
                        {type: "Restaurant", id: restaurantId},
                    ),
            }),
            getUsers: builder.query({
                query: () => ({
                    url: 'users',
                }),
            }),
            getDishById: builder.query({
                query: (dishId) => ({
                    url: `dish/${dishId}`,
                    params: {dishId},
                })
            }),
            getRestaurantById: builder.query({
                query: (restaurantId) => ({
                    url: `restaurant/${restaurantId}`,
                    params: {restaurantId},
                })
            }),
            createReview: builder.mutation({
                query: ({restaurantId, newReview}) => ({
                    url: `review/${restaurantId}`,
                    method: "POST",
                    body: newReview,
                }),
                invalidatesTags: (result, _, {restaurantId}) => [
                    {type: "Restaurant", id: restaurantId},
                ],
            }),
            updateReview: builder.mutation({
                query: ({reviewId, review}) => ({
                    url: `review/${reviewId}`,
                    method: "PATCH",
                    body: review,
                }),
                invalidatesTags: (result, _, {reviewId}) => [
                    {type: "Review", id: reviewId},
                ],
            }),
        }),
    }
)

export const {
    useGetRestaurantsQuery, 
    useGetDishesQuery, 
    useGetReviewsQuery, 
    useGetUsersQuery,
    useGetDishByIdQuery,
    useGetRestaurantByIdQuery,
    useCreateReviewMutation,
    useUpdateReviewMutation,
} = api;