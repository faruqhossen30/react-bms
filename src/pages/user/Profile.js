import React, { useContext } from 'react'
import { FaAddressCard, FaGamepad, FaMailBulk, FaMobileAlt, FaMoneyBillAlt, FaPhone, FaTrophy, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'
import AppLayout from '../../components/layouts/AppLayout'
import { AuthContext } from '../../contexts/authContext';


const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log('user profile', user);
    return (
        <AppLayout>
            <div className='p-4 text-center max-w-xl mx-auto text-purple-800'>
                {/* <div className='mx-auto'>
                    <FaUser className=''/>
                </div> */}

                <div className='flex justify-between border p-2 my-1 items-center shadow'>
                    <div className='flex flex-col font-semibold'>
                        <span>$500</span>
                        <span>Balance</span>
                    </div>
                    <div>
                        <span className='text-3xl'><FaMoneyBillAlt/></span>
                    </div>
                </div>
                <div className='flex justify-between border p-2 my-1 items-center shadow'>
                    <div className='flex flex-col font-semibold'>
                        <span>100</span>
                        <span>Total Bet</span>
                    </div>
                    <div>
                        <span className='text-3xl'><FaGamepad/></span>
                    </div>
                </div>
                <div className='flex justify-between border p-2 my-1 items-center shadow'>
                    <div className='flex flex-col font-semibold'>
                        <span>20</span>
                        <span>Win</span>
                    </div>
                    <div>
                        <span className='text-3xl'><FaTrophy/></span>
                    </div>
                </div>

                {/* Stat Profile */}
                <div className='divide-y divide-gray-200 border'>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaAddressCard />
                        <span>Name: {user.name}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaUser />
                        <span>Username: {user.username}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaMailBulk />
                        <span>Email: {user.email}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaMobileAlt />
                        <span>Mobile: {user.mobile}</span>
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