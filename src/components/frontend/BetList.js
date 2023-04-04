import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react'
import { FaCalendar, FaCalendarAlt, FaClock, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import axios from '../../util/axios';
import InputInnerLabel from './form/InputInnerLabel';
import Sidebar from './Sidebar';
import Modalbetnow from '../modal/Modalbetnow';

const BetList = () => {
    const [matches, setMatches] = useState([]);

    const [edata, setEdata] = useState([]);

    const [matchData, setMatchData] = useState([]);
    const [questionData, setQuestionData] = useState([]);
    const [optionData, setOptionData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/matches`)
            .then((res) => {
                setMatches(res.data.data);
            })
            .catch(err => console.log(err))
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal(matchData, questionData, optionData) {
        setMatchData(matchData);
        setQuestionData(questionData);
        setOptionData(optionData);
        setIsOpen(true);

    }


    return (
        <>
            <Modalbetnow matchData={matchData} questionData={questionData} optionData={optionData} isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className='col-span-12 lg:col-span-7 bg-white'>
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
                                        <img src={match.team_two_flag} className='h-8 w-8 object-contain' alt="" />
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
                                                        return <div onClick={() => openModal(match,question,option)} className="col-span-2 border cursor-pointer border-gray-300 flex justify-between m-1" key={index}>
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
        </>
    )
}

export default BetList