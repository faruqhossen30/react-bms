import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const UserAuth = () => {
  const {user} = useContext(AuthContext);
  return (
    user && user.is_user
    ?<Outlet/>
    :<Navigate to='/login' replace />
  )
}

export default UserAuth