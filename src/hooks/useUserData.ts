import { IUserData, meRequestAsync } from './../store/me/actions';
import { RootState } from '../store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const loading = useSelector<RootState, boolean>(state => state.me.loading)

  const token = useSelector<RootState>(state => state.token)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(meRequestAsync() as any)
  }, [token])

  return {
    data,
    loading
  }
}


