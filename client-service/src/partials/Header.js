import React, {useContext} from "react";
import {Link } from "react-router-dom"
import {LoadingContext} from './../store/Store';

function Header() {

  const [,setLoading] = useContext(LoadingContext);

  return (
    <header id="page-topbar">
    <div className="navbar-header">
        
        <div className="navbar-brand-box d-flex align-items-left">
        <Link className="logo" to="/dashboard" onClick={() => setLoading(true)}>
                <img src="/assets/images/1.png" alt="" className="logo-small" />
            </Link>

            <button type="button" className="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                <i className="fa fa-fw fa-bars"></i>
            </button>
        </div>

        <div className="d-flex align-items-center">

            <div className="dropdown d-inline-block ml-2">
                <button type="button" className="btn header-item noti-icon waves-effect waves-light" id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-magnify"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">

                    <form className="p-3">
                        <div className="form-group m-0">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon waves-effect waves-light" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-bell"></i>
                    <span className="badge badge-danger badge-pill">3</span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div className="p-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="m-0"> Notifications </h6>
                            </div>
                            <div className="col-auto">
                                <a href="#!" className="small"> View All</a>
                            </div>
                        </div>
                    </div>
                    <div data-simplebar>
                        <a href="#/" className="text-reset notification-item">
                            <div className="media">
                                <img src="/assets/images/users/avatar-2.jpg" className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Samuel Coverdale</h6>
                                    <p className="font-size-12 mb-1">You have new follower on Instagram</p>
                                    <p className="font-size-12 mb-0 text-muted"><i className="mdi mdi-clock-outline"></i> 2 min ago</p>
                                </div>
                            </div>
                        </a>
                        <a href="#/" className="text-reset notification-item">
                            <div className="media">
                                <div className="avatar-xs mr-3">
                                    <span className="avatar-title bg-success rounded-circle">
                                        <i className="mdi mdi-cloud-download-outline"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Download Available !</h6>
                                    <p className="font-size-12 mb-1">Latest version of admin is now available. Please download here.</p>
                                    <p className="font-size-12 mb-0 text-muted"><i className="mdi mdi-clock-outline"></i> 4 hours ago</p>
                                </div>
                            </div>
                        </a>
                        <a href="#/" className="text-reset notification-item">
                            <div className="media">
                                <img src="/assets/images/users/avatar-3.jpg" className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Victoria Mendis</h6>
                                    <p className="font-size-12 mb-1">Just upgraded to premium account.</p>
                                    <p className="font-size-12 mb-0 text-muted"><i className="mdi mdi-clock-outline"></i> 1 day ago</p>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

            <div className="dropdown d-inline-block ml-2">
                <button type="button" className="btn header-item waves-effect waves-light" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle header-profile-user" src="/assets/images/ashu.png" alt="Header Avatar"/>
                    <span className="d-none d-sm-inline-block ml-1">Ashutosh</span>
                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">

                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#/">
                        <span>Profile</span>

                    </a>

                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#/">
                        <span>Billing</span>

                    </a>
                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#/">
                        Settings
                    </a>

                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#/">
                        <span>Log Out</span>
                    </a>
                </div>
            </div>

        </div>
    </div>
</header>
  );
}

export default Header;
