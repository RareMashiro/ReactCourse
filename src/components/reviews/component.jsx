/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { ReviewForm } from "../review-form/component"
import { UserContext } from "../../../contexts/user"
import { ReviewContainer } from "../review/container"

export const Reviews = ({ reviews, key }) => {
    const {user} = useContext(UserContext);


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
            {user && <ReviewForm key={key}/>}
        </div>
    )
}