import React from 'react'
import { useRecoilState } from 'recoil'
import { TokenState } from '../States/TokenState';
import { UserState } from '../States/UserState';
import { useQuery } from 'react-query'
import { URL } from '../helpers/url';
import { IReturn } from '../helpers/ApiReturnType';
import { useHistory } from 'react-router-dom'

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
  const history = useHistory();
  const [user, seUser] = useRecoilState(UserState);
  const [token, seToken] = useRecoilState(TokenState);
  useQuery(['getuserdetails', user.id, token], () => fetchDetails(user.id, token), {
    onSuccess: (dt: IReturn) => {
      setUser({...dt.data});
      console.log(user);
    }
  });


  React.useEffect(() => {
    if (localStorage.getItem('user') === null) {
      // history.push('/login');
    }else {
      const user = localStorage.getItem('user') as string;
      seUser(JSON.parse(user));

      // check for token
      if (localStorage.getItem('token') === null) {
        history.push('/login');
      }else {
        seToken(localStorage.getItem('token') as string);
      }
    }
  }, [history, seToken, seUser])
  // React.useEffect(() => {

  // });

  const setUser = (det: any) => {
    seUser(det);
  }

  const setToken = (tok: string) => {
    seToken(tok);
  }


  return {
    user,
    token,
    setUser,
    setToken,
  }
}
