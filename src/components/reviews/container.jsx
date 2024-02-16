import { useDispatch, useSelector } from "react-redux"
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant"
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { Reviews } from "./component";

export const ReviewsContainer = ({ restaurantId }) => {
    const reviewIds = useSelector(state => selectRestaurantReviewsById(state, restaurantId));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews(restaurantId));
    }, [restaurantId]);

    if(!reviewIds?.length) {
        return <>Loading...</>;
    }

    return <Reviews reviewIds={reviewIds} key={restaurantId}/>
}