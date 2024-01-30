import { Review } from "../review/component"

export const Reviews = ({reviews}) => {
    return (
        <ul>
            {reviews.map(pos => {
                    return <li className='review-item'><Review review={pos} /></li>
                })}
        </ul>
    )
}