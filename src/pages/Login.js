import React, { useContext, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from '../util/axios';
import { AuthContext } from '../contexts/authContext';

const Login = () => {
    const {user} = useContext(AuthContext);
    const email = useRef();
    const password = useRef();
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const loginSubmit = async (e) => {
        e.preventDefault();
        console.log('email=', email.current.value, 'pass', password.current.value);
        setErrorMessage('');
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, { email: email.current.value, password: password.current.value });
            console.log(data);
            localStorage.setItem("token", data.token);
            // cogoToast.success('Login successfully !',{ position: 'top-right' });
            window.location = "/";
        } catch (error) {
            console.log('error',error);
            if (error.response && error.response.status === 403) {
                console.log('error 403');
                setErrorMessage(error.response.data.message)
            }
        }
    };

    if (user) {
        return <Navigate to='/' />
    } else {
        return (
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 h-screen">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Link to='/'>
                            <img className="mx-auto h-12 w-auto rounded-full" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        </Link>
                        <h2 className="mt- text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or
                            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500"> Register Now !</Link>
                        </p>                        
                    </div>
                    <form className="mt-8 space-y-6" method="POST" onSubmit={loginSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div className="py-2">
                                <label htmlFor="email-address" className="sr-only">Email </label>
                                <input id="email-address" name="email" ref={email} type="text" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email or username" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" ref={password} type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                            </div>
                            <div>
                                {error && <p className=" font-semibold text-red-600 text-sm py-1">{error}</p>}
                            </div>
                        </div>
                        <div>
                            <p className='text-red-500'>{errorMessage && errorMessage}</p>
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

                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login