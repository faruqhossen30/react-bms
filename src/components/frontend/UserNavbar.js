import React from 'react'
import { FaAddressCard, FaCheckCircle, FaEdit, FaHome, FaMailBulk, FaMobileAlt, FaPhone, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    return (
        <div className='flex space-x-1 py-2 border-b-2 text-purple-700'>
            <Link to='/statement' className='flex items-center rounded min-w-fit border border-purple-700 bg-purple-700 text-white p-1 space-x-1'>
                <FaHome />
                <span>Bets</span>
            </Link>
            <Link to='/deposit-list' className='flex items-center rounded min-w-fit border border-purple-700 p-1 space-x-1'>
                <FaHome />
                <span>Deposits</span>
            </Link>
            <Link to='/widthdraw-list' className='flex items-center rounded min-w-fit border border-purple-700 p-1 space-x-1'>
                <FaHome />
                <span>Widthdraw</span>
            </Link>
            <Link to='/' className='flex items-center rounded min-w-fit border border-purple-700 p-1 space-x-1'>
                <FaHome />
                <span>Transfer</span>
            </Link>
            <Link to='/transaction-history' className='flex items-center rounded min-w-fit border border-purple-700 p-1 space-x-1'>
                <FaHome />
                <span>Transictions</span>
            </Link>
        </div>
    )
}

export default UserNavbar