/* eslint-disable react/prop-types */
//import { useReducer } from "react"
//import { useCallback, useReducer } from 'react';
import styles from './styles.module.scss';
import { useReviewForm } from './useReviewForm';

export const ReviewForm = ({key}) => {
    const {form, setName, setText, setRating} = useReviewForm();
    
    return (
        <div className={styles.main} key={key}>
            <div className={styles.section}>
                <label htmlFor="name" className={styles.label}>Name: </label>
                <input 
                    id="name" 
                    type="text" 
                    value={form.name} 
                    onChange={setName}/> 
            </div>
            <div className={styles.section}>
                <label htmlFor="text" className={styles.label}>Text: </label>
                <input 
                    id="text" 
                    type="text" 
                    value={form.text} 
                    onChange={setText}/> 
            </div>
            <div className={styles.section}>
                <label htmlFor="rating" className={styles.label}>Rating: </label>
                <input 
                    id="rating" 
                    type="number" 
                    min="1" 
                    max="5" 
                    value={form.rating} 
                    onChange={setRating}/> 
            </div>
        </div>
    )
}