import React, { useContext, useEffect } from "react";
import {Link } from "react-router-dom"
import { LoadingContext } from "./../store/Store";
function Index() {
  const [, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    if (document.getElementById("morris-area-example").length) {
        window.Morris.Area({
          element: "morris-area-example",
          lineColors: ["#2e7ce4"],
          data: [
            { y: "Mon", a: 10 },
            { y: "Tue", a: 10 },
            { y: "Web", a: 10 },
            { y: "Thr", a: 20 },
            { y: "Fri", a: 60 },
            { y: "Sat", a: 70 },
            { y: "Sun", a: 75 },
            { y: "Mon", a: 79 }
          ],
          xkey: "y",
          ymax: 100,
          parseTime: false,
          //xLabels:"year",
          ykeys: ["a"],
          hideHover: "auto",
          gridLineColor: "#eef0f2",
          resize: !0,
          labels: ["Load"]
        });
      }
    setLoading(false);
  });

  return (
    <div className="page-content">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-3 col-md-4 col-lg-4">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="card-title">Docker</h4>

                                <div className="text-center">
                                    <div className="clearfix"></div>
                                    <ul className="list-inline row mt-4 mb-0">
                                        <li className="col-4">
                                            <h5>15</h5>
                                            <p className="mb-0">Created</p>
                                        </li>
                                        <li className="col-4">
                                            <h5>6</h5>
                                            <p className="mb-0">Running</p>
                                        </li>
                                        <li className="col-4">
                                            <h5>2</h5>
                                            <p className="mb-0">Nodes</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="card-title">Block Storage</h4>

                                <div className="text-center">
                                    <div className="clearfix"></div>
                                    <ul className="list-inline row mt-4 mb-0">
                                        <li className="col-4">
                                            <h5>50%</h5>
                                            <p className="mb-0">Used</p>
                                        </li>
                                        <li className="col-4">
                                            <h5>50 GB</h5>
                                            <p className="mb-0">Stored</p>
                                        </li>
                                        <li className="col-4">
                                            <h5>12</h5>
                                            <p className="mb-0">Blocks</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="card-title">Extensions</h4>

                                <div className="text-center">
                                    <div className="clearfix"></div>
                                    <ul className="list-inline row mt-4 mb-0">
                                        <li className="col-4">
                                            <h5>5</h5>
                                            <p className="mb-0">Running</p>
                                        </li>
                                        <li className="col-4">
                                            <h5>10</h5>
                                            <p className="mb-0">Installed</p>
                                        </li>
                                        <li className="col-4">
                                            <h5>12</h5>
                                            <p className="mb-0">Blocks</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-9 col-md-8 col-lg-8">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Network Load</h4>
                        <p className="card-subtitle mb-4">Your network load for this week</p>

                        <div id="morris-area-example" className="morris-chart"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-2 col-md-6">
            <Link to="/applications" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-cloud-outline text-secondary"></i>
                                <h4 className="card-title text-secondary">Apps</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/staticsites" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-web text-secondary"></i>
                                <h4 className="card-title text-secondary">Static Sites</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/docker" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-docker text-secondary"></i>
                                <h4 className="card-title text-secondary">Docker</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/databases" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-database text-secondary"></i>
                                <h4 className="card-title text-secondary">Databases</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/storage" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-cube-outline text-secondary"></i>
                                <h4 className="card-title text-secondary">Storage</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="col-xl-2 col-md-6">
            <Link to="/workspaces" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-visual-studio-code text-secondary"></i>
                                <h4 className="card-title text-secondary">Workspaces</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/authentication" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-fingerprint text-secondary"></i>
                                <h4 className="card-title text-secondary">Authentication</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="col-xl-2 col-md-6">
            <Link to="/extensions" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-rocket text-secondary"></i>
                                <h4 className="card-title text-secondary">Extensions</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/email" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-email text-secondary"></i>
                                <h4 className="card-title text-secondary">Email</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/domains" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-dot-net text-secondary"></i>
                                <h4 className="card-title text-secondary">Domains</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/servers" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-server text-secondary"></i>
                                <h4 className="card-title text-secondary">Manage</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-2 col-md-6">
            <Link to="/settings" onClick={() => setLoading(true)}>
                    <div className="card roundcard">
                        <div className="card-body">
                            <div className="text-center display-4">
                                <div className="clearfix"></div>
                                <i className="mdi mdi-settings text-secondary"></i>
                                <h4 className="card-title text-secondary">Settings</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</div>
  );
}

export default Index;
