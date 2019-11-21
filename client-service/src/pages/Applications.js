import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../store/Store";
import { Link } from "react-router-dom";

function Compute() {
  const [, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title font-16 mt-0">Applications</h3>
                <div>
                  <p>
                    Manage all your applications here. You can create deploy and
                    manage all your applications from here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-title-box">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h4 className="page-title">Your Application</h4>
            </div>
            <div className="col-sm-6">
              <div className="float-right d-none d-md-block">
                <div className="dropdown">
                  <Link
                    to="/addapplication"
                    className="btn btn-secondary waves-effect waves-light"
                    onClick={() => setLoading(true)}
                  >
                    <i className="mdi mdi-hospital mr-2"></i> New Application
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card card-body">
              <div>
                <div className="floatleft col-10">
                  <h3 className=" card-title font-18 mt-0">Project Egnite</h3>
                </div>

                <div className="col-2 floatright dropright">
                  <a
                    href="#/"
                    className="border-radius-20 waves-effect"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    x-placement="right-start"
                  >
                    <a className="dropdown-item" href="#/">
                      Open
                    </a>{" "}
                    <a className="dropdown-item" href="#/">
                      Edit
                    </a>{" "}
                    <a className="dropdown-item" href="#/">
                      Delete
                    </a>{" "}
                  </div>
                </div>
              </div>
              <p className="card-text">
                This is the backend application of egnite.
              </p>
              <div className="pricing-features">
                <p>
                  <i className="mdi mdi-link text-primary mr-2"></i>
                  <a href="https://egnite.xyz" target="blank">
                    https://egnite.xyz
                  </a>
                </p>
                <p>
                  <i className="mdi mdi-database text-primary mr-2"></i>{" "}
                  egnite-mysql, egnite-monodb...
                </p>
                <p>
                  <i className="mdi mdi-check text-primary mr-2"></i> 4/4 Nodes
                  Running
                </p>
              </div>

              <button className="btn btn-secondary btn-block waves-effect waves-light">
                <span>Open Application</span>{" "}
                <i className="fab fa-telegram-plane m-l-10"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compute;
