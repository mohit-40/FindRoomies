import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
import Match from "./pages/Match"
import Favourite from "./pages/Favourite"
import Message from "./pages/Message"
import SignUpWhere from "./pages/SignUpWhere"



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/sign-up" exact component={SignUp} />
          <Route exact path="/sign-up-where" exact component={SignUpWhere} />
          <Route exact path="/sign-in" exact component={SignIn} />

          <Route exact path="/profile" exact component={Profile} />
          <Route exact path="/match" exact component={Match} />
          <Route exact path="/favourite" exact component={Favourite} />
          <Route exact path="/message" exact component={Message} />

        </Switch>
      </Router>
    </>
  )
}

export default App;

