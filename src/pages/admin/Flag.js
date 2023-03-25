import axios from '../../util/axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

import { FaEdit, FaEye, FaPlusCircle, FaTrash } from 'react-icons/fa'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Breadcrumb from '../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../components/layouts/DashboardLayout'

const Flag = () => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const handlePageClick = async (data) => {
        const pagenav = data.selected + 1
        await navigate(`?page=${pagenav}`)
        const page = await searchParams.get('page');
        await fetchData(page);
        // console.log(pagenav);
    }

    useEffect(() => {
        // axios.get('http://localhost:5000/api/teams')
        //     .then((res) => {
        //         setTeams(res.data.docs)
        //         // console.log(res);
        //     })
        //     .catch(err => console.log(err))
        fetchData();
    }, []);

    const fetchData = (page) => {
        axios.get(`http://localhost:5000/api/teams?page=${page}`)
            .then((res) => {
                setTeams(res.data.docs)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <DashboardLayout>
            <Breadcrumb>
                <li className="inline-flex items-center">
                    <Link to="/" className="text-gray-600 hover:text-blue-500">
                        Team List
                    </Link>
                    {/* <span class="mx-4 h-auto text-gray-400 font-medium">/</span> */}
                </li>
            </Breadcrumb>

            <div className='bg-white p-2'>
                <button className='bg-gray-100 p-1 my-1 border rounded'>
                    <Link to='/' className='flex items-center space-x-1'>
                        <FaPlusCircle />
                        <span className=' text-sm font-semibold'>Create Team</span>
                    </Link>
                </button>
                <table className="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className="border border-slate-300">S.N</th>
                            <th className="border border-slate-300">Flag</th>
                            <th className="border border-slate-300">Name</th>
                            <th className="border border-slate-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teams.map((team, index) => {
                                return (
                                    <tr className='p-1' key={index}>
                                        <td className="p-2 border border-slate-300 text-center">{team.id}</td>
                                        <td className="p-2 border border-slate-300">
                                            <img src={team.flag} className="h-4" alt="" />
                                        </td>
                                        <td className="p-2 border border-slate-300">{team.name}</td>
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


                <div className='py-8'>
                    <ul className='flex px-2 space-x-2'>
                        <ReactPaginate
                            previousLabel="Previous"
                            nextLabel="Next"
                            breakLabel="....."
                            pageClassName="page-item"
                            className="inline-flex"
                            pageLinkClassName="px-3 py-1 text-gray-600 bg-white border  border-gray-600 focus:shadow-outline"
                            breakLinkClassName="px-3 py-1 text-gray-600 bg-white border  border-gray-600 focus:shadow-outline"
                            activeClassName="bg-red-500"

                            pageCount={26}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                        />

                    </ul>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Flag