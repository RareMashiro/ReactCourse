/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { ReviewContainer } from "../review/container"

export const Reviews = ({ reviews }) => {
    return (
        <div>    
            <ul>
                {reviews.map((review) => {
                        return (
                        <li className='review-item'>
                            <ReviewContainer review={review} />
                        </li>
                        )
                    })}
            </ul>
        </div>
    )
}