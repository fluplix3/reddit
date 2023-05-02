import { atom, useAtom } from 'jotai';
import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentForm.css';

const textAtom = atom('')

function CommentForm() {
    const [text, setText] = useAtom(textAtom)
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
                className={styles.input}
                // aria-invalid={errors.comment ? 'true' : undefined}
                value={text}
                onChange={handleChange}
            />
            {text && <p>{text}</p>}
            <button type='submit' className={styles.button} onClick={() => { setText('') }}>Комментировать</button>
        </form>
    );
}

export default CommentForm;

