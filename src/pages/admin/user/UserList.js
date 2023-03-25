import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { FaEdit, FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    name: 'Status',
    selector: row => row.balance,
    format: (row) => row.status ? 'Active':'Deactive',
  },
  {
    name: 'Action',
    cell: (row) => {
      return (
        <div className='space-x-1'>
          <Link to={`/admin/user/${row._id}`} className="inline-flex items-center p-1 bg-blue-600 hover:bg-red-700 text-white text-sm font-medium rounded">
            <FaEye />
          </Link>
          <Link to={`/admin/user/edit/${row._id}`} className="inline-flex items-center p-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
            <FaEdit />
          </Link>
          <Link className="inline-flex items-center p-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded">
            <FaTrash />
          </Link>
        </div>
      )
    }
  },
];

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then((res) => {
        setUsers(res.data)
      })
      .catch(err => console.log(err))
  }, []);



  return (
    <DashboardLayout>
      <Breadcrumb>
        <li className="inline-flex items-center">
          <Link to="/admin/dashboard" className="text-gray-600 hover:text-blue-500">
            Dashboard
          </Link>
          {/* <span className="mx-4 h-auto text-gray-400 font-medium">/</span> */}
        </li>
      </Breadcrumb>

      <DataTable
        columns={columns}
        data={users}
        pagination
        striped
        highlightOnHover
        responsive
      // customStyles={customStyles}
      />
    </DashboardLayout>
  )
}

export default UserList