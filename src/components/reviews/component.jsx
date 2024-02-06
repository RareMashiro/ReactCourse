/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { ReviewForm } from "../review-form/component"
import { Review } from "../review/component"
import { UserContext } from "../../../contexts/user"

export const Reviews = ({reviews, key}) => {
    const {user} = useContext(UserContext);

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
            {user && <ReviewForm key={key}/>}
        </div>
    )
}