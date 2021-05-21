import React from 'react';

import AdminSideBar from './AdminSideBar';

const Agents = () => {
    document.title = "Agents - Admin"
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
                        <img src={"assets/login-image.png"} className="user-picture" alt/>
                    </div>
                    <div className="main__middle agents">
                        <div>
                            <h2 className="h2-db">Agents</h2>
                            <p className="p2-db">List of agents on EaziCred</p>
                        </div>
                        <button className="btn btn-blue">Create Agent</button>
                    </div>
                    <div className="main__agents">
                        <div className="main__agents--box">
                            <div className="agent__row agent__heading">
                                <span>Date Created</span>
                                <span>Agent Code</span>
                                <span>Agent Name</span>
                                <span>Phone Number</span>
                                <span>Action</span>
                            </div>
                            <div className="agent__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-agent">View Agent</button>
                            </div>
                            <div className="agent__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-agent">View Agent</button>
                            </div>
                            <div className="agent__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-agent">View Agent</button>
                            </div>
                            <div className="agent__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-agent">View Agent</button>
                            </div>
                            <div className="agent__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-agent">View Agent</button>
                            </div>
                            <div className="agent__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-agent">View Agent</button>
                            </div>
                            <div className="agent__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Christy Anderson</span>
                                <span>+234 813 437 5481</span>
                                <button className="view-agent">View Agent</button>
                            </div>
                        </div>
                        {/* The modal popup after the view agent button has been clicked */}
                        {/* <div class="modal-overlay">
                              <div class="modal">
                                  <div class="modal__row--1">
                                      <h3>View Agent</h3>
                                      <button>x</button>
                                  </div>
                                  <div class="modal__row--2">
                                      <div class="modal__col--1">
                                          <img src="../assets/user-1.png" alt="user photo">
                                      </div>
                                      <div class="modal__col--2">
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
                                  <div class="modal__row--3">
                                      <button class="btn btn-blue">Edit Agent</button>
                                      <button class="btn btn-white">Delete Agent</button>
                                  </div>   
                              </div>
                          </div> */}
                        {/* This modal popup after the create agent button has been clicked */}
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className="modal__row--1">
                                    <h3>Create Agent</h3>
                                    <button>x</button>
                                </div>
                                <div className="modal__row--4">
                                    <div className="input-groups">
                                        <div className="input-group">
                                            <label htmlFor>First Name</label>
                                            <input type="text" placeholder="John"/>
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor>Last Name</label>
                                            <input type="text" placeholder="Doe"/>
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor>Email Address</label>
                                            <input type="email" placeholder="johndoe@eazycred.com"/>
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor>Phone Number</label>
                                            <input type="phone" placeholder="080 200 300 400"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal__row--3">
                                    <button className="btn btn-blue">Create Agent</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Agents;