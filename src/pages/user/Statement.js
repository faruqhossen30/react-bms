import React, { useContext, useEffect, useState } from 'react'
import { FaAddressCard, FaCheckCircle, FaEdit, FaHome, FaMailBulk, FaMobileAlt, FaPhone, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserNavbar from '../../components/frontend/UserNavbar'
import AppLayout from '../../components/layouts/AppLayout'
import axios from '../../util/axios'
import moment from 'moment'

const Statement = () => {
    const [bets, setBets] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/bets`)
            .then((res) => {
                setBets(res.data.data)
                console.log(res);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <AppLayout>
            <div className='p-2'>
                <UserNavbar />
                <div className='overflow-x-auto'>
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
                            {
                                bets.map((item, index) => {
                                    return <tr className='p-1 text-sm' key={index}>
                                        <td className="p-2 border border-slate-300 text-center">{index+1}</td>
                                        <td className="p-2 border border-slate-300">{item.match_title}</td>
                                        <td className="p-2 border border-slate-300">{item.option_title}</td>
                                        <td className="p-2 border border-slate-300">{item.bet_amount}</td>
                                        <td className="p-2 border border-slate-300">
                                            <span>{item.status}</span>
                                        </td>
                                        <td className="p-2 border border-slate-300">
                                            <span>{moment(item.created_at).format('LL')}</span>
                                            <span> {moment(item.created_at).format('h:mm A')}</span>
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

export default Statement