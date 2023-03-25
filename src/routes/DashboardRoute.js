import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Balance from '../pages/admin/Balance';
import Dashboard from '../pages/admin/Dashboard';
const DashboardRoute = () => {
    return (
        <>

                <Route path="admin/balance" element={<Balance />} />

        </>
    )
}

export default DashboardRoute