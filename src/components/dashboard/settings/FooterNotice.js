import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { useForm } from "react-hook-form";
import { FaSave } from 'react-icons/fa';
import axios from '../../../util/axios';

const FooterNotice = () => {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

    const onSubmit = data => {

        console.log(data);

        axios.post('http://localhost:5000/api/option/set',data)
            .then((res) => {
                console.log('footer notice', res);
            })
            .catch((err) => {
                console.log('this is error', err);
            })

    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/option/get/footerNotice')
            .then((res) => {
                console.log('footerNotice', res);
                setValue('footerNotice', res.data.value)
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
                           
                            <input {...register("key")} type="hidden" defaultValue='footerNotice' name="key" /> 
                        </div>
                        <div className="px-4">
                            <label htmlFor="value" className="block text-sm font-medium text-gray-700 pb-1">Footer Notice</label>
                            <textarea {...register("value")} type="text" name="value" id="value" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" ></textarea>
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

export default FooterNotice