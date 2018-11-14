import React, { Component}  from 'react';

function Header(props) {
    return (
        <header className="header">
        <div className="navigation-trigger" >
            <div className="navigation-trigger__inner">
                <i className="navigation-trigger__line"></i>
                <i className="navigation-trigger__line"></i>
                <i className="navigation-trigger__line"></i>
            </div>
        </div>

        <div className="header__logo hidden-sm-down">
            <h1><a href="index.html">Material Admin 2.0</a></h1>
        </div>

        <form className="search">
            <div className="search__inner">
                <input type="text" className="search__text" placeholder="Search for people, files, documents..."/>
                <i className="zmdi zmdi-search search__helper" data-ma-action="search-close"></i>
            </div>
        </form>

        <ul className="top-nav">
            <li className="hidden-xl-up"><a href="" data-ma-action="search-open"><i className="zmdi zmdi-search"></i></a></li>

            <li className="dropdown">
                <a href="" data-toggle="dropdown"><i className="zmdi zmdi-email"></i></a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu--block">
                    <div className="listview listview--hover">
                        <div className="listview__header">
                            Messages

                            <div className="actions">
                                <a href="messages.html" className="actions__item zmdi zmdi-plus"></a>
                            </div>
                        </div>

                        <a href="" className="listview__item">
                            <img src="demo/img/profile-pics/1.jpg" className="listview__img" alt=""/>

                            <div className="listview__content">
                                <div className="listview__heading">
                                    David Belle <small>12:01 PM</small>
                                </div>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                            </div>
                        </a>

                        <a href="" className="listview__item">
                            <img src="demo/img/profile-pics/2.jpg" className="listview__img" alt=""/>

                            <div className="listview__content">
                                <div className="listview__heading">
                                    Jonathan Morris
                                    <small>02:45 PM</small>
                                </div>
                                <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                            </div>
                        </a>

                        <a href="" className="listview__item">
                            <img src="demo/img/profile-pics/3.jpg" className="listview__img" alt=""/>

                            <div className="listview__content">
                                <div className="listview__heading">
                                    Fredric Mitchell Jr.
                                    <small>08:21 PM</small>
                                </div>
                                <p>Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</p>
                            </div>
                        </a>

                        <a href="" className="listview__item">
                            <img src="demo/img/profile-pics/4.jpg" className="listview__img" alt=""/>

                            <div className="listview__content">
                                <div className="listview__heading">
                                    Glenn Jecobs
                                    <small>08:43 PM</small>
                                </div>
                                <p>Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</p>
                            </div>
                        </a>

                        <a href="" className="listview__item">
                            <img src="demo/img/profile-pics/5.jpg" className="listview__img" alt=""/>

                            <div className="listview__content">
                                <div className="listview__heading">
                                    Bill Phillips
                                    <small>11:32 PM</small>
                                </div>
                                <p>Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat</p>
                            </div>
                        </a>

                        <a href="" className="view-more">View all messages</a>
                    </div>
                </div>
            </li>

            <li className="dropdown top-nav__notifications">
                <a href="" data-toggle="dropdown" className="top-nav__notify">
                    <i className="zmdi zmdi-notifications"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu--block">
                    <div className="listview listview--hover">
                        <div className="listview__header">
                            Notifications

                            <div className="actions">
                                <a href="" className="actions__item zmdi zmdi-check-all" data-ma-action="notifications-clear"></a>
                            </div>
                        </div>

                        <div className="listview__scroll scrollbar-inner">
                            <a href="" className="listview__item">
                                <img src="demo/img/profile-pics/1.jpg" className="listview__img" alt=""/>

                                <div className="listview__content">
                                    <div className="listview__heading">David Belle</div>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                </div>
                            </a>

                            <a href="" className="listview__item">
                                <img src="demo/img/profile-pics/2.jpg" className="listview__img" alt=""/>

                                <div className="listview__content">
                                    <div className="listview__heading">Jonathan Morris</div>
                                    <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                                </div>
                            </a>

                            <a href="" className="listview__item">
                                <img src="demo/img/profile-pics/3.jpg" className="listview__img" alt=""/>

                                <div className="listview__content">
                                    <div className="listview__heading">Fredric Mitchell Jr.</div>
                                    <p>Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</p>
                                </div>
                            </a>

                            <a href="" className="listview__item">
                                <img src="demo/img/profile-pics/4.jpg" className="listview__img" alt=""/>

                                <div className="listview__content">
                                    <div className="listview__heading">Glenn Jecobs</div>
                                    <p>Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</p>
                                </div>
                            </a>

                            <a href="" className="listview__item">
                                <img src="demo/img/profile-pics/5.jpg" className="listview__img" alt=""/>

                                <div className="listview__content">
                                    <div className="listview__heading">Bill Phillips</div>
                                    <p>Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat</p>
                                </div>
                            </a>

                            <a href="" className="listview__item">
                                <img src="demo/img/profile-pics/1.jpg" className="listview__img" alt=""/>

                                <div className="listview__content">
                                    <div className="listview__heading">David Belle</div>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                </div>
                            </a>

                            <a href="" className="listview__item">
                                <img src="demo/img/profile-pics/2.jpg" className="listview__img" alt=""/>

                                <div className="listview__content">
                                    <div className="listview__heading">Jonathan Morris</div>
                                    <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                                </div>
                            </a>

                            <a href="" className="listview__item">
                                <img src="demo/img/profile-pics/3.jpg" className="listview__img" alt=""/>

                                <div className="listview__content">
                                    <div className="listview__heading">Fredric Mitchell Jr.</div>
                                    <p>Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</p>
                                </div>
                            </a>
                        </div>

                        <div className="p-1"></div>
                    </div>
                </div>
            </li>

            <li className="dropdown hidden-xs-down">
                <a href="" data-toggle="dropdown"><i className="zmdi zmdi-check-circle"></i></a>

                <div className="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
                    <div className="listview listview--hover">
                        <div className="listview__header">Tasks</div>

                        <a href="" className="listview__item">
                            <div className="listview__content">
                                <div className="listview__heading">HTML5 Validation Report</div>

                                <div className="progress">
                                    <div className="progress-bar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </a>

                        <a href="" className="listview__item">
                            <div className="listview__content">
                                <div className="listview__heading">Google Chrome Extension</div>

                                <div className="progress">
                                    <div className="progress-bar bg-warning" style={{width: '43%'}} aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </a>

                        <a href="" className="listview__item">
                            <div className="listview__content">
                                <div className="listview__heading">Social Intranet Projects</div>

                                <div className="progress">
                                    <div className="progress-bar bg-success" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </a>

                        <a href="" className="listview__item">
                            <div className="listview__content">
                                <div className="listview__heading">Bootstrap Admin Template</div>

                                <div className="progress">
                                    <div className="progress-bar bg-info" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </a>

                        <a href="" className="listview__item">
                            <div className="listview__content">
                                <div className="listview__heading">Youtube Client App</div>

                                <div className="progress">
                                    <div className="progress-bar bg-danger" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </a>

                        <a href="" className="view-more">View all tasks</a>
                    </div>
                </div>
            </li>

            <li className="dropdown hidden-xs-down">
                <a href="" data-toggle="dropdown"><i className="zmdi zmdi-apps"></i></a>

                <div className="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
                    <div className="row app-shortcuts">
                        <a className="col-4 app-shortcuts__item" href="">
                            <i className="zmdi zmdi-calendar"></i>
                            <small className="">Calendar</small>
                            <span className="app-shortcuts__helper bg-red"></span>
                        </a>
                        <a className="col-4 app-shortcuts__item" href="">
                            <i className="zmdi zmdi-file-text"></i>
                            <small className="">Files</small>
                            <span className="app-shortcuts__helper bg-blue"></span>
                        </a>
                        <a className="col-4 app-shortcuts__item" href="">
                            <i className="zmdi zmdi-email"></i>
                            <small className="">Email</small>
                            <span className="app-shortcuts__helper bg-teal"></span>
                        </a>
                        <a className="col-4 app-shortcuts__item" href="">
                            <i className="zmdi zmdi-trending-up"></i>
                            <small className="">Reports</small>
                            <span className="app-shortcuts__helper bg-blue-grey"></span>
                        </a>
                        <a className="col-4 app-shortcuts__item" href="">
                            <i className="zmdi zmdi-view-headline"></i>
                            <small className="">News</small>
                            <span className="app-shortcuts__helper bg-orange"></span>
                        </a>
                        <a className="col-4 app-shortcuts__item" href="">
                            <i className="zmdi zmdi-image"></i>
                            <small className="">Gallery</small>
                            <span className="app-shortcuts__helper bg-light-green"></span>
                        </a>
                    </div>
                </div>
            </li>

            <li className="dropdown hidden-xs-down">
                <a href="" data-toggle="dropdown"><i className="zmdi zmdi-more-vert"></i></a>

                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-item theme-switch">
                        Theme Switch

                        <div className="btn-group btn-group-toggle btn-group--colors" data-toggle="buttons">
                            <label className="btn bg-green active"><input type="radio" value="green" /></label>
                            <label className="btn bg-blue"><input type="radio" value="blue" /></label>
                            <label className="btn bg-red"><input type="radio" value="red" /></label>
                            <label className="btn bg-orange"><input type="radio" value="orange" /></label>
                            <label className="btn bg-teal"><input type="radio" value="teal" /></label>

                            <div className="clearfix mt-2"></div>

                            <label className="btn bg-cyan"><input type="radio" value="cyan" /></label>
                            <label className="btn bg-blue-grey"><input type="radio" value="blue-grey" /></label>
                            <label className="btn bg-purple"><input type="radio" value="purple" /></label>
                            <label className="btn bg-indigo"><input type="radio" value="indigo" /></label>
                            <label className="btn bg-brown"><input type="radio" value="brown" /></label>
                        </div>
                    </div>
                    <a href="" className="dropdown-item">Fullscreen</a>
                    <a href="" className="dropdown-item">Clear Local Storage</a>
                </div>
            </li>

            <li className="hidden-xs-down">
                <a href="" data-ma-action="aside-open" data-ma-target=".chat" className="top-nav__notify">
                    <i className="zmdi zmdi-comment-alt-text"></i>
                </a>
            </li>
        </ul>
    </header>
    )
  };


export default Header;