import { useContext } from "react";
import { useCreateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "../review-form/component"
import { UserContext } from '../../../contexts/user';

export const CreateReviewFormContainer = ({restaurantId}) => {
    const [createReview, { isLoading }] = useCreateReviewMutation();
    const {user} = useContext(UserContext);

    if(!user) {
        return null;
    }

    if(isLoading) {
        return <div>Creating...</div>
    }
    
    return (
        <ReviewForm 
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
    )
}