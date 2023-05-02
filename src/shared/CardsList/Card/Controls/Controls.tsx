import React from 'react';
import { CommentsButton } from './buttons/CommentsButton';
import { ICarmaCounterProps, KarmaCounter } from './buttons/KarmaCounter';
import { SaveButton } from './buttons/SaveButton';
import { ShareButton } from './buttons/ShareButton';
import styles from './controls.css';

export function Controls({score}: ICarmaCounterProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score} />
      <CommentsButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
