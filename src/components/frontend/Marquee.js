import React, { useEffect, useState } from 'react'
import axios from '../../util/axios';

const Marquee = () => {
    const [headerNotice, setHeaderNotice] = useState({});
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/option/header-notice`)
            .then((res) => {
                setHeaderNotice(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            {
                headerNotice &&
                (
                    <section className="">
                        <marquee className=" text-purple-800 text-sm pt-2">
                            {headerNotice.value}
                        </marquee>
                    </section>
                )
            }

        </>
    )
}

export default Marquee