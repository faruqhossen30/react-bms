import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFieldArray, useForm } from "react-hook-form";
import Breadcrumb from '../../../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../../../components/layouts/DashboardLayout'
import axios from '../../../../util/axios'
import Select from 'react-select'
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

// type = FormValues = {
//     option:{
//         name: string,
//         rate: number,
//     }
// }
const MatchQuestion = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [erros, setErrors] = useState([]);

    const title = useRef();
    const questionStatus = useRef();

    const name = useRef();
    const rate = useRef();
    const status = useRef();
    const [options, setOptions] = useState([])

    const addOption = async () => {
        await setOptions((options) => [
            ...options,
            {
                id: Date.now(),
                title: name.current.value,
                rate: rate.current.value,
                status: status.current.value
            }
        ]);
        await clear();



    }
    const clear = () => {
        name.current.value = '';
        rate.current.value = '';
        status.current.value = '';
    }

    const removeElement = (id) => {
        setOptions((current) =>
            current.filter((option) => option.id !== id)
        )
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


    const onSubmit = (event) => {
        event.preventDefault()
        // axios.post(`http://localhost:5000/api/match/questions`, {
        //     title:title,
        //     questionStatus:questionStatus,
        //     options:"options"
        // })
        axios.post(`http://localhost:5000/api/match/${id}/question`, {
            title: title.current.value,
            status: questionStatus.current.value,
            options: options
        })
            .then((res) => {
                console.log(res);
            })
            .catch(err => console.log(err))
        // console.log('options', typeof some);
    }


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

                    <form onSubmit={onSubmit}>
                        <div className="col-span-6 sm:col-span-3 ">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700"> Question title </label>
                            <input type="text" name="title" ref={title} id="title" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                        </div>
                        <div className="col-span-6 sm:col-span-3 ">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                            <select name="status" ref={questionStatus} id='status' className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                <option value="upcommint">Upcomming</option>
                                <option value="live">Live</option>
                            </select>
                        </div>
                        <br />

                        <hr />

                        <div className='flex items-center py-2 space-x-2'>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Option Name </label>
                                <input type="text" name="name" ref={name} id="name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            </div>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="rate" classrate="block text-sm font-medium text-gray-700"> Option rate </label>
                                <input type="number" name="rate" ref={rate} id="rate" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                            </div>
                            <div className="col-span-6 sm:col-span-3 ">
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                <select name="status" id='status' ref={status} className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                    <option value="1">Active</option>
                                    <option value="0">Deactive</option>
                                </select>
                            </div>

                            <div className='py-2'>
                                <button type='button' onClick={addOption} className='bg-purple-800 text-white text-sm py-1 px-3 rounded'>Add Question</button>
                            </div>
                        </div>


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
                                    options.map((item, index) => {
                                        return <tr className='p-1' key={index}>
                                            <td className="p-2 border border-slate-300 text-center">{index + 1}</td>
                                            <td className="p-2 border border-slate-300 text-left">
                                                {item.title}
                                            </td>
                                            <td className="p-2 border border-slate-300 text-center">
                                                {item.rate}
                                            </td>
                                            <td className="p-2 border border-slate-300 text-center">
                                                {item.status}
                                            </td>
                                            <td className="border border-slate-300 space-x-1 text-center">
                                                <button type='button' onClick={() => removeElement(item.id)} className="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                                                    <FaTrash />
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default MatchQuestion