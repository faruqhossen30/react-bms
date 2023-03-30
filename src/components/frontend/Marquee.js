import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import axios from '../../util/axios';
import fetcher from '../../util/fetcher';


const Marquee = () => {
    // const [headerNotice, setHeaderNotice] = useState('');
    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_BASE_URL}/headernotice`)
    //         .then((res) => {
    //             setHeaderNotice(res.data.data)
    //         })
    //         .catch(err => console.log(err))
    // }, []);

    const { data } = useSWR(`${process.env.REACT_APP_BASE_URL}/headernotice`, fetcher, { suspense: true });
    console.log('data', data);

    return (
        <>
            <section className="">
                <marquee className=" text-purple-800 text-sm pt-2">
                    {data}
                </marquee>
            </section>


        </>
    )
}

export default Marquee