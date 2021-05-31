import React from 'react'
import { useRecoilState } from 'recoil'
import { TokenState } from '../States/TokenState';
import { UserState } from '../States/UserState';
import { useQuery } from 'react-query'
import { URL } from '../helpers/url';
import { IReturn } from '../helpers/ApiReturnType';

// get user details
const fetchDetails = async(id: string, token: string) => {
  const request = await fetch(`${URL}/user/${id}`, {
    method: 'get',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  if (!request.ok) {
    throw new Error('An error occured')
  }
  return await request.json() as IReturn;
}

export default function useUser() {
  const [user, setUser] = useRecoilState(UserState);
  const [token, setToken] = useRecoilState(TokenState);
  const {data} = useQuery(['getuserdetails', user.id, token], () => fetchDetails(user.id, token), {
    onSuccess: (dt: IReturn) => {
      setUser({...dt.data});
      console.log(user);
    }
  });




  return {
    user,
    token,
    setUser,
    setToken,
  }
}
