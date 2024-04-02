/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useCreateReviewMutation, useGetRestaurantByIdQuery } from "../../redux/services/api";
import { ReviewForm } from "../review-form/component"
import { UserContext } from '../../../contexts/user';
import { useParams } from "react-router-dom";

export const CreateReviewFormContainer = () => {
    const { restaurantId } = useParams();
    const {data: restaurant} = useGetRestaurantByIdQuery(restaurantId);
    
    const [createReview, { isLoading }] = useCreateReviewMutation();
    const {user} = useContext(UserContext);

    if(!restaurant) {
        return <>Loading...</>
    }

    if(!user) {
        return <div>You need to login to write a new review here...-_-</div>;
    }

    if(isLoading) {
        return <div>Creating...</div>
    }
    
    return (
        <>
            {restaurant && <div>New review for: {restaurant.name}</div>}
            <ReviewForm 
                flag={false}
                key={restaurantId}
                userName={user?.name}
                onSave={
                    newReview => {
                        createReview({
                            restaurantId, 
                            newReview: {...newReview, userId: user.id}
                        })
                        console.log('Отзыв создан')
                    }
                }
            />
        </>
    )
}