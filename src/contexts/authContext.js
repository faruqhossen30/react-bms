import React, { createContext, useEffect, useState } from 'react'
import axios from '../util/axios';
import setAuthToken from '../util/setAuthToken';
const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);
    console.log('AuthContextProvider');

    useEffect(() => {

        const getToken = () => {
            const token = localStorage.getItem("token");
            setToken(token);
            axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : undefined;
            
            // if (token) {
            //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // } else {
            //     delete axios.defaults.headers.common["x-auth-token"];
            // }


            axios.get(`${process.env.REACT_APP_BASE_URL}/user`)
            .then((res)=>{
                setUser(res.data);
            })
        }
        getToken();


    }, []);


    return (
        <AuthContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    )
};

export {AuthContext, AuthContextProvider};