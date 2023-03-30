import React, { Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useSWR from 'swr';

import axios from '../../util/axios';
import fetcher from '../../util/fetcher';

const Sidebar = () => {
    const [games, setGames] = useState([]);
    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_BASE_URL}/games`)
    //         .then((res) => {
    //             setGames(res.data.data);
    //             console.log(res.data.data);
    //         })
    //         .catch(err => console.log(err))
    // }, []);
    const {data} = useSWR(`${process.env.REACT_APP_BASE_URL}/games`, fetcher, {suspense:true});

    return (
        <div className='hidden lg:block lg:col-span-2 bg-white border border-purple-300'>
            <div className="bg-purple-800">
                <h4 className="text-white font-bold p-1 text-center">Sports</h4>
            </div>
            <div className="flex flex-col space-y-1 divide-y divide-slate-200">
                {
                    data.map((game, index) => {
                        return <Link to='/admin/match-panel' className="flex space-x-1 pl-2 last:border-b-0 p-1 hover:bg-green-100 " key={index}>
                            <img src={`${process.env.REACT_APP_URL}/${game.image}`} className="h-5" alt="" />
                            <span>{game.name}</span>
                        </Link>
                    })
                }

            </div>
        </div>
    )
}

export default Sidebar