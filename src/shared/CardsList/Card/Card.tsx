import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  post: any
}

export function Card({ post }: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent
        title={post.data.title}
        author={post.data.author}
        icon_img={post.data.sr_detail.icon_img}
        hoursAgo={post.data.wls}
      />
      <Preview header_img={post.data.sr_detail.header_img} />
      <Menu />
      <Controls score={post.data.score} />
    </li>
  );
}
