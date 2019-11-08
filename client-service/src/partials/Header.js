import React, {useContext} from "react";
import {Link } from "react-router-dom"
import {LoadingContext} from './../store/Store';

function Header() {

  const [,setLoading] = useContext(LoadingContext);

  return (
    <header id="topnav">
      <div className="topbar-main">
        <div className="container-fluid">
          <div className="logo">
          <Link className="logo" to="/" onClick={() => setLoading(true)}>
              <img src="assets/images/logo-sm.png" alt="" className="logo-small" />{" "}
              <img
                src="assets/images/logo-light.png"
                alt=""
                className="logo-large"
              />
            </Link>
          </div>
          <div className="menu-extras topbar-custom">
            <ul className="navbar-right list-inline float-right mb-0">
              <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                <form role="search" className="app-search">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search.."
                    />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </li>

              <li className="dropdown notification-list list-inline-item">
                <a
                  className="nav-link dropdown-toggle arrow-none"
                  data-toggle="dropdown"
                  href="#/"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-bell-outline noti-icon"></i>{" "}
                  <span className="badge badge-pill badge-danger noti-icon-badge">
                    3
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                  <h6 className="dropdown-item-text">Notifications (258)</h6>
                  <div className="slimscroll notification-item-list">
                    <a
                      href="#/"
                      className="dropdown-item notify-item active"
                    >
                      <div className="notify-icon bg-success">
                        <i className="mdi mdi-cart-outline"></i>
                      </div>
                      <p className="notify-details">
                        Your order is placed
                        <span className="text-muted">
                          Dummy text of the printing and typesetting industry.
                        </span>
                      </p>
                    </a>
                    <a
                      href="#/"
                      className="dropdown-item notify-item"
                    >
                      <div className="notify-icon bg-warning">
                        <i className="mdi mdi-message-text-outline"></i>
                      </div>
                      <p className="notify-details">
                        New Message received
                        <span className="text-muted">
                          You have 87 unread messages
                        </span>
                      </p>
                    </a>
                    <a
                      href="#/"
                      className="dropdown-item notify-item"
                    >
                      <div className="notify-icon bg-info">
                        <i className="mdi mdi-glass-cocktail"></i>
                      </div>
                      <p className="notify-details">
                        Your item is shipped
                        <span className="text-muted">
                          It is a long established fact that a reader will
                        </span>
                      </p>
                    </a>
                    <a
                      href="#/"
                      className="dropdown-item notify-item"
                    >
                      <div className="notify-icon bg-primary">
                        <i className="mdi mdi-cart-outline"></i>
                      </div>
                      <p className="notify-details">
                        Your order is placed
                        <span className="text-muted">
                          Dummy text of the printing and typesetting industry.
                        </span>
                      </p>
                    </a>
                    <a
                      href="#/"
                      className="dropdown-item notify-item"
                    >
                      <div className="notify-icon bg-danger">
                        <i className="mdi mdi-message-text-outline"></i>
                      </div>
                      <p className="notify-details">
                        New Message received
                        <span className="text-muted">
                          You have 87 unread messages
                        </span>
                      </p>
                    </a>
                  </div>
                  <a
                    href="#/"
                    className="dropdown-item text-center text-primary"
                  >
                    View all <i className="fi-arrow-right"></i>
                  </a>
                </div>
              </li>
              <li className="dropdown notification-list list-inline-item">
                <div className="dropdown notification-list nav-pro-img">
                  <a
                    className="dropdown-toggle nav-link arrow-none nav-user"
                    data-toggle="dropdown"
                    href="#/"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/users/user-4.jpg"
                      alt="user"
                      className="rounded-circle"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right profile-dropdown">
                    
                 
                    <Link className="dropdown-item" to="/billing"  onClick={() => setLoading(true)}>
                      <i className="mdi mdi-coin"></i> Billing
                    </Link>{" "}

                    <Link className="dropdown-item" to="/profile" onClick={() => setLoading(true)}>
                      
                      <i className="mdi mdi-account-circle m-r-5"></i> Profile
                    </Link>{" "}
                   
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/about"  onClick={() => setLoading(true)}>
                      <i className="mdi mdi-logout-variant"></i> Logout
                    </Link>{" "}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
