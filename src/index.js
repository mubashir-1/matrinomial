import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import About from "views/About.js";
import Contactus from "views/Contactus.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Main from 'views/auth/Main.js'
import {Card}  from "views/auth/Card.js";
import PersonalCard  from "views/auth/PersonalCard.js";
import { MainSearch } from "views/auth/MainSearch";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/Aboutus" exact component={About} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/Contactus" exact component={Contactus} />
      <Route path="/Main" exact component={Main} />
      <Route path="/Show" exact component={MainSearch} />
      <Route path="/PersonalCard/:id" exact component={PersonalCard} />

      <Route path="/" exact component={Index} />
     
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
