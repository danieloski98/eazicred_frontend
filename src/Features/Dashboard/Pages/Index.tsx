import React from 'react'
import { Route, Switch } from 'react-router'
import History from '../../../components/users/History'
import Navbar from '../Components/Navbar'
import { FiHome, FiActivity, FiClock, FiSettings, FiUser } from 'react-icons/fi'
import {useLocation, NavLink} from 'react-router-dom'
import Profile from '../../../components/users/Profile'
import Setting from '../../../components/users/Setting'
import LoanApplication from '../../../components/users/LoanApplication'
import Home from './Home'

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="w-full h-screen flex">

      <div className="w-80 h-full bg-gray-100 z-10 pt-10 pl-10 xl:flex lg:flex sm:hidden md:hidden flex-col">
        <img src="/assets/logo.png" alt="" className="w-4/5" />

        <div className="flex-1 mt-24">

          <h1 className="text-xl text-gray-700 font-bold">MAIN</h1>

          <NavLink to="/dashboard" className={location.pathname === '/dashboard' ? "flex ml-5 mt-10 text-customGreen":"flex ml-5 mt-10 text-gray-500"}>
            <FiHome className="" size={20} />
            <p className="ml-3 mt-1 ">Home</p>
          </NavLink>

          <NavLink to="/dashboard/application" className={location.pathname === '/dashboard/application' ? "flex ml-5 mt-10 text-customGreen":"flex ml-5 mt-10 text-gray-500"}>
            <FiActivity size={20} />
            <p className="ml-3 mt-1">Loan Applications</p>
          </NavLink>

          <NavLink to="/dashboard/history" className={location.pathname === '/dashboard/history' ? "flex ml-5 mt-10 text-customGreen":"flex ml-5 mt-10 text-gray-500"}>
            <FiClock size={20} />
            <p className="ml-3 mt-1">History</p>
          </NavLink>

          <h1 className="text-xl mt-10 text-gray-700 font-bold">ACCOUNT MANAGEMENT</h1>

          <NavLink to="/dashboard/settings" className={location.pathname === '/dashboard/settings' ? "flex ml-5 mt-10 text-customGreen":"flex ml-5 mt-10 text-gray-500"}>
            <FiSettings size={20} />
            <p className="ml-3 mt-1">Settings</p>
          </NavLink>

          <NavLink to="/dashboard/profile" className={location.pathname === '/dashboard/profile' ? "flex ml-5 mt-10 text-customGreen":"flex ml-5 mt-10 text-gray-500"}>
            <FiUser size={20} />
            <p className="ml-3 mt-1">Profile</p>
          </NavLink>

        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 px-16 pt-16">
        <Route path="/dashboard" component={Home} exact  />
            <Route path="/dashboard/application" component={LoanApplication} exact />
            <Route path="/dashboard/history" component={History} exact  />
            <Route path="/dashboard/settings" component={Setting} exact />
            <Route path="/dashboard/profile" component={Profile} exact />
        </div>
      </div>
    </div>
  )
}
