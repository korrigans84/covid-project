import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home";
import Countries from "./pages/countries";
import Login from "./pages/login";
import Register from "./pages/register";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./routing/privateRoute";
import Profile from "./pages/profile";

import './assets/styles';
import {Header} from "./components/header";



ReactDOM.render(
  <React.StrictMode>
      <AuthProvider>
        <Router >
            <Route path="/*" component={Header} />
            <Route exact path="/" component={Home} />
            <Route exact path="/countries" component={Countries} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/profile" component={Profile} />
        </Router>
      </AuthProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

