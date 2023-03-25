import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import cogoToast from 'cogo-toast';
import withReactContent from 'sweetalert2-react-content';
import { AuthContext } from '../../contexts/authContext';

const Header = () => {
  const {user} = useContext(AuthContext);
  console.log('header component',user);
  // console.log('header component',user.is_admin);
  const MySwal = withReactContent(Swal)
  const logoutHandaller = () => {
    MySwal.fire({
      // title: 'Are you want to Logout ?',
      text: "Are you want to Logout ?",
      icon: 'warning',
      width: '25em',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout',
      customClass: 'swal2-popup'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        window.location = "/";
      }
    })
  }

  return (
    <header className='sticky top-0 flex items-center justify-between px-2 bg-white shadow-md py-2'>
      <div>
        <Link to='/'><img src="./logo.png" alt="" className='h-6' /></Link>
      </div>
      <div className=' space-x-1'>
        {
          user && user.is_user
            ? (
              <>
                <div className='hidden lg:block space-x-2'>
                  <Link to='/profile' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Profile</Link>
                  <Link to='/statement' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Statement</Link>
                  <Link to='/deposit' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Deposit</Link>
                  <Link to='/widthdraw' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Widthdray</Link>
                  <Link to='/register' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1' onClick={logoutHandaller}>Logout</Link>
                  <span className='text-purple-800 font-bold'>৳{user.balance}</span>
                </div>
                <span className='lg:hidden text-purple-800 font-bold '>৳{user.balance}</span>
              </>
            )
            :user && user.is_admin 
            ? (
              <>
                <div className='hidden lg:block space-x-2'>
                  <Link to='/admin/dashboard' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Admin Panel</Link>
                  <Link to='/register' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1' onClick={logoutHandaller}>Logout</Link>
                </div>
              </>
            )
            : (
              <>
                <Link to='/register' className=' font-normal text-sm bg-purple-800 rounded-sm text-white px-3 py-1'>Register</Link>
                <Link to='/login' className=' font-normal text-sm bg-purple-800 rounded-sm text-white px-3 py-1'>Login</Link>
              </>
            )
        }

      </div>
    </header>
  )
}

export default Header