import React from 'react';

import { useDispatch } from 'react-redux';
import {
  Link,
  NavLink,
  useHistory,
} from 'react-router-dom';

import { logoutRequest } from '../../redux/actions/actions';
import {
  DASHBOARD_HISTORY_URL,
  DASHBOARD_LOAN_APPLICATION_URL,
  DASHBOARD_PROFILE_URL,
  DASHBOARD_SETTING_URL,
  DASHBOARD_URL,
  HOME_URL,
} from '../../routes/paths';

const DashboardContainer = ({children, page='Dashboard'}) => {

    const handleMenu = (e) => {
        const menuToggleDb = document.querySelector('.main__menu');
        const sidebar = document.querySelector('.sidebar');
        const sidebarLinks = document.querySelectorAll('.sidebar li a');

        menuToggleDb.classList.toggle('active');
        sidebar.classList.toggle('active');

        sidebarLinks.forEach(link => {
            link.addEventListener('click', function () {
                sidebar.classList.remove('active');
            });
        });
    }
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogOut = () => {
        if (window.confirm("Are you sure you want want to logout of this session?")) {
            dispatch(logoutRequest())
            history.push(HOME_URL)
        }
    }
    return (
        <div className="dashboard">
            <div className="container-lg">
                <aside className="sidebar">
                    <Link to={DASHBOARD_URL} className="sidebar__logo">
                        <img src={"assets/logo-black.png"} alt="eazicred logo"/>
                    </Link>
                    <h4 className="sidebar__h4">Main</h4>
                    <ul className="sidebar__list">
                        <li>
                            <NavLink exact activeClassName="active" to={DASHBOARD_URL}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23">
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{__html: ".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}"}}/>
                                    </defs>
                                    <g transform="translate(2.396 1.917)">
                                        <path className="a"
                                              d="M6.38,17.989V15.05a1.367,1.367,0,0,1,1.364-1.36H10.51a1.367,1.367,0,0,1,1.374,1.36h0V18a1.174,1.174,0,0,0,1.152,1.168H14.88a3.312,3.312,0,0,0,3.328-3.295h0V7.511a2.338,2.338,0,0,0-.922-1.825L10.98.657a3.048,3.048,0,0,0-3.78,0L.922,5.695A2.32,2.32,0,0,0,0,7.52v8.351a3.312,3.312,0,0,0,3.328,3.295H5.172a1.183,1.183,0,0,0,1.189-1.177h0"
                                              transform="translate(0 0)"/>
                                    </g>
                                </svg>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={DASHBOARD_LOAN_APPLICATION_URL}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{__html: ".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}"}}/>
                                    </defs>
                                    <g transform="translate(2 2)">
                                        <path className="a"
                                              d="M2.449,0H5.716A2.459,2.459,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z"
                                              transform="translate(11.837 0)"/>
                                        <path className="a"
                                              d="M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z"
                                              transform="translate(0 0)"/>
                                        <path className="a"
                                              d="M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.471V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z"
                                              transform="translate(0 11.766)"/>
                                        <path className="a"
                                              d="M2.449,0H5.716A2.46,2.46,0,0,1,8.163,2.471V5.764a2.459,2.459,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z"
                                              transform="translate(11.837 11.766)"/>
                                    </g>
                                </svg>
                                Loan Application
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={DASHBOARD_HISTORY_URL}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{__html: ".a{fill:none;-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}"}}/>
                                    </defs>
                                    <g transform="translate(2 2)">
                                        <path className="a" d="M18.5,9.25A9.25,9.25,0,1,1,9.25,0,9.25,9.25,0,0,1,18.5,9.25Z"
                                              transform="translate(0.75 0.751)"/>
                                        <path className="a" d="M3.77,7.1,0,4.847V0" transform="translate(9.661 5.847)"/>
                                    </g>
                                </svg>
                                History
                            </NavLink>
                        </li>
                    </ul>
                    <h4 className="sidebar__h4">Account Management</h4>
                    <ul className="sidebar__list">
                        <li>
                            <NavLink activeClassName="active" to={DASHBOARD_SETTING_URL}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{__html: ".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}"}}/>
                                    </defs>
                                    <g transform="translate(2.5 1.5)">
                                        <path className="a"
                                              d="M17.528,5.346l-.622-1.08a1.913,1.913,0,0,0-2.609-.7h0a1.9,1.9,0,0,1-2.609-.677,1.831,1.831,0,0,1-.256-.915h0A1.913,1.913,0,0,0,9.519,0H8.265a1.9,1.9,0,0,0-1.9,1.913h0A1.913,1.913,0,0,1,4.448,3.8a1.831,1.831,0,0,1-.915-.256h0a1.913,1.913,0,0,0-2.609.7l-.668,1.1a1.913,1.913,0,0,0,.7,2.609h0a1.913,1.913,0,0,1,.957,1.657,1.913,1.913,0,0,1-.957,1.657h0a1.9,1.9,0,0,0-.7,2.6h0l.632,1.089A1.913,1.913,0,0,0,3.5,15.7h0a1.895,1.895,0,0,1,2.6.7,1.831,1.831,0,0,1,.256.915h0a1.913,1.913,0,0,0,1.913,1.913H9.519a1.913,1.913,0,0,0,1.913-1.9h0a1.9,1.9,0,0,1,1.913-1.913,1.95,1.95,0,0,1,.915.256h0a1.913,1.913,0,0,0,2.609-.7h0l.659-1.1a1.9,1.9,0,0,0-.7-2.609h0a1.9,1.9,0,0,1-.7-2.609,1.876,1.876,0,0,1,.7-.7h0a1.913,1.913,0,0,0,.7-2.6h0Z"
                                              transform="translate(0.779 0.778)"/>
                                        <circle className="a" cx="2.636" cy="2.636" r="2.636"
                                                transform="translate(7.039 7.753)"/>
                                    </g>
                                </svg>
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={DASHBOARD_PROFILE_URL}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{__html: ".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}"}}/>
                                    </defs>
                                    <g transform="translate(4 2.5)">
                                        <circle className="a" cx="4.778" cy="4.778" r="4.778" transform="translate(2.801 0)"/>
                                        <path className="a"
                                              d="M0,3.016a2.215,2.215,0,0,1,.22-.97A4.042,4.042,0,0,1,3.039.426,16.787,16.787,0,0,1,5.382.1,25.053,25.053,0,0,1,9.767.1a16.979,16.979,0,0,1,2.343.33c1.071.22,2.362.659,2.819,1.62a2.27,2.27,0,0,1,0,1.95c-.458.961-1.748,1.4-2.819,1.611a15.716,15.716,0,0,1-2.343.339A25.822,25.822,0,0,1,6.2,6a4.066,4.066,0,0,1-.815-.055,15.423,15.423,0,0,1-2.334-.339C1.968,5.4.687,4.957.22,4A2.279,2.279,0,0,1,0,3.016Z"
                                              transform="translate(0 13.185)"/>
                                    </g>
                                </svg>
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                    <div className="sidebar__logout">
                        <button onClick={handleLogOut}>Log Out</button>
                    </div>
                </aside>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">{page}</h3>
                        <button className="main__menu" onClick={handleMenu}>
                            <i className="fas fa-bars open"/>
                        </button>
                        <Link className="main__logo" to={DASHBOARD_URL}>
                            <img src={"assets/logo-black.png"} alt="eazicred logo"/>
                        </Link>
                        <img alt="" src={"assets/login-image.png"}/>
                    </div>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardContainer;