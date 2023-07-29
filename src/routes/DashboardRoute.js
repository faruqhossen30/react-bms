import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Balance from '../pages/admin/Balance';
const DashboardRoute = () => {
    return (
        <>
            <Route path="admin/balance" element={<Balance />} />
        </>
    )
}

export default DashboardRoute