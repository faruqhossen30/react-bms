import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'

const AppLayout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <div className='md:hidden h-10'></div>
        <Footer />
    </>
  )
}

export default AppLayout