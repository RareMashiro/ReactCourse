import { Reviews } from "./component";
import { useGetReviewsQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";
import { CreateReviewTab } from "../create-review-tab/component";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user";

export const ReviewsContainer = () => {
    const { restaurantId } = useParams();
    const {user} = useContext(UserContext);
    
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
            {user && <CreateReviewTab />}
        </>
    )
}