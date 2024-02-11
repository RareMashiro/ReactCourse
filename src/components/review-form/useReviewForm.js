import { useReducer, useCallback } from "react";

const DEFAULT = {
    name: '',
    text: '',
    rating: 1
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case 'setName':
            return {
                ...DEFAULT,
                name: payload,
            };
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
    const name = form.name;
    console.log(form);
    
    const setName = useCallback(
        (evt) => dispatch({type: 'setName', payload: evt.target.value}),
        [],
    );

    const setText = useCallback(
        (evt) => {
            if(name) {
                dispatch({type: 'setText', payload: evt.target.value})
            }
        }, [name]
    );

    const setRating = useCallback(
        (evt) => {
            if(name) {
                dispatch({type: 'setRating', payload: evt.target.value})
            }
        }, [name]
    );

    return {
        form,
        setName,
        setText,
        setRating,
    }
}