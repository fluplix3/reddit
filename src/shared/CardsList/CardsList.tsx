import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import Post from '../Post/Post';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const [loading, setLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')
  const [posts, setPosts] = useState<any[]>([])
  const token = useSelector<RootState>(state => state.token)
  const bottomOfList = useRef<HTMLDivElement>(null)
  const [nextAfter, setNextAfter] = useState('')
  const [loaderCounter, setLoaderCounter] = useState(0)

  async function load() {
    if (!token) return
    if (loaderCounter !== 3) {
      setLoading(true)

      try {
        const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 10,
            after: nextAfter,
          }
        })
        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error));
      }
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load();
        setLoaderCounter(loaderCounter + 1)
      }
    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [token, bottomOfList.current, nextAfter])

  return (
    <>
      <ul className={styles.cardsList}>
        {posts.map(
          (post) => <Card post={post} key={post.data.id} />
        )}

        <div ref={bottomOfList} />

        {posts.length === 0 && !loading && !errorLoading && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>Нет ни одного поста</div>
        )}

        {loaderCounter == 4 && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => { setLoaderCounter(1), load(); }}>Загрузить еще</button>
          </div>
        )}

        {loading && <div style={{ display: 'flex', justifyContent: 'center' }}>Загрузка...</div>}
        {errorLoading &&
          <div style={{ display: 'flex', justifyContent: 'center' }}>{errorLoading}</div>}
      </ul>
      <Routes>
        <Route path='/:id' element={<Post title={''} icon_img={''} author={''} />}/>
      </Routes>
    </>
  );
}
