import React, { createContext, useEffect, useState } from 'react'
import useSWR from 'swr';
import axios from '../util/axios';
import setAuthToken from '../util/setAuthToken';
const AuthContext = createContext();

const fetcher = (...args) => {
    const token = localStorage.getItem("token");
    // setToken(token);
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : undefined;
    // const res = await axios.get(...args);
    axios.get(...args)
    .then((res)=>{
        return res.data
        console.log(res.data);
    })
    
};


function useMyData() {
    const { data, error } = useSWR(`${process.env.REACT_APP_BASE_URL}/user`, fetcher);
    return data;
}



const AuthProvider = ({ children }) => {
    const myData = useMyData();
    console.log('myData', myData);

    return (
        <AuthContext.Provider value={{ user: {} }}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };