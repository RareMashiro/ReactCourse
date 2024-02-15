/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useContext, useEffect } from "react"
import { ReviewForm } from "../review-form/component"
import { Review } from "../review/component"
import { UserContext } from "../../../contexts/user"
import { useDispatch } from "react-redux"
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";

export const Reviews = ({reviews, key}) => {
    const {user} = useContext(UserContext);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])


    return (
        <div>    
            <ul>
                {reviews.map(id => {
                        return (
                        <li className='review-item'>
                            <Review id={id} />
                        </li>
                        )
                    })}
            </ul>
            {user && <ReviewForm key={key}/>}
        </div>
    )
}