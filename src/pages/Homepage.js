import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import BetList from '../components/frontend/BetList'
import Marquee from '../components/frontend/Marquee'
import Sidebar from '../components/frontend/Sidebar'
import AppLayout from '../components/layouts/AppLayout'
import RightSidebar from '../components/frontend/RightSidebar'

const Homepage = () => {
  return (
    <AppLayout>
      <div className='p-2 bg-gray-100'>
      <ToastContainer />
        <Marquee />
        <div className='grid grid-cols-12 gap-1'>
          {/* className='hidden lg:block lg:col-span-3 bg-white' */}
          <Sidebar />
          <BetList />
          <RightSidebar />
        </div>
      </div>
    </AppLayout>
  )
}

export default Homepage