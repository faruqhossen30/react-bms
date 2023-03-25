import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import UnAuthorized from '../components/UnAuthorized'
import { AuthContext } from '../contexts/authContext';

const AdminAuth = () => {
  const {user} = useContext(AuthContext);
  return (
    // user && user.isAdmin
    // ?<Outlet/>
    // :<UnAuthorized/>
    !user ? <Navigate to='/login' replace />
    : user && user.isAdmin ? <Outlet/>
    : <UnAuthorized/>
  )
}

export default AdminAuth