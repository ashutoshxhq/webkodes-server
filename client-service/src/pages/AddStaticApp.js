import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../store/Store";
import { Link } from "react-router-dom";

function AddStaticApp() {
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
                  <h3 className="card-title font-16 mt-0">Site Name</h3>
                    
                    <p className="text-muted m-b-15">A label for your static application.</p>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      placeholder="Project Cloud"
                    />
                  </div>

                  <div className="form-group">
                  <h3 className="card-title font-16 mt-0">Git Repository</h3>
                    <p className="text-muted m-b-15">The url of the git repository where the application is located.</p>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      placeholder="https://github.com/opencloudai/project-name"
                    />
                  </div>

                  <div className="form-group">
                  <h3 className="card-title font-16 mt-0">Domain Name</h3>
                    <p className="text-muted m-b-15">Domain name that you want to link to this static app.</p>
                    <select className="form-control">
                      <option>Select</option>
                      <option>opencloud.ai</option>
                      <option>webkodes.com</option>
                    </select>
                  </div>

                  <div className="form-group">
                  <h3 className="card-title font-16 mt-0">About Site</h3>
                    <p className="text-muted m-b-15">A short description for your static site.</p>

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
                        Create Site
                      </button>{" "}
                      <Link
                        to="/staticsites"
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
  );
}

export default AddStaticApp;
