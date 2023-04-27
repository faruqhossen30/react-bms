import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import fetcher from '../../util/fetcher';


const Marquee = () => {
    const { data } = useSWR(`${process.env.REACT_APP_BASE_URL}/headernotice`, fetcher, { suspense: true });

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