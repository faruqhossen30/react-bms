import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../layouts/DashboardLayout'
import Breadcrumb from '../Breadcrumb'
import { FaAddressCard, FaMailBulk, FaMobileAlt, FaPhone, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'
import axios from '../../../util/axios';
import { changeHandaller } from '../../../util/changeHandaller';
const DepositConfirm = () => {
    const navigate = useNavigate();
    // const [amount, setAmount] = useState(null);
    const [userId, setUserId] = useState(null);
    let { id } = useParams();
    const { register, handleSubmit, formState: { errors },setValue } = useForm();
    const onSubmit = data => {
        axios.post(`http://localhost:5000/api/deposit/${id}`, data)
        .then((res) => {
            // console.log(res.data);
            navigate('/admin/deposits')
        })
        .catch(err => console.log(err))
        
        console.log(data)
    };
    useEffect(() => {
        axios.get(`http://localhost:5000/api/deposit/${id}`)
        .then((res) => {
            console.log('edit',res.data);
            setValue('amount', res.data.amount)
            setValue('userId', res.data.user)
                // setAmount(res.data.amount)
                // setUserId(res.data.user)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <DashboardLayout>
            <Breadcrumb>
                <li className="inline-flex items-center">
                    <Link to="/admin/deposits" className="text-gray-600 hover:text-blue-500">
                        Deposit
                    </Link>
                    <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
                    <span className="h-auto text-gray-400 font-medium">Update</span>
                </li>
            </Breadcrumb>
            <div className='bg-white p-4'>
                <div className='shadow'>
                    <div className='bg-gray-400 text-white p-1 '>
                        <span>Deposit Update</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-1 lg:p-4'>
                        <table className="border-collapse border border-slate-400 w-full">
                            <thead>
                                <tr className='bg-gray-100'>
                                    <th className="border border-slate-300">Title</th>
                                    <th className="border border-slate-300">Details</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className='p-1'>
                                    <td className="p-2 border border-slate-300">Name</td>
                                    <td className="p-2 border border-slate-300">Jamal</td>
                                </tr>
                                <tr className='p-1'>
                                    <td className="p-2 border border-slate-300">Username</td>
                                    <td className="p-2 border border-slate-300">user1</td>
                                </tr>
                                <tr className='p-1'>
                                    <td className="p-2 border border-slate-300">From</td>
                                    <td className="p-2 border border-slate-300">24234234234234</td>
                                </tr>
                                <tr className='p-1'>
                                    <td className="p-2 border border-slate-300">Amount</td>
                                    <td className="p-2 border border-slate-300">
                                        <input type="hidden" name='userId'  {...register("userId", { required: 'userId is requred.' })} />
                                        <input
                                            {...register("amount", { required: 'Amount is requred.' })}
                                            name='amount'
                                            // defaultValue={amount}
                                            // onChange={(e) => changeHandaller(setAmount, e.target.value)}
                                            type="number" className='border p-1 rounded w-full focus:outline-purple-800' />
                                        <span className='text-red-600 text-sm'>{errors.amount?.message}</span>
                                    </td>
                                </tr>
                                <tr className='p-1'>
                                    <td className="p-2 border border-slate-300">Status</td>
                                    <td className="p-2 border border-slate-300">
                                        <select 
                                        {...register("status", { required: 'status is requred.' })}
                                        className='w-full'
                                        name="status" id="">
                                        
                                            <option value="">Select</option>
                                            <option value="1">Confirm</option>
                                            <option value="0">Pending</option>
                                        </select>
                                        <span className='text-red-600 text-sm'>{errors.status?.message}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='py-3'>
                            <button className='bg-purple-800 text-white text-sm py-1 px-3 rounded'>Deposit Confirm</button>
                        </div>
                    </form>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default DepositConfirm