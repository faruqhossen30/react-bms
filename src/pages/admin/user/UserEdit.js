import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Breadcrumb from '../../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import axios from '../../../util/axios'
// import Select from 'react-select'

const UserEdit = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const [users, setUsers] = useState([]);
    const [userinfo, setUserinfo] = useState({});

    const [erros, setErrors] = useState([]);
    const { register, handleSubmit, formState: { errors },setValue } = useForm();


    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${id}`)
            .then((res) => {
                setUserinfo(res.data)
                setValue('name', res.data.name)
                setValue('username', res.data.username)
                setValue('email', res.data.email)
                setValue('mobile', res.data.mobile)
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/api/users')
            .then((res) => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))

    }, []);

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

    // console.log('userinfo',userinfo);

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
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                                <input
                                    {...register("name", { required: 'Team one name is required.' })}
                                    type="text" name="name" id="name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.name?.message}</span>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700"> Username </label>
                                <input
                                    {...register("username", { required: 'Team Two name is required.' })}
                                    type="text" name="username" id="username" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.username?.message}</span>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> email </label>
                                <input
                                    {...register("email", { required: 'Team Two name is required.' })}
                                    type="text" name="email" id="email" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.username?.message}</span>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700"> mobile </label>
                                <input
                                    {...register("mobile", { required: 'Team Two name is required.' })}
                                    type="text" name="mobile" id="mobile" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.username?.message}</span>
                            </div>

                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="teamOneFlag" className="block text-sm font-medium text-gray-700"> Team One Flag </label>
                                <select
                                    {...register("teamOneFlag")}
                                    name="teamOneFlag" id='teamOneFlag' className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                    {
                                        users.map((item, index) => {
                                            return <option value={item.name} key={index}>{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="sponser" className="block text-sm font-medium text-gray-700"> sponser </label>
                                <input
                                    {...register("sponser", { required: 'Team Two name is required.' })}
                                    type="text" name="sponser" id="sponser" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.username?.message}</span>
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

export default UserEdit