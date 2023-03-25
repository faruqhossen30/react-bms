import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaEdit, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/dashboard/Breadcrumb';
import DashboardLayout from '../../components/layouts/DashboardLayout'
import axios from '../../util/axios';

const Widthdraw = () => {
    const [widthdraws, setWidthdraws] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/widthdraws')
            .then((res) => {
                setWidthdraws(res.data.docs)
                console.log('useeffect',res);
            })
            .catch(err => console.log(err))
    }, []);
console.log('widthdraws',widthdraws);
    return (
        <DashboardLayout>
            <Breadcrumb>
                <li className="inline-flex items-center">
                    <Link to="/" className="text-gray-600 hover:text-blue-500">
                        Deposites List
                    </Link>
                    {/* <span className="mx-4 h-auto text-gray-400 font-medium">/</span> */}
                </li>
            </Breadcrumb>

            <div className='bg-white p-2'>
                <button className='bg-gray-800 p-1 mb-3 border shadow-md'>
                    <Link to='/' className='flex items-center space-x-1 text-gray-100'>
                        <FaPlusCircle />
                        <span className=' text-sm font-semibold'>Add Match</span>
                    </Link>
                </button>
                <table className="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
                            <th className="border border-slate-300">S.N</th>
                            <th className="border border-slate-300">User</th>
                            <th className="border border-slate-300">Amount</th>
                            <th className="border border-slate-300">Method</th>
                            <th className="border border-slate-300">Account</th>
                            <th className="border border-slate-300">Note</th>
                            <th className="border border-slate-300">Time</th>
                            <th className="border border-slate-300">Status</th>
                            <th className="border border-slate-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            widthdraws.map((widthdraw, index) => {
                                return (
                                    <tr className='p-1 text-sm' key={index}>
                                        <td className="p-2 border border-slate-300 text-center">{index + 1}</td>
                                        <td className="p-2 border border-slate-300">{widthdraw.user.name}</td>
                                        <td className="p-2 border border-slate-300">{widthdraw.amount}</td>
                                        <td className="p-2 border border-slate-300">{widthdraw.method}</td>
                                        <td className="p-2 border border-slate-300">{widthdraw.accountNumber}</td>
                                        <td className="p-2 border border-slate-300">{widthdraw.note}</td>
                                        <td className="p-2 border border-slate-300">{moment(widthdraw.createdAt).calendar()}</td>
                                        <td className="p-2 border border-slate-300">
                                            {
                                                widthdraw.status ? (<span className="m-2 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-normal text-green-600">
                                                    Completed
                                                </span>) :
                                                    (<span className="m-2 px-2 py-1 bg-red-200 hover:bg-green-300 rounded-full text-xs font-normal text-green-600">
                                                        Pending
                                                    </span>)
                                            }
                                        </td>
                                        <td className="p-2 border border-slate-300 flex justify-center">
                                            {
                                                widthdraw.status ? (
                                                    <FaCheckCircle className='text-green-700' />
                                                ) :
                                                    (
                                                        <Link to={`/admin/widthdraw/${widthdraw._id}`} className="w-5 h-5 text-green-700 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-pink-800">
                                                            <FaEdit />
                                                        </Link>)
                                            }

                                        </td>
                                       
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    )
}

export default Widthdraw