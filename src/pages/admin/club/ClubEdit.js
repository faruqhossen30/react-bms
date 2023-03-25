import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Breadcrumb from '../../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../../components/layouts/DashboardLayout'

const ClubEdit = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const [erros, setErrors] = useState([]);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const onSubmit = data => {
        console.log(data)
        // axios.post('http://localhost:5000/api/matches',
        //     data
        // )
        //     .then((res) => {
        //         console.log(res);
        //         navigate('/admin/bet-panel')

        //     })
        //     .catch((err) => {
        //         console.log('this is error', err);
        //         setErrors(err.response.data.errors)
        //     })
    };


    return (
        <DashboardLayout>
            <Breadcrumb>
                <li className="inline-flex items-center">
                    <Link to="/admin/bet-panel" className="text-gray-600 hover:text-blue-500">
                        Bet Panel
                    </Link>
                    {/* <span className="mx-4 h-auto text-gray-400 font-medium">/</span> */}
                </li>
            </Breadcrumb>
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    {
                        erros &&
                        <ul className='p-4'>
                            {
                                erros.map((item, index) => {
                                    return <li className='text-red-600 text-sm' key={index}>* {item.msg}</li>
                                })
                            }
                        </ul>
                    }

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 pb-1"> Name </label>
                            <input
                                {...register("name", { required: 'Name is required.' })}
                                type="text" name="name" id="name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.name?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 pb-1"> Email </label>
                            <input
                                {...register("email", { required: 'email is required.' })}
                                type="text" name="email" id="email" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.email?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 pb-1"> Username </label>
                            <input
                                {...register("username", { required: 'username is required.' })}
                                type="text" name="username" id="username" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.username?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 pb-1"> Mobile </label>
                            <input
                                {...register("mobile", { required: 'mobile is required.' })}
                                type="text" name="mobile" id="mobile" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.mobile?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="clubOwner" className="block text-sm font-medium text-gray-700 pb-1"> Club Woner </label>
                            <input
                                {...register("clubOwner", { required: 'clubOwner is required.' })}
                                type="text" name="clubOwner" id="clubOwner" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.clubOwner?.message}</span>
                        </div>

                        <div className="">
                            <label htmlFor="clubMobile" className="block text-sm font-medium text-gray-700 pb-1"> Club Mobile </label>
                            <input
                                {...register("clubMobile", { required: 'Club Mobile is required.' })}
                                type="text" name="clubMobile" id="clubMobile" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.clubMobile?.message}</span>
                        </div>

                        <div className="">
                            <label htmlFor="clubAddress" className="block text-sm font-medium text-gray-700 pb-1"> Clab Address </label>
                            <input
                                {...register("clubAddress", { required: 'Club Address is required.' })}
                                type="text" name="clubAddress" id="clubAddress" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.clubAddress?.message}</span>
                        </div>

                        <div className="">
                            <label htmlFor="clubCommission" className="block text-sm font-medium text-gray-700 pb-1"> Club Comission </label>
                            <input
                                {...register("clubCommission", { required: 'Club Commission is required.' })}
                                type="number" name="clubCommission" id="clubCommission" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.clubCommission?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 pb-1"> Password </label>
                            <input
                                {...register("password", { required: 'password is required.' })}
                                type="text" name="password" id="password" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            <span className='text-red-600 text-sm'>{errors.password?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 pb-1"> Status </label>
                            <select
                                {...register("status", { required: 'status is required.' })}
                                type="text" name="status" id="status" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" >
                                <option value='1'>Active</option>
                                <option value='0'>Deactive</option>
                            </select>
                            <span className='text-red-600 text-sm'>{errors.password?.message}</span>
                        </div>


                        <div className='py-2'>
                            <button className='bg-purple-800 text-white text-sm py-1 px-3 rounded'>Create Bet</button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default ClubEdit