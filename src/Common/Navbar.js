import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/eazicred-logo.svg';
import {
  ABOUT_URL,
  FAQS_URL,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  SUPPORT_URL,
} from '../routes/paths';

const Navbar = () => {
    const handleMenu = (e) => {
        const menuToggle = document.querySelector('.nav__menu')
        const navList = document.querySelector(".nav__list")
        const navLinks = document.querySelectorAll('.nav__link');
        const navBtns = document.querySelectorAll('.nav__btns--mobile a');

        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');

        navLinks.forEach(navlink => {
            navlink.addEventListener('click', function () {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            })
        });

        navBtns.forEach(navbtn => {
            navbtn.addEventListener('click', function () {
                navList.classList.remove('active');
                menuToggle.classList.toggle('active');
            })
        });

    }

    return (
        <header>
            <nav className="nav">
                <div className="nav__inner">
                    <button className="nav__menu" onClick={handleMenu}>
                        <i className="fas fa-bars open"/>
                        <i className="fas fa-times close"/>
                    </button>
                    <Link to={HOME_URL} className="nav__logo">
                        <img src={logo} alt="Eazicred logo"/>
                    </Link>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to={HOME_URL} className="nav__link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to={ABOUT_URL} className="nav__link">About Us</Link>
                        </li>
                        <li className="nav__item">
                            <Link to={SUPPORT_URL} className="nav__link">Support</Link>
                        </li>
                        <li className="nav__item">
                            <Link to={FAQS_URL} className="nav__link">FAQs</Link>
                        </li>
                        <li className="nav__btns--mobile">
                            <Link to={REGISTER_URL} className="btn btn-blue">Create Account</Link>
                            <Link to={LOGIN_URL} className="btn btn-white">Log In</Link>
                        </li>
                    </ul>
                    <div className="nav__btns">
                        <Link to={REGISTER_URL} className="btn btn-blue">Create Account</Link>
                        <Link to={LOGIN_URL} className="btn btn-white">Log In</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar