//import { useReducer } from "react"
import { useReducer } from 'react';
import styles from './styles.module.scss';

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

export const ReviewForm = ({key}) => {
    const [form, dispatch] = useReducer(reducer, DEFAULT);
    
    return (
        <div className={styles.main} key={key}>
            <div className={styles.section}>
                <label htmlFor="name" className={styles.label}>Name: </label>
                <input id="name" type="text" value={form.name} onChange={(evt) => 
                    dispatch({type: 'setName', payload: evt.target.value})}/> 
            </div>
            <div className={styles.section}>
                <label htmlFor="text" className={styles.label}>Text: </label>
                <input id="text" type="text" value={form.text} onChange={(evt) => 
                    dispatch({type: 'setText', payload: evt.target.value})}/> 
            </div>
            <div className={styles.section}>
                <label htmlFor="rating" className={styles.label}>Rating: </label>
                <input id="rating" type="number" min="1" max="5" value={form.rating} onChange={(evt) => 
                    dispatch({type: 'setRating', payload: evt.target.value})}/> 
            </div>
        </div>
    )
}