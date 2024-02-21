import { useContext } from "react";
import { useCreateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "../review-form/component"
import { UserContext } from '../../../contexts/user';

export const CreateReviewFormContainer = ({restautantId}) => {
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
            key={restautantId}
            userName={user?.name}
            onSave={
                newReview => {
                    createReview({restautantId, newReview: {...newReview, userId: user.id}})
                    console.log('Отзыв создан')
                }
            } 
        />
    )
}