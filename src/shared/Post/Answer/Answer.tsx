import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styles from './answer.css'

interface IAnswerProps {
    author: string
}

function Answer({author}: IAnswerProps) {
    const [value, setValue] = useState('')
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        console.log(value)
        event.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} defaultValue={author} onChange={handleChange} autoFocus ref={textAreaRef}/>
            <button type='submit' className={styles.button}>Ответить</button>
        </form>
    );
}

export default Answer;