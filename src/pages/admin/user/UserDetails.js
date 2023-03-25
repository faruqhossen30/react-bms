import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { FaAddressCard, FaMailBulk, FaMobileAlt, FaPhone, FaUser, FaUserPlus, FaUsers, FaEdit, FaEye, FaPen, FaTrash, FaPlus, FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../../components/dashboard/Breadcrumb';
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import axios from '../../../util/axios';

const columns = [
  {
    name: 'S.N',
    selector: (row, index) => index + 1,
  },
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Username',
    selector: row => row.username,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
  },
  {
    name: 'Mobile',
    selector: row => row.mobile,
  },
  {
    name: 'Balance',
    selector: row => row.balance,
  },
  {
    name: 'Balance',
    selector: row => row.balance,
  },
  {
    name: 'Action',
    cell: (row) => {
      return (
        <div className='space-x-1'>
          <Link class="inline-flex items-center p-1 bg-blue-600 hover:bg-red-700 text-white text-sm font-medium rounded">
            <FaEye />
          </Link>
          <Link class="inline-flex items-center p-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
            <FaEdit />
          </Link>
          <Link class="inline-flex items-center p-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded">
            <FaTrash />
          </Link>
        </div>
      )
    }
  },
];

const UserDetails = () => {
  let { id } = useParams();
  const [userinfo, setUserinfo] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`)
      .then((res) => {
        setUserinfo(res.data)
      })
      .catch(err => console.log(err))
  }, []);



  return (
    <DashboardLayout>
      <Breadcrumb>
        <li className="inline-flex items-center">
          <Link to="/admin/users" className="text-gray-600 hover:text-blue-500">
            User List
          </Link>
          {/* <span className="mx-4 h-auto text-gray-400 font-medium">/</span> */}
        </li>
      </Breadcrumb>
      <div className='bg-white p-4 text-center max-w-xl mx-auto text-purple-800'>

        <div className=' divide-y divide-gray-200 border'>
          <div className='flex items-center justify-start space-x-2 p-2'>
            <FaAddressCard />
            <span>Name: {userinfo.name}</span>
          </div>
          <div className='flex items-center justify-start space-x-2 p-2'>
            <FaUser />
            <span>Username: {userinfo.username}</span>
          </div>
          <div className='flex items-center justify-start space-x-2 p-2'>
            <FaMailBulk />
            <span>Email: {userinfo.email}</span>
          </div>
          <div className='flex items-center justify-start space-x-2 p-2'>
            <FaMobileAlt />
            <span>Mobile: {userinfo.mobile}</span>
          </div>
          <div className='flex items-center justify-start space-x-2 p-2'>
            <FaUsers />
            <span>CLub: {userinfo.club}</span>
          </div>
          <div className='flex items-center justify-start space-x-2 p-2'>
            <FaUserPlus />
            <span>Sponser: 23234</span>
          </div>
        </div>

        <div className='space-x-2 text-left py-2'>
          <Link to={`/admin/user/edit/${userinfo._id}`} class="inline-flex items-center px-2 py-1 bg-purple-800 hover:bg-red-700 text-white text-sm font-medium rounded">
            <FaEdit />
            Edit
          </Link>
          <Link to='/admin/users' class="inline-flex items-center px-2 py-1 bg-purple-600 hover:bg-red-700 text-white text-sm font-medium">
            <FaLongArrowAltLeft />
            Back
          </Link>
        </div>

      </div>

    </DashboardLayout>
  )
}

export default UserDetails