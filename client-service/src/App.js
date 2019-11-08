import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './partials/Header';
import Footer from './partials/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Applications from './pages/Applications';
import AddApplication from './pages/AddApplication';
import Storage from './pages/Storage';
import Database from './pages/Database';
import StaticApps from './pages/StaticApps';
import AddStaticApp from './pages/AddStaticApp';
import AuthService from './pages/AuthService';
import Manage from './pages/Manage';
import Workspaces from './pages/Workspaces';
import AddWorkspace from './pages/AddWorkspace';
import Extensions from './pages/Extensions';
import Domains from './pages/Domains';
import Access from './pages/Access';
import Profile from './pages/Profile';
import Billing from './pages/Billing';
import Settings from './pages/Settings';
import Loading from './partials/Loading';


function App() {
    return (
      <Router>
        <Loading/>
        <Header/>
        <Route path="/" exact component={Index}/>
        <Route path="/about" exact component={About}/>
        <Route path="/applications" exact component={Applications}/>
        <Route path="/addapplication" exact component={AddApplication}/>
        <Route path="/storage" exact component={Storage}/>
        <Route path="/database" exact component={Database}/>
        <Route path="/staticapps" exact component={StaticApps}/>
        <Route path="/addstaticapp" exact component={AddStaticApp}/>
        <Route path="/authservice" exact component={AuthService}/>
        <Route path="/manage" exact component={Manage}/>
        <Route path="/workspaces" exact component={Workspaces}/>
        <Route path="/addworkspace" exact component={AddWorkspace}/>
        <Route path="/extensions" exact component={Extensions}/>
        <Route path="/domains" exact component={Domains}/>
        <Route path="/accesscontrol" exact component={Access}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/billing" exact component={Billing}/>
        <Route path="/settings" exact component={Settings}/>
        <Footer/>
      </Router>
    )
}

export default App