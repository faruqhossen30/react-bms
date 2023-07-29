import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import {  FaCheckCircle, FaRegTimesCircle} from 'react-icons/fa'
import UserNavbar from '../../components/frontend/UserNavbar'
import AppLayout from '../../components/layouts/AppLayout'
import { AuthContext } from '../../contexts/authContext'
import axios from '../../util/axios'

const TransactionHistory = () => {
    const user = useContext(AuthContext);
    const [transactions, setTransactions] = useState([]);

    // console.log('user',user);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/transactions`)
            .then((res) => {
                setTransactions(res.data.data)
                console.log(res);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <AppLayout>


            <div className='p-1'>
                <UserNavbar />
                <div>
                    <span>Transaction History</span>
                </div>
                <table className="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
                            <th className="border border-slate-300">S.N</th>
                            <th className="border border-slate-300">Credit</th>
                            <th className="border border-slate-300">Debit</th>
                            <th className="border border-slate-300">Description</th>
                            <th className="border border-slate-300">Status</th>
                            <th className="border border-slate-300">Balance</th>
                            <th className="border border-slate-300">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((transaction, index) => {
                                return <tr className='p-1 text-sm' >
                                    <td className="p-2 border border-slate-300 text-center">{index + 1}</td>
                                    <td className="p-2 border border-slate-300">{transaction.credit}</td>
                                    <td className="p-2 border border-slate-300">{transaction.debit}</td>
                                    <td className="p-2 border border-slate-300">{transaction.description}</td>
                                    <td className="p-2 border border-slate-300 text-center">
                                        {
                                            transaction.status ? (
                                               <button> <FaCheckCircle className='text-green-700' /></button>
                                            ) :
                                                (
                                                    <button><FaRegTimesCircle className='text-red-700' /></button>
                                                )
                                        }
                                    </td>
                                    <td className="p-2 border border-slate-300 text-center">{transaction.balance}</td>
                                    <td className="p-2 border border-slate-300">{moment(transaction.createdAt).calendar()}</td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </AppLayout>
    )
}

export default TransactionHistory