/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user";

export const Review = ({ review }) => {
    const user = useSelector((state) => selectUserById(state, review.userId));

    return (
        <>
            {user ?
                <p>
                    {[user.name, ': ', <b>Rating: </b>, review.rating, ' | ', <b>Text: </b>, review.text]}
                </p> 
            : 
                <p>
                    {['*Secret*: ', <b>Rating: </b>, review.rating, ' | ', <b>Text: </b>, review.text]}
                </p> 
            }
        </>
    )
}