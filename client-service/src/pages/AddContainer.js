import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../store/Store";
import {Link } from "react-router-dom";

function AddContainer() {
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
                <form className="">
                  <div className="form-group">
                  <h4 className="card-title">Container Name</h4>
                    <p className="text-muted m-b-15">This is a lable name which will be used to refer to this application</p>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      placeholder="Project Cloud"
                    />
                  </div>

                  <div className="form-group">
                  <h4 className="card-title">Git Repository</h4>
                    <p className="text-muted m-b-15">The url of the git repository where the docker application is located.</p>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      placeholder="https://github.com/opencloudai/project-name"
                    />
                  </div>

                  <div className="form-group">
                  <h4 className="card-title">No of Instances</h4>
                    <p className="text-muted m-b-15">This number shows the number of instances that will be created for this application.</p>
                    <input
                      type="number"
                      className="form-control"
                      required=""
                      placeholder="Eg: 2"
                    />
                  </div>

                  <div className="form-group">
                  <h4 className="card-title">Domain Name</h4>
                    <p className="text-muted m-b-15">Domain name that you want to link to this application.</p>
                    <select className="form-control">
                      <option>Select</option>
                      <option>opencloud.ai</option>
                      <option>webkodes.com</option>
                    </select>
                  </div>

                  <div className="form-group">
                  <h4 className="card-title">Database</h4>
                    <p className="text-muted m-b-15">Database that you want to link to this application.</p>
                    <select className="form-control">
                      <option>Select</option>
                      <option>none</option>
                      <option>egnite-mongodb</option>
                      <option>egnite-mysql</option>
                    </select>
                  </div>

                  <div className="form-group">
                  <h4 className="card-title">About Container</h4>
                    <p className="text-muted m-b-15">A short description for your application.</p>
                    <div>
                      <textarea
                        required=""
                        className="form-control"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div>
                      <button
                        type="submit"
                        className="btn btn-secondary active waves-effect waves-light mr-1"
                      >
                        Create Container
                      </button>{" "}
                      <Link
                        to="/containers"
                        onClick={() => setLoading(true)}
                        className="btn btn-outline-secondary waves-effect"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}


export default AddContainer
