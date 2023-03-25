import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegBell, FaBars, FaPlus, FaHome, FaPlusCircle, FaGreaterThan, FaRegCircle, FaRegArrowAltCircleDown, FaBuffer, FaMoneyCheck, FaGamepad, FaMoneyCheckAlt, FaCommentDollar, FaRegMoneyBillAlt, FaCubes, FaUsers, FaHeadset, FaCommentsDollar, FaInfoCircle, FaCopy, FaCog, FaSignOutAlt } from "react-icons/fa";
import CollapsItem from './CollapsItem';


const Sidebar = () => {

    const collapesHandaller = (val)=>{
        console.log(val);
        console.log('welcome');
    }

    return (
        <aside className='bg-gray-800 hidden md:block md:col-span-3 lg:col-span-2'>
            <div className='sticky top-0 z-10 bg-gray-100 py-2 text-center'>
                <Link className='font-semibold' to='/admin/dashboard'>Net T20</Link>
            </div>
            <div className='py-4 text-gray-300 font-semibold'>
                <ul className=''>
                    <li className=''>
                        <Link to='/admin/dashboard' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaBuffer />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/admin/balance' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaMoneyCheck />
                            <span>Balance</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/admin/match-panel' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaGamepad />
                            <span>Match Panel</span>
                        </Link>
                    </li>
                    <li className=''>                        
                        <CollapsItem title="Bet Information" icon={<FaInfoCircle />} items={[
                            {
                                'id':1,
                                'title':'Match',
                                'link':'/admin/Create',
                            },
                            {
                                'id':2,
                                'title':'Question',
                                'link':'/admin/Create',
                            },
                            {
                                'id':3,
                                'title':'Option',
                                'link':'/admin/Create',
                            },
                            {
                                'id':4,
                                'title':'Flags',
                                'link':'/admin/flats',
                            },
                            {
                                'id':5,
                                'title':'Games',
                                'link':'/admin/games',
                            }
                        ]} />
                    </li>
                    <li className=''>
                        <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaMoneyCheckAlt />
                            <span>Transction</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/admin/deposits' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaCommentDollar />
                            <span>Deposite</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaRegBell />
                            <span>Notification</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/admin/widthdraws' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaRegMoneyBillAlt />
                            <span>Withdraw</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/admin/clubs' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaCubes />
                            <span>Clubs</span>
                        </Link>
                    </li>
                    <li className=''>                        
                        <CollapsItem title="Users" icon={<FaUsers />} items={[
                            {
                                'id':1,
                                'title':'All Users',
                                'link':'/admin/users',
                            },
                            {
                                'id':2,
                                'title':'Admins',
                                'link':'/Create',
                            },
                            {
                                'id':3,
                                'title':'Roles',
                                'link':'/Create',
                            }
                        ]} />
                    </li>

                    <li className=''>
                        <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaHeadset />
                            <span>Complains</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaCommentsDollar />
                            <span>Balance Transfer</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaCopy />
                            <span>Backup</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/admin/settings' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaCog />
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar