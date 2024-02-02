/* eslint-disable react/jsx-key */
import { ReviewForm } from "../review-form/component"
import { Review } from "../review/component"

export const Reviews = ({reviews, key}) => {
    
    return (
        <div>    
            <ul>
                {reviews.map(pos => {
                        return (
                        <li className='review-item'>
                            <Review review={pos} />
                        </li>
                        )
                    })}
            </ul>
            <ReviewForm key={key}/>
        </div>
    )
}