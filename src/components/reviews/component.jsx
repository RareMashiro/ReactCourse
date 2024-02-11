import { Review } from "../review/component"
import { ReviewForm } from "../reviewForm/component"
import styles from './styles.module.scss';

export const Reviews = ({reviews, key}) => {
    
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