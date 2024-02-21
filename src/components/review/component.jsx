/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../button/component";
import { UpdateReviewFormContainer } from "../update-review-form/container";

export const Review = ({ review, user }) => {
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <>
            {isEditMode ? (
                <UpdateReviewFormContainer 
                    review={review} 
                    user={user} 
                    onUpdateFinished={() => setIsEditMode(false)}
                /> 
            ) : (
                <p>
                    {[user.name, ': ', <b>Rating: </b>, review.rating, ' | ', <b>Text: </b>, review.text]}
                </p>
            )}
            <Button onClick={() => setIsEditMode(!isEditMode)}>Edit</Button> 
        </>
    )
}