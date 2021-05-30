import React from 'react'
import { useRecoilState } from 'recoil'
import { TokenState } from '../States/TokenState';
import { UserState } from '../States/UserState';

export default function useUser() {
  const [user, setUser] = useRecoilState(UserState);
  const [token, setToken] = useRecoilState(TokenState);
  return {
    user,
    token,
    setUser,
    setToken,
  }
}
