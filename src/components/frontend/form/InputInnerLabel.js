import React from 'react'
import { useForm } from 'react-hook-form';

const InputInnerLabel = ({name='no-name', placeholder='placeholder-text', type='text'}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className="w-full">
            <label htmlFor={name} className="sr-only">Email </label>
            <input {...register(name)} id={name} name={name} type={type} autoComplete={name} className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder={placeholder} />
        </div>
    )
}

export default InputInnerLabel