import React, { useContext, useEffect } from "react";
import {Link } from "react-router-dom"
import { LoadingContext } from "./../store/Store";
function Index() {
  const [, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="page-title-box">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h4 className="page-title">Our Products</h4>
            </div>
            <div className="col-sm-6">
              <div className="float-right d-none d-md-block">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle arrow-none waves-effect waves-light"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-hospital mr-2"></i> New
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#/">
                      Application
                    </a>{" "}
                    <a className="dropdown-item" href="#/">
                      Static App
                    </a>
                    <a className="dropdown-item" href="#/">
                      Storage 
                    </a>
                    <a className="dropdown-item" href="#/">
                      Database
                    </a>{" "}
                    <a className="dropdown-item" href="#/">
                      Workspace
                    </a>{" "}
                    <a className="dropdown-item" href="#/">
                      Domain
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-md-3">
            <Link to="/applications" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/1.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>

          <div className="col-xl-2 col-md-3">
          <Link to="/staticapps" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/2.png"
                alt="Card cap"
              />
            </div>
            </Link>

          </div>

          <div className="col-xl-2 col-md-3">
          <Link to="/storage" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/3.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>

          <div className="col-xl-2 col-md-3">
          <Link to="/database" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/4.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>
          <div className="col-xl-2 col-md-3">
          <Link to="/authservice" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/5.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>
          <div className="col-xl-2 col-md-3">
          <Link to="/workspaces" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/6.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>
          <div className="col-xl-2 col-md-3">
          <Link to="/extensions" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/7.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>

          <div className="col-xl-2 col-md-3">
          <Link to="/domains" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/8.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>

          <div className="col-xl-2 col-md-3">
          <Link to="/manage" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/9.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>

          <div className="col-xl-2 col-md-3">
          <Link to="/accesscontrol" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/10.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>

          <div className="col-xl-2 col-md-3">
          <Link to="/settings" onClick={() => setLoading(true)}>
            <div className="card roundcard">
              <img
                className="card-img-top img-fluid roundcard"
                src="assets/images/11.png"
                alt="Card cap"
              />
            </div>
            </Link>
          </div>

        </div>



       <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">         
                            <div>
                                <p>Dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Index;
