import React from 'react';
import NoPhoto from '../../../icons/NoPhoto';
import styles from './preview.css';

interface IPreviewProps {
  header_img: string
}

export function Preview({ header_img }: IPreviewProps) {

  return (
    <div className={styles.preview}>
      {
        header_img 
        ? <img src={header_img} className={styles.previewImg} />
        : <NoPhoto />
      }
    </div>
  );
}
