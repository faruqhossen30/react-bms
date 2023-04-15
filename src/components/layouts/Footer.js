import { Menu } from '@headlessui/react'
import React, { useContext } from 'react'
import { FaCog, FaHome, FaList, FaMoneyBill, FaMoneyBillAlt, FaWallet } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../contexts/authContext'
import logoutHandaller from '../../util/logoutHandaller'

const Footer = () => {
    const {user} = useContext(AuthContext);
    return (
        <footer className='md:hidden grid grid-cols-5 border-t-2 text-sm text-purple-800 bg-red-100 inset-x-0 bottom-0 fixed pt-1'>
            <Link to='/' className='col-span-1 flex flex-col items-center'>
                <FaHome />
                <span>Home</span>
            </Link>
            <Link to='/profile' className='col-span-1 flex flex-col items-center'>
                <FaWallet />
                <span>Wallet</span>
            </Link>
            <Link to='/deposit' className='col-span-1 flex flex-col items-center'>
                <FaMoneyBill />
                <span>Deposite</span>
            </Link>
            <Link to='/statement' className='col-span-1 flex flex-col items-center'>
                <FaMoneyBillAlt />
                <span>Statement</span>
            </Link>
            {/* <Link className='col-span-1 flex flex-col items-center'>
                <FaList />
                <span>Account</span>                
            </Link> */}

            <Menu>
                <Menu.Button className='col-span-1 flex flex-col items-center'>
                    <FaList />
                    <span>Account</span>
                </Menu.Button>
                <Menu.Items className='p-1'>
                    <Menu.Item as='div' className="-top-2 transform -translate-y-full absolute right-0 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {({ active }) => (
                            <>

                                {
                                    user && user.is_user
                                        ? (
                                            <>
                                                <Link to='/statement' className='flex items-center space-x-2 p-2'>
                                                    <FaCog />
                                                    <span>Settings</span>
                                                </Link>
                                                <button className='flex items-center space-x-2 p-2' onClick={logoutHandaller}>
                                                    <FaMoneyBillAlt />
                                                    <span>Logout</span>
                                                </button>
                                            </>
                                        )
                                        : user && user.is_admin
                                            ? (
                                                <>
                                                    <Link to='/admin/dashboard' className='flex items-center space-x-2 p-2'>
                                                        <FaMoneyBillAlt />
                                                        <span>Admin Dashboard</span>
                                                    </Link>
                                                </>
                                            )
                                            : (
                                                <>
                                                    <Link to='/register' className='flex items-center space-x-2 p-2'>
                                                        <FaMoneyBillAlt />
                                                        <span>Register</span>
                                                    </Link>
                                                    <Link to='/login' className='flex items-center space-x-2 p-2'>
                                                        <FaMoneyBillAlt />
                                                        <span>Login</span>
                                                    </Link>
                                                </>
                                            )
                                }






                            </>
                        )}
                    </Menu.Item>

                </Menu.Items>
            </Menu>
        </footer>
    )
}

export default Footer