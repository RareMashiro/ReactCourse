import { Review } from "./component";

export const ReviewContainer = ({ review }) => {
    
    if(!review) {
        return <>Loading...</>;
    }

    return <Review review={review} />;
}