import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFieldArray, useForm } from "react-hook-form";
import Breadcrumb from '../../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import axios from '../../../util/axios'
import Select from 'react-select'
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

// type = FormValues = {
//     option:{
//         name: string,
//         rate: number,
//     }
// }
const BetQuestionCreate = () => {
    const navigate = useNavigate();
    const [erros, setErrors] = useState([]);
    const { register, control, handleSubmit, formState: { errors } } = useForm(
        // {
        //     defaultValues: {
        //         option: [{ optionName: 'some', optionRate: 55, optionStatus: 'live' }]
        //     }
        // }
    );
    const { fields, append, prepend, remove } = useFieldArray({
        control,
        name: 'option',
    });


    const onSubmit = data => {
        console.log(data)
    };

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
                    <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
                    <span className="mx-2 h-auto text-gray-400 font-medium">Add Question</span>
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
                                <label htmlFor="teamOne" className="block text-sm font-medium text-gray-700"> Question Name </label>
                                <input
                                    {...register("teamOne", { required: 'Team one name is required.' })}
                                    type="text" name="teamOne" id="teamOne" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                <span className='text-red-600 text-sm'>{errors.teamOne?.message}</span>
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
                            <div className="col-span-6">
                                <button className='bg-green-600 p-1 mb-3 border shadow-md' type='button'>
                                    <div className='flex items-center space-x-1 text-gray-100'>
                                        <FaPlusCircle />
                                        <span className=' text-sm font-semibold' onClick={() => { append({ optionName: 'jamal', optionRate: 12, optionStatus: 'live' }) }} >Append</span>
                                    </div>
                                </button>


                                <table className="border-collapse border border-slate-400 w-full">
                                    <thead>
                                        <tr className='bg-gray-100'>
                                            <th className="border border-slate-300">S.N</th>
                                            <th className="border border-slate-300">Option</th>
                                            <th className="border border-slate-300">Rate</th>
                                            <th className="border border-slate-300">Atatus</th>
                                            <th className="border border-slate-300">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            fields.map((field, index) => {
                                                return <tr className='p-1' key={field.id}>
                                                    <td className="p-2 border border-slate-300 text-center">1</td>
                                                    <td className="p-2 border border-slate-300 text-center">
                                                        <input
                                                            {...register(`option.${index}.optionName`)}
                                                            control={control}
                                                            type="text" name="optionName" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                                    </td>
                                                    <td className="p-2 border border-slate-300 text-center">
                                                        <input
                                                            {...register(`option.${index}.optionRate`)}
                                                            type="number" name="optionRate" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                                    </td>
                                                    <td className="p-2 border border-slate-300 text-center">
                                                        <select
                                                            {...register(`option.${index}.optionStatus`)}
                                                            name="optionStatus" className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                                            <option value="upcommint">Upcomming</option>
                                                            <option value="live">Live</option>
                                                        </select>
                                                    </td>
                                                    <td className="border border-slate-300 space-x-1 text-center">
                                                        <Link onClick={() => remove(index)} className="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                                                            <FaTrash />
                                                            Remove
                                                        </Link>
                                                    </td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className='py-2'>
                            <button className='bg-purple-800 text-white text-sm py-1 px-3 rounded'>Add Question</button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default BetQuestionCreate