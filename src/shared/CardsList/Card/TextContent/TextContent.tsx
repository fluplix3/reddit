import React from 'react';
import { Link } from 'react-router-dom';
import styles from './textcontent.css';

interface ITextContentProps {
  title: string,
  author: string,
  icon_img: string,
  hoursAgo: number,
}

export function TextContent({ title, author, icon_img, hoursAgo }: ITextContentProps) {

  return (
    <div className={styles.textContent} >
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          {
            icon_img
              ? <img className={styles.avatar} src={icon_img} alt="avatar" />
              : <svg style={{ margin: '0 7px 0 0' }} width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z" fill="#D9D9D9" />
              </svg>
          }
          <a href="#user-url" className={styles.username}>{author}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {hoursAgo} часов назад &nbsp;
        </span>
      </div>
      <h2 className={styles.title}>
        <Link to='/posts/:id' className={styles.postLink}>
          {title}
        </Link>
      </h2>
    </div>
  )
}
