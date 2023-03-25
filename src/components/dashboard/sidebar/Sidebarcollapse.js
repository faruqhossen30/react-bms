import React from 'react'
import { FaRegBell, FaBars, FaPlus, FaHome, FaPlusCircle, FaGreaterThan, FaRegCircle, FaRegArrowAltCircleDown, FaBuffer, FaMoneyCheck, FaGamepad, FaMoneyCheckAlt, FaCommentDollar, FaRegMoneyBillAlt, FaCubes, FaUsers, FaHeadset, FaCommentsDollar, FaInfoCircle, FaCopy, FaCog, FaSignOutAlt, FaRegWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CollapsItem from './CollapsItem';

const Sidebarcollapse = ({ sidebarToggle, toggleSidebar }) => {
    return (
        <>
            <aside className={`${sidebarToggle && "hidden"} bg-gray-800 w-72 fixed top-0 left-0 z-10 shadow-md`}>
                <div className='bg-white py-2 text-center flex justify-between px-2' >
                    <Link className='font-semibold' to='/'>Net T20</Link>
                    <button className='text-red-900' onClick={toggleSidebar}><FaRegWindowClose /></button>
                </div>
                <div className='py-4 text-gray-300 font-semibold h-screen overflow-scroll '>
                    <ul className=''>
                        <li className=''>
                            <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                                <FaBuffer />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className=''>
                            <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                                <FaMoneyCheck />
                                <span>Balance</span>
                            </Link>
                        </li>
                        <li className=''>
                            <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                                <FaGamepad />
                                <span>Betting</span>
                            </Link>
                        </li>
                        <li className=''>
                            <CollapsItem title="Bet Information" icon={<FaInfoCircle />} items={[
                                {
                                    'id': 1,
                                    'title': 'Match',
                                    'link': '/Create',
                                },
                                {
                                    'id': 2,
                                    'title': 'Question',
                                    'link': '/Create',
                                },
                                {
                                    'id': 3,
                                    'title': 'Option',
                                    'link': '/Create',
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
                            <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
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
                            <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                                <FaRegMoneyBillAlt />
                                <span>Withdraw</span>
                            </Link>
                        </li>
                        <li className=''>
                            <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                                <FaCubes />
                                <span>Clubs</span>
                            </Link>
                        </li>
                        <li className=''>
                            <CollapsItem title="Users" icon={<FaUsers />} items={[
                                {
                                    'id': 1,
                                    'title': 'All Users',
                                    'link': '/Create',
                                },
                                {
                                    'id': 2,
                                    'title': 'Admins',
                                    'link': '/Create',
                                },
                                {
                                    'id': 3,
                                    'title': 'Roles',
                                    'link': '/Create',
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
                        <hr />
                        <li className=''>
                            <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
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
        </>
    )
}

export default Sidebarcollapse