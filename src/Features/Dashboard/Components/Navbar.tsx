import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"
import {useLocation, NavLink} from 'react-router-dom'
import { FiHome, FiActivity, FiClock, FiSettings, FiUser } from 'react-icons/fi'

export default function Navbar() {
  const btnRef = React.useRef();
  const location = useLocation();
  const [isOpen, setIsopen] = React.useState(false);
  const [noti, setNoti] = React.useState(false);

  const onClose = () => {
    setIsopen(false);
  }

  const closeNoti = () => {
    setNoti(false)
  }

  return (
    <div className="w-full h-24 border-b-2 border-gray-200 bg-white flex items-center xl:px-14 lg:px-14 md:px-6 sm:px-6 justify-between">
      <div className="xl:hidden lg:hidden sm:block md:block" >
        <FiMenu size={25} onClick={() => setIsopen(true)} />
      </div>
      <span className="xl:block lg:block md:hidden sm:hidden font-bold text-2xl" > Dashboard </span>
      <div className="xl:hidden lg:hidden md:flex sm:flex flex-1 justify-center">
        <img src="/assets/logo-black.png" className="w-2/5" alt="logo" />
      </div>
      <div className="rounded-full bg-gray-100 p-3">
      <FaBell color="gold" size={20} onClick={()=> setNoti(true)} />
      </div>

      {/* drawer */}
      {/* side bar drawer */}

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <div className="w-80 h-full bg-gray-100 z-10 pt-10 pl-0 xl:flex lg:flex sm:flex md:flex flex-col">
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

        </DrawerContent>
      </Drawer>

      {/* notifications drawer */}

      <Drawer
        isOpen={noti}
        placement="right"
        onClose={closeNoti}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <div className="w-80 h-full bg-gray-100 z-10 pt-10 pl-0 xl:flex lg:flex sm:flex md:flex flex-col">


        <div className="flex-1 mt-24">

          <h1 className="text-xl text-gray-700 font-bold ml-10">NOTIFICATION</h1>

            <p className="mt-10 text-center">You have no new notification</p>

        </div>
      </div>

        </DrawerContent>
      </Drawer>


    </div>
  )
}
