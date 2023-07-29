import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Homepage from './pages/Homepage';
import useSWR from 'swr';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import UserAuth from './routes/UserAuth';
import Profile from './pages/user/Profile';
import DepositForm from './pages/user/DepositForm';
import WidthdrawForm from './pages/user/WidthdrawForm';

import Statement from './pages/user/Statement';
import DepositList from './pages/user/DepositList';
import WidthdrawList from './pages/user/WidthdrawList';
import TransactionHistory from './pages/user/TransactionHistory';
import { AuthProvider, RequireAuth, useAuthHeader, useSignIn, useAuthUser, useSignOut } from 'react-auth-kit';
import { useEffect } from 'react';
import axios from './util/axios';
import Test from './components/Test';
const cookies = new Cookies();


function App() {
  const auth = useAuthUser();
  const signIn = useSignIn();
  const signOut = useSignOut();
  const authHeader = useAuthHeader();
  const token = cookies.get('_auth');
  if (token) {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : undefined;
  }

  useEffect(() => {

    if (token) {
      axios.get(`http://127.0.0.1:8000/api/user`)
        .then((res) => {
          signIn(
            {
              token: cookies.get('_auth'),
              expiresIn: 12345,
              tokenType: "Bearer",
              authState: res.data,
            }
          );
          console.log('user data loaded');
        }).catch((error) => {
          if (error.response && error.response.status === 401) {
            signOut()
          }
        });
    }


  }, []);



  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/:gameid" element={<HomepageGame />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={
          <RequireAuth loginPath={'/login'}> <Profile /> </RequireAuth>
        } />

        <Route path="/deposit" element={
          <RequireAuth loginPath={'/login'}>
            <DepositForm />
          </RequireAuth>
        } />

        <Route path="/widthdraw" element={
          <RequireAuth loginPath={'/login'}>
            <WidthdrawForm />
          </RequireAuth>
        } />

        <Route path="/statement" element={
          <RequireAuth loginPath={'/login'}>
            <Statement />
          </RequireAuth>
        } />

        <Route path="/widthdraw-list" element={
          <RequireAuth loginPath={'/login'}>
            <WidthdrawList />
          </RequireAuth>
        } />

        <Route path="/transaction-history" element={
          <RequireAuth loginPath={'/login'}>
            <TransactionHistory />
          </RequireAuth>
        } />

        {/* <Route path="/deposit" element={<DepositForm />} /> */}
        {/* <Route path="/widthdraw" element={<WidthdrawForm />} /> */}
        {/* Statement */}
        {/* <Route path="/statement" element={<Statement />} /> */}
        <Route path="/deposit-list" element={<DepositList />} />
        {/* <Route path="/widthdraw-list" element={<WidthdrawList />} /> */}
        {/* <Route path="/transaction-history" element={<TransactionHistory />} /> */}
        <Route path="/test" element={<Test />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
