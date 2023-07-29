import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import AppLayout from '../../components/layouts/AppLayout';
import axios from '../../util/axios';

const DepositForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [accounts, setAccounts] = useState([]);
    const [erros, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/paymentmethod`)
            .then((res) => {
                setAccounts(res.data.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    const onSubmit = data => {
        console.log(data)
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/deposit`, data)
            .then((res) => {
                console.log(res);
                navigate('/profile')

            })
            .catch(err => console.log(err))
    };

    return (
        <AppLayout>
            <div className='p-4 max-w-xl mx-auto text-purple-800'>
                <div className='shadow border'>
                    <div className='bg-gray-200 p-2'>
                        <h4 >Deposit</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='text-md p-3 space-y-2'>
                        <div className="">
                            <label htmlFor="first-name" className="block font-medium text-gray-700">
                                Method
                            </label>
                            <select {...register("method")} name="method" className='border w-full rounded focus:ring-purple-800 px-1'>
                                <option value="BKash">BKash</option>
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="to_account" className="block font-medium text-gray-700">
                                To
                            </label>
                            <select {...register("to_account")} name="to_account" className='border w-full rounded focus:ring-purple-800 px-1'>
                                <option defaultValue="" >Select</option>
                                {
                                    accounts.map((item, index) => {
                                        return <option key={index} value={item.number} >{`${item.number} - ${item.bank}-${item.type}`})</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="">
                            <label htmlFor="first-name" className="block font-medium text-gray-700">
                                Amount
                            </label>
                            <input
                                {...register("amount", { required: 'Amount is requred.' })}
                                type="number"
                                name="amount"
                                id="first-name"
                                autoComplete="given-name"
                                className="border w-full rounded focus:ring-purple-800 px-2"
                            />
                            <span className='text-red-600 text-sm'>{errors.amount?.message}</span>
                        </div>
                        <div className="">
                            <label htmlFor="first-name" className="block font-medium text-gray-700">
                                From
                            </label>
                            <input
                                {...register("from_account")}
                                type="text"
                                name="from_account"
                                id="first-name"
                                autoComplete="given-name"
                                className="border w-full rounded focus:ring-purple-800 px-2"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="first-name" className="block font-medium text-gray-700">
                                Transiction
                            </label>
                            <input
                                {...register("transaction_id")}
                                type="text"
                                name="transaction_id"
                                id="first-name"
                                autoComplete="given-name"
                                className="border w-full rounded focus:ring-purple-800 px-2"
                            />
                        </div>

                        <button className='bg-purple-800 text-white text-sm py-1 px-3 rounded'>Deposit Now</button>
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}

export default DepositForm