import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaSave } from 'react-icons/fa';
import axios from '../../../util/axios';
import Settings from '../Settings'

const BetLimit = () => {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        axios.post('http://localhost:5000/api/option/set', data)
            .then((res) => {
                console.log('BetLimit', res);
                navigate('/admin/settings');
            })
            .catch((err) => {
                console.log('this is BetLimit error', err);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/option/get/betLimit')
            .then((res) => {
                console.log('BetLimit', res);
                setValue('value', res.data.value)
            })
    }, []);


    return (
        <Settings>
            <div className='border border-b-2 p-4'>
                <h4>Website Notice</h4>
                <span className='text-xs text-gray-500'>Widthdraw Limit</span>
            </div>
            <div className='py-2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="px-4">

                        <input {...register("key")} type="hidden" defaultValue='betLimit' name="key" />
                    </div>
                    <div className="px-4">
                        <label htmlFor="value" className="block text-sm font-medium text-gray-700 pb-1">Widthdraw Limit</label>
                        <input {...register("value")} type="number" name="value" id="value" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                    </div>

                    <div className='px-4 py-2'>
                        <button className='inline-flex items-center px-2 py-1 space-x-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded'>
                            <FaSave />
                            <span>Save</span>
                        </button>
                    </div>

                </form>
            </div>
        </Settings>
    )
}

export default BetLimit