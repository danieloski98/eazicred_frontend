import React from 'react'
import { Route, Switch } from 'react-router'
import History from './History'
import Navbar from '../Components/Navbar'
import { FiHome, FiActivity, FiClock, FiSettings, FiUser } from 'react-icons/fi'
import {useLocation, NavLink} from 'react-router-dom'
import Profile from './Profile'
import Setting from './Setting'
import LoanApplication from './LoanApplication'
import Home from './Home'
import SMEloancreation from './SMEloancreation'
import Paydayloancreation from './Paydayloancreate'

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="w-full h-screen flex overflow-hidden">

      <div className="w-80 h-full bg-gray-100 z-10 pt-10 pl-0 xl:flex lg:flex sm:hidden md:hidden flex-col">
        <img src="/assets/logo-black.png" alt="" className="w-4/5 ml-10" />

        <div className="flex-1 mt-24">

          <h1 className="text-xl text-gray-700 font-bold ml-10">MAIN</h1>

          <NavLink to="/dashboard" className={location.pathname === '/dashboard' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiHome className="" size={20} />
            <p className="ml-3 mt-1 ">Home</p>
          </NavLink>

          <NavLink to="/dashboard/application" className={location.pathname === '/dashboard/application' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiActivity size={20} />
            <p className="ml-3 mt-1">Loan Application</p>
          </NavLink>

          <NavLink to="/dashboard/history" className={location.pathname === '/dashboard/history' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiClock size={20} />
            <p className="ml-3 mt-1">History</p>
          </NavLink>

          <h1 className="text-xl mt-10 text-gray-700 font-bold ml-10">ACCOUNT MANAGEMENT</h1>

          <NavLink to="/dashboard/settings" className={location.pathname === '/dashboard/settings' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiSettings size={20} />
            <p className="ml-3 mt-1">Settings</p>
          </NavLink>

          <NavLink to="/dashboard/profile" className={location.pathname === '/dashboard/profile' ? "flex pl-16 mt-10 text-customGreen border-l-4 border-customGreen h-16 items-center":"flex pl-16 mt-10 text-gray-500 border-l-4 border-white h-16 items-center"}>
            <FiUser size={20} />
            <p className="ml-3 mt-1">Profile</p>
          </NavLink>

        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 w-full h-full xl:px-16 lg:px-16 md:px-10 sm:px-10 pt-16 overflow-y-scroll overflow-x-hidden">
            <Route path="/dashboard" component={Home} exact  />
            <Route path="/dashboard/application" component={LoanApplication} exact />
            <Route path="/dashboard/createsmeloan" component={SMEloancreation} exact  />
            <Route path="/dashboard/createpaydayloan" component={Paydayloancreation} exact  />
            <Route path="/dashboard/history" component={History} exact  />
            <Route path="/dashboard/settings" component={Setting} exact />
            <Route path="/dashboard/profile" component={Profile} exact />
        </div>
      </div>
    </div>
  )
}
