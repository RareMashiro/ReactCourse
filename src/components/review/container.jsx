import { useSelector } from "react-redux"
import { selectReviewById } from "../../redux/entities/review"
import { Review } from "./component";

export const ReviewContainer = ({ reviewId }) => {
    const review = useSelector(state => selectReviewById(state, reviewId));

    if(!review) {
        return <>Loading...</>;
    }

    return <Review review={review} />;
}