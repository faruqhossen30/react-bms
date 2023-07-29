import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext';
import axios from '../util/axios';
import { useAuthUser } from 'react-auth-kit';

const Register = () => {
    const auth = useAuthUser();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [clubs, setClubs] = useState([]);
    const [err, setErr] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/clubs`)
            .then((res) => {
                setClubs(res.data.data)
            })
            .catch(err => console.log(err))
    }, []);

    // const check = clubs.filter(record => record.username === "user2")
    // const checkusername = Boolean(check.length);
    // console.log('checkusername', checkusername);


    const onSubmit = data => {
        console.log('dat', data)

        axios.post(`${process.env.REACT_APP_BASE_URL}/register`, data)
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                // cogoToast.success('Login successfully !', { position: 'top-right' });
                window.location = "/";
            })
            .catch((err) => {
                console.log('catch func this is error', err.response);
                setErr(err.response.data)
                console.log('err', err.response.data);
                // console.log('erros', err.response.data.eamil[0]);
            })

    }


    if (auth()) {
        return <Navigate to='/' />
    } else {
        return (
            <div className='bg-gray-100 py-12 pb-20 h-screen'>
                <div>
                    <Link to='/'>
                        <img className="mx-auto h-12 w-auto rounded-full mt-3" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    </Link>
                    <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500"> Login Now !</Link>
                    </p>




                </div>
                <form className="mt-6 space-y-4 max-w-lg mx-auto px-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-red-800'>
                        {err.username && <p>{err.username[0]}</p> }
                        {err.mobile && <p>{err.mobile[0]}</p> }
                        {err.email && <p>{err.email[0]}</p> }
                        {err.club_id && <p>{err.club_id[0]}</p> }
                        {err.password && <p>{err.password[0]}</p> }
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-full">
                            <label htmlFor='name' className="sr-only">Email </label>
                            <input {...register('name', { required: 'Full Name is required.' })} id='name' name='name' type='text' className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='Full Name' />
                            <span className='text-red-600 text-sm'>{errors.name?.message}</span>
                        </div>
                        <div className="w-full">
                            <label htmlFor='username' className="sr-only">Email </label>
                            <input {...register('username',
                                {
                                    required: true,
                                    validate: (val: string) => {
                                        const check = clubs.filter(record => record.username === watch('username'))
                                        const checkusername = Boolean(check.length);

                                        if (checkusername) {
                                            return "username already taken";
                                        }
                                    },
                                }
                            )} id='username' username='username' type='text' className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='username' />
                            <span className='text-red-600 text-sm'>{errors.username?.message}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-full">
                            <label htmlFor='email' className="sr-only">Email </label>
                            <input {...register('email',
                                {
                                    required: true,
                                    validate: (val: string) => {
                                        const check = clubs.filter(record => record.email === watch('email'))
                                        const checkusername = Boolean(check.length);

                                        if (checkusername) {
                                            return "Email already taken";
                                        }
                                    },
                                }
                            )} id='email' email='email' type='text' className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='email' />
                            <span className='text-red-600 text-sm'>{errors.email?.message}</span>
                        </div>
                        <div className="w-full">
                            <label htmlFor='mobile' className="sr-only">mobile </label>
                            <input {...register('mobile', { required: 'Mobile number required.' })} id='mobile' name='mobile' type='text' autoComplete='mobile' className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='mobile' />
                            <span className='text-red-600 text-sm'>{errors.mobile?.message}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">

                        <div className="w-full">
                            <label htmlFor='club' className="sr-only">Select Club </label>
                            <select {...register('club_id', { required: 'Please Select a club_id' })} id='club_id' name='club_id' type='text' className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='club_id' >
                                <option value=''>Select Club</option>
                                {
                                    clubs.map((club, index) => {
                                        return <option value={club.id} key={index}>{club.name}</option>
                                    })
                                }
                            </select>
                            <span className='text-red-600 text-sm'>{errors.club?.message}</span>
                        </div>

                        <div className="w-full">
                            <label htmlFor='sponsername' className="sr-only">sponsername </label>
                            <input {...register('sponsername')} id='sponsername' name='sponsername' type='text' className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='sponsername' />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-full">
                            <label htmlFor='password' className="sr-only">password </label>
                            <input {...register('password', { required: 'Password is required.' })} id='password' name='password' type='password' className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='password' />
                            <span className='text-red-600 text-sm'>{errors.password?.message}</span>
                        </div>
                        <div className="w-full">
                            <label htmlFor='confirmPassword' className="sr-only">confirmPassword </label>
                            <input
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (val: string) => {
                                        if (watch('password') != val) {
                                            return "Your passwords do no match";
                                        }
                                    },
                                })}

                                id='confirmPassword' name='confirmPassword' type='password' className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='confirmPassword' />
                            <span className='text-red-600 text-sm'>{errors.confirmPassword?.message}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Register Now !
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register