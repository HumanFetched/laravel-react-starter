import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";
import UserForm from "./views/UserForm";
import RiskManagement from "./views/RiskManagement.jsx";
import ProgramRequirement from "./views/ProgramRequirement.jsx";
import CyberSecurity from "./views/CyberSecurity.jsx";
import Policies from "./views/Policies.jsx";
import Dealer from "./views/Dealer.jsx";
import TwoFactor from "./views/TwoFactor.jsx"
import SubmitFactor from "./views/SubmitFactor.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/users"/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },      
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/riskmanagement',
        element: <RiskManagement/>
      },
      {
        path: '/programrequirement',
        element: <ProgramRequirement/>
      },
      {
        path: '/cybersecurity',
        element: <CyberSecurity/>
      },
      {
        path: '/policies',
        element: <Policies/>
      },
      {
        path: '/dealer',
        element: <Dealer/>
      },
      {
        path: '/users/new',
        element: <UserForm key="userCreate" />
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate" />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/twofactor',
        element: <TwoFactor/>
      },
      {
        path: '/submitotp',
        element: <SubmitFactor/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;
