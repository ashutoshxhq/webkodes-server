import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../store/Store";
import { Link } from "react-router-dom";

function Workspaces() {
  const [, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div class="col-xl-3">
            <div className="row">
              <div class="col-xl-12">
                <div class="card m-b-20">
                  <div class="card-body">
                    <h4 class="card-title">Analytics</h4>

                    <div class="text-center">
                      <div class="clearfix"></div>
                      <ul class="list-inline mt-4 row mb-0">
                        <li class="col-4">
                          <h5>15</h5>
                          <p class="mb-0">Created</p>
                        </li>
                        <li class="col-4">
                          <h5>6</h5>
                          <p class="mb-0">Running</p>
                        </li>
                        <li class="col-4">
                          <h5>2</h5>
                          <p class="mb-0">Stopped</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Storage Used</h4>
                    <p class="card-subtitle mb-5">
                      Storage usage by all your workspaces
                    </p>
                    <div class="text-center">
                      <div class="clearfix"></div>
                      <ul class="list-inline mt-4 row mb-0">
                        <li class="col-6">
                          <h5>15 GB</h5>
                          <p class="mb-0">Running Workspaces</p>
                        </li>
                        <li class="col-6">
                          <h5>6 GB</h5>
                          <p class="mb-0">Stopped Workspaces</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Other Details</h4>
                    <p class="card-subtitle">
                      We use codeserver image for creating VS Code instances on
                      the web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-9">
                    <h3 className="card-title font-16 mt-0">
                      CODING WORKSPACES
                    </h3>
                  </div>
                  <div className="col-xl-3">
                    <div className="float-right d-none d-md-block">
                      <Link
                        to="/addworkspace"
                        className="btn btn-secondary active waves-effect waves-light"
                        onClick={() => setLoading(true)}
                      >
                        <i className="mdi mdi-hospital mr-2"></i> New Workspace
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Coding workspace is a real time online in browser code
                    editor that allows you to work on your code with ease and
                    from anywhere you want.
                  </p>
                </div>
              </div>
              <img
                class="card-img-bottom img-fluid"
                src="assets/images/vscode.png"
                alt="Card image cap"
              ></img>
            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Your Workspaces</h4>
                <p class="card-subtitle mb-4 font-size-13">
                  All your coding workspaces are listed here
                </p>
                <div className="row">
                  <div className="col-md-3">
                    <div className="card card-body workspace">
                      <div className="row">
                        <div className="col-10">
                          <h3 className=" card-title font-18 mt-0">
                            Project Egnite
                          </h3>
                        </div>

                        <div className="col-2 dropright">
                          <a
                            href="#/"
                            className="waves-effect text-secondary"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                          >
                            <i className="feather-arrow-down-circle"></i>
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
                        This workspace is for the developers working on frontend
                        of egnite project.
                      </p>
                      <div>
                        <p>
                          <i className="mdi mdi-key-outline text-secondary mr-2"></i>
                          Password : 12345
                        </p>
                      </div>
                      <div className="row mb-2">
                        <div className="col-xl-12">
                          <button className="btn btn-secondary active btn-block waves-effect waves-light">
                            <span>Open Workspace</span>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-body workspace">
                      <div className="row">
                        <div className="col-10">
                          <h3 className=" card-title font-18 mt-0">
                            Project Egnite
                          </h3>
                        </div>

                        <div className="col-2 dropright">
                          <a
                            href="#/"
                            className="waves-effect text-secondary"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                          >
                            <i className="feather-arrow-down-circle"></i>
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
                        This workspace is for the developers working on frontend
                        of egnite project.
                      </p>
                      <div>
                        <p>
                          <i className="mdi mdi-key-outline text-secondary mr-2"></i>
                          Password : 12345
                        </p>
                      </div>
                      <div className="row mb-2">
                        <div className="col-xl-12">
                          <button className="btn btn-secondary active btn-block waves-effect waves-light">
                            <span>Open Workspace</span>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspaces;
