import React from 'react';

import { useDispatch } from 'react-redux';
import {
  Link,
  NavLink,
} from 'react-router-dom';

import { logoutRequest } from '../../redux/actions/actions';
import {
  ADMIN_AGENTS_URL,
  ADMIN_LOANS_URL,
  ADMIN_USERS_URL,
  HOME_URL,
} from '../../routes/paths';

const AdminSideBar = ({history}) => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        if (window.confirm("Are you sure you want want to logout of this session?")) {
            dispatch(logoutRequest())
            history.push(HOME_URL)
        }
    }
    
    return (
        <aside className="sidebar">
            <Link to={ADMIN_USERS_URL} className="sidebar__logo">
                <img src={"assets/logo-black.png"} alt="eazicred logo" />
            </Link>
            <h4 className="sidebar__h4">Admin Management</h4>
            <ul className="sidebar__list">
                <li>
                    <NavLink activeClassName="active" to={ADMIN_USERS_URL}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23"><defs><style dangerouslySetInnerHTML={{__html: ".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}" }} /></defs><g transform="translate(2.396 1.917)"><path className="a" d="M6.38,17.989V15.05a1.367,1.367,0,0,1,1.364-1.36H10.51a1.367,1.367,0,0,1,1.374,1.36h0V18a1.174,1.174,0,0,0,1.152,1.168H14.88a3.312,3.312,0,0,0,3.328-3.295h0V7.511a2.338,2.338,0,0,0-.922-1.825L10.98.657a3.048,3.048,0,0,0-3.78,0L.922,5.695A2.32,2.32,0,0,0,0,7.52v8.351a3.312,3.312,0,0,0,3.328,3.295H5.172a1.183,1.183,0,0,0,1.189-1.177h0" transform="translate(0 0)" /></g></svg>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={ADMIN_LOANS_URL} className="active">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><defs><style dangerouslySetInnerHTML={{__html: ".a{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}" }} /></defs><g transform="translate(2 2)"><path className="a" d="M2.449,0H5.716A2.459,2.459,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z" transform="translate(11.837 0)" /><path className="a" d="M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.47V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.47A2.46,2.46,0,0,1,2.449,0Z" transform="translate(0 0)" /><path className="a" d="M2.449,0H5.714A2.46,2.46,0,0,1,8.163,2.471V5.764a2.46,2.46,0,0,1-2.449,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z" transform="translate(0 11.766)" /><path className="a" d="M2.449,0H5.716A2.46,2.46,0,0,1,8.163,2.471V5.764a2.459,2.459,0,0,1-2.448,2.47H2.449A2.46,2.46,0,0,1,0,5.764V2.471A2.46,2.46,0,0,1,2.449,0Z" transform="translate(11.837 11.766)" /></g></svg>
                        Loan Applications
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={ADMIN_AGENTS_URL}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><defs><style dangerouslySetInnerHTML={{__html: ".a{fill:none;-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:1.5px;}" }} /></defs><g transform="translate(2 2)"><path className="a" d="M18.5,9.25A9.25,9.25,0,1,1,9.25,0,9.25,9.25,0,0,1,18.5,9.25Z" transform="translate(0.75 0.751)" /><path className="a" d="M3.77,7.1,0,4.847V0" transform="translate(9.661 5.847)" /></g></svg>
                        Agents
                    </NavLink>
                </li>
            </ul>
            <div className="sidebar__logout">
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </aside>
    );
}

export default AdminSideBar;