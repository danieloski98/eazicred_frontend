import React from 'react';

import AdminSideBar from './AdminSideBar';

const Users = () => {
    document.title = "Users - Admin"
    return (
        <div className="dashboard dashboard-admin">
            <div className="container-lg">
                <AdminSideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Dashboard</h3>
                        <button className="main__menu">
                            <i className="fas fa-bars open"/>
                        </button>
                        <a href className="main__logo">EaziCred</a>
                        <img src={"assets/login-image.png"} className="user-picture" alt="user thumbnail"/>
                    </div>
                    <div className="main__middle">
                        <h2 className="h2-db">Users</h2>
                        <p className="p2-db">List of users on EaziCred</p>
                    </div>
                    <div className="main__users">
                        <div className="main__users--box">
                            <div className="user__row user__heading">
                                <span>Date Joined</span>
                                <span>Referral Code</span>
                                <span>Name</span>
                                <span>Phone Number</span>
                                <span>Action</span>
                            </div>
                            <div className="user__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-user">View User</button>
                            </div>
                            <div className="user__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-user">View User</button>
                            </div>
                            <div className="user__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-user">View User</button>
                            </div>
                            <div className="user__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-user">View User</button>
                            </div>
                            <div className="user__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-user">View User</button>
                            </div>
                            <div className="user__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-user">View User</button>
                            </div>
                            <div className="user__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-user">View User</button>
                            </div>
                        </div>
                        {/* The modal popup after the view user button has been clicked */}
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className="modal__row--1">
                                    <h3>View User</h3>
                                    <button>x</button>
                                </div>
                                <div className="modal__row--2">
                                    <div className="modal__col--1">
                                        <img src={"assets/user-1.png"} alt="user photo"/>
                                    </div>
                                    <div className="modal__col--2">
                                        <div>
                                            <h5>First Name</h5>
                                            <span>Micheal</span>
                                        </div>
                                        <div>
                                            <h5>Last Name</h5>
                                            <span>Anderson</span>
                                        </div>
                                        <div>
                                            <h5>Phone Number</h5>
                                            <span>+2348134747833</span>
                                        </div>
                                        <div>
                                            <h5>Email Address</h5>
                                            <span>mike@naijatech.net</span>
                                        </div>
                                        <div>
                                            <h5>Address</h5>
                                            <span>6 Anderson Lane,Lagos</span>
                                        </div>
                                        <div>
                                            <h5>Referral Code</h5>
                                            <span>263273</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Users;