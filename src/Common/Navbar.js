import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/eazicred-logo.svg';
import {
  ABOUT_URL,
  FAQS_URL,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  SUPPORT_URL,
} from '../routes/paths';
import { FiMenu } from 'react-icons/fi'
import { Drawer, DrawerOverlay, DrawerBody, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

    return (
        <header className="w-full h-32 bg-white xl:px-24 lg:px-24 md:px-16 sm:px-16">

          <Drawer isOpen={open} onClose={() => setOpen(false)} placement="top" size="3xl">
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton color="red"  />
              <DrawerBody>
                <div className="w-full h-400px flex ">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="nav__item">
                    <NavLink activeClassName="text-customGreen" exact to={HOME_URL} className="nav__link">Home</NavLink>
                  </div>
                  <div className="nav__item">
                    <NavLink activeClassName="text-customGreen" exact to={ABOUT_URL} className="nav__link">About Us</NavLink>
                  </div>
                  <div className="nav__item">
                    <NavLink activeClassName="text-customGreen" exact to={SUPPORT_URL} className="nav__link">Support</NavLink>
                  </div>
                  <div className="nav__item">
                    <NavLink activeClassName="text-customGreen" exact to={FAQS_URL} className="nav__link">FAQs</NavLink>
                  </div>
                  <div className="xl:flex flex-col">
                    <Link  to={REGISTER_URL} className="btn btn-blue mb-6">Create Account</Link>
                    <Link to={LOGIN_URL} className="btn btn-white">Log In</Link>
                </div>
                </div>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

            <nav className=" w-full h-full flex justify-between items-center">
                <div className="flex items-center">
                  <div className="xl:hidden lg:hidden md:block sm:block">
                    <FiMenu size={30} className="text-customGreen" onClick={() => setOpen(true)} />
                  </div>
                  <NavLink activeClassName="text-customGreen" to="/" className="nav__logo md:ml-32 sm:ml-32 xl:ml-0 lg:ml-0">
                    <img src={logo} alt="Eazicred logo"/>
                  </NavLink>
                </div>

                <div className="flex-1 justify-evenly xl:flex lg:flex md:hidden sm:hidden">
                  <div className="">
                    <NavLink activeClassName="text-customGreen" exact to={HOME_URL} className="nav__link">Home</NavLink>
                  </div>
                  <div className="nav__item">
                    <NavLink activeClassName="text-customGreen" exact to={ABOUT_URL} className="nav__link">About Us</NavLink>
                  </div>
                  <div className="nav__item">
                    <NavLink activeClassName="text-customGreen" exact to={SUPPORT_URL} className="nav__link">Support</NavLink>
                  </div>
                  <div className="nav__item">
                    <NavLink activeClassName="text-customGreen" exact to={FAQS_URL} className="nav__link">FAQs</NavLink>
                  </div>
                </div>

                <div className="xl:flex lg:flex md:hidden sm:hidden">
                    <Link  to={REGISTER_URL} className="btn btn-blue mr-6">Create Account</Link>
                    <Link to={LOGIN_URL} className="btn btn-white">Log In</Link>
                </div>

            </nav>
        </header>
    )
}

export default Navbar
