import { Accordion, AccordionHeader } from '@material-tailwind/react'
import React from 'react'
import BetList from '../components/frontend/BetList'
import Marquee from '../components/frontend/Marquee'
import Sidebar from '../components/frontend/Sidebar'
import AppLayout from '../components/layouts/AppLayout'

const Homepage = () => {
  return (
    <AppLayout>
      <div className='p-2 bg-gray-100'>
        <Marquee />
        <div className='grid grid-cols-12 gap-1'>
          {/* className='hidden lg:block lg:col-span-3 bg-white' */}
          <Sidebar />
          <BetList/>
          
          <div className='hidden lg:block lg:col-span-3'>
            rightsidebar
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Homepage