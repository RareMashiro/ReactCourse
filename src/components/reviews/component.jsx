/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Review } from "../review/component"
import { ReviewForm } from "../reviewForm/component"
import styles from './styles.module.scss';

export const Reviews = ({reviews}) => {
    return (
        <div className={styles.bottom}>
            <ul>
                {reviews.map(pos => {
                    return (
                        <li className={styles.reviewItem}
                            ><Review review={pos} />
                        </li>
                    )
                })}
                
            </ul>
            <ReviewForm />
        </div>
        
    )
}