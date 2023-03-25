import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { FaAddressCard, FaCheckCircle, FaEdit, FaHome, FaMailBulk, FaMobileAlt, FaPhone, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserNavbar from '../../components/frontend/UserNavbar'
import AppLayout from '../../components/layouts/AppLayout'
import { AuthContext } from '../../contexts/authContext'
import axios from '../../util/axios'

const DepositList = () => {
    const user = useContext(AuthContext);
    const [deposits, setDeposits] = useState([]);

    // console.log('user',user);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/user/${user._id}/deposites`)
            .then((res) => {
                setDeposits(res.data.docs)
                console.log(res);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <AppLayout>


            <div>
                <UserNavbar />
                <div>
                    <span>Deposit List</span>
                </div>
                <table className="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
                            <th className="border border-slate-300">S.N</th>
                            <th className="border border-slate-300">From</th>
                            <th className="border border-slate-300">To</th>
                            <th className="border border-slate-300">Method</th>
                            <th className="border border-slate-300">Amount</th>
                            <th className="border border-slate-300">Transction</th>
                            <th className="border border-slate-300">Status</th>
                            <th className="border border-slate-300">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deposits.map((deposit, index) => {
                                return <tr className='p-1 text-sm' >
                                    <td className="p-2 border border-slate-300 text-center">{index+1}</td>
                                    <td className="p-2 border border-slate-300">{deposit.fromAccount}</td>
                                    <td className="p-2 border border-slate-300">{deposit.toAccount}</td>
                                    <td className="p-2 border border-slate-300">{deposit.method}</td>
                                    <td className="p-2 border border-slate-300">{deposit.amount}</td>
                                    <td className="p-2 border border-slate-300">{deposit.transactionId}</td>
                                    <td className="p-2 border border-slate-300">{deposit.status}</td>
                                    <td className="p-2 border border-slate-300">{moment(deposit.createdAt).calendar()}</td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </AppLayout>
    )
}

export default DepositList