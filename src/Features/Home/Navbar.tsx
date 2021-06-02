import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/eazicred-logo.svg';


const Navbar = () => {
    const handleMenu = (e: any) => {
        const menuToggle = document.querySelector('.nav__menu') as any;
        const navList = document.querySelector(".nav__list") as any;
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
                    <Link to='/' className="nav__logo">
                        <img src={logo} alt="Eazicred logo"/>
                    </Link>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to='/' className="nav__link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/about' className="nav__link">About Us</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/support' className="nav__link">Support</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/faqs' className="nav__link">FAQs</Link>
                        </li>
                        <li className="nav__btns--mobile">
                            <Link to='/register' className="btn btn-blue">Create Account</Link>
                            <Link to='/login' className="btn btn-white">Log In</Link>
                        </li>
                    </ul>
                    <div className="nav__btns">
                        <Link to='/register' className="btn btn-blue">Create Account</Link>
                        <Link to='/login' className="btn btn-white">Log In</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
