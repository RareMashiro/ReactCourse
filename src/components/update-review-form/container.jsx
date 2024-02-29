/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useUpdateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "../review-form/component"

export const UpdateReviewFormContainer = ({review, user, onUpdateFinished, exit}) => {
    const [updateReview, { isLoading, isSuccess }] = useUpdateReviewMutation();

    useEffect(() => {
        if(isSuccess) {
            onUpdateFinished();
        }
    }, [isSuccess, onUpdateFinished])

    if(!user || !review) {
        return null;
    }

    if(isLoading) {
        return <div>Creating...</div>
    }

    const {id, text, rating} = review;
    
    return (
        <ReviewForm 
            flag={true}
            initialState={{text, rating}}
            userName={user?.name}
            onSave={
                (updatedReview) => {
                    updateReview({
                        reviewId: id, 
                        review: {...updatedReview, userId: user.id, id}
                    })
                    console.log('Отзыв изменен')
                }
            } 
            onClick={exit}
        />
    )
}