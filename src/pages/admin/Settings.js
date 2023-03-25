import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tab } from '@headlessui/react'
import { FaBullhorn, FaCog, FaCommentsDollar, FaGamepad, FaHome, FaIdCard, FaMoneyBill, FaSave } from 'react-icons/fa';
import NoticeComponent from '../../components/dashboard/settings/NoticeComponent';
import PaymentGateway from '../../components/dashboard/settings/PaymentGateway';
import FooterNotice from '../../components/dashboard/settings/FooterNotice';
import { Link } from 'react-router-dom';

const Settings = ({children}) => {
    return (
        <DashboardLayout>
            <div className='grid grid-cols-12 bg-white min-h-screen shadow-md'>
                <div className='col-span-3 border-r-2 text-gray-500  font-medium'>
                    <div className='flex items-center shadow-md p-2 space-x-2'>
                        <FaCog />
                        <h2 className='font-semibold'>Settings</h2>
                    </div>
                    <ul className="p-2 divide-y divide-slate-200">
                        <Link className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                            <FaIdCard />
                            <span>Header & Footer</span>
                        </Link>
                        <Link to='/admin/setting/header-notice'  className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                            <FaBullhorn />
                            <span>Header Notice</span>
                        </Link>
                        <Link to='/admin/setting/footer-notice' className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                            <FaBullhorn />
                            <span>Footer Notice</span>
                        </Link>
                        <Link to='/admin/setting/widthdraw-limit' className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                            <FaBullhorn />
                            <span>Widthdraw Limit</span>
                        </Link>
                        <Link to='/admin/setting/widthdraw-limit' className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                            <FaCommentsDollar />
                            <span>Widthdraw Limit</span>
                        </Link>
                        <Link to='/admin/setting/bet-limit' className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                            <FaGamepad />
                            <span>Bet Limit</span>
                        </Link>
                        <Link to='/admin/setting/payment-gateway' className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                            <FaMoneyBill />
                            <span>Payment Gateway</span>
                        </Link>
                    </ul>
                </div>
                <div className=' col-span-9'>
                    {children}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Settings