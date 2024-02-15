/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

export const Review = ({id}) => {
    const review = useSelector((state) => selectReviewById(state, id));
    const user = useSelector((state) => selectUserById(state, review.userId));
    //console.log(user);


    return (
        <>
            {user ? <p>{[user.name, ': ', review.text]}</p> : <p>{['*Secret*: ', review.text]}</p> }
        </>
    )
}