import { useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

import { getUserMe } from '@/lib/apis/userApis';
import { isLoggedInAtom, userAtom } from '@/state/auth';
import { User } from '@/types/userTypes';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
      getUserMe(accessToken).then(setUser).catch(console.error);
    }
  }, []);

  // const login = async (userData: User) => {
  //   setIsLoggedIn(true);
  //   setUser(userData);
  // };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   setUser(null);
  //   Cookies.remove('accessToken');
  // };

  return { isLoggedIn, user };
};
