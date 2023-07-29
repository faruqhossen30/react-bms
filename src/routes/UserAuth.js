import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';

const UserAuth = () => {
  const auth = useAuthUser();
  return (
    auth() && auth().is_user
    ?<Outlet/>
    :<Navigate to='/login' replace />
  )
}

export default UserAuth