import React, {useContext} from "react";
import {NavLink } from "react-router-dom"
import {LoadingContext} from './../store/Store';

function Navbar() {
  const [,setLoading] = useContext(LoadingContext);

    return (
        <div className="topnav">
        <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
    
                <div className="collapse navbar-collapse" id="topnav-menu-content">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink to="/dashboard" onClick={() => setLoading(true)} className="nav-link" activeClassName="active">
                           <i className="feather-home mr-2"></i>Dashboard
                        </NavLink>
                        </li>
    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#/" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="feather-code mr-2"></i>Develop
                                <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-pages">
                            <NavLink to="/authentication" onClick={() => setLoading(true)} className="dropdown-item" activeClassName="active">Authentication</NavLink>
                            <NavLink to="/workspaces" className="dropdown-item" activeClassName="active">Workspaces</NavLink>
                            <NavLink to="/extensions" className="dropdown-item" activeClassName="active">Extensions</NavLink>
                            </div>
                        </li>
    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#/" id="topnav-components" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-docker mr-2"></i>Deploy
                                <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-components">
                            <NavLink to="/applications" className="dropdown-item" activeClassName="active">Applications</NavLink>
                            <NavLink to="/staticsites" className="dropdown-item" activeClassName="active">Static Sites</NavLink>
                            <NavLink to="/containers" className="dropdown-item" activeClassName="active">Containers</NavLink>
                            <NavLink to="/databases" className="dropdown-item" activeClassName="active">Databases</NavLink>
                            </div>
                        </li>
    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#/" id="topnav-charts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="feather-briefcase mr-2"></i>Manage
                                <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-charts">
                            <NavLink to="/servers" className="dropdown-item" activeClassName="active">Servers & Nodes</NavLink>
                            <NavLink to="/docker" className="dropdown-item" activeClassName="active">Docker</NavLink>
                            <NavLink to="/networks" className="dropdown-item" activeClassName="active">Networks</NavLink>
                            <NavLink to="/security" className="dropdown-item" activeClassName="active">Security</NavLink>
                            </div>
                        </li>
    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#/" id="topnav-forms" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-cube-outline mr-2"></i>Storage
                                <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-forms">
                            <NavLink to="/blocks/add" className="dropdown-item" activeClassName="active">Add Block</NavLink>
                            <NavLink to="/blocks" className="dropdown-item" activeClassName="active">Manage Blocks</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#/" id="topnav-forms" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dot-net mr-2"></i>Domains
                                <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-forms">
                            <NavLink to="/domains/add" className="dropdown-item" activeClassName="active">Add Domain</NavLink>
                            <NavLink to="/domains" className="dropdown-item" activeClassName="active">Manage Domains</NavLink>
                            </div>
                        </li>
    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#/" id="topnav-forms" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="feather-mail mr-2"></i>Email
                                <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-forms">
                            <NavLink to="/webmail" className="dropdown-item" activeClassName="active">Web Client</NavLink>
                            <NavLink to="/emails/new" className="dropdown-item" activeClassName="active">New Account</NavLink>
                            <NavLink to="/emails" className="dropdown-item" activeClassName="active">Email Accounts</NavLink>
                            </div>
                        </li>
    
                        <li className="nav-item">
                        <NavLink to="/settings" className="nav-link" activeClassName="active"> <i className="feather-settings mr-2"></i>Settings</NavLink>
                           
    
                        </li>
    
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default Navbar
