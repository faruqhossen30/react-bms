import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { FaCheckCircle, FaRegTimesCircle} from 'react-icons/fa'
import UserNavbar from '../../components/frontend/UserNavbar'
import AppLayout from '../../components/layouts/AppLayout'
import axios from '../../util/axios'

const WidthdrawList = () => {
    const [deposits, setDeposits] = useState([]);

    // console.log('user',user);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/withdraws`)
            .then((res) => {
                setDeposits(res.data.data)
                console.log(res);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <AppLayout>


            <div className='p-1'>
                <UserNavbar />
                <div>
                    <span>Widthdraw List</span>
                </div>
                <table className="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
                            <th className="border border-slate-300">S.N</th>
                            <th className="border border-slate-300">Amount</th>
                            <th className="border border-slate-300">Account</th>
                            <th className="border border-slate-300">Method</th>
                            <th className="border border-slate-300">Status</th>
                            <th className="border border-slate-300">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deposits.map((deposit, index) => {
                                return <tr className='p-1 text-sm' key={index}>
                                    <td className="p-2 border border-slate-300 text-center">{index + 1}</td>
                                    <td className="p-2 border border-slate-300">{deposit.amount}</td>
                                    <td className="p-2 border border-slate-300">{deposit.account}</td>
                                    <td className="p-2 border border-slate-300">{deposit.method}</td>
                                    <td className="p-2 border border-slate-300 text-center">
                                        {/* {
                                            deposit.status=='1' ? (
                                               <button> <FaCheckCircle className='text-green-700' /></button>
                                            ) :
                                                (
                                                    <button><FaRegTimesCircle className='text-red-700' /></button>
                                                )
                                        } */}
                                        {deposit.status}
                                    </td>
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

export default WidthdrawList