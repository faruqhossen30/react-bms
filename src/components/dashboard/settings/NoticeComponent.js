import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { useForm } from "react-hook-form";
import { FaSave } from 'react-icons/fa';
import axios from '../../../util/axios';

const NoticeComponent = () => {
    const { register, handleSubmit, watch, formState: { errors },setValue } = useForm();
    // const[headerNotice, setHeaderNotice] = useState('');
    // const[footerNotice, setFooterNotice] = useState('');


    const onSubmit = data => {

        console.log(data);

        // axios.get('http://localhost:5000/api/option/set')
        //     .then((res) => {
        //         console.log('gateway', res);
        //     })
        //     .catch((err) => {
        //         console.log('this is error', err);
        //     })

    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/option/get/headerNotice')
            .then((res) => {
                console.log('headerNotice', res);
                setValue('headerNotice', res.data.value)
            })
            .then((res) => {
                axios.get('http://localhost:5000/api/option/get/footerNotice')
                .then((res) => {
                    console.log('footerNotice', res);
                    setValue('footerNotice', res.data.value)
                })
            })
            .catch((err) => {
                console.log('this is error', err);
            })
    }, []);


    return (
        <>
            <Tab.Panel>
                <div className='border border-b-2 p-4'>
                    <h4>Website Notice</h4>
                    <span className='text-xs text-gray-500'>Website Notice</span>
                </div>
                <div className='py-2'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="px-4">
                            <label htmlFor="headerNotice" className="block text-sm font-medium text-gray-700 pb-1">Header Notice</label>
                            <textarea {...register("headerNotice")} type="text" name="headerNotice" id="headerNotice" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" ></textarea>
                        </div>
                        <div className="px-4">
                            <label htmlFor="footerNotice" className="block text-sm font-medium text-gray-700 pb-1">Footer Notice</label>
                            <textarea {...register("footerNotice")} type="text" name="footerNotice" id="footerNotice" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" ></textarea>
                        </div>

                        <div className='px-4'>
                            <button className='inline-flex items-center px-2 py-1 space-x-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded'>
                                <FaSave />
                                <span>Save</span>
                            </button>
                        </div>

                    </form>
                </div>
            </Tab.Panel>
        </>
    )
}

export default NoticeComponent