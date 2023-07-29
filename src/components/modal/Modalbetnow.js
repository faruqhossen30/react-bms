import { Dialog, Transition } from '@headlessui/react';
import { useForm } from "react-hook-form";
import moment from 'moment';
import React, { useContext, useEffect } from 'react'
import { Fragment } from 'react';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../util/axios';
import { AuthContext } from '../../contexts/authContext';
import { useAuthUser, useSignIn } from 'react-auth-kit';
import UserUpdate from '../../util/userUpdate';
import { useRef } from 'react';

{/* <Modalbetnow matchData={matchData} questionData={questionData} optionData={optionData}   isOpen={isOpen} setIsOpen={setIsOpen} /> */ }

const Modalbetnow = ({ matchData, questionData, optionData, isOpen, setIsOpen }) => {
    const openId = useRef(1);
    const auth = useAuthUser();
    const signIn = useSignIn();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [winAmouont, setWinAmount] = useState(500)
    const [errorMessage, setErrorMessage] = useState('');

    const [betAmount, setBetAount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    function betAmountChange(event) {
        setBetAount(event.target.value);
    }


    const onSubmit = data => {
        console.log(data);
        setIsLoading(true);
        console.log('on start');
        // setTimeout(() => {
        //     axios.post(`${process.env.REACT_APP_BASE_URL}/user/bet`, data)
        //         .then((res) => {
        //             // notify();
        //             toast(res.data.message)
        //             console.log('in axios');
        //             console.log(res);
        //             UserUpdate(signIn);
        //             // setIsOpen(!isOpen)
        //             // setBetAount(0)
        //             // navigate('/profile')
        //         })
        //         .then(()=>setIsOpen(!isOpen))
        //         .catch((err) => {
        //             if (err.response.status == 422) {
        //                 setErrorMessage(err.response.data.message)
        //             }
        //             console.log('err', err);
        //         });
        //     setIsLoading(false);
        // }, 1000);


    };

    return (

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" open={isOpen} onClose={() => setIsOpen(!isOpen)} >
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <input type="hidden" name="matche_id" {...register("matche_id")} defaultValue={matchData.id} />
                                    <input type="hidden" name="question_id" {...register("question_id")} defaultValue={questionData.id} />
                                    <input type="hidden" name="option_id" {...register("option_id")} defaultValue={optionData.id} />
                                    <input type="hidden" name="bet_rate" {...register("bet_rate")} defaultValue={optionData.bet_rate} />
                                    <input type="hidden" name='some' defaultValue={optionData.bet_rate} />
                                    

                                    <input type="hidden" name="match_title" {...register("match_title")} defaultValue={matchData.statement} />
                                    <input type="hidden" name="question_title" {...register("question_title")} defaultValue={questionData.title} />
                                    <input type="hidden" name="option_title" {...register("option_title")} defaultValue={optionData.title} />



                                    <Dialog.Title as="h4" className="text-lg font-medium leading-6 text-gray-900" >
                                        <p> Place Your Bet </p>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className='text-left'>{matchData.team_one} VS {matchData.team_two}</p>
                                        <p className='text-center'>
                                            <span className='flex items-center text-sm space-x-1'> <FaRegCalendarAlt /> <span> {moment(matchData.date_time).format('LL')}</span> <FaRegClock /> {moment(matchData.date_time).format('LT')}</span>
                                        </p>
                                        <p>{questionData.title}</p>
                                        <p>{optionData.title} - Rete: {optionData.bet_rate}</p>

                                        <div className="bg-white p-4 flex justify-center items-center flex-wrap">
                                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full">100</span>
                                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full">500</span>
                                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full">1000</span>
                                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full">3000</span>
                                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full">5000</span>
                                        </div>
                                        <input type="number" name='bet_amount'  {...register("bet_amount", { required: 'Bet Amount is requred.', max: { value: auth()?.balance, message: 'Insufficient  balance' } })} id="name" placeholder="500"
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={betAmountChange} />
                                        <span className='text-red-600 text-sm'>{errors.bet_amount?.message}</span> <br />
                                        <span className='text-red-600 text-sm'>{errorMessage && errorMessage}</span>
                                    </div>
                                    <div>
                                        <div className="border cursor-pointer rounded-lg border-purple-300 flex justify-between my-2">
                                            <span className="font-normal p-1 text-purple-600 text-md">Possible To Win</span>
                                            <span className="font-bold p-1 px-4 text-purple-800">৳{betAmount * optionData.bet_rate}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between">
                                        {isLoading ?
                                            <button type="button" className="bg-purple-600 flex rounded-md items-center px-2" disabled>
                                                <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span className='text-white'> Bet pleacing...</span>
                                            </button>

                                            :
                                            <>
                                                <button type="submit" className="inline-flex justify-center rounded-sm border border-transparent bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                    Submit
                                                </button>


                                                <button type="button" className="inline-flex justify-center rounded-sm border border-transparent bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setIsOpen(!isOpen)} >
                                                    Cancel
                                                </button>
                                            </>
                                        }


                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    )
}

export default Modalbetnow