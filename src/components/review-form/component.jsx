/* eslint-disable react/prop-types */
import styles from './styles.module.scss';
import { useReviewForm } from './useReviewForm';
import { Button } from '../button/component';

export const ReviewForm = ({initialState, userName, onSave, key}) => {
    const {form, setText, setRating} = useReviewForm(initialState);

    return (   
        <div className={styles.main} key={key}>
            <div className={styles.section}>
                <span className={styles.userName}>{userName}</span>
            </div>
            <div className={styles.section}>
                <label htmlFor="text" className={styles.label}>Text: </label>
                <input 
                    id="text" 
                    type="text" 
                    value={form.text} 
                    onChange={setText} /> 
            </div>
            <div className={styles.section}>
                <label htmlFor="rating" className={styles.label}>Rating: </label>
                <input 
                    id="rating" 
                    type="number" 
                    min="1" 
                    max="5" 
                    value={form.rating} 
                    onChange={setRating} /> 
            </div>
            <Button onClick={() => onSave(form)}>Save</Button>
        </div>
    )
}