import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../store/Store";
import { Link } from "react-router-dom";

function Workspaces() {
  const [, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title font-16 mt-0">CODING WORKSPACES</h3>
                <div>
                  <p>
                    Coding workspace is a real time online in browser code
                    editor that allows you to work on your code with ease and
                    from anywhere you want.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-title-box">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h4 className="page-title">Your Workspaces</h4>
            </div>
            <div className="col-sm-6">
              <div className="float-right d-none d-md-block">
                <div className="dropdown">
                  <Link
                    to="/addworkspace"
                    className="btn btn-secondary waves-effect waves-light"
                    onClick={() => setLoading(true)}
                  >
                    <i className="mdi mdi-hospital mr-2"></i> New Workspace
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

                <div class="col-2 floatright dropright">
                  <a
                    href="#/"
                    class="border-radius-20 waves-effect"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    x-placement="right-start"
                  >
                    <a class="dropdown-item" href="#/">
                      Open
                    </a>{" "}
                    <a class="dropdown-item" href="#/">
                      Edit
                    </a>{" "}
                    <a class="dropdown-item" href="#/">
                      Delete
                    </a>{" "}
                  </div>
                </div>
              </div>
              <p className="card-text">
                This workspace is for the developers working on frontend of
                egnite project.
              </p>
              <div class="pricing-features">
                <p>
                  <i class="fab fa-github text-secondary mr-2"></i>
                  <a
                    href="https://github.com/opencloudai/openCloud"
                    target="blank"
                  >
                    https://github.com/opencloudai..
                  </a>
                </p>
              </div>

              <button className="btn btn-secondary btn-block waves-effect waves-light">
                <span>Open Workspace</span>{" "}
                <i className="fab fa-telegram-plane m-l-10"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspaces;
