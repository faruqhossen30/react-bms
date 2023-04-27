import React from 'react'
import CardStatus from '../../components/dashboard/CardStatus'
import DashboardLayout from '../../components/layouts/DashboardLayout'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='grid grid-cols-12 gap-3'>
        <CardStatus />
        <CardStatus />
        <CardStatus />
        <CardStatus />
        <CardStatus />
        <CardStatus />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard