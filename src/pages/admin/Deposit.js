import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import moment from 'moment'
import { FaCheck, FaCheckCircle, FaEdit, FaEye, FaPlusCircle, FaTrash, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import Breadcrumb from '../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import axios from '../../util/axios'
import withReactContent from 'sweetalert2-react-content';

const Deposit = () => {
  const MySwal = withReactContent(Swal)
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/deposites')
      .then((res) => {
        setDeposits(res.data.docs)
        console.log(res);
      })
      .catch(err => console.log(err))
  }, []);

  const depositDelate = () => {
    MySwal.fire({
      // title: 'Are you want to Logout ?',
      text: "Are you want to Delete deposit ?",
      icon: 'warning',
      width: '25em',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout',
      customClass: 'swal2-popup'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('deposit');
      }
    })
  }

  return (
    <DashboardLayout>
      <Breadcrumb>
        <li className="inline-flex items-center">
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Deposites List
          </Link>
          {/* <span className="mx-4 h-auto text-gray-400 font-medium">/</span> */}
        </li>
      </Breadcrumb>

      <div className='bg-white p-2'>
        <button className='bg-gray-800 p-1 mb-3 border shadow-md'>
          <Link to='/' className='flex items-center space-x-1 text-gray-100'>
            <FaPlusCircle />
            <span className=' text-sm font-semibold'>Add Match</span>
          </Link>
        </button>
        <table className="border-collapse border border-slate-400 w-full">
          <thead>
            <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
              <th className="border border-slate-300">S.N</th>
              <th className="border border-slate-300">User</th>
              <th className="border border-slate-300">Amount</th>
              <th className="border border-slate-300">Method</th>
              <th className="border border-slate-300">From</th>
              <th className="border border-slate-300">To</th>
              <th className="border border-slate-300">Transaction</th>
              <th className="border border-slate-300">Status</th>
              <th className="border border-slate-300">Action</th>
              <th className="border border-slate-300">Time</th>
            </tr>
          </thead>
          <tbody>
            {
              deposits.map((deposit, index) => {
                return (
                  <tr className='p-1 text-sm' key={index}>
                    <td className="p-2 border border-slate-300 text-center">{index + 1}</td>
                    <td className="p-2 border border-slate-300">{deposit.user?.name}</td>
                    <td className="p-2 border border-slate-300">{deposit.amount}</td>
                    <td className="p-2 border border-slate-300">{deposit.method}</td>
                    <td className="p-2 border border-slate-300">{deposit.fromAccount}</td>
                    <td className="p-2 border border-slate-300">{deposit.toAccount}</td>
                    <td className="p-2 border border-slate-300">{deposit.transactionId}</td>
                    <td className="p-2 border border-slate-300">
                      {
                        deposit.status ? (<span className="m-2 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-normal text-green-600">
                          Completed
                        </span>) :
                          (<span className="m-2 px-2 py-1 bg-red-200 hover:bg-green-300 rounded-full text-xs font-normal text-green-600">
                            Pending
                          </span>)
                      }
                    </td>
                    <td className="p-2 border border-slate-300 text-center ">
                      {/* <button onClick={depositDelate} className="inline-flex items-center justify-center w-5 h-5 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800">
                        <FaTrashAlt/>
                      </button> */}
                      {
                        deposit.status ? (
                          <FaCheckCircle className='text-green-700'/>
                        ) :
                          (
                            <Link to={`/admin/deposit/${deposit._id}`} className="inline-flex items-center justify-center w-5 h-5 text-green-700 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-pink-800">
                            <FaEdit />
                          </Link>)
                      }
                      
                    </td>
                    <td className="p-2 border border-slate-300">{moment(deposit.createdAt).calendar()}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>


    </DashboardLayout>
  )
}

export default Deposit