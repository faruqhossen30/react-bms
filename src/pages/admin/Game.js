import axios from '../../util/axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

import { FaEdit, FaEye, FaPlusCircle, FaTrash } from 'react-icons/fa'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Breadcrumb from '../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../components/layouts/DashboardLayout'

const Game = () => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/games')
            .then((res) => {
                setTeams(res.data)
                console.log(res);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <DashboardLayout>
            <Breadcrumb>
                <li className="inline-flex items-center">
                    <Link to="/" className="text-gray-600 hover:text-blue-500">
                        Game List
                    </Link>
                    {/* <span class="mx-4 h-auto text-gray-400 font-medium">/</span> */}
                </li>
            </Breadcrumb>

            <div className='bg-white p-2'>
                <button className='bg-gray-100 p-1 my-1 border rounded'>
                    <Link to='/' className='flex items-center space-x-1'>
                        <FaPlusCircle />
                        <span className=' text-sm font-semibold'>Create Game</span>
                    </Link>
                </button>
                <table className="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className="border border-slate-300">S.N</th>
                            <th className="border border-slate-300">Name</th>
                            <th className="border border-slate-300">Photo</th>
                            <th className="border border-slate-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teams.map((team, index) => {
                                return (
                                    <tr className='p-1' key={index}>
                                        <td className="p-2 border border-slate-300 text-center">{team.id}</td>
                                        <td className="p-2 border border-slate-300">{team.name}</td>
                                        <td className="p-2 border border-slate-300">
                                            <img src={team.image} className="h-4" alt="" />
                                        </td>
                                        <td className="p-2 border border-slate-300 ">
                                            <div className='flex space-x-2 text-right'>
                                                <Link to='/'> <FaEye /> </Link>
                                                <Link to='/'> <FaEdit /> </Link>
                                                <Link to='/'> <FaTrash /> </Link>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>
        </DashboardLayout>
    )
}

export default Game