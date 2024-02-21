import { useReducer, useCallback } from "react";

const DEFAULT = {
    text: '',
    rating: 1
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case 'setText':
            return {
                ...state,
                text: payload,
            }
        case 'setRating':
            return {
                ...state,
                rating: payload,
            }
        default: 
            return state;
    }
}

export const useReviewForm = (initialValue = DEFAULT) => {
    const [form, dispatch] = useReducer(reducer, initialValue);
    console.log(form);

    const setText = useCallback(
        (evt) => dispatch({type: 'setText', payload: evt.target.value}),
        [],
    );

    const setRating = useCallback(
        (evt) => dispatch({type: 'setRating', payload: evt.target.value}),
        [],
    );

    return {
        form,
        setText,
        setRating,
    }
}