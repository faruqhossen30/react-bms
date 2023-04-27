import React from 'react'
import Marquee from '../components/frontend/Marquee'
import Sidebar from '../components/frontend/Sidebar'
import AppLayout from '../components/layouts/AppLayout'
import RightSidebar from '../components/frontend/RightSidebar'
import BetListByGame from '../components/frontend/BetListByGame'
import { useParams } from 'react-router-dom'

const HomepageGame = () => {
  let { gameid } = useParams();
  return (
    <AppLayout>
      <div className='p-2 bg-gray-100'>
        <Marquee />
        <div className='grid grid-cols-12 gap-1'>
          {/* className='hidden lg:block lg:col-span-3 bg-white' */}
          <Sidebar />
          <BetListByGame gameid={gameid} />
          <RightSidebar />
        </div>
      </div>
    </AppLayout>
  )
}

export default HomepageGame