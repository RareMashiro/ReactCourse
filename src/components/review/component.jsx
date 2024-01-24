/* eslint-disable react/prop-types */
export const Review = ({review}) => {
    return (
        <li className='review-item'>{[review.user, ': ', review.text]}</li>
    )
}