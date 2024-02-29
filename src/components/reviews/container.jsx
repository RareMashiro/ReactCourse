import { Reviews } from "./component";
import { useGetReviewsQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";
import { CreateReviewFormContainer } from "../create-review-form/container";

export const ReviewsContainer = () => {
    const { restaurantId } = useParams();
    
    const {data: reviews, isFetching} = useGetReviewsQuery(restaurantId);

    if(!reviews?.length) {
        return <div>Loading...</div>;
    }

    if(isFetching) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Reviews reviews={reviews} restaurantId={restaurantId}/>
            <CreateReviewFormContainer restaurantId={restaurantId}/>
        </>
    )
}