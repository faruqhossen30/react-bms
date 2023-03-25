import { Disclosure } from '@headlessui/react'
import moment from 'moment'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye, FaGamepad, FaPlus, FaPlusCircle, FaRegCalendarAlt, FaRegClock, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import axios from '../../../util/axios'

const MatchPanel = () => {
  const [matches, setMatches] = useState([]);
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/matches`)
      .then((res) => {
        setMatches(res.data.docs)
        console.log('useeffect', res);
      })
      .catch(err => console.log(err))
  }, []);


  const deleteHandaller = (id) => {
    MySwal.fire({
      // title: 'Are you want to Logout ?',
      text: "Are you want to delete Match ?",
      icon: 'warning',
      width: '25em',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      customClass: 'swal2-popup'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`http://localhost:5000/api/match/delete/${id}`)
          .then((res) => {
            console.log(res);
            window.location.reload();
          })
          .catch((err) => {
            console.log('this is error', err);
          })
      }
    })
  }


  console.log('matches', matches);
  return (
    <DashboardLayout>
      <Breadcrumb>
        <li className="inline-flex items-center">
          <Link to="/admin/match-panel" className="text-gray-600 hover:text-blue-500">
            Match Panel
          </Link>
          <span className="mx-2 h-auto text-gray-400 font-medium">/ Match List</span>
        </li>
      </Breadcrumb>

      <div className='bg-white p-2'>
        <button className='bg-gray-800 p-1 mb-3 border shadow-md'>
          <Link to='/admin/match/create' className='flex items-center space-x-1 text-gray-100'>
            <FaPlusCircle />
            <span className=' text-sm font-semibold'>Add Match</span>
          </Link>
        </button>


        {
          matches.map((match, index) => {
            return <Disclosure as='div' className='shadow-md mb-1 border border-purple-300 text-sm' defaultOpen key={index}>
              <Disclosure.Button as='div' className='cursor-pointer py-2' >
                <div className='flex items-center justify-between'>
                  <div className='flex'>
                    <FaGamepad className="border rounded-full h-12 w-12 p-1 text-lg" />
                    <div className='flex flex-col ml-2 text-left'>
                      <span className='text-sm font-semibold'>{match.teamOne} VS {match.teamTwo}</span>
                      <span className='text-xs text-gray-500'>{match.title}</span>
                      {/* <span className='flex items-center text-sm space-x-1'> <FaRegCalendarAlt /> <span> Decenmber 2022</span> <FaRegClock /> 12:00 PM</span> */}
                      <span className='flex items-center text-sm space-x-1'>
                        <FaRegCalendarAlt />
                        <span> {moment(match.date).format('LL')}</span>
                        <FaRegClock />  <span>{moment(match.date).format('LT')}</span>
                      </span>
                    </div>
                  </div>
                  <div className='space-x-2'>
                    <Link to={`/admin/match/${match._id}/qusetion/create`} className="inline-flex items-center px-2 py-1 bg-purple-800 hover:bg-red-700 text-white text-sm font-medium">
                      <FaPlusCircle />
                      Add Question
                    </Link>
                    <Link to={`/admin/match/edit/${match._id}`} className="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium">
                      <FaEdit />
                      Edit
                    </Link>
                    <button onClick={() => deleteHandaller(match._id)} className="inline-flex items-center px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              </Disclosure.Button>

              {
                match.questions.map((item, index) => {
                  return <Disclosure.Panel className="" key={index}>
                    <div>
                      <div className="text-white bg-purple-800 border px-2 py-1 flex justify-between">
                        <h4 className="text-white font-bold">{item.title}</h4>
                        <div className='space-x-1'>
                          <Link to={`/admin/match-question/${item._id}/edit`} className="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                            <FaEdit />
                            Edit Question
                          </Link>
                          <Link className="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                            <FaTrash />
                            Delete
                          </Link>
                        </div>
                      </div>
                      <div>
                        <table className="border-collapse border border-slate-400 w-full">
                          <thead>
                            <tr className='bg-gray-100'>
                              <th className="border border-slate-300">S.N</th>
                              <th className="border border-slate-300">Anser</th>
                              <th className="border border-slate-300">Rate</th>
                              <th className="border border-slate-300">Place</th>
                              <th className="border border-slate-300">Amount</th>
                              <th className="border border-slate-300">Limit</th>
                              <th className="border border-slate-300">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              item.options.map((option, index) => {
                                return <tr className='p-1' key={index}>
                                  <td className="p-2 border border-slate-300 text-center">{index + 1}</td>
                                  <td className="p-2 border border-slate-300 text-left">{option.title}</td>
                                  <td className="p-2 border border-slate-300 text-center">{option.betRate}</td>
                                  <td className="p-2 border border-slate-300 text-center">0</td>
                                  <td className="p-2 border border-slate-300 text-center">00</td>
                                  <td className="p-2 border border-slate-300 text-center">100</td>
                                  <td className="border border-slate-300 space-x-1 text-right">
                                    <Link className="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-green-800 text-white text-sm font-medium rounded">
                                      <FaEdit />
                                    </Link>
                                    <Link className="inline-flex items-center px-2 py-1 bg-red-600 hover:bg-red-800 text-white text-sm font-medium rounded">
                                      <FaTrash />
                                    </Link>
                                  </td>
                                </tr>
                              })
                            }

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Disclosure.Panel>
                })
              }
            </Disclosure>
          })
        }
      </div>


    </DashboardLayout>
  )
}

export default MatchPanel