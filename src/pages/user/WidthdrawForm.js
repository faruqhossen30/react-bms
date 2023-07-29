import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import AppLayout from '../../components/layouts/AppLayout';
import axios from '../../util/axios';
import { AuthContext } from '../../contexts/authContext';
import { useAuthUser, useSignIn } from 'react-auth-kit';
import { toast } from 'react-toastify';
import UserUpdate from '../../util/userUpdate';

const WidthdrawForm = () => {
    const navigate = useNavigate();
    const auth = useAuthUser();
    const signIn = useSignIn();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const[errorMessage, setErrorMessage] = useState('');
    const onSubmit = data => {
        console.log(data)
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/withdraw`, data)
            .then((res) => {
                console.log(res);
                toast(res.data.message)
                UserUpdate(signIn);
                navigate('/profile')
            })
            .catch((err) => {
                if(err.response.status == 422){
                    setErrorMessage(err.response.data.message)
                    toast(err.response.data.message)
                }
                console.log('this is error', err);
                // setErrors(err.response.data.errors)
            })

    };

    return (
        <AppLayout>
            <div className='p-4 max-w-xl mx-auto text-purple-800'>
                <div className='shadow border'>
                    <div className='bg-gray-200 p-2'>
                        <h4 >WidthdrawForm</h4>
                    </div>
                    <span className='text-red-600 text-sm px-2'>{errorMessage && errorMessage}</span>




                    <form onSubmit={handleSubmit(onSubmit)} className='text-md p-3 space-y-2'>
                        <div className="">
                            <label htmlFor="method" className="block font-medium text-gray-700">
                                Method
                            </label>
                            <select {...register("method", { required: 'Method is required.' })} id='method' name="method" className='border w-full rounded focus:ring-purple-800 px-1'>
                                <option value="BKash">BKash</option>
                            </select>
                            <span className='text-red-600 text-sm'>{errors.method?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="type" className="block font-medium text-gray-700">
                                Account Type
                            </label>
                            <select {...register("type", { required: 'Account type is requred.' })} id='type' name="type" className='border w-full rounded focus:ring-purple-800 px-1'>
                                <option value="Personal">Personal</option>
                                <option value="Agent">Agent</option>
                            </select>
                            <span className='text-red-600 text-sm'>{errors.type?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="account" className="block font-medium text-gray-700">
                                Account Number
                            </label>
                            <input {...register("account", { required: 'Account number is requred.' })} name="account" className='border w-full rounded focus:ring-purple-800 px-1' />
                            <span className='text-red-600 text-sm'>{errors.account?.message}</span>
                        </div>

                        <div className="">
                            <label htmlFor="first-name" className="block font-medium text-gray-700">
                                Amount
                            </label>
                            <input
                                {...register("amount", { required: 'Amount Taka is requred.', max: { value: auth()?.balance, message: 'Insufficient  balance' } })}
                                type="number"
                                name="amount"
                                id="first-name"
                                autoComplete="given-name"
                                className="border w-full rounded focus:ring-purple-800 px-2"
                            />
                            <span className='text-red-600 text-sm'>{errors.amount?.message}</span>
                        </div>
                        {/* <div className="">
                            <label htmlFor="password" className="block font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                {...register("password", { required: 'Enter password.' })}
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="given-name"
                                className="border w-full rounded focus:ring-purple-800 px-2"
                            />
                            <span className='text-red-600 text-sm'>{errors.password?.message}</span>
                        </div> */}

                        <button className='bg-purple-800 text-white text-sm py-1 px-3 rounded'>Widthdraw Now</button>
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}

export default WidthdrawForm