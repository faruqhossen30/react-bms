import React, { createContext, useEffect, useState } from 'react'
import axios from '../util/axios';
import setAuthToken from '../util/setAuthToken';
const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        // const jwt = localStorage.getItem("token");
        // setAuthToken();

        // axios.get('http://127.0.0.1:8000//api/user')
        //     .then((data) => {
        //         console.log('form authcontext file', data.data);
        //         setUser(data.data);

        //     })
        //     .catch(error => console.log(error))

        const getToken = () => {
            const token = localStorage.getItem("token");
            setToken(token);
            axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : undefined;
            
            // if (token) {
            //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // } else {
            //     delete axios.defaults.headers.common["x-auth-token"];
            // }


            axios.get('http://127.0.0.1:8000/api/user')
            .then((res)=>{
                setUser(res.data);
            })

            // console.log('form authcontext file', res.data);
            //     setUser(res.data);
        }
        getToken();


    }, []);


    return (
        <AuthContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    )
};

export {AuthContext, AuthProvider};