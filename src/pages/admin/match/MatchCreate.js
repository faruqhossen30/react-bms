import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Breadcrumb from '../../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import axios from '../../../util/axios'
import Select from 'react-select'

const MatchCreate = () => {
    const navigate = useNavigate();
    const [erros, setErrors] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/api/matches',
            data
        )
            .then((res) => {
                console.log(res);
                navigate('/admin/match-panel')

            })
            .catch((err) => {
                console.log('this is error', err);
                setErrors(err.response.data.errors)
            })
    };

    // console.log('setErrors', erros);

    const [allcountry, setAllCountry] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/allteams`)
            .then((res) => {
                setAllCountry(res.data)
                // console.log(res);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <DashboardLayout>
            <Breadcrumb>
                <li className="inline-flex items-center">
                    <Link to="/admin/bet-panel" className="text-gray-600 hover:text-blue-500">
                        Bet Panel
                    </Link>
                    {/* <span class="mx-4 h-auto text-gray-400 font-medium">/</span> */}
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
                        <div className="grid grid-cols-6 gap-4 ">
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="teamOne" className="block text-sm font-medium text-gray-700"> Team One </label>
                                <input
                                    {...register("teamOne", { required: 'Team one name is required.' })}
                                    type="text" name="teamOne" id="teamOne" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.teamOne?.message}</span>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="teamTwo" className="block text-sm font-medium text-gray-700"> Team Two </label>
                                <input
                                    {...register("teamTwo", { required: 'Team Two name is required.' })}
                                    type="text" name="teamTwo" id="teamTwo" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.teamTwo?.message}</span>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="teamOneFlag" className="block text-sm font-medium text-gray-700"> Team One Flag </label>
                                <select
                                    {...register("teamOneFlag")}
                                    name="teamOneFlag" id='teamOneFlag' className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                    <option value='' >Select</option>
                                    {
                                        allcountry.map((item, index) => {
                                            return <option value={item.flag} key={index}>{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="teamTwoFlag" className="block text-sm font-medium text-gray-700"> Team Two Flag </label>
                                <select
                                    {...register("teamTwoFlag")}
                                    name="teamTwoFlag" className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                    <option value='' >Select</option>
                                    {
                                        allcountry.map((item, index) => {
                                            return <option value={item.flag} key={index}>{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    {...register("title", { required: 'Title is required.' })}
                                    type="text" name="title" id="title" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.teamTwo?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700"> Date </label>
                                <input
                                    {...register("date", { required: 'Date is required.' })}
                                    type="datetime-local" name="date" id="date" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.teamTwo?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    {...register("status", { required: 'Status is requred.' })}
                                    name="status" id='status' className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                    <option value="upcommint">Upcomming</option>
                                    <option value="live">Live</option>
                                </select>
                            </div>
                            <div className="col-span-6 ">
                                <label htmlFor="autoQuestion" className="block text-sm font-medium text-gray-700">Auto Question</label>
                                <select
                                    {...register("autoQuestion", { required: 'autoQuestion is requred.' })}
                                    name="autoQuestion" id='autoQuestion' className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note</label>
                                <input
                                    {...register("note")}
                                    type="text" name="note" id="note" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.teamTwo?.message}</span>
                            </div>



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

export default MatchCreate