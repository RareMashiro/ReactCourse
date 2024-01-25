/* eslint-disable react/prop-types */
export const Review = ({review}) => {
    return (
        <p>{[review.user, ': ', review.text]}</p>
    )
}