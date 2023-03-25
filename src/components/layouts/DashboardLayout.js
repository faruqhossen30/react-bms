import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegBell, FaBars, FaPlus, FaHome, FaPlusCircle } from "react-icons/fa";
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import Sidebarcollapse from '../../components/dashboard/sidebar/Sidebarcollapse';
import DashboardRoute from '../../routes/DashboardRoute';

const DashboardLayout = ({children}) => {
  const [isToggle, setIsToggle] = useState(true);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const toggleClass = () => {
    setIsToggle(!isToggle);
  };
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  return (
    <>
      <Sidebarcollapse sidebarToggle={sidebarToggle} toggleSidebar={toggleSidebar} />
      <div className='grid grid-cols-12 bg-white'>
        {/* className='bg-gray-800 hidden md:block md:col-span-3' */}
        <Sidebar />
        {/* className='bg-gray-300 col-span-12 md:col-span-9' */}
        <main className='md:relative bg-gray-100 col-span-12 md:col-span-9 lg:col-span-10'>
          <nav className='sticky top-0 z-10 flex justify-between items-center px-3 py-1 text-gray-900 bg-white shadow-md'>
            {/* Left */}
            <div className='flex items-center'>
              <div className='cursor-pointer md:hidden'>
                <span onClick={toggleSidebar}><FaBars /></span>
              </div>
              <div className="ml-4 relative">
                <div className="cursor-pointer flex items-center text-gray-500 space-x-1">
                  <FaPlusCircle />
                  <span className='  font-semibold text-sm'>Create New</span>
                </div>
                <div id="dropdown_content" className="hidden absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 bg-white">
                  <div className="px-4 py-2 text-xs text-gray-400">
                    Manage Account
                  </div>
                  <a href="#"
                    className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Profile</a>
                  <a href="#" className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Logout</a>
                </div>
              </div>
            </div>
            {/* Right */}
            <div>
              <div className="ml-auto flex items-center">
                <div>
                  <FaRegBell />
                </div>
                <div className="ml-4 relative">
                  <div className="cursor-pointer">
                    <img onClick={toggleClass} className="h-8 w-8 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Faruq+Hossen" alt="" />
                  </div>
                  <div className={`${isToggle && "hidden"} absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 bg-white`}>
                    <div className="px-4 py-2 text-xs text-gray-400">
                      Manage Account
                    </div>
                    <a href="#"
                      className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Profile</a>
                    <a href="#" className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className='p-1 md:p-3 mb-12'>
            {children}
          </div>
          <footer className='absolute inset-x-0 bottom-0 bg-white shadow-inner p-2 text-center text-sm text-gray-600'>
            <p>Copyright © 2022</p>
          </footer>
        </main>
      </div>
    </>
  )
}

export default DashboardLayout