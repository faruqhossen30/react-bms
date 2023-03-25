import React, { useContext } from 'react'
import { FaAddressCard, FaCheckCircle, FaEdit, FaHome, FaMailBulk, FaMobileAlt, FaPhone, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserNavbar from '../../components/frontend/UserNavbar'
import AppLayout from '../../components/layouts/AppLayout'
import { AuthContext } from '../../contexts/authContext'

const Statement = () => {
    const user = useContext(AuthContext);
    return (
        <AppLayout>
            <UserNavbar />
            <div>
                <table className="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
                            <th className="border border-slate-300">S.N</th>
                            <th className="border border-slate-300">Match</th>
                            <th className="border border-slate-300">Answer</th>
                            <th className="border border-slate-300">Amount</th>
                            <th className="border border-slate-300">Win/Loss</th>
                            <th className="border border-slate-300">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='p-1 text-sm' >
                            <td className="p-2 border border-slate-300 text-center">1</td>
                            <td className="p-2 border border-slate-300">sdf</td>
                            <td className="p-2 border border-slate-300">sdf</td>
                            <td className="p-2 border border-slate-300">sdf</td>
                            <td className="p-2 border border-slate-300">sdf</td>
                            <td className="p-2 border border-slate-300">sdf</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </AppLayout>
    )
}

export default Statement