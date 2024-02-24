/* eslint-disable react/prop-types */
import { useGetUsersQuery } from "../../redux/services/api";
import { Review } from "./component";

export const ReviewContainer = ({ review }) => {
    const {data: user, isLoading} = useGetUsersQuery(undefined, {
        selectFromResult: result => ({
            ...result, 
            data: result.data?.find(({id}) => id === review.userId),
        }),
    });

    if(isLoading) {
        return <>Loading...</>;
    }

    if(!review || !user) {
        return null;
    }

    return <Review review={review} user={user}/>;
}