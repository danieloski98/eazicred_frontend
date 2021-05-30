import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {
  return (
    <div className="w-full h-24 shadow-md bg-white flex items-center xl:px-14 lg:px-14 md:px-6 sm:px-6 justify-between">
      <div className="xl:hidden lg:hidden sm:block md:block" >
        <FiMenu size={25} />
      </div>
      <span className="xl:block lg:block md:hidden sm:hidden" > Dashboard </span>
      <div className="xl:hidden lg:hidden md:flex sm:flex flex-1 justify-center">
        <img src="/assets/logo-black.png" className="w-2/5" alt="logo" />
      </div>
      <div className="rounded-full bg-gray-100 p-3">
      <FaBell color="gold" size={20} />
      </div>
    </div>
  )
}
