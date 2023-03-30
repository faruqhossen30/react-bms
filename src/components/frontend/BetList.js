import { Disclosure } from '@headlessui/react';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { FaCalendar, FaCalendarAlt, FaClock, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import axios from '../../util/axios';
import InputInnerLabel from './form/InputInnerLabel';
import Sidebar from './Sidebar';

const BetList = () => {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/matches`)
            .then((res) => {
                setMatches(res.data.data);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className='col-span-12 lg:col-span-7 bg-white'>
            {/* <div class="flex items-center bg-purple-800 text-white text-sm overflow-x-auto">
                <a href="#" class="flex items-center space-x-2 px-2 py-1 border-b-4 border-yellow-400">
                    <img src="./img/footbal.png" class="h-4" alt="" />
                    <span>All</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1 ">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Cricket</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/footbal.png" class="h-4" alt="" />
                    <span>Football</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Basketball</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Hocky</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Tenis</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Voliball</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Table Tanis</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Badminton</span>
                </a>
            </div> */}

            {
                matches.map((match, index) => {
                    return <Disclosure as='div' className='shadow-md mb-1 border border-purple-300 text-sm' defaultOpen key={index}>
                        <Disclosure.Button as='div' className="cursor-pointer p-2">
                            <div className='flex items-center justify-between space-x-2 w-full'>
                                <div className='flex items-center space-x-1'>
                                    <img src={match.team_one_flag} className='h-8 w-8 object-contain' alt="" />
                                    <span>{match.team_one}</span>
                                </div>
                                <div className='flex items-center'>
                                    <img src="./img/cricket-logo.png" className='h-10 w-10 rounded-full ring ring-purple-800 ring-1' alt="" />
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <img src={match.team_one_flag} className='h-8 w-8 object-contain' alt="" />
                                    <span>{match.team_two}</span>
                                </div>
                            </div>
                            <div className='text-center py-1 flex justify-center font-normal text-purple-800'>
                                <span className='px-1'>{match.title}</span>
                                <span className='flex items-center text-sm space-x-1'> <FaRegCalendarAlt /> <span> {moment(match.date_time).format('LL')}</span> <FaRegClock /> {moment(match.date_time).format('LT')}</span>
                            </div>
                            {
                                match.note &&
                                (<div className='text-center'>
                                    <span className='px-3 bg-purple-800 text-white rounded-full text-xs'>{match.note}</span>
                                </div>)
                            }

                        </Disclosure.Button>

                        {
                            match.questions.map((question, index) => {
                                return <Disclosure.Panel className="" key={index}>
                                    <div>
                                        <div className="text-white bg-purple-800 border px-2 py-1">
                                            <h4 className="text-white font-bold">{question.title}</h4>
                                        </div>
                                        <div className="grid grid-cols-4">
                                            {
                                                question.options.map((option, index) => {
                                                    return <div className="col-span-2 border cursor-pointer border-gray-300 flex justify-between m-1" key={index}>
                                                        <span className="font-bold p-1">{option.title}</span>
                                                        <span className="bg-gray-300 font-bold p-1 px-4">{option.bet_rate}</span>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            })
                        }

                    </Disclosure>
                })
            }


        </div>
    )
}

export default BetList