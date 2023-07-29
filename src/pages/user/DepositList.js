import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import UserNavbar from '../../components/frontend/UserNavbar'
import AppLayout from '../../components/layouts/AppLayout'
import { AuthContext } from '../../contexts/authContext'
import axios from '../../util/axios'
import { useAuthUser } from 'react-auth-kit'

const DepositList = () => {
    const auth = useAuthUser();
    const [deposits, setDeposits] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/deposits`)
            .then((res) => {
                setDeposits(res.data.data)
                console.log(res);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <AppLayout>
            <div className='p-2'>
                <UserNavbar />
                <div>
                    <span>Deposit List</span>
                </div>
                <div className='overflow-x-auto'>
                    <table className="border-collapse border border-slate-400 w-full table-auto">
                        <thead>
                            <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
                                <th className="border border-slate-300">S.N</th>
                                <th className="border border-slate-300">Amount</th>
                                <th className="border border-slate-300">From</th>
                                <th className="border border-slate-300">Method</th>
                                <th className="border border-slate-300">To</th>
                                <th className="border border-slate-300">Transction</th>
                                <th className="border border-slate-300">Status</th>
                                <th className="border border-slate-300">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                deposits.map((item, index) => {
                                    return <tr className='p-1 text-sm' key={index}>
                                        <td className="p-1 border border-slate-300 text-center">{index + 1}</td>
                                        <td className="p-1 border border-slate-300 text-center">{item.amount}</td>
                                        <td className="p-1 border border-slate-300 text-center">{item.from_account}</td>
                                        <td className="p-1 border border-slate-300 text-center">{item.method}</td>
                                        <td className="p-1 border border-slate-300 text-center">{item.to_account}</td>
                                        <td className="p-1 border border-slate-300 text-center">{item.transaction_id}</td>
                                        <td className="p-1 border border-slate-300 text-center">
                                            {item.status ?
                                                <span className="inline-flex items-center m-2 px-1  bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">
                                                    <span className="ml-1">
                                                        Done !
                                                    </span>
                                                </span> :
                                                <span className="inline-flex items-center m-2 px-1  bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-500">
                                                    <span className="ml-1">
                                                        Pending
                                                    </span>
                                                </span>
                                            }
                                        </td>
                                        <td className="p-2 border border-slate-300 text-center"> {moment(item.created_at).format('LL')}
                                            <br />
                                            <span className="inline-flex items-center m-2 px-1  bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">
                                                <span className="ml-1">
                                                    {moment(item.created_at).format('h:mm A')}
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}

export default DepositList