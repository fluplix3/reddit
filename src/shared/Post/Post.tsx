import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import { Icon } from "../Icon";
import Answer from "./Answer/Answer";
import styles from './post.css';

interface IPost {
    title: string;
    icon_img: string
    author: string
}

function Post({ title, icon_img, author }: IPost) {
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                navigate(-1)
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    const [isAnswerOpened, setIsAnswerOpened] = useState(false)

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2>{title}</h2>
            <div className={styles.content}>
                <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
            </div>

            <CommentForm />
            <ul>
                <li className={styles.comment}>
                    <div className={styles.commentLeft}>
                        <div className={styles.arrows}>
                            <button className={styles.up}>
                                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
                                </svg>
                            </button>
                            <button className={styles.down}>
                                <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
                                </svg>
                            </button>
                        </div>
                        <div className={styles.line}>
                            <svg width="3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" width="380" height="2.99998" transform="rotate(90 3 0)" fill="#D9D9D9" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.rightComment}>
                        <div className={styles.userLink}>
                            {
                                icon_img
                                    ? <img className={styles.avatar} src={icon_img} alt="avatar" />
                                    : <svg style={{ margin: '0 7px 0 0' }} width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z" fill="#D9D9D9" />
                                    </svg>
                            }
                            <a href="#user-url" className={styles.username}>{author}</a>
                            <span className={styles.hoursAgo}>1 час назад</span>
                        </div>
                        <div className={styles.textContent}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit incidunt necessitatibus earum dolorem. Sed commodi debitis sequi ipsa, amet odit! Possimus, voluptatibus? Maiores, nesciunt? Ratione eaque quod recusandae culpa commodi!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolore nulla, beatae aut minus dicta quos, quaerat fugiat fugit et tempora quis aliquid nesciunt quas placeat aliquam odio sit numquam.
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.btnComments}>
                                <Icon name="comment" />
                                <span onClick={() => { setIsAnswerOpened(true) }} className={styles.hoursAgo}>Ответить</span>
                            </button>
                            <button className={styles.btnComments}>
                                <Icon name="share" />
                                <span className={styles.hoursAgo}>Поделиться</span>
                            </button>
                            <button className={styles.btnComments}>
                                <Icon name="warning" />
                                <span className={styles.hoursAgo}>Пожаловаться</span>
                            </button>
                        </div>
                        {isAnswerOpened && (
                            <Answer author={author} />
                        )}
                    </div>
                </li>
            </ul>
        </div>
    ), node);
}

export default Post;