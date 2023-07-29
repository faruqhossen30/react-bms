import React, { useContext, useState } from 'react'
import { FaAddressCard, FaGamepad, FaMailBulk, FaMobileAlt, FaMoneyBillAlt, FaPhone, FaTrophy, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'
import AppLayout from '../../components/layouts/AppLayout'
import { AuthContext } from '../../contexts/authContext';
import { useAuthUser, useSignIn } from 'react-auth-kit';
import { ToastContainer } from 'react-toastify';





const Profile = () => {
    const auth = useAuthUser();
    const signIn = useSignIn();

    return (
        <AppLayout>
            <ToastContainer />
            <div className='p-4 text-center max-w-xl mx-auto text-purple-800'>
                <div className='flex justify-between border p-2 my-1 items-center shadow'>
                    <div className='flex flex-col font-semibold'>
                        <span>৳{auth().balance}</span>
                        <span>Balance</span>
                    </div>
                    <div>
                        <span className='text-3xl'><FaMoneyBillAlt /></span>
                    </div>
                </div>
                <div className='flex justify-between border p-2 my-1 items-center shadow'>
                    <div className='flex flex-col font-semibold'>
                        <span>100</span>
                        <span>Total Bet</span>
                    </div>
                    <div>
                        <span className='text-3xl'><FaGamepad /></span>
                    </div>
                </div>
                <div className='flex justify-between border p-2 my-1 items-center shadow'>
                    <div className='flex flex-col font-semibold'>
                        <span>20</span>
                        <span>Win</span>
                    </div>
                    <div>
                        <span className='text-3xl'><FaTrophy /></span>
                    </div>
                </div>

                {/* Stat Profile */}
                <div className='divide-y divide-gray-200 border'>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaAddressCard />
                        <span>Name: {auth().name}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaUser />
                        <span>Username: {auth().username}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaMailBulk />
                        <span>Email: {auth().email}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaMobileAlt />
                        <span>Mobile: {auth().mobile}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaUsers />
                        <span>CLub: 23234</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaUserPlus />
                        <span>Sponser: 23234</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Profile