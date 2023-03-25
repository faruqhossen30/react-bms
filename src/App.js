import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FaRegBell, FaBars, FaPlus } from "react-icons/fa";
import Homepage from './pages/Homepage';
import './App.css';
import Dashboard from './pages/admin/Dashboard';
import Sidebarcollapse from './components/dashboard/sidebar/Sidebarcollapse';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardRoute from './routes/DashboardRoute';
import DashboardLayout from './components/layouts/DashboardLayout';
import Balance from './pages/admin/Balance';
import PageNotFound from './components/PageNotFound';
import MatchPanel from './pages/admin/match/MatchPanel';
import Settings from './pages/admin/Settings';
import Flag from './pages/admin/Flag';
import AuthContext, { AuthProvider } from './contexts/authContext';
import setAuthToken from './util/setAuthToken';
import jwtDecode from 'jwt-decode';
import Game from './pages/admin/Game';
import AdminAuth from './routes/AdminAuth';
import UserAuth from './routes/UserAuth';
import Profile from './pages/user/Profile';
import DepositForm from './pages/user/DepositForm';
import Deposit from './pages/admin/Deposit';
import DepositConfirm from './components/dashboard/deposit/DepositConfirm';
import Widthdraw from './pages/admin/Widthdraw';
import WidthdrawForm from './pages/user/WidthdrawForm';
import MatchCreate from './pages/admin/match/MatchCreate';
import BetQuestionCreate from './pages/admin/match/BetQuestionCreate';
import UserList from './pages/admin/user/UserList';
import UserDetails from './pages/admin/user/UserDetails';
import UserEdit from './pages/admin/user/UserEdit';
import ClubList from './pages/admin/club/ClubList';
import ClubCreate from './pages/admin/club/ClubCreate';
import ClubEdit from './pages/admin/club/ClubEdit';
import HeaderNotice from './pages/admin/settings/HeaderNotice';
import FooterNotice from './pages/admin/settings/FooterNotice';
import PaymentGateway from './pages/admin/settings/PaymentGateway';
import MatchEdit from './pages/admin/match/MatchEdit';
import MatchQuestion from './pages/admin/match/question/MatchQuestion';
import MatchQuestionEdit from './pages/admin/match/question/MatchQuestionEdit';
import Statement from './pages/user/Statement';
import DepositList from './pages/user/DepositList';
import WidthdrawList from './pages/user/WidthdrawList';
import TransactionHistory from './pages/user/TransactionHistory';
import WidthdrawLimit from './pages/admin/settings/WidthdrawLimit';
import BetLimit from './pages/admin/settings/BetLimit';

function App() {
  return (
    <AuthProvider >
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<UserAuth />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/deposit" element={<DepositForm />} />
            <Route path="/widthdraw" element={<WidthdrawForm />} />
            {/* Statement */}
            <Route path="/statement" element={<Statement />} />
            <Route path="/deposit-list" element={<DepositList />} />
            <Route path="/widthdraw-list" element={<WidthdrawList />} />
            <Route path="/transaction-history" element={<TransactionHistory />} />
          </Route>
        </Routes>

        {/* Dashboard */}
        <Routes>
          <Route element={<AdminAuth />}>
            <Route path='admin/dashboard' element={<Dashboard />} />
            <Route path='admin/balance' element={<Balance />} />
            {/* Bet */}
            <Route path='admin/match-panel' element={<MatchPanel />} />
            <Route path='admin/match/create' element={<MatchCreate />} />
            <Route path='admin/match/edit/:id' element={<MatchEdit />} />
            {/* <Route path='admin/bet/:id/qusetion/create' element={<BetQuestionCreate />} /> */}
            <Route path='admin/match/:id/qusetion/create' element={<MatchQuestion />} />
            <Route path='admin/match-question/:id/edit' element={<MatchQuestionEdit />} />
            {/* User */}
            <Route path='admin/users' element={<UserList />} />
            <Route path='admin/user/:id' element={<UserDetails />} />
            <Route path='admin/user/edit/:id' element={<UserEdit />} />
            {/* Club */}
            <Route path='admin/clubs' element={<ClubList />} />
            <Route path='admin/club/create' element={<ClubCreate />} />
            <Route path='admin/club/edit/:id' element={<ClubEdit />} />

            <Route path='admin/deposits' element={<Deposit />} />
            <Route path='admin/deposit/:id' element={<DepositConfirm />} />
            <Route path='admin/widthdraws' element={<Widthdraw />} />
            <Route path='admin/flats' element={<Flag />} />
            <Route path='admin/games' element={<Game />} />
            {/* Settings */}
            <Route path='admin/settings' element={<Settings />} />
            <Route path='admin/setting/header-notice' element={<HeaderNotice />} />
            <Route path='admin/setting/footer-notice' element={<FooterNotice />} />
            <Route path='admin/setting/payment-gateway' element={<PaymentGateway />} />
            <Route path='admin/setting/widthdraw-limit' element={<WidthdrawLimit />} />
            <Route path='admin/setting/bet-limit' element={<BetLimit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
