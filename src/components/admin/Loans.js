import React from 'react';

import AdminSideBar from './AdminSideBar';

const Loans = () => {
    document.title = "Loans Applications - Admin"
    return (
        <div className="dashboard dashboard-admin">
            <div className="container-lg">
                <AdminSideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Dashboard</h3>
                        <button className="main__menu">
                            <i className="fas fa-bars open" />
                        </button>
                        <a href className="main__logo">EaziCred</a>
                        <img src="../assets/login-image.png" className="user-picture" alt />
                    </div>
                    <div className="main__middle">
                        <h2 className="h2-db">Loan Applications</h2>
                        <p className="p2-db">List of applications on EaziCred</p>
                    </div>
                    <div className="main__applications">
                        <div className="main__applications--box">
                            <div className="application__row application__heading">
                                <span>Date Joined</span>
                                <span>Loan ID</span>
                                <span>Name</span>
                                <span>Phone Number</span>
                                <span>Action</span>
                                <span>Status</span>
                            </div>
                            <div className="application__row">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-application">View Application</button>
                                <span>Approved</span>
                            </div>
                            <div className="application__row">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-application">View Application</button>
                                <span>Approved</span>
                            </div>
                            <div className="application__row">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-application">View Application</button>
                                <span>Declined</span>
                            </div>
                            <div className="application__row">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-application">View Application</button>
                                <span>Approved</span>
                            </div>
                            <div className="application__row">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-application">View Application</button>
                                <span>Declined</span>
                            </div>
                            <div className="application__row">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-application">View Application</button>
                                <span>Approved</span>
                            </div>
                            <div className="application__row">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-application">View Application</button>
                                <span>Declined</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Loans;